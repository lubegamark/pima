from django.db import models


class BaseModel(models.Model):
    """
    Base Model from which all others inherit
    """
    _created_at = models.DateTimeField(auto_now_add=True)
    _edited_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
