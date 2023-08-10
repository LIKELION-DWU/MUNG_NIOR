from django.shortcuts import render

# Create your views here.
from .models import Question, Answer
from .serializers import QuestionSerializer, AnswerSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny


class QuestionViewSet(ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        serializer.save(writer=self.request.user)


# 26번줄 헷갈리는 코드
class AnswerViewSet(ModelViewSet):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer

    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        serializer.save(writer=self.request.user)

    def get_queryset(self, **kwargs):  # Override
        id = self.kwargs["question_id"]
        return self.queryset.filter(question=id)
