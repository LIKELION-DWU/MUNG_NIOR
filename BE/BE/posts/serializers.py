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
    # url에서 question_id 가져오는거 했음
    question_id = serializers.SerializerMethodField()

    class Meta:
        model = Answer
        fields = ["question_id", "id", "comment", "photo", "writer"]
        # read_only_fields= ['question']

    def get_question_id(self, obj):
        return obj.question.id
