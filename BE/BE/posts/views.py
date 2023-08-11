from django.shortcuts import render
from .models import Question, Answer
from .serializers import QuestionSerializer, AnswerSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action


class QuestionViewSet(ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        serializer.save(writer=self.request.user)


class AnswerViewSet(ModelViewSet):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer

    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        question_id = self.kwargs.get("question_id")
        question = get_object_or_404(Question, pk=question_id)
        next_comment_id = Answer.objects.filter(question=question).count() + 1

        serializer.save(
            writer=self.request.user, question=question, comment_id=next_comment_id
        )
        # serializer.save(writer=self.request.user)

    def get_queryset(self, **kwargs):  # Override
        id = self.kwargs["question_id"]
        return self.queryset.filter(question=id)


# student-id[question[question-id, content, answer[answer-id, content, image, teacher-id]]
# 질문자 마이페이지
class MyQuestionsListView(generics.ListAPIView):
    serializer_class = QuestionSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Question.objects.filter(writer=user)


# teacher-id[answer[answer-id, content, photo]]
# 답변자 마이페이지
class MyAnswersListView(generics.ListAPIView):
    serializer_class = AnswerSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Answer.objects.filter(writer=user)
