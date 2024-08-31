from rest_framework.response import Response
from rest_framework.decorators import api_view


from base.models import Trainer
from base.serializers import TrainerSerializer


@api_view(["GET"])
def get_trainer(request, pk):
    trainer = Trainer.objects.get(id=pk)
    serializer = TrainerSerializer(trainer, many=False)
    return Response(serializer.data)


@api_view(["GET"])
def get_trainers(request):
    trainers = Trainer.objects.all()
    serializer = TrainerSerializer(trainers, many=True)
    return Response(serializer.data)

