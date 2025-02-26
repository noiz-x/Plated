from django.db.models.signals import m2m_changed, post_save, post_delete
from django.dispatch import receiver
from django.db.models import Avg
from database.models import Recipe, RecipeRatingsAndReviews

@receiver(m2m_changed, sender=Recipe.saved_by.through)
def update_saves(sender, instance, action, **kwargs):
    """
    Automatically update the number of saves (saves field) whenever the saved_by field changes.
    """
    if action in ['post_add', 'post_remove', 'post_clear']:
        instance.saves = instance.saved_by.count()
        instance.save()

@receiver([post_save, post_delete], sender=RecipeRatingsAndReviews)
def update_rating(sender, instance, **kwargs):
    """
    Automatically update the rating (overall rating) of a recipe whenever a rating is added, updated, or deleted.
    """
    recipe = instance.recipe
    average_rating = RecipeRatingsAndReviews.objects.filter(recipe=instance).aggregate(avg_rating=Avg('rating'))['avg_rating'] or None
    recipe.rating = average_rating
    recipe.save()