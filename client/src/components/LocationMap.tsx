import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Phone, Clock, Car, Train } from "lucide-react";

// todo: remove mock functionality - integrate real map when available
const locationData = {
  name: "Centro de Convenciones Buenos Aires",
  address: "Av. Figueroa Alcorta 2230, C1425CLA CABA",
  coordinates: { lat: -34.5793, lng: -58.3969 },
  phone: "+54 11 4808-2700",
  hours: "8:00 - 22:00 (durante el evento)",
  publicTransport: [
    "Subte Línea D - Estación Palermo",
    "Autobuses: 10, 37, 41, 59, 67",
    "Tren San Martín - Estación Palermo"
  ],
  parking: "Estacionamiento disponible en el predio"
};

export default function LocationMap() {
  const handleGetDirections = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(locationData.address)}`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${locationData.phone}`;
  };

  return (
    <section id="ubicacion" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl text-foreground mb-4">
            Ubicación del Evento
          </h2>
          <p className="text-lg text-muted-foreground">
            Encuentranos en el corazón de Buenos Aires
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <Card>
            <CardContent className="p-0">
              <div className="relative h-96 bg-muted rounded-lg overflow-hidden">
                {/* Mock map interface */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                      <p className="text-lg font-semibold text-foreground mb-2">
                        {locationData.name}
                      </p>
                      <p className="text-muted-foreground text-sm max-w-sm" data-testid="text-address">
                        {locationData.address}
                      </p>
                    </div>
                  </div>
                  
                  {/* Mock map elements */}
                  <div className="absolute top-4 left-4 bg-white dark:bg-card p-2 rounded shadow">
                    <span className="text-xs font-medium">Buenos Aires</span>
                  </div>
                  
                  {/* Mock streets */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/3 left-0 right-0 h-1 bg-gray-400"></div>
                    <div className="absolute top-2/3 left-0 right-0 h-1 bg-gray-400"></div>
                    <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-gray-400"></div>
                    <div className="absolute top-0 bottom-0 left-2/3 w-1 bg-gray-400"></div>
                  </div>
                </div>
                
                <Button
                  className="absolute top-4 right-4"
                  onClick={handleGetDirections}
                  data-testid="button-directions"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Cómo llegar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Location Details */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Información del Lugar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-1" data-testid="text-venue-name">
                    {locationData.name}
                  </h4>
                  <p className="text-muted-foreground" data-testid="text-venue-address">
                    {locationData.address}
                  </p>
                </div>
                
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-left"
                    onClick={handleCall}
                    data-testid="button-call"
                  >
                    {locationData.phone}
                  </Button>
                </div>
                
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground" data-testid="text-hours">
                    {locationData.hours}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Train className="w-5 h-5" />
                  Transporte Público
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {locationData.publicTransport.map((transport, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span data-testid={`transport-${index}`}>{transport}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="w-5 h-5" />
                  Estacionamiento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground" data-testid="text-parking">
                  {locationData.parking}
                </p>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="flex-1"
                onClick={handleGetDirections}
                data-testid="button-directions-main"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Obtener Direcciones
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={handleCall}
                data-testid="button-call-main"
              >
                <Phone className="w-4 h-4 mr-2" />
                Llamar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}