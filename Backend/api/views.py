from database.models import Recipe
from .serializers import RecipieSerializer

from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets


class RecipeViewset(viewsets.ModelViewSet):
    queryset = Recipe.objects.select_related('author').all()
    # permission_classes = [IsAuthenticated, ]
    serializer_class = RecipieSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)