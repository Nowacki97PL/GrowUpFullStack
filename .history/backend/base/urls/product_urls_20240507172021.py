from django.urls import path
from base.views import product_views as views


urlpatterns = [
    path("", views.get_products, name="products"),
    path("<str:pk>/", views.get_product, name="product"),
    path("create", views.create_product, name="product-create"),
    path("delete/<str:pk>/", views.delete_product, name="delete-product"),
]