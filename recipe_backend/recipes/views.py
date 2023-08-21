from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView

from .serializers import RecipeSerializer, CategorySerializer
from .models import Recipe, Category


class RecipesList(generics.ListAPIView):
    serializer_class = RecipeSerializer

    def get_queryset(self):
        category_id = self.request.query_params.get('category')
        queryset = Recipe.objects.all()

        if category_id:
            queryset = queryset.filter(category=category_id)

        return queryset


class RecipeDetail(generics.RetrieveAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer



class CategoriesList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
