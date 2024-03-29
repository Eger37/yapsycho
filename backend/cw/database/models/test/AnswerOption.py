from sqlalchemy import Column, Integer, String, DateTime, ForeignKey

from .meta import BaseTest
from .Question import Question
from .QuestionCategory import QuestionCategory


class AnswerOption(BaseTest):
    __tablename__ = "answer_option"

    id = Column(Integer(), primary_key=True)
    question_id = Column(Integer, ForeignKey(Question.id), nullable=False)
    question_category_id = Column(Integer, ForeignKey(QuestionCategory.id), nullable=False)
    text = Column(String(256), nullable=False)
    score = Column(Integer(), nullable=False)

    def __repr__(self):
        return f"AnswerOption({self.id}, {self.text})"
