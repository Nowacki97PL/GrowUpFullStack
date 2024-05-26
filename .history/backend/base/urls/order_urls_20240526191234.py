from django.urls import path
from base.views import order_views as views

urlpatterns = [
    path('add/', views.add_order_items, name="orders-add"),
    path('my-orders/', views.get_my_orders, name="my-orders"),
    path('all-orders/', views.get_all_orders, name="all-orders"),
    path('<str:pk>/', views. name="user-order"),
    path('<str:pk>/', views.get_order_by_id, name="user-order"),
    path('<str:pk>/pay/', views.update_order_to_paid, name="update_paid")
]
