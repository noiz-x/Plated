from django.urls import path
from . import views


urlpatterns = [
    path("registration/account-confirm-email/<str:key>/", views.verify_email_view, name="email-verification"), 
    path("registration/account-email-verification-sent/", views.NotFoundView().as_view(), name="not-found"),
    path("username/update/", views.UpdateUsernameView().as_view(), name="update-username"),
    path("reset/<int:uidb64>/<str:key>/", views.PasswordResetView().as_view(), name="password_reset_confirm"),
    
    path("login/", views.LoginView().as_view(), name="login"),

    path("registration/validate-username/", views.ValidateUsername().as_view(), name="validate-username"),
    path("registration/validate-email/", views.ValidateEmail().as_view(), name="validate-email"),
]
