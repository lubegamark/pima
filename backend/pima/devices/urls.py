from django.conf.urls import url

from devices import views

urlpatterns = [
    url(r'^$', views.DeviceList.as_view()),
    url(r'^(?P<slug>[^/]+)/$',
        views.DeviceDetail.as_view()),
    url(r'^(?P<slug>[^/]+)/readings/$',
        views.DeviceReadings.as_view()), ]
