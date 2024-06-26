from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated

from base.models import Product, Review
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
def create_product(request):
    user = request.user

    product = Product.objects.create(
        user=user,
        name="Sample Name",
        price=0,
        brand="Sample Brand",
        count_in_stock=0,
        category="Sample Category",
        description="",
    )

    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(["PUT"])
@permission_classes([IsAdminUser])
def update_product(request, pk):
    data = request.data
    product = Product.objects.get(id=pk)

    product.name = data["name"]
    product.price = data["price"]
    product.brand = data["brand"]
    product.count_in_stock = data["count_in_stock"]
    product.category = data["category"]
    product.description = data["description"]

    product.save()

    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(["DELETE"])
@permission_classes([IsAdminUser])
def delete_product(request, pk):
    product = Product.objects.get(id=pk)
    product.delete()
    return Response("Produkt został usunięty.")


@api_view(["POST"])
def upload_image(request):
    data = request.data

    product_id = data["product_id"]
    product = Product.objects.get(id=product_id)

    product.image = request.FILES.get("image")
    product.save()

    return Response("Obraz został załadowany")


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_product_review(request, pk):

    user = request.user
    product = Product.objects.get(id=pk)
    data = request.data

    #1 - Review already exists
    already_exists = product.review_set.filter(user=user).exists()
    
    if already_exists:
        content = {"details": "Produkt został już oceniony."}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)
    
    #2 - No rating or 0
    
    elif data["rating"] == 0:
        content = {"details": "Proszę oceń produkt"}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)
    
    else:
        review = Review.objects.create(
            user=user,
            product=product,
            name=
        )
    