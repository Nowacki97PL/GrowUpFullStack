from django.urls import path
from base.views import service_views as views


urlpatterns = [
    path("trainer/<str:pk>/", views.get_trainer, name="trainer"),
    path("trainers/", views.get_trainers, name="trainers"),
    path('sessions/', create_training_session, name='create-session'),
    path('sessions/<int:pk>/', get_training_session, name='get-session'),
]