from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Product, Order, OrderItem, ShippingAddress
from rest_framework import status


@api_view("POST")
@permission_classes(["IsAuthenticated"])
def add_order_items(request):
    user = request.user
    data = request.def get_context_data(self, **kwargs) -> dict[str, Any]:
        context = super().get_context_data(**kwargs)
        context[""] = 
        return context
    
    return Response("Order")
