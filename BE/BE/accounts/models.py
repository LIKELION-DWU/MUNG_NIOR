from django.db import models

# from django.contrib.auth.backends import ModelBackend
from django.contrib.auth.models import AbstractUser, BaseUserManager, PermissionsMixin


class CustomUserManager(BaseUserManager):
    def create_user(self, user_type, **extra_fields):
        if not extra_fields.get("phone_number"):
            raise ValueError("The phonNumber field must be set")

        user = self.model(user_type=user_type, **extra_fields)
        user.set_password(extra_fields.get("phone_number"))
        user.save(using=self._db)
        return user

    def create_superuser(self, user_type, **extra_fields):
        user = self.create_user(user_type, **extra_fields)
        user.is_admin = True
        user.save(using=self._db)
        return user


class User(AbstractUser, PermissionsMixin):
    USER_TYPES = (
        ("student", "Student"),
        ("teacher", "Teacher"),
    )

    user_type = models.CharField(max_length=10, choices=USER_TYPES)
    email = models.EmailField(unique=True, blank=True, null=True)
    phone_number = models.CharField(max_length=15, unique=True, blank=True, null=True)

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["user_type", "phone_number"]

    def __str__(self):
        return self.username

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin
