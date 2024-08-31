from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated


from base.models import Trainer
from base.serializers import TrainerSerializer


@api_view(["GET"])
def get_trainer(request, pk):
    trainer = Trainer.objects.get(id=pk)
    serializer = TrainerSerializer(trainer, many=False)
    return Response(serializer.data)
