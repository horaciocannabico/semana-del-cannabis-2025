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
    hours: "17:00 - 21:00",
    link: "https://www.youtube.com/@semanadelcannabis",
    linkDescription: "Ver en YouTube",
    imagen: "imagenes/YouTube.png"
  },
  {
    day: "Miércoles",
    date: "12",
    name: "Evento Virtual",
    address: "",
    isVirtual: true,
    description: "Transmisión en vivo por YouTube y Zoom. El enlace se enviará por correo a los inscriptos.",
    phone: "",
    hours: "10:00 - 20:00",
    link: "https://www.youtube.com/@semanadelcannabis",
    linkDescription: "Ver en YouTube",
    imagen: "imagenes/YouTube.png"
  },
  {
    day: "Jueves",
    date: "13",
    name: "Evento Virtual",
    address: "",
    isVirtual: true,
    description: "Transmisión en vivo por YouTube y Zoom. El enlace se enviará por correo a los inscriptos.",
    phone: "",
    hours: "9:00 - 18:00",
    link: "https://www.youtube.com/@semanadelcannabis",
    linkDescription: "Ver en YouTube",
    imagen: "imagenes/YouTube.png"
  },
  {
    "day": "Jueves",
    "date": "14",
    "name": "Obra de Teatro \"Nogotá\"",
    "address": "12 de octubre 234, Avellaneda",
    "isVirtual": false,
    "coordinates": { "lat": -34.6632, "lng": -58.3689 },
    "phone": "+54 11 2102-4082",
    "hours": "19:30",
    "location": "Secretaría de Derechos Humanos - Avellaneda",
    "localidades": "A confirmar",
    "descripcion": "Puesta en escena en el marco de la exposición 'Cárceles. Narraciones del encierro (1878-2025)' organizada por la Biblioteca Nacional. Narra la tragedia conocida como la Masacre en el Pabellón Séptimo ocurrida el 14 de marzo de 1978 en la cárcel de Devoto, donde murieron al menos 65 presos. Declarada de Interés Cultural por la Cámara de Diputados de la Nación y de Interés para la Promoción de los Derechos Humanos por la Legislatura de CABA. Entrada libre y gratuita."
  },
  {
    day: "Viernes",
    date: "14",
    name: "Anexo del Congreso de la Nación",
    address: "Av. Rivadavia 1841, CABA",
    isVirtual: false,
    coordinates: { lat: -34.6037, lng: -58.3816 },
    phone: "+54 11 4127-7000",
    hours: "14:30 - 19:00",
    descripcion: "El evento requiere inscripción previa y acreditación con DNI.",
    link: "/#registro",
    linkDescription: "Registrate aquí",
  },
  {
    day: "Viernes",
    date: "14",
    name: "Visita Museo del Cannabis",
    address: "Araoz 689, Villa Crespo, CABA",
    isVirtual: false,
    "coordinates": {
      "lat": -34.598034572843616,
      "lng": -58.436526787789944
    },
    phone: "+54 11 2604-0420",
    hours: "20:00 - 22:00",
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

              <CardContent className="space-y-6 md:flex md:items-start md:gap-6 md:flex-row-reverse">
                <div className="flex-1 space-y-6">
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

                  {/* Botón de enlace online */}
                  {loc.link && (
                    <Button
                      variant="default"
                      onClick={() => window.open(loc.link, "_blank")}
                    >
                      {loc.linkDescription}
                    </Button>
                  )}

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
                      {/* Mostrar descripción si existe */}
                      {loc.descripcion && (
                        <p className="mt-4 mb-3 p-2 text-muted-foreground font-bold">{loc.descripcion}</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Imagen si existe */}
                {
                  loc.imagen &&
                  (<div className="md:w-48 md:flex-shrink-0">
                    <img src={loc.imagen}
                      alt={loc.name}
                      className="w-full h-auto rounded-lg object-cover" />
                  </div>)
                }
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

}