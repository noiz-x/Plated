from database.models import Recipe
from .serializers import RecipeSerializer, PublicUserSerializer,PublicRecipeSerializer

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404

User = get_user_model()
class RecipeViewset(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated, ]
    serializer_class = RecipeSerializer

    def get_queryset(self):
        return Recipe.objects.filter(author=self.request.user).select_related('author').all()

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    @action(detail=False, methods=['get',], permission_classes=[AllowAny,])
    def public_list(self, request):
        """Public Recipe Endpoint - with read-only access to all recipes. 
        Accessible to all users (even unauthenticated users)"""
        recipes = Recipe.objects.select_related('author').all()
        serializer = PublicRecipeSerializer(recipes, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['get',], permission_classes=[AllowAny,])
    def public_details(self, request, pk):
        """Public Recipe Endpoint - with read-only access to specific recipe.
        Accessible to all users (even unauthenticated users)"""
        recipe = get_object_or_404(Recipe, pk=pk)
        serializer = PublicRecipeSerializer(recipe)
        return Response(serializer.data)

class PublicUserViewSet(viewsets.GenericViewSet):
    """Public user viewset with limited public actions: profile view and follow."""
    queryset = User.objects.all()
    serializer_class = PublicUserSerializer

    # define actions