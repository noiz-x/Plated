from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()

router.register(r'recipes', views.RecipeViewset, basename='recipe')
router.register(r'ratings-and-reviews', views.RatingsAndReviewsViewset, basename='rate-and-review')
router.register(r'users', views.PublicUserViewSet, basename='user')

urlpatterns = [
    path('', include(router.urls)),
]
