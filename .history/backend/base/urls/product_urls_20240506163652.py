from django.urls import path
from base.views import product_views as views



urlpatterns = [
    path('', views.get_[roducts, name="products"),
    path('<str:pk>', views.getProduct, name="product"),
]
