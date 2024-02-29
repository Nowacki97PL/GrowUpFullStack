from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Product, Order, OrderItem, ShippingAddress
from rest_framework import status


@api_view("POST")
@permission_classes(["IsAuthenticated"])
def add_order_items(request):
    user = request.user
    data = request.data
    order_items = data['orderItems']
    
    if order_items and len(order_items) == 0:
        return Response({'detail':'No order items', status=HTTP_400_BAD_REQUEST})
    return Response("Order")
