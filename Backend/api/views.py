from database.models import Recipe
from .serializers import RecipieSerializer

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

class UserListRetrieveView(generics.ListAPIView, generics.RetrieveAPIView):
    # View for a user's interraction with other users
    queryset = User.objects.all()
    serializer_class = ""