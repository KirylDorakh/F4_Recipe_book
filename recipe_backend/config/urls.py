from django.contrib import admin
from django.urls import path, include
# from rest_framework.schemas import get_schema_view
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="Recipes API",
        default_version="v1",
        description="SkillFactory F4 task",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="hello@example.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny,],
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('recipes.urls')),

    # path('openapi', get_schema_view(
    #     title="Recipes API",
    #     description="SkillFactory F4 task",
    #     version="1.0.0"
    # ), name="openapi-schema"),
    path('swagger/', schema_view.with_ui(
        'swagger', cache_timeout=0), name="schema-swagger-ui"),
    path('redoc/', schema_view.with_ui(
        'redoc', cache_timeout=0), name="schema-redoc"),
]
