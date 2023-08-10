from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import Question, Answer

# from accounts.models import User


class QuestionSerializer(ModelSerializer):
    writer = serializers.ReadOnlyField(source="writer.username")

    class Meta:
        model = Question
        fields = ["id", "content", "writer"]


class AnswerSerializer(ModelSerializer):
    writer = serializers.ReadOnlyField(source="writer.username")

    class Meta:
        model = Answer
        fields = ["id", "comment", "photo", "writer"]
        # read_only_fields= ['question']
