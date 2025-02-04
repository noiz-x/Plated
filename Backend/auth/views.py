from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

from dj_rest_auth.views import LoginView

from django.http import HttpResponseNotFound
from django.shortcuts import redirect
from django.conf import settings

from database.models import User
from .serializers import UsernameUpdateSerializer


def verify_email_view(request, *args, **kwargs):
    key = kwargs.get("key", "")
    return redirect(f"{settings.FRONTEND_DOMAIN}verify-email/{key}/")

def password_reset_view(request, *args, **kwargs):
    uidb64 = kwargs.get("uidb64", "")
    key = kwargs.get("key", "")
    return redirect(f"{settings.FRONTEND_DOMAIN}reset-password/{uidb64}/{key}/")


class AppLoginView(LoginView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)

        if response.status_code == 200:
            user = request.user
            if user.is_first_login is None:
                user.is_first_login = True
            else:
                user.is_first_login = False
            user.save()

        return response


class UpdateUsernameView(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated,]
    serializer_class = UsernameUpdateSerializer

    def get_object(self):
        return self.request.user
    
class ValidateUsername(APIView):
    # Might be realtime later
    def get(self, request):
        username = request.query_params.get('username', None)
        if User.objects.filter(username=username).exists():
            data = {'username': 'username is taken.'}
            return Response(data, status=status.HTTP_400_BAD_REQUEST)
        data = {'detail': 'username is available'}
        return Response(data, status=status.HTTP_200_OK)
    
class ValidateEmail(APIView):
    def get(self, request):
        email = request.query_params.get('email', None)
        if User.objects.filter(email=email).exists():
            data = {'email': 'An account was found with this email'}
            return Response(data, status=status.HTTP_400_BAD_REQUEST)
        data = {'detail': 'email is valid'}
        return Response(data, status=status.HTTP_200_OK)


class NotFoundView(APIView):
    def get(self, request, *args, **kwargs):
        return HttpResponseNotFound()
