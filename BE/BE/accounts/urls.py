from django.urls import path, include
from django.urls import path
from accounts import views
from .views import LogoutView, student_signup, teacher_signup, user_login
from .views import kakao_callback, kakao_login

urlpatterns = [
    path("api-auth/", include("rest_framework.urls")),
    path("student/signup/", student_signup, name="student-signup"),
    path("teacher/signup/", teacher_signup, name="teacher-signup"),
    path("login/", user_login, name="login"),
    path("logout/", LogoutView.as_view(), name="logout"),
    # 소셜 로그인
    path("kakao/", kakao_login, name="kakao_login"),
    path("kakao/callback/", kakao_callback, name="kakao_callback"),
]
