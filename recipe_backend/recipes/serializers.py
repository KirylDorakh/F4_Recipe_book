from rest_framework import serializers
from .models import Recipe, Category


class RecipeSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('id', 'title', 'body', 'category',)
        model = Recipe


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('id', 'name')
        model = Category