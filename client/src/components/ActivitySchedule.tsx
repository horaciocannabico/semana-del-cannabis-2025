import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Users, Calendar } from "lucide-react";
import legalImage from "@assets/generated_images/Legal_cannabis_conference_68180de8.png";
import medicalImage from "@assets/generated_images/Medical_cannabis_research_lab_46736be1.png";
import industrialImage from "@assets/generated_images/Industrial_hemp_products_showcase_42e35756.png";
import culturalImage from "@assets/generated_images/Cannabis_cultural_art_exhibition_94bbc094.png";
import marchImage from "@assets/generated_images/Cannabis_legalization_march_1ac6c85a.png";

// todo: remove mock functionality
const scheduleData = [
  {
    date: "2025-11-10",
    dayName: "Lunes 10",
    theme: "Cannabis y Sociedad: Desafíos Legales y Derechos Humanos",
    image: legalImage,
    activities: [
      {
        time: "16:00 - 18:00",
        title: "Cannabis y Derechos Humanos: ¿Por qué regular es un acto de justicia?",
        description: "Panel con referentes sobre la regulación del cannabis como acto de justicia.",
        speakers: ["Caio o Estella (Tricomas del Sur)", "Florencia Corbelle (Acuerdo por una regulación legal del cannabis)", "Yacoi (DDHH Avellaneda)", "Tavo Depaoli (Redfac y Acción Cannábica)"],
        location: "Espacio cultural (por definir)",
        type: "Presencial",
        image: legalImage
      },
      {
        time: "19:00 - 21:00",
        title: "Derechos Humanos, Cannabis y Salud Comunitaria",
        description: "Problemáticas alrededor del consumo y derechos de los pacientes.",
        speakers: ["Dr. Carlos Magdalena", "Dr. Pina (derechos de los pacientes, salud mental)", "Facu (ACS)"],
        location: "UTN Sede Avellaneda",
        type: "Presencial",
        image: legalImage
      }
    ]
  },
  {
    date: "2025-11-11",
    dayName: "Martes 11",
    theme: "Cannabis Medicinal: Ciencia, Acceso y Calidad de Vida",
    image: medicalImage,
    activities: [
      {
        time: "15:00 - 17:00",
        title: "La información médica y el aporte de las ONG",
        description: "Formaciones y experiencias desde las ONG.",
        speakers: ["Agustin Pabón (FACC+UNSL+AUPAC)", "Diana Barreneche (Legales)", "Laura -ACS (DDHH-UTN)", "Soledad Pedrana (AUPAC)", "Juan Ignacio Gutierrez (Cannalizar-Ciencia Sativa)"],
        location: "Virtual",
        type: "Virtual",
        image: legalImage
      },
      {
        time: "18:00 - 19:30",
        title: "Salud Cannábica: Información y actualización Reprocann, Prevención y Acompañamiento Médico",
        description: "Actualización para profesionales de la salud y debate interdisciplinario.",
        speakers: ["Emilio García (Doingcanna)", "Laura Padovani (Dispositivo de Salud pública en Traslasierra)", "Dispositivo Moreno, San Martín, Morón"],
        location: "Virtual",
        type: "Virtual",
        image: legalImage
      }
    ]
  },
  {
    date: "2025-11-12",
    dayName: "Miércoles 12",
    theme: "Cannabis Industrial y Nuevas Economías",
    image: industrialImage,
    activities: [
      {
        time: "11:00 - 12:30",
        title: "Desafíos y Fracasos: Experiencias Emprendedoras ante la Inestabilidad Normativa",
        description: "Experiencias de emprendedores frente a ARICCAME e INASE.",
        speakers: ["Eric Turiansky", "Virginia Romaldi", "Facu Rivadeneira (Cooperativa Criar)", "Candela Grossi"],
        location: "Virtual",
        type: "Virtual",
        image: legalImage
      },
      {
        time: "15:00 - 16:30",
        title: "Cannabis industrial: adaptarse frente a un contexto regulatorio y económico incierto",
        description: "Debate sobre proyectos y doctorados en cannabis industrial.",
        speakers: ["Rolando", "Cogollos Córdoba o Roxana", "Dianita (Gustavo Álvarez-Córdoba)", "Mike Bifari"],
        location: "Virtual",
        type: "Virtual",
        image: legalImage
      }
    ]
  },
  {
    date: "2025-11-13",
    dayName: "Jueves 13",
    theme: "Cannabis, Cultura y Uso Responsable",
    image: culturalImage,
    activities: [
      {
        time: "11:00 - 12:30",
        title: "Del estigma a la responsabilidad: Usos, derechos y realidades",
        description: "Consumo adulto y ética social hacia una regulación humanizada.",
        speakers: ["Barbies testeadoras (México)", "Martin Macu (Río Gallegos)", "ARDA", "Facu ACS"],
        location: "Virtual",
        type: "Virtual",
        image: legalImage
      },
      {
        time: "19:30",
        title: "Obra de teatro Pabellón séptimo",
        description: "Presentación teatral relacionada con derechos humanos.",
        speakers: [],
        location: "El Infierno, Secretaría de DDHH Avellaneda",
        type: "Presencial",
        image: legalImage
      }
    ]
  },
  {
    date: "2025-11-14",
    dayName: "Viernes 14",
    theme: "Incidencia Política: Cannabis en la Agenda Pública",
    image: legalImage,
    activities: [
      {
        time: "15:00 - 16:45",
        title: "Reforma Penal y Persecución al Usuario de Cannabis",
        description: "Debate sobre cambio de paradigma legal.",
        speakers: ["Fausto (Red Federal)", "Joe Stefanolo", "Bettiana o Kasandra"],
        location: "Auditorio Anexo Cámara de Diputados",
        type: "Presencial",
        image: legalImage
      },
      {
        time: "17:00 - 19:45",
        title: "Ley 23.737 y su impacto: Derechos vulnerados y caminos a la Reforma",
        description: "Mesa de análisis sobre la reforma legal.",
        speakers: ["Florencia Corbelle", "Nico Milione (Acción Cannábica - FACC)", "Facu ACS", "Nermi (Jardín del Unicornio)"],
        location: "Auditorio Anexo Cámara de Diputados",
        type: "Presencial",
        image: legalImage
      },
      {
        time: "19:45",
        title: "Conclusión y cierre de la Semana Cannabis",
        description: "Propuestas y declaración conjunta de organizaciones.",
        speakers: ["Representantes de organizaciones"],
        location: "Auditorio Anexo Cámara de Diputados",
        type: "Presencial",
        image: legalImage
      }
    ]
  },
  {
    date: "2025-11-15",
    dayName: "Sábado 15",
    theme: "La Gran Marcha: Por una Regulación Justa",
    image: marchImage,
    activities: [
      {
        time: "14:00 - 17:00",
        title: "Pre-Marcha: Festival Cultural",
        description: "Música, DJs, performances y stands informativos",
        speakers: ["Artistas", "Organizaciones"],
        location: "Plaza de Concentración",
        type: "Presencial"
      },
      {
        time: "18:00",
        title: "15ª Marcha Nacional de la Marihuana",
        description: "Recorrido por Buenos Aires",
        speakers: ["Toda la comunidad"],
        location: "Desde Plaza hasta Congreso",
        type: "Presencial"
      }
    ]
  }
];


/*const scheduleData = [
  {
    date: "2025-11-10",
    dayName: "Lunes 10",
    theme: "Cannabis y Sociedad: Desafíos Legales y Derechos Humanos",
    image: legalImage,
    activities: [
      {
        time: "11:00",
        title: "Conferencia de Prensa de Lanzamiento",
        description: "Presentación de objetivos y agenda de actividades",
        speakers: ["Organizaciones cannábicas", "OSC", "Referentes destacados"],
        location: "Auditorio Principal",
        type: "Presencial"
      },
      {
        time: "14:00 - 17:00",
        title: "Panel: La Ley 23.737 en el Siglo XXI",
        description: "Impacto Social y Necesidad de Reforma",
        speakers: ["Abogados especialistas", "Jueces", "Fiscales", "Activistas"],
        location: "Sala de Debates",
        type: "Híbrido"
      },
      {
        time: "18:00 - 20:00",
        title: "Taller: Conocé tus Derechos",
        description: "Asesoramiento Legal para Usuarios y Cultivadores",
        speakers: ["Equipos legales de organizaciones"],
        location: "Aula 1",
        type: "Presencial"
      }
    ]
  },
  {
    date: "2025-11-11",
    dayName: "Martes 11",
    theme: "Cannabis Medicinal: Ciencia, Acceso y Calidad de Vida",
    image: medicalImage,
    activities: [
      {
        time: "10:30 - 13:00",
        title: "Jornada de Actualización Médica",
        description: "Cannabis Terapéutico: Evidencia Científica y Protocolos",
        speakers: ["Médicos", "Investigadores", "Farmacéuticos"],
        location: "Auditorio Médico",
        type: "Presencial"
      },
      {
        time: "15:00 - 17:00",
        title: "Roles ante Reprocann",
        description: "ONGs y Cultivadores Solidarios",
        speakers: ["ONGs especializadas", "Cultivadores solidarios"],
        location: "Sala de Conferencias",
        type: "Híbrido"
      },
      {
        time: "18:00 - 20:00",
        title: "Taller: Autocultivo Medicinal Responsable",
        description: "Marco de la Ley 27.350",
        speakers: ["Especialistas en cultivo"],
        location: "Laboratorio",
        type: "Presencial"
      }
    ]
  },
  {
    date: "2025-11-12",
    dayName: "Miércoles 12",
    theme: "Cannabis Industrial y Nuevas Economías",
    image: industrialImage,
    activities: [
      {
        time: "10:30 - 13:00",
        title: "Foro Empresarial: Cáñamo Industrial",
        description: "Potencial Productivo y Marco Regulatorio",
        speakers: ["Empresarios", "Inversores", "Agrónomos", "Funcionarios"],
        location: "Centro de Negocios",
        type: "Presencial"
      },
      {
        time: "14:00 - 17:00",
        title: "Feria de Emprendedores Cannábicos",
        description: "Exposición y venta de productos derivados del cáñamo",
        speakers: ["Emprendedores", "Empresas del sector"],
        location: "Pabellón de Exposiciones",
        type: "Presencial"
      },
      {
        time: "18:00 - 20:00",
        title: "Cannabis en la Gastronomía",
        description: "Innovación y Tendencias",
        speakers: ["Chef especializado"],
        location: "Cocina Demostrativa",
        type: "Presencial"
      }
    ]
  },
  {
    date: "2025-11-13",
    dayName: "Jueves 13",
    theme: "Cannabis, Cultura y Uso Responsable",
    image: culturalImage,
    activities: [
      {
        time: "10:30 - 13:00",
        title: "Ciclo de Cine/Documentales",
        description: "Miradas sobre el Cannabis: Realidades y Ficción",
        speakers: ["Directores", "Especialistas"],
        location: "Cine Auditorio",
        type: "Presencial"
      },
      {
        time: "15:00 - 17:00",
        title: "Uso Adulto Responsable",
        description: "Desmitificando el Consumo",
        speakers: ["Especialistas en salud pública"],
        location: "Auditorio Principal",
        type: "Híbrido"
      },
      {
        time: "18:00 - 20:00",
        title: "Muestra de Arte: Cannabis en Escena",
        description: "Exposición artística y performances",
        speakers: ["Artistas plásticos", "Músicos", "Performers"],
        location: "Galería de Arte",
        type: "Presencial"
      }
    ]
  },
  {
    date: "2025-11-14",
    dayName: "Viernes 14",
    theme: "Incidencia Política: Cannabis en la Agenda Pública",
    image: legalImage,
    activities: [
      {
        time: "10:30 - 13:00",
        title: "Foro Legislativo",
        description: "Hacia una Regulación Integral del Cannabis",
        speakers: ["Legisladores", "Representantes ministeriales"],
        location: "Auditorio Legislativo",
        type: "Híbrido"
      },
      {
        time: "15:00 - 17:00",
        title: "Taller de Activismo y Comunicación",
        description: "Estrategias para la Incidencia",
        speakers: ["Organizaciones", "Activistas"],
        location: "Aula de Capacitación",
        type: "Presencial"
      },
      {
        time: "18:00 - 20:00",
        title: "Preparación para la Marcha",
        description: "Armado de Banderas y Consignas",
        speakers: ["Organizadores de la marcha"],
        location: "Espacio Comunitario",
        type: "Presencial"
      }
    ]
  },
  {
    date: "2025-11-15",
    dayName: "Sábado 15",
    theme: "La Gran Marcha: Por una Regulación Justa",
    image: marchImage,
    activities: [
      {
        time: "14:00 - 17:00",
        title: "Pre-Marcha: Festival Cultural",
        description: "Música, DJs, performances y stands informativos",
        speakers: ["Artistas", "Organizaciones"],
        location: "Plaza de Concentración",
        type: "Presencial"
      },
      {
        time: "18:00",
        title: "15ª Marcha Nacional de la Marihuana",
        description: "Recorrido por Buenos Aires",
        speakers: ["Toda la comunidad"],
        location: "Desde Plaza hasta Congreso",
        type: "Presencial"
      }
    ]
  }
];*/

export default function ActivitySchedule() {
  const [selectedDay, setSelectedDay] = useState(0);

  const handleRegisterActivity = (activity: string) => {
    console.log(`Registro para actividad: ${activity}`);
    // Mock registration functionality
  };

  return (
    <section id="actividades" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {scheduleData.map((day, index) => (
            <Button
              key={day.date}
              variant={selectedDay === index ? "default" : "outline"}
              onClick={() => setSelectedDay(index)}
              className="flex-shrink-0"
              data-testid={`day-${index}`}
            >
              {day.dayName}
            </Button>
          ))}
        </div>

        {/* Selected Day Content */}
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <div className="flex flex-col md:flex-row gap-6">
                <img 
                  src={scheduleData[selectedDay].image} 
                  alt={scheduleData[selectedDay].theme}
                  className="w-full md:w-48 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <CardTitle className="font-display text-2xl md:text-3xl text-primary mb-2">
                    {scheduleData[selectedDay].dayName}
                  </CardTitle>
                  <p className="text-lg text-foreground font-medium">
                    {scheduleData[selectedDay].theme}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(scheduleData[selectedDay].date).toLocaleDateString('es-AR')}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Activities */}
          <div className="space-y-4">
            {scheduleData[selectedDay].activities.map((activity, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {activity.time}
                      </Badge>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg text-foreground mb-2">
                        {activity.title}
                      </h4>
                      <p className="text-muted-foreground mb-3">
                        {activity.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {activity.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {activity.type}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm font-medium text-foreground mb-1">Participan:</p>
                        <div className="flex flex-wrap gap-1">
                          {activity.speakers.map((speaker, speakerIndex) => (
                            <Badge key={speakerIndex} variant="secondary" className="text-xs">
                              {speaker}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <Button 
                        variant="outline"
                        onClick={() => handleRegisterActivity(activity.title)}
                        data-testid={`register-activity-${index}`}
                      >
                        Registrarse
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}