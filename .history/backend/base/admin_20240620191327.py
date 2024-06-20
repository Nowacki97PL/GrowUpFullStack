from django.contrib import admin
from django.contrib.admin import ModelAdmin
from .models import Order, OrderItem, Product, Review, ShippingAddress


class OrderAdmin(ModelAdmin):
    ordering = ["id"]
    list_display = ["id", "user", "created_at"]
    
class ProductAdmin(ModelAdmin):
    ordering = ["id"]
    list


admin.site.register(Product)
admin.site.register(Review)
admin.site.register(Order, OrderAdmin)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)
