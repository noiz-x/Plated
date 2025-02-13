from database.models import Recipe
from .serializers import RecipieSerializer

from rest_framework import viewsets


class RecipeViewset(viewsets.ModelViewSet):
    queryset = Recipe
    serializer_class = RecipieSerializer