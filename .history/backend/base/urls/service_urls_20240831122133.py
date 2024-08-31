from django.urls import path
from base.views import service_views as views


urlpatterns = [
    path("trainer/<str:pk>/", views.get_trainer, name="trainer"),
]
