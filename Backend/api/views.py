from database.models import Recipe
from .serializers import RecipieSerializer

from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets


class RecipeViewset(viewsets.ModelViewSet):
    queryset = Recipe
    permission_classes = [IsAuthenticated, ]
    serializer_class = RecipieSerializer