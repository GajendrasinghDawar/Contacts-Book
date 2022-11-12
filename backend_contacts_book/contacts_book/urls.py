from django.conf import settings
from django.conf.urls.static import static

from django.urls import path
from . import views

urlpatterns = [
    path('contacts/', views.ContactsList.as_view()), 
    path('contacts/<int:pk>', views.ContactsDetail.as_view()), ]

urlpatterns += [
    # ... the rest of your URLconf goes here ...
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
