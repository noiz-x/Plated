"""
URL configuration for Backend project.
"""
from django.contrib import admin
from django.urls import path, include
from django.shortcuts import redirect
from django.conf import settings
from django.conf.urls.static import static

def Home(request):
    return redirect("http://localhost:3050/")

urlpatterns = [
    path('', Home),
    path('admin/', admin.site.urls),
    path('api/', include("api.urls")),
    path('api/auth/', include("auth.urls")),
    path('api/auth/', include("dj_rest_auth.urls")),
    path('api/auth/registration/', include("dj_rest_auth.registration.urls")),
    
    # docs
    path('docs/', include('core.swagger_urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

