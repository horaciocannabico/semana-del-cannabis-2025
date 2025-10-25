import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Phone, Clock, Video } from "lucide-react";


// todo: remove mock functionality - integrate real map when available
const locationData = [
  {
    day: "Lunes",
    date: "10",
    name: "Secretaría de Derechos Humanos - Avellaneda",
    address: "12 de octubre 234, Avellaneda",
    isVirtual: false,
    coordinates: { lat: -34.6632, lng: -58.3689 },
    phone: "+54 11 2102-4082",
    hours: "9:00 - 18:00"
  },
  {
    day: "Martes",
    date: "11",
    name: "Evento Virtual",
    address: "",
    isVirtual: true,
    description: "Transmisión en vivo por YouTube y Zoom. El enlace se enviará por correo a los inscriptos.",
    phone: "",
    hours: "17:00 - 21:00"
  },
  {
    day: "Miércoles",
    date: "12",
    name: "Centro Cultural de la Memoria Haroldo Conti",
    address: "Av. Costanera Rafael Obligado 4200, CABA",
    isVirtual: false,
    coordinates: { lat: -34.5833, lng: -58.4167 },
    phone: "+54 11 4774-5000",
    hours: "10:00 - 20:00"
  },
  {
    day: "Jueves",
    date: "13",
    name: "La base cultural : sede de la asociacion canabicultora del sur",
    address: "Av. Mitre 292, Avellaneda, Buenos Aires",
    isVirtual: false,
    coordinates: { lat: -34.6632, lng: -58.3689 },
    phone: "+54 11 4201-5500",
    hours: "9:00 - 18:00"
  },
  {
    day: "Viernes",
    date: "14",
    name: "Anexo del Congreso de la Nación",
    address: "Av. Entre Ríos 1234, CABA",
    isVirtual: false,
    coordinates: { lat: -34.6037, lng: -58.3816 },
    phone: "+54 11 4127-7000",
    hours: "9:00 - 19:00"
  }
];


export default function LocationMap() {
  const handleGetDirections = (address: string) => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <section id="ubicacion" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl text-foreground mb-4">
            Ubicación por Día
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada actividad se realiza en un lugar diferente según el día
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {locationData.map((loc, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {loc.date}
                  </span>
                  {loc.day}
                  {loc.isVirtual ? (
                    <Video className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Nombre del lugar */}
                <div>
                  <h3 className="font-bold text-lg text-foreground">{loc.name}</h3>
                  {!loc.isVirtual && loc.address && (
                    <p className="text-muted-foreground">{loc.address}</p>
                  )}
                  {loc.isVirtual && (
                    <p className="text-muted-foreground flex items-center gap-2">
                      <Video className="w-4 h-4" />
                      {loc.description}
                    </p>
                  )}
                </div>

                {/* Horario y contacto */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-muted-foreground">{loc.hours}</span>
                  </div>
                  {loc.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <Button
                        variant="ghost"
                        className="p-0 h-auto text-left text-muted-foreground hover:text-foreground"
                        onClick={() => handleCall(loc.phone!)}
                      >
                        {loc.phone}
                      </Button>
                    </div>
                  )}
                </div>

                {/* Mapa (solo presencial) */}
                {/* Mapa (solo presencial) */}
                {/* Mapa real con Google Maps (solo presencial) */}
                {!loc.isVirtual && loc.address && (
                  <div className="rounded-lg border overflow-hidden">
                    <iframe
                      src={`https://www.google.com/maps?q=${encodeURIComponent(loc.address)}&output=embed`}
                      width="100%"
                      height="256"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      title={`Mapa de ${loc.name}`}
                      className="w-full"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}