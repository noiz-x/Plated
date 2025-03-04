from database.models import Recipe, User, RecipeRatingsAndReviews
from rest_framework.serializers import ModelSerializer, CharField, IntegerField

class RecipeSerializer(ModelSerializer):
    class Meta:
        model = Recipe
        exclude = ('author', 'saved_by',)
        read_only_fields = ['pk', 'created_at', 'last_modified', 'saves', 'rating', 'reviewed_by',]

class PublicRecipeSerializer(ModelSerializer):
    author_id = IntegerField(source='author.id', read_only=True)
    author_name = CharField(source='author.first_name', read_only=True)
    author_username = CharField(source='author.username', read_only=True)
    author_image = CharField(source='author.profile_image', read_only=True)
    class Meta:
        model = Recipe
        exclude = ('author', 'saved_by',)
        
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        """Mark all fields as read-only"""
        for field_name in self.fields:
            self.fields[field_name].read_only = True

class RatingsAndReviewsSerializer(ModelSerializer):
    user_id = IntegerField(source='user.id', read_only=True)
    user_name = CharField(source='user.first_name', read_only=True)
    user_username = CharField(source='user.username', read_only=True)
    user_image = CharField(source='user.profile_image', read_only=True)

    class Meta:
        model = RecipeRatingsAndReviews
        exclude = ('user', 'recipe',)
        read_only_fields = ('date_added',)

class PublicUserSerializer(ModelSerializer):
    class Meta:
        model = User
        exclude = ()

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        """Mark all fields as read-only"""
        for field_name in self.fields:
            self.fields[field_name].read_only = True