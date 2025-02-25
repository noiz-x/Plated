from database.models import Recipe, User
from rest_framework.serializers import ModelSerializer, CharField

class RecipeSerializer(ModelSerializer):
    class Meta:
        model = Recipe
        exclude = ('author',)
        read_only_fields = ['pk', 'created_at', 'last_modified', 'likes', 'liked_by', 'rating', 'reviewed_by',]
        # extra_kwargs = {'author': {'write_only': True}}

class PublicRecipeSerializer(ModelSerializer):
    author_name = CharField(source='author.first_name', read_only=True)
    author_username = CharField(source='author.username', read_only=True)
    author_image = CharField(source='author.profile_image', read_only=True)
    class Meta:
        model = Recipe
        exclude = ('author',)
        
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        """Mark all fields as read-only"""
        for field_name in self.fields:
            self.fields[field_name].read_only = True

class PublicUserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__' # streamlined later
        read_only_fields = fields  #  I'll remove things like followers profile likes etc later