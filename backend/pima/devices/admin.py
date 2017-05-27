from django.contrib import admin

from devices.models import Reading, Device

admin.site.register(Device,
                    prepopulated_fields={"slug": ("name",)},)
admin.site.register(Reading)
