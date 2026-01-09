from django.db import models


# Create your models here.
class Profiles(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    age = models.IntegerField()
    address = models.CharField(max_length=200)
    phone = models.CharField(max_length=20)
    bio = models.TextField()
    profile_image = models.ImageField(upload_to="profile/")
    updated_at = models.DateTimeField(auto_now=True)
    designation = models.CharField(max_length=100)

    def __str__(self):  # pyright: ignore[reportIncompatibleMethodOverride]
        return self.name
