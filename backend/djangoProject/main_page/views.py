from rest_framework.response import Response
from rest_framework.views import APIView
from .models import MainPageSetting
from .serializers import MainPageSettingsSerializer


class MainPage(APIView):
    def get(self, request, language):
        if not is_valid_language(language):
            return Response({'status': 'Not valid language!'})
        main_page_data = MainPageSetting.objects.filter(language=language)
        serializer = MainPageSettingsSerializer(main_page_data, many=True)
        return Response(serializer.data)

def is_valid_language(language):
    supported_languages = ['uk', 'en', 'ru', 'it']
    return language in supported_languages

class OnlyUKPageData(APIView):
    def get(self, request):
        uk_page_data = MainPageSetting.objects.filter(language='uk')
        serializer = MainPageSettingsSerializer(uk_page_data, many=True)
        return Response(serializer.data)

















# class MainPage(APIView):
#     def get(self, request, language):
#         if not is_valid_language(language):
#             return Response({'status': 'Not valid language!'})
#         main_page_data = MainPageSettings.objects.filter(language=language)
#         serializer = MainPageSettingsSerializer(main_page_data, many=True)
#         return Response(serializer.data)
#
# def is_valid_language(language):
#     supported_languages = ['uk', 'en', 'ru', 'it']
#     return language in supported_languages
#
# class OnlyUKPageData(APIView):
#     def get(self, request):
#         uk_page_data = MainPageSettings.objects.filter(language='uk')
#         serializer = MainPageSettingsSerializer(uk_page_data, many=True)
#         return Response(serializer.data)
