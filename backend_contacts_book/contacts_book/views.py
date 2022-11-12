from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Contact
from .serializers import ContactSerializer
from rest_framework import generics
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser, FileUploadParser
from rest_framework import filters
from django.db.models import Q


class ContactsList(generics.ListCreateAPIView):
    search_fields = ['first_name', 'last_name']
    filter_backends = (filters.SearchFilter,)
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    # parser_classes = (MultiPartParser, FormParser,JSONParser)
    parser_classes = [MultiPartParser, FormParser,JSONParser]

    # def get_queryset(self):
    #     queryset = Contact.objects.all()
    #     search = self.request.query_params.get('search')
    #     print(search)
    #     if search is not None:
    #         print('searchig ')
    #         queryset = queryset.filter(Q(first_name=search) | Q(last_name=search) )
    #     return queryset


class ContactsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    # parser_classes = (MultiPartParser, FormParser,JSONParser)
    parser_classes = [MultiPartParser, FormParser,JSONParser]
