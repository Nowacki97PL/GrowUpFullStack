from datetime import datetime
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Product, Order, OrderItem, ShippingAddress, GymEntry
from base.serializers import OrderSerializer
from rest_framework import status


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def add_order_items(request):
    user = request.user
    data = request.data
    order_items = data["orderItems"]

    if order_items and len(order_items) == 0:
        return Response(
            {"detail": "No Order Items"}, status=status.HTTP_400_BAD_REQUEST
        )
    else:
        # (1) Create order

        order = Order.objects.create(
            user=user,
            payment_method=data["paymentMethod"],
            tax_price=data["taxPrice"],
            shipping_price=data["shippingPrice"],
            total_price=data["totalPrice"],
        )

        # (2) Create shipping address

        shipping = ShippingAddress.objects.create(
            order=order,
            address=data["shippingAddress"]["address"],
            city=data["shippingAddress"]["city"],
            postal_code=data["shippingAddress"]["postalCode"],
            country=data["shippingAddress"]["country"],
        )

        # (3) Create order items adn set order to orderItem relationship
        for i in order_items:
            product = Product.objects.get(id=i["product"])

            item = OrderItem.objects.create(
                product=product,
                order=order,
                name=product.name,
                qty=i["qty"],
                price=i["price"],
                image=product.image.url,
            )

            # (4) Update stock
            if not product.is_digital:
                product.count_in_stock -= item.qty
                product.save()
                
            # (5) Update gym_entries
            
            if product.name == "Pakiet 5 treningów":
                entries_to_add = 5
            elif product.name == "Pakiet 10 treningów":
                entries_to_add = 10
            else:
                return Response({"error": "Nieznany pakiet"}, status=400)
            gym_entries = GymEntry.obje
            gym_entry.entries += entries_to_add
            gym_entry.save()

        serializer = OrderSerializer(order, many=False)
        return Response(serializer.data)


@api_view(["GET"])
def get_my_orders(request):
    user = request.user
    orders = user.order_set.all()
    serializer = OrderSerializer(orders, many=True)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_order_by_id(request, pk):

    user = request.user

    try:
        order = Order.objects.get(id=pk)
        if user.is_staff or order.user == user:
            serializer = OrderSerializer(order, many=False)
            return Response(serializer.data)
        else:
            Response(
                {"detail": "Nieautoryzowany użytkownik do zobaczenia tego zamówienia"},
                status=status.HTTP_400_BAD_REQUEST,
            )
    except:
        return Response(
            {"detail": "Zamówienie nieistnieje."}, status=status.HTTP_400_BAD_REQUEST
        )


@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def update_order_to_paid(request, pk):
    order = Order.objects.get(id=pk)

    order.is_paid = True
    order.paid_at = datetime.now()
    order.save()

    return Response("Zamówienie zostało opłacone")


@api_view(["GET"])
@permission_classes([IsAdminUser])
def get_all_orders(request):
    orders = Order.objects.all()
    serializer = OrderSerializer(orders, many=True)
    return Response(serializer.data)


@api_view(["PUT"])
@permission_classes([IsAdminUser])
def update_order_to_delivered(request, pk):
    order = Order.objects.get(id=pk)

    order.is_delivered = True
    order.delivered_at = datetime.now()
    order.save()

    return Response("Zamówienie zostało dostarczone")
