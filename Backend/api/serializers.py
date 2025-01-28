from database.models import Recipe
from rest_framework.serializers import ModelSerializer

class RecipieSerializer(ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'
