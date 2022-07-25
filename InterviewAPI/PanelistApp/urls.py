from django.urls import re_path as url
from PanelistApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    url(r'^panel/$', views.panelApi),
    url(r'^panel/([0-9]+)$', views.panelApi),

    url(r'^member/$', views.memberApi),
    url(r'^member/([0-9]+)$', views.memberApi),

    url(r'^SaveFile$',views.SaveFile)
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)