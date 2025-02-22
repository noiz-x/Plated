from database.models import Recipe
from rest_framework.serializers import ModelSerializer, CharField

class RecipieSerializer(ModelSerializer):
    author_username = CharField(source='author.username', read_only=True)
    # author profile image add later
    class Meta:
        model = Recipe
        fields = '__all__'
        extra_kwargs = {'author': {'write_only': True}}
