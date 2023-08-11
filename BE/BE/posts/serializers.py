from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import Question, Answer, User


class AnswerSerializer(serializers.ModelSerializer):
    writer = serializers.ReadOnlyField(source="writer.username")  # Add this line
    question_id = serializers.SerializerMethodField()
    answer_id = serializers.ReadOnlyField()

    class Meta:
        model = Answer
        fields = ["question_id", "answer_id", "comment", "photo", "writer"]

    def get_question_id(self, obj):
        return obj.question.id


class QuestionSerializer(serializers.ModelSerializer):
    writer = serializers.ReadOnlyField(source="writer.username")
    answers = AnswerSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = ["id", "content", "writer", "answers"]


class MyQuestionSerializer(serializers.ModelSerializer):
    student_id = serializers.ReadOnlyField(source="writer.student_id")
    writer = serializers.ReadOnlyField(source="writer.username")
    questions = QuestionSerializer(source="question_set", many=True, read_only=True)
    answers = AnswerSerializer(source="writer.answer_set", many=True, read_only=True)

    class Meta:
        model = User
        fields = ["student_id", "writer", "questions", "answers"]


class MyAnswerSerializer(serializers.ModelSerializer):
    writer = serializers.ReadOnlyField(source="writer.username")
    teacher_id = serializers.ReadOnlyField(source="writer.teacher_id")
    answers = AnswerSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ["writer", "teacher_id", "answers"]
