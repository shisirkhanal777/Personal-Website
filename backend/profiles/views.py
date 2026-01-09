from rest_framework.generics import RetrieveAPIView

from .models import Profiles
from .serializers import ProfileSerializer


class ProfileView(RetrieveAPIView):
    queryset = Profiles.objects.all()  # pyright: ignore[reportAttributeAccessIssue]
    serializer_class = ProfileSerializer

    def get_object(self):
        return self.queryset.first()


# Create your views here.
