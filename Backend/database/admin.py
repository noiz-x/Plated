from django.contrib import admin
from .models import User, Recipe

class UserAdmin(admin.ModelAdmin):
    list_display = ["username", "pk", "first_name", "email"]

class RecipeAdmin(admin.ModelAdmin):
    list_display = ["name", "description", "likes", "rating",]
    readonly_fields = ("likes", "rating",)

admin.site.register(User, UserAdmin)
admin.site.register(Recipe, RecipeAdmin)