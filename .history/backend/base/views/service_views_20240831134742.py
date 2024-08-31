from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.permissions import IsAuthenticated


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


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_training_session(request):
    data = request.data

    # Sprawdź, czy wymagane pola są obecne
    if 'trainer' not in data or 'date' not in data or 'duration' not in data:
        return Response({"detail": "Brak wymaganych pól."}, status=status.HTTP_400_BAD_REQUEST)
    
    # Dodaj dodatkową logikę, jeśli to konieczne
    try:
        session = TrainingSession.objects.create(
            trainer=data['trainer'],
            client=request.user,
            date=data['date'],
            duration=data['duration'],
            notes=data.get('notes', '')
        )
        serializer = TrainingSessionSerializer(session, many=False)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)

