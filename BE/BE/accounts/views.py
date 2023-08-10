import urllib
from django.shortcuts import render, redirect
from rest_framework.decorators import api_view, permission_classes
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.contrib.auth import authenticate, logout, login
from .serializers import (
    StudentSignUpSerializer,
    TeacherSignUpSerializer,
    UserLoginSerializer,
)


@api_view(["POST"])
@permission_classes([AllowAny])
def student_signup(request):
    serializer = StudentSignUpSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save(user_type="student")
        user.set_password(user.phone_number)
        user.save()
        return Response(
            {"message": "Student 회원가입이 완료되었습니다."}, status=status.HTTP_201_CREATED
        )
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
@permission_classes([AllowAny])
def teacher_signup(request):
    serializer = TeacherSignUpSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save(user_type="teacher")
        user.set_password(user.phone_number)
        user.save()
        return Response(
            {"message": "Teacher 회원가입이 완료되었습니다."}, status=status.HTTP_201_CREATED
        )
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
@permission_classes([AllowAny])
def user_login(request):
    serializer = UserLoginSerializer(data=request.data)
    if serializer.is_valid():
        user = authenticate(
            username=serializer.validated_data["name"],
            password=serializer.validated_data["phone_number"],
        )
        if user is not None:
            login(request, user)
            return Response(
                {"message": f"{user.user_type.capitalize()} 로그인 되었습니다."},
                status=status.HTTP_200_OK,
            )

    return Response(
        {"message": "로그인 정보가 올바르지 않습니다."}, status=status.HTTP_401_UNAUTHORIZED
    )


class LogoutView(APIView):
    def post(self, request):
        # 사용자 로그아웃 처리
        logout(request)
        return Response({"message": "로그아웃 되었습니다."}, status=status.HTTP_200_OK)


# code 요청
def kakao_login(request):
    app_rest_api_key = "942c23a0e6d71ed610295448ee869edc"
    redirect_uri = "http://127.0.0.1:8000/kakao/callback"
    redirect_url = (
        "https://kauth.kakao.com/oauth/authorize?client_id="
        + app_rest_api_key
        + "&redirect_uri="
        + redirect_uri
        + "&response_type=code"
    )
    return redirect(redirect_url)
    # return redirect(
    #     f"https://kauth.kakao.com/oauth/authorize?client_id={app_rest_api_key}&redirect_uri={redirect_uri}&response_type=code"
    # )


# access token 요청
def kakao_callback(request):
    params = urllib.parse.urlencode(request.GET)
    redirect_url = "http://127.0.0.1:8000/kakao/callback?" + params
    main_home_url = "http://127.0.0.1:8000"
    return redirect(main_home_url)
    # return redirect(redirect_url)
    # return redirect(f'http://127.0.0.1:8000/kakao/callback?{params}')
