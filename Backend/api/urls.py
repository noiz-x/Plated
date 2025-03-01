from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()

router.register(r'recipes', views.RecipeViewset, basename='recipe')
router.register(r'rate-and-review', views.RatingsAndReviewsViewset, basename='rate-and-review')

urlpatterns = [
    path('', include(router.urls)),
]
