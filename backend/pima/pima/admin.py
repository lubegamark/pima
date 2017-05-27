from django.contrib import admin

from models import Device, Reading

admin.site.register(Device,
                    prepopulated_fields={"slug": ("name",)},)
admin.site.register(Reading)
