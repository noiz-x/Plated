from database.models import Recipe, User
from rest_framework.serializers import ModelSerializer, CharField

class RecipieSerializer(ModelSerializer):
    # for Public
    # author_username = CharField(source='author.username', read_only=True)
    # # author profile image add later
    class Meta:
        model = Recipe
        exclude = ('author',)
        read_only_fields = ['pk', 'created_at', 'last_modified', 'rating',]
        # extra_kwargs = {'author': {'write_only': True}}

class PublicUserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__' # streamlined later
        read_only_fields = fields  #  I'll remove things like followers profile likes etc later

# I'll create something similar to this UserSerializer for Recipes also in views => # Endpoint for a user's interraction with other users' recipes