from database.models import Recipe
from .serializers import RecipieSerializer

from rest_framework import generics


class ListCreateRecipe(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipieSerializer


class RecipeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipieSerializer