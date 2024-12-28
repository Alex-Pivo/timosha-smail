from rest_framework.views import APIView
from .models import UsersRequest
from rest_framework.response import Response

class UsersRequestView(APIView):

    def post(self, request, language):
        username = request.data.get('username')
        phone = request.data.get('number')
        message = request.data.get('message')
        selected_request = request.data.get('selected_request')

        add_to_db = UsersRequest.objects.create(username=username, phone=phone, message=message,
                                                selected_button=selected_request)
        if not add_to_db:
            return Response({'status':'error'})
        return Response({'status':'success'})
