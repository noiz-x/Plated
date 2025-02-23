from database.models import Recipe
from .serializers import RecipieSerializer, PublicUserSerializer

from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets, generics
from django.contrib.auth import get_user_model


User = get_user_model()
class RecipeViewset(viewsets.ModelViewSet):
    queryset = Recipe.objects.select_related('author').all()
    permission_classes = [IsAuthenticated, ]
    serializer_class = RecipieSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class PublicUserViewSet(viewsets.GenericViewSet):
    """Public user viewset with limited public actions: profile view and follow."""
    queryset = User.objects.all()
    serializer_class = PublicUserSerializer

    # define actions