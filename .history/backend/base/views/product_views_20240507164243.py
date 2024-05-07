from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser

from base.models import Product
from base.serializers import ProductSerializer


@api_view(["GET"])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def get_product(request, pk):
    product = Product.objects.get(id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(["POST"])
@permission_classes([IsAdminUser])
def create_product(request, pk):
    user = request.user
    product = Product.objects.create(
        user=user,
        name=''
    )
    product = Product.objects.get(id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)



@api_view(["DELETE"])
@permission_classes([IsAdminUser])
def delete_product(request, pk):
    product = Product.objects.get(id=pk)
    product.delete()
    return Response("Produkt został usunięty.")


