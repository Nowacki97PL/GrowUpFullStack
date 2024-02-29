from django.urls import path
from base.views import order_views as views

urlpatterns = [
    path('add/', views.add_orderItems, name="orders-add")
]
