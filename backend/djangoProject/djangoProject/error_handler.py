from django.http import JsonResponse
from django.views import View
from django.shortcuts import render
def error_404_view_ukr(request):
    response_data = {
        'error': 'Не знайдено',
        'message': 'Потрібного ресурсу не знайдено.'
    }
    return JsonResponse(data=response_data, status=404)

class ErrorView(View):
    def get(self,request,language):
        # return JsonResponse({'error': 'Не знайдено'},status=404)
        return render(request,f'404_{language}.html')