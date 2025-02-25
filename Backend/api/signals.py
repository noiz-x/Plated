from django.db.models.signals import m2m_changed
from django.dispatch import receiver
from database.models import Recipe

@receiver(m2m_changed, sender=Recipe.liked_by.through)
def update_likes(sender, instance, action, **kwargs):
    """
    Automatically update the number of likes (likes field) whenever the liked_by field changes.
    """
    if action in ['post_add', 'post_remove', 'post_clear']:
        instance.likes = instance.liked_by.count()
        instance.save()