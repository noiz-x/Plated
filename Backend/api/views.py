from database.models import Recipe, RecipeRatingsAndReviews
from .serializers import RecipeSerializer, PublicUserSerializer,PublicRecipeSerializer

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action
from django.contrib.auth import get_user_model

User = get_user_model()
class RecipeViewset(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated, ]
    serializer_class = RecipeSerializer

    def get_queryset(self):
        if self.action in ['public_list', 'public_details', 'save', 'saves',]:  # All recipes for public actions
            return Recipe.objects.select_related('author').all()
        return Recipe.objects.filter(author=self.request.user).select_related('author').all()

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    @action(detail=False, methods=['get',], permission_classes=[AllowAny,], url_path='public-list')
    def public_list(self, request):
        """
        Public Recipe View - with read-only access to all recipes. 
        Accessible to all users (even unauthenticated users)
        """
        recipes = self.get_queryset()
        serializer = PublicRecipeSerializer(recipes, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['get',], permission_classes=[AllowAny,], url_path='public-details')
    def public_details(self, request, pk):
        """
        Public Recipe View - with read-only access to specific recipe.
        Accessible to all users (even unauthenticated users)
        """
        recipe = self.get_object()
        serializer = PublicRecipeSerializer(recipe)
        return Response(serializer.data)
    
    @action(detail=True, methods=['patch',], permission_classes=[IsAuthenticated,])
    def save(self, request, *args, **kwargs):
        """
        View to save or un-save recipes.
        Accessible to only authenticated users.
        Saves are private.
        """
        recipe = self.get_object()
        user = request.user
        if user in recipe.saved_by.all():
            recipe.saved_by.remove(user)
            return Response({'detail': 'Recipe unsaved'}, status=status.HTTP_200_OK)
        else:
            recipe.saved_by.add(user)
            return Response({'detail': 'Recipe saved'}, status=status.HTTP_201_CREATED)
        
    @action(detail=False, methods=['get',], permission_classes=[IsAuthenticated,])
    def saves(self, request):
        """
        View to get all recipes saved by a user.
        Clearly, accessible to only authenticated users
        """
        recipes = self.get_queryset().filter(saved_by=request.user)
        serializer = PublicRecipeSerializer(recipes, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['post',], permission_classes=[IsAuthenticated,], url_path='rate-and-review')
    def rate_and_review(self, request, pk):
        """
        View to add ratings and/or comment, reviews on recipes.
        Accessible to only authenticated users.
        Reviews are public and visibe to all users.
        """
        recipe = self.get_object()
        user = request.user

class PublicUserViewSet(viewsets.GenericViewSet):
    """Public user viewset with limited public actions: profile view and follow."""
    queryset = User.objects.all()
    serializer_class = PublicUserSerializer

    # define actions