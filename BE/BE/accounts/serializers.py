from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate

User = get_user_model()


class StudentSignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "name", "phone_number", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        validated_data["user_type"] = "student"
        user = User.objects.create_user(**validated_data)
        return user


class TeacherSignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "name", "email", "phone_number", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        validated_data["user_type"] = "teacher"
        user = User.objects.create_user(**validated_data)
        return user


# 공통 로그인
class UserLoginSerializer(serializers.Serializer):
    user_type = serializers.CharField(max_length=10)
    name = serializers.CharField(max_length=100)
    phone_number = serializers.CharField(max_length=15)

    def validate(self, data):
        user_type = data["user_type"]
        name = data["name"]
        phone_number = data["phone_number"]

        user = authenticate(
            username=name,
            password=phone_number,
        )

        if user is None:
            raise serializers.ValidationError("로그인 정보가 올바르지 않습니다.")

        if user.user_type != user_type:
            raise serializers.ValidationError(
                f"{user_type.capitalize()} 계정으로 로그인할 수 없습니다."
            )

        return data
