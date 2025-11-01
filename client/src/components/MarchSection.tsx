import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Megaphone, Heart } from "lucide-react";
import marchImage from "@assets/generated_images/marcha-cannabis4jpg.webp";

// todo: remove mock functionality
const marchData = {
  title: "15ª Marcha Nacional de la Marihuana",
  date: "Sábado 15 de Noviembre, 2025",
  time: "18:00 hs",
  startLocation: "Plaza de Mayo",
  endLocation: "Congreso Nacional",
  expectedParticipants: "10,000+",
  organizers: [
    "Cultivando Derechos",
    "MAMECANN",
    "Asociación Argentina de Cannabis",
    "Fundación por los Derechos Cannábicos"
  ],
  objectives: [
    "BASTA DE PERSONAS PRESAS POR MARIHUANA.",
    "EL PROHIBICIONISMO MATA.",
    "BASTA DE VIOLENCIA MACHISTA Y PATRIARCAL EN NUESTRA COMUNIDAD.",
    "POR UNA NUEVA LEY DE DROGAS, REGULACIÓN DE LA MARIHUANA YA!"
  ],
  activities: [
    {
      time: "14:00 - 17:00",
      title: "Pre-Marcha: Festival Cultural",
      description: "Streaming en vivo, DJs, stands informativos y performances artísticas"
    },
    {
      time: "17:00",
      title: "Inicio de la Marcha",
      description: "Concentración en Plaza de Mayo"
    },
    {
      time: "18:30",
      title: "Llegada al Congreso",
      description: "Concentración frente al Congreso Nacional"
    },
    {
      time: "19:00",
      title: "Lectura del documento final y cierre",
      description: "Con reclamos y propuestas"
    }
  ]
};

export default function MarchSection() {
  const handleParticipate = () => {
    console.log("Participar en marcha triggered");
    // Scroll to registration or show participation info
  };

  const handleShareMarch = () => {
    console.log("Compartir marcha triggered");
    const text = `Únete a la ${marchData.title} - ${marchData.date} en Buenos Aires. #Cannabis2025 #RegulacionJusta`;

    if (navigator.share) {
      navigator.share({
        title: marchData.title,
        text: text,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(text);
    }
  };

  return (
    <section id="marcha" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Card */}
          <Card className="mb-8 overflow-hidden">
            <div className="relative">
              <img
                src={marchImage}
                alt="Marcha Nacional de la Marihuana"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-display font-bold text-3xl md:text-4xl mb-2" data-testid="text-march-title">
                  {marchData.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span data-testid="text-march-date">{marchData.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span data-testid="text-march-time">{marchData.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span data-testid="text-march-participants">{marchData.expectedParticipants} participantes esperados</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* March Details */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Recorrido
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-foreground">Punto de Partida</p>
                        <p className="text-muted-foreground" data-testid="text-start-location">{marchData.startLocation}</p>
                      </div>
                    </div>
                    <div className="ml-1.5 border-l-2 border-dashed border-muted h-8"></div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-foreground">Punto de Llegada</p>
                        <p className="text-muted-foreground" data-testid="text-end-location">{marchData.endLocation}</p>
                      </div>
                    </div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m34!1m12!1m3!1d3283.816367150796!2d-58.383566398623714!3d-34.60880473494799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m19!3e2!4m5!1s0x95bccac2cd859503%3A0x75cdafaaef2b946!2sCongreso%20de%20la%20Naci%C3%B3n%20Argentina%2C%20Avenida%20Entre%20R%C3%ADos%2C%20Buenos%20Aires!3m2!1d-34.6098208!2d-58.392606099999995!4m5!1s0x95bccad0457fa6a3%3A0x30fde298fbcd7cf!2sAv.%20de%20Mayo%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!3m2!1d-34.609046899999996!2d-58.381093!4m5!1s0x95bccadb57fd1e5f%3A0xcc737c4eb0a8614b!2sPlaza%20de%20Mayo!3m2!1d-34.6083667!2d-58.3722832!5e0!3m2!1sen!2sar!4v1761965125301!5m2!1sen!2sar"
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Megaphone className="w-5 h-5" />
                    Objetivos de la Marcha
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {marchData.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground" data-testid={`objective-${index}`}>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Timeline and Organizations */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Cronograma del Día
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {marchData.activities.map((activity, index) => (
                      <div key={index} className="flex gap-4">
                        <Badge variant="outline" className="flex-shrink-0">
                          {activity.time}
                        </Badge>
                        <div>
                          <h4 className="font-semibold text-foreground" data-testid={`activity-title-${index}`}>
                            {activity.title}
                          </h4>
                          <p className="text-sm text-muted-foreground" data-testid={`activity-desc-${index}`}>
                            {activity.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Seguinos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://www.instagram.com/marchamarihuanaamba/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Badge variant="secondary">
                        @marchamarihuanaamba
                      </Badge>
                    </a>
                    <a
                      href="https://www.instagram.com/marchadelamarihuanaarg/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Badge variant="secondary">
                        @marchadelamarihuanaarg
                      </Badge>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  className="flex-1"
                  onClick={handleParticipate}
                  data-testid="button-participate-march"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Participar
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={handleShareMarch}
                  data-testid="button-share-march"
                >
                  <Megaphone className="w-4 h-4 mr-2" />
                  Compartir
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}