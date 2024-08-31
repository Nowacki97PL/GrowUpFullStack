from django.contrib import admin
from django.contrib.admin import ModelAdmin
from .models import Order, OrderItem, Product, Review, ShippingAddress, GymEntry,Trainer, TrainingSession


class OrderAdmin(ModelAdmin):
    ordering = ["id"]
    list_display = ["id", "user", "created_at"]
    
class ProductAdmin(ModelAdmin):
    ordering = ["id"]
    list_display = ["id", "name","brand", "category", "price", "count_in_stock"]


admin.site.register(Product, ProductAdmin)
admin.site.register(Review)
admin.site.register(Order, OrderAdmin)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)
admin.site.register(GymEntry)
admin.site.register(Trainer)
admin.site.register(TrainingSession)