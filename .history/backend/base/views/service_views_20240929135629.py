from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.utils import timezone
from django.shortcuts import get_object_or_404


from base.models import Trainer, TrainingSession
from base.serializers import TrainerSerializer, TrainingSessionSerializer


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


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_training_session(request):
    data = request.data

    # Check require information
    if "trainer" not in data or "date" not in data or "duration" not in data:
        return Response(
            {"detail": "Brak wymaganych pól."}, status=status.HTTP_400_BAD_REQUEST
        )

    trainer = get_object_or_404(Trainer, id=data["trainer"])
    date_str = data["date"]
    date = datetime.strptime(date_str, "format")

    try:
        session = TrainingSession.objects.create(
            trainer=trainer,
            client=request.user,
            date=data["date"],
            duration=data["duration"],
        )
        serializer = TrainingSessionSerializer(session, many=False)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_training_session(request, pk):
    try:
        session = TrainingSession.objects.get(id=pk)
        serializer = TrainingSessionSerializer(session, many=False)
        return Response(serializer.data)
    except TrainingSession.DoesNotExist:
        return Response(
            {"detail": "Sesja nie została znaleziona."},
            status=status.HTTP_404_NOT_FOUND,
        )
