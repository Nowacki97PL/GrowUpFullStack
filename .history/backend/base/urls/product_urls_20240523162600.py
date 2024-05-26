from django.urls import path
from base.views import product_views as views


urlpatterns = [
    path("", views.get_products, name="products"),
    path("<str:pk>/", views.get_product, name="product"),
    path("create", views.create_product, name="product-create"),
    path('upload/', views.upload_image)
    path("update/<str:pk>/", views.update_product, name="update-product"),
    path("delete/<str:pk>/", views.delete_product, name="delete-product"),
]
