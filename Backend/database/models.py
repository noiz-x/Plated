from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin

class User(AbstractUser, PermissionsMixin):
    address = models.CharField(max_length=300, null=True)
    bio = models.TextField(null=True)

    def __str__(self) -> str:
        return f"User: {self.username}"

    class Meta:
        db_table = "user"


class Recipe(models.Model):
    DIFFICULTY_CHOICES = [
        ('Easy', 'Easy'),
        ('Medium', 'Medium'),
        ('Hard', 'Hard'),
    ]

    CATEGORY_CHOICES = [
        ('Gluten-Free', 'Gluten-Free'),
        ('Weight Loss', 'Weight Loss'),
        ('Heart Healthy', 'Heart Healthy'),
        # I'll add more categories later
    ]

    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='recipes/', blank=True, null=True)
    ingredients = models.TextField()  # I'll prolly seperate the ingredients with paragraphs
    instructions = models.TextField()
    prep_time = models.PositiveIntegerField(help_text="Time in minutes")
    difficulty = models.CharField(max_length=10, choices=DIFFICULTY_CHOICES, default="Medium")
    created_at = models.DateTimeField(auto_now_add=True)
    rating = models.DecimalField(max_digits=2, decimal_places=1, default=0, help_text="Rating from 0.0 to 5.0")
    categories = models.ManyToManyField('Category', blank=True)
    tags = models.CharField(max_length=255, blank=True, help_text="Comma-separated tags for the recipe (e.g. gluten-free, vegan)")

    def __str__(self):
        return self.name
    
    class Meta:
        db_table = "recipe"


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    
    class Meta:
        db_table = "recipe_category"
