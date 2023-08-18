from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView

from .serializers import RecipeSerializer, CategorySerializer
from .models import Recipe, Category


class RecipesList(generics.ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class RecipeDetail(generics.RetrieveAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer



class CategoriesList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
