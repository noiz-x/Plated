from django.contrib import admin
from .models import User, Recipe

class UserAdmin(admin.ModelAdmin):
    list_display = ["username", "pk", "first_name", "email"]

class RecipeAdmin(admin.ModelAdmin):
    list_display = ["name", "description", "saves", "rating",]
    readonly_fields = ("saves", "rating",)

admin.site.register(User, UserAdmin)
admin.site.register(Recipe, RecipeAdmin)