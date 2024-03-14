from django.contrib import admin
from django.contrib.admin import ModelAdmin
from .models import Order, OrderItem, Product, Review, ShippingAddress

class OrderAdmin(ModelAdmin):
    ordering


admin.site.register(Product)
admin.site.register(Review)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)


