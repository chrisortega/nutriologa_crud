from django.urls import path, include
from api.models import Paciente,Cita,Biometricos
from rest_framework import routers, serializers, viewsets

# Serializers define the API representation.
class PacienteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Paciente
        fields ='__all__'

# ViewSets define the view behavior.
class PacienteViewSet(viewsets.ModelViewSet):
    queryset = Paciente.objects.all()
    serializer_class = PacienteSerializer



# Serializers define the API representation.
class CitaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Cita
        fields = '__all__'

# ViewSets define the view behavior.
class CitaViewSet(viewsets.ModelViewSet):
    queryset = Cita.objects.all()
    serializer_class = CitaSerializer



# Serializers define the API representation.
class BiometricosSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Biometricos
        fields = '__all__'

# ViewSets define the view behavior.
class BiometricosViewSet(viewsets.ModelViewSet):
    queryset = Biometricos.objects.all()
    serializer_class = BiometricosSerializer        

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'paciente', PacienteViewSet)
router.register(r'cita', CitaViewSet)
router.register(r'biometricos', BiometricosViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]