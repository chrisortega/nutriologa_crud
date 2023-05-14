from django.urls import path, include
from api.models import Paciente,Cita,Biometricos
from rest_framework import routers, serializers, viewsets
import django_filters.rest_framework
from django_filters.rest_framework import DjangoFilterBackend


# Serializers define the API representation.
class PacienteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Paciente
        fields =('idi','name','desc')


# ViewSets define the view behavior.
class PacienteViewSet(viewsets.ModelViewSet):
    queryset = Paciente.objects.all()
    serializer_class = PacienteSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = {
        'idi': ["exact"], # note the 'in' field  
        'name':["exact"]              
    }


# Serializers define the API representation.
class CitaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Cita
        fields = ('idi','notas','fecha','paciente_idi','biometricos_idi')
    

# ViewSets define the view behavior.
class CitaViewSet(viewsets.ModelViewSet):
    queryset = Cita.objects.all()
    serializer_class = CitaSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = {
        'paciente_idi': ["exact"], # note the 'in' field                
    }


# Serializers define the API representation.
class BiometricosSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Biometricos
        fields = ('idi','altura','peso','masa_corporal','cintura')

# ViewSets define the view behavior.
class BiometricosViewSet(viewsets.ModelViewSet):
    queryset = Biometricos.objects.all()
    serializer_class = BiometricosSerializer        
    filter_backends = [DjangoFilterBackend]
    filterset_fields = {
        'idi': ["exact"], # note the 'in' field                
    }    

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'paciente', PacienteViewSet)
router.register(r'cita', CitaViewSet)
router.register(r'biometricos', BiometricosViewSet)


from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from rest_framework_simplejwt.views import TokenVerifyView


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    
]

