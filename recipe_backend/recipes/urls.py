from django.urls import path

from .views import RecipesList, RecipeDetail, CategoriesList, CategoryDetail

urlpatterns = [
    path('', CategoriesList.as_view()),
    path('<int:pk>/', CategoryDetail.as_view()),
    path('recipes/', RecipesList.as_view()),
    path('recipes/<int:pk>/', RecipeDetail.as_view()),
]
