from rest_framework.serializers import ModelSerializer, ValidationError
from dj_rest_auth.serializers import UserDetailsSerializer, LoginSerializer
from dj_rest_auth.registration.serializers import RegisterSerializer
from database.models import User

class AppUserDetailsSerializer(UserDetailsSerializer, ModelSerializer):
    class Meta:
        model = User
        fields = ["pk", "username", "first_name", "last_name", "email", "date_joined", "last_login", "address", "bio", "is_first_login",]  # noqa: E501
        read_only_fields = ["pk", "email", "date_joined", "last_login", "username", "is_first_login",]  # noqa: E501

class UsernameUpdateSerializer(UserDetailsSerializer, ModelSerializer):
    class Meta:
        model = User
        fields = ["username"]


class AppRegisterSerializer(RegisterSerializer, ModelSerializer):
    class Meta:
        model = User
        fields = ["first_name", "username", "email", "password1", "password2"]

    def validate_email(self, email):
        if User.objects.filter(email=email).exists():
            raise ValidationError("A user with that email already exists. Wanna login?")
        return email
    
    def save(self, request):
        user = super().save(request)
        user.first_name = self.validated_data.get("first_name", "")
        user.save()
        return user

class AppLoginSerializer(LoginSerializer, ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "password"]