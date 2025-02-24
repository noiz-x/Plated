from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin

class User(AbstractUser, PermissionsMixin):
    address = models.CharField(max_length=300, null=True)
    bio = models.TextField(null=True)
    is_first_login = models.BooleanField(null=True, default=None)
    profile_image = models.ImageField(upload_to='uploads/profile_images/', blank=True, null=True, default="defaults/profile-default-image.jpeg")

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
    image = models.ImageField(upload_to='uploads/recipe_images/', blank=True, null=True, default="defaults/recipe-default-image.png")
    ingredients = models.TextField() 
    # Explanation: -- Formatted text
    # - Each line is formatted as: Ingredient: Quantity | Description or additional info
    # - Optional items are clearly marked
    instructions = models.TextField()
    prep_time = models.PositiveIntegerField(help_text="Time in minutes")
    difficulty = models.CharField(max_length=10, choices=DIFFICULTY_CHOICES, default="Medium")
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    rating = models.DecimalField(max_digits=2, decimal_places=1, default=0, help_text="Rating from 0.0 to 5.0")
    # ratings, comments and likes would be implemented soon. NOTE: Ratings is a read only field, it can't be modified by anyone
    # It's value only gets updated from the ratings, comments many to many relationship with this Table. The relationship field can be modified 
    categories = models.ManyToManyField('Category', blank=True)
    tags = models.CharField(max_length=255, blank=True, help_text="Comma-separated tags for the recipe (e.g. gluten-free, vegan)")
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='recipes')
    # other fields like likes comments will be added later

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
