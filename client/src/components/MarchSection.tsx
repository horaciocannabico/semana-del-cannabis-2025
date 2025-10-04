import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Megaphone, Heart } from "lucide-react";
import marchImage from "@assets/generated_images/Cannabis_legalization_march_1ac6c85a.png";

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
    "Visibilizar la demanda social por la regulación del cannabis",
    "Reclamar por una política de drogas basada en derechos humanos",
    "Denunciar la criminalización de usuarios medicinales y recreativos",
    "Exigir la liberación de detenidos por cannabis",
    "Promover el debate público informado sobre regulación cannábica"
  ],
  activities: [
    {
      time: "14:00 - 17:00",
      title: "Pre-Marcha: Festival Cultural",
      description: "Música en vivo, DJs, stands informativos y performances artísticas"
    },
    {
      time: "18:00",
      title: "Inicio de la Marcha",
      description: "Concentración en Plaza de Mayo"
    },
    {
      time: "19:30",
      title: "Llegada al Congreso",
      description: "Lectura del documento final con reclamos y propuestas"
    },
    {
      time: "20:00",
      title: "Cierre Musical",
      description: "Conciertos de bandas y artistas reconocidos"
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
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl text-foreground mb-4">
            La Gran Marcha
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            El momento cumbre de la Semana del Cannabis: una manifestación pacífica 
            que reúne a toda la comunidad en un reclamo histórico por la regulación justa.
          </p>
        </div>

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
                    Organizaciones Convocantes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {marchData.organizers.map((organizer, index) => (
                      <Badge key={index} variant="secondary" data-testid={`organizer-${index}`}>
                        {organizer}
                      </Badge>
                    ))}
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