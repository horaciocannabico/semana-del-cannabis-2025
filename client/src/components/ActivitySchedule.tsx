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
import { Link } from "wouter";


// todo: remove mock functionality
const scheduleData = [
  {
    "date": "2025-11-10",
    "dayName": "Lunes 10",
    theme: "Cannabis y Sociedad: Desafíos Legales y Derechos Humanos",
    image: legalImage,
    "activities": [
      {
        "time": "16:00 - 17:00",
        "title": "Cannabis y Derechos Humanos",
        "description": " ¿Por qué regular es un acto de justicia?",
        "speakers": [
          "Ricardo Eugenio Molinario | Asociación Civil Tricomas del Sur",
          "Stella Maris Nuñez | Asociación Civil Tricomas del Sur",
          "Florencia Corbelle | Programa de Antropología Política y Jurídica, Instituto de Ciencias Antropológicas, UBA/CONICET",
          "Claudio Yacoy | Secretario DDHH Partido de Avellaneda",
          "Abg. Gustavo Depaoli | Asociación Civil Acción Cannábica, Red Federal de Abogacía Cannábica (ARFAC) | Secretaria legales  Federación Argentina de Cannabis y Cáñamo (FACC)",
        ],
        moderators: [
          "Federico Ruecco | Asociación Cannabicultora del Sur (ACS) | FACC"
        ],
        "location": "Casa del Bicentenario | Colón 746, Partido de Avellaneda",
        "type": "Presencial",
        "image": "legalImage"
      },
      {
        "time": "17:00 - 18:00",
        "title": "Modelos Asociativos",
        "description": "",
        "speakers": [
          "Nermi Zappia | Jardín del Unicornio",
          "Julian Pere | Jardín del Unicornio",
          "Juan Palomino | Cultivando Derecho",
          "Federico Sinagra | Cultivando Derecho",
          "Facundo De Luca | Asociación Cannabicultora del Sur | FACC",
          "Flores de Libertad | Colectivo",
          
        ],
        moderators: [
          "Federico Ruecco | Asociación Cannabicultora del Sur | FACC"
        ],
        "location": "Casa del Bicentenario | Colón 746, Partido de Avellaneda",
        "type": "Presencial",
        "image": "legalImage"
      },
      {
        "time": "19:00 - 21:00",
        "title": "Derechos Humanos, Cannabis y Salud Comunitaria",
        "description": "",
        "speakers": [
          "Dr. Daniel Pina | Derechos Humanos, Cannabis y Salud Comunitaria",
          "Dr. Carlos Magdalena | Clase Magistral Trastorno del  Stress Postraumático ",

        ],
        moderators: [
          "Dr. Emilio García | Doingcanna | Secretario de Salud  Federación Argentina de Cannabis y Cañamo (FACC) | Director Científico  Cannamerica | Médico  Investigador "
        ],
        "location": "UTN Sede Avellaneda | Av. Bartolomé Mitre 750, Partido de Avellaneda",
        "type": "Presencial",
        "image": "legalImage"
      }
    ]
  },
  {
    "date": "2025-11-11",
    "dayName": "Martes 11",
    "theme": "Cannabis Medicinal: Educación, Acceso y Calidad de Vida",
    image: legalImage,
    "activities": [
      {
        "time": "15:00 - 17:00",
        "title": "El conocimiento como semilla",
        "description": "Articulaciones entre universidad y sociedad civil en la formación cannábica",
        "speakers": [
          "Agustin Pabón Maciel | Curso de Extensión Universitaria “Formación técnica para responsables de cultivo de Cannabis sativa L.” | Programa Cannabis - UNSL, AUPAC y FACC",
          "Diana Barreneche | Diplomatura de Extensión Universitaria “Aspectos estructurales para el desarrollo de la cannabis en Argentina y la región. Dimensiones jurídicas, sociales y ambientales.” | Programa Cannabis - UNSL, AUPAC y Proyecto Cáñamo",
          "Laura Scuteri | Diplomatura “Cannabis y Derechos Humanos.” | UTN Avellaneda, Asociación Cannabicultora del Sur (ACS) y Secretaría de Derechos Humanos de la municipalidad de Avellaneda",
          "Sabrina Pimpinella | Posgrado “Abordaje integral de la planta de Cannabis para la Salud” | UNR, Asociación civil AUPAC",
          "Dr. Juan Ignacio Gutierrez Garbiero | Docente de la “Diplomatura Superior en Cannabis y sus usos medicinales” (UNAJ) | Investigador en Salud | Co-fundador de Cannalizar.ar, Asociación Civil Ciencia Sativa (ACCS)",
          "Karina Romanelli | Diplomatura Superior Universitaria: En Cannabis Terapéutico | Universidad Nacional del Sur, Departamento de Biología Bioquímica y Farmacia | Asociación Civil Cultivo Mi Medicina"
        ],
        "moderators": [
          "Soledad Pedrana | Secretaría de Educación de la Federación Argentina de Cannabis y Cáñamo (FACC)"
        ],
        "location": "Canal de YouTube @semanadelcannabis",
        "type": "Virtual",
        "image": "legalImage"
      },
      {
        "time": "18:00 - 19:30",
        "title": "Del consultorio al territorio",
        "description": "Experiencias en salud pública y Cannabis, actualización REPROCANN y espacio de debate",
        "speakers": [
          "Dr. Emilio García | Doingcanna | Secretario de Salud Federación Argentina de Cannabis y Cañamo (FACC)| Director Científico Cannamerica | Médico Investigador",
          "Dra. Laura Padovani | Dispositivo de Salud Cannábica (Dispensario de San Lorenzo / Hospital Regional de Mina Clavero)",
          "Alejandro Alvarez | Presidente Asociación Civil Colectivo Cannábico Traslasierra | FACC",
          "Karina Romanelli | Asociación Civil Cultivo Mi Medicina | Consejo Consultivo Honorario del Programa de Cannabis Medicinal (REPROCANN)",
          "Jorge Capriotti | Médico neurólogo - Universidad Nacional de Rosario | Docente Clínica Médica y tutor de residencia en la carrera de posgrado Neurología (UNR) | Consultorio de cannabis del Hospital Centenario de Rosario"
          
        ],
        "moderators": [
          "Natalia Castro | Asociación Civil Colectivo Cannábico Traslasierra | Secretaria de Comunicación Federación Argentina de Cannabis y Cáñamo (FACC)",
          "Carina Villarreal | Doingcanna | Secretaria de Salud FACC"
        ],
        "location": "Canal de YouTube @semanadelcannabis",
        "type": "Virtual",
        "image": "legalImage"
      }
    ]
  },

  {
    "date": "2025-11-12",
    "dayName": "Miércoles 12",
    "theme": "Desafíos Emprendedores e Industriales en el Sector Cannábico",
    image: legalImage,
    "activities": [
      {
        "time": "15:00 - 16:30",
        "title": "Desafíos y Fracasos",
        "description": "Experiencias emprendedoras ante la inestabilidad normativa de ARICCAME e INASE",
        "speakers": [
          "Eric Turiansky | Agrónomo agroecólogo | Miembro fundador del Grupo de Estudio y Trabajo en Cannabis de la Facultad de Agronomía (UBA) | Colaborador técnico en Genética La Maga | Especialista en cultivo sustentable y producción orgánica de Cannabis sativa para usos medicinales e industriales",
          "Virginia Romaldi | Activista del cannabis | Vocera de Mujeres y Cannabis en Argentina | Ponente en ferias y charlas sobre cultivo y derechos del cannabis en Argentina",
          "Candela Grossi | Activista del cannabis medicinal | Presidenta de Asociación Cultivo en Familia La Plata | Emprendedora de cosméticos con cannabis para uso terapéutico"
        ],
        "moderators": [
          "Nicolás Costamagna | Asociación Civil Cogollos Córdoba | Secretaria de   Producción FACC" 
        ],
        "location": "Canal de YouTube @semanadelcannabis",
        "type": "Virtual",
        "image": "legalImage"
      },
      {
        "time": "19:00 - 20:30",
        "title": "Cannabis industrial",
        "description": "La necesidad de adaptarse y sostenerse frente a un contexto regulatorio y económico incierto",
        "speakers": [
          "Rolando Garcia Bernado | Doctor en Desarrollo Económico de la Universidad de Buenos Aires | Especialista en Agricultura, alimentación, cannabis, tecnologías e innovación",
          "Diana Barreneche   |Abogada ambientalista, especialista y consultora en desarrollo con Cáñamo | Fundadora de Asociación Civil Proyecto Cañamo y de  la red federal de Abogacía Cannabica- ARFAC| FACC |",
          "Gustavo Álvarez | Proyecto Socio-ambiental Oasis Cannábico de Traslasierra | Ex director del Programa Cáñamo del Ministerio de Bioagroindustrial de la Pcia. de Córdoba",
          "Mike Bifari | Activista |  Cultivador e investigador de la planta de cannabis para todos sus usos | Colaborador del Museo del Cannabis (EEUU)"
        ],
        "moderators": [
          "Eric Turiansky | Agrónomo agroecólogo ",
          "Nicolás Costamagna | Asociación Civil Cogollos Córdoba | Secretaria de Producción FACC",
        ],
        "location": "Canal de YouTube @semanadelcannabis",
        "type": "Virtual",
        "image": "legalImage"
      }
    ]
  },
   {
    "date": "2025-11-13",
    "dayName": "Jueves 13",
    "theme": "Cannabis, Cultura y Uso Responsable: Educación para la Convivencia",
    "image": legalImage,
    "activities": [
      {
        "time": "11:00 - 12:30",
        "title": "Del estigma a la responsabilidad",
        "description": "Uso adulto y regulación humanizada",
        "speakers": [
          "Mariela Hernández | Periodista | Presidenta de la fundación Latinoamérica Reforma",
          "Verónica Russo | Activista feminista antoprohibicionista | Miembro de la mesa de coordinación de RADAUD  y de la secretaría regional de LANPUD | Experta en reducción de daños, DDHH y VIH",
          "Martin Acuña | Asociación Civil MACU (Río Gallegos)"
        ],
        "moderators": [
          "Facundo De Luca | Asociación Cannabicultora del Sur (ACS) | FACC"
        ],
        "location": "Canal de YouTube @semanadelcannabis",
        "type": "Virtual",
        "image": "legalImage"
      },
      {
        "time": "19:00 - 21:00",
        "title": "Obra de teatro Nogoyá",
        "description": `
¡La obra de teatro "NOGOYÁ"! 
"Mientras no haya justicia el fuego seguirá quemando..." 

📆 Jueves 13/11 
•	Preludio + instalación audiovisual: 19.00 horas 
•	Obra: de 20.00 a 21.00 horas 
🏠En el Espacio de la Memoria “El Infierno”, (Secretaria de Derechos Humanos de la Municipalidad de Avellaneda) 
•	Dirección: 12 de octubre 236 (Avellaneda) 
✔️ Entrada libre y gratuita (hasta 50 personas). Colaboración voluntaria. 

Las, les y los invitamos a participar de la presentación de la obra de teatro que trata sobre la masacre carcelaria más cruel de nuestra historia a realizarse en una antigua cárcel recuperada para la construcción de memoria _verdad y justicia.  NOGOYA, obra del Teatro Carnero se presentará en el Espacio de la Memoria El Infierno. 

✔️ Acerca del Espacio Municipal de la Memoria El Infierno 
En este edificio funcionó la Brigada de Lanús de la Policía Bonaerense y entre 1976 y 1978 un centro clandestino de detención, tortura y exterminio conocido como El Infierno, por el que pasaron al menos 604 personas desaparecidas. 
Funcionó como dependencia policial hasta el año 2016. 
Hoy es un espacio para la memoria, en el que funciona la Secretaria de Derechos Humanos de la Municipalidad de Avellaneda, con actividades abiertas a toda la comunidad. 

✔️ Acerca de la obra Nogoyá 
Se trata de una obra de teatro del grupo Teatro Carnero (Devoto, CABA), con dramaturgia y dirección de Sebastián Moreno,  basada en el libro "Masacre del Pabellón VII".  de la abogada Claudia Cesaroni que narra lo ocurrido el 14 de marzo de 1978 en la Cárcel de Devoto,  en plena dictadura militar, en la que fueron asfixiados, quemados, torturados, baleados 65 presos denominados comunes. 

✔️ Acerca de la Masacre del Pabellón VII 
En tiempos de dictadura, en las cárceles legales también se aplicaron métodos terroristas extremos para disciplinar a la población carcelaria.  La Masacre del Pabellón VII, en la cárcel de Villa Devoto, se produjo en ese contexto, cuando una requisa se transformó en un infierno. La versión oficial dio a conocer los cruentos hechos como el “motín de los colchones”, acusando a los propios presos, pero años después los sobrevivientes y quienes apoyaron su causa, lucharon por la verdad, para que se supiera que fue una masacre y que fue una violación a los derechos humanos y por lo tanto un crimen de lesa humanidad imprescriptible. 
Hace un año inició el juicio por el cual se están juzgando estos hechos.  El próximo 10 de diciembre, esperamos que la Justicia se expida luego de los alegatos que fueron realmente contundentes.  Exigimos Justicia para los sobrevivientes y sus familias, así como para las familias de las 65 víctimas de esta masacre. 

✔️ El prohibicionismo mata 
En el año 1974, la Ley 20.771 penalizó la tenencia de estupefacientes  para uso personal, lo que generó en un contexto represivo y autoritario, que las cárceles se llenaran de infractores de la ley, usuarios de sustancias como la Marihuana. Aquel fatídico día en el Pabellón VII había presos como Luis María Canosa, Ariel Omar Colavini y Armando Luis Ambrosio, que estaban presos por portar unos pocos gramos de marihuana. Es por esto que para la comunidad cannábica esta masacre nos recuerda a los extremos a los que puede llegar un sistema punitivista y prohibicionista que nos persigue y nos criminaliza.  Nuestra lucha es una lucha por los Derechos Humanos, por nuestras libertades y por los derechos de las personas privadas de su libertad. Por eso nuestra comunidad se suma al grito por la memoria, verdad y justicia: 
 _Masacre del Pabellón VII NUNCA MÁS
Luis María Canosa, Ariel Colavini, Armando Ambrosio y las 65 víctimas de la masacre PRESENTE, AHORA Y SIEMPRE_
        `,
        speakers: [],
        "moderators": [],
        "location": "El Infierno, Secretaría de DDHH Avellaneda",
        "type": "Presencial",
        "image": "legalImage"
      }
    ]
  },
  {
    "date": "2025-11-15",
    "dayName": "Viernes 15",
    "theme": "Incidencia Política: El Cannabis en la Agenda Pública",
    "image": legalImage,
    "activities": [
      {
        "time": "15:00 - 16:45",
        "title": "Reforma Penal y Persecución al Usuario de Cannabis",
        "description": "¿Un Paradigma que Cambia o Persiste?",
        "speakers": [
          "Fausto Berjolis | Abogado penalista | Ex Defensor Público | Coadyuvante del fuero federal de CABA | Autoridad en ARFAC | Miembro de RACME",
          "Joe Stefanolo | Abogado penalista | Referente en derecho y política de drogas | Impulsor del fallo Bazterrica sobre tenencia para consumo personal | Especialista en legislación del cannabis en Argentina",
          "Lila Torre | Secretaria e investigadora de la Cátedra Libre Patrimonio Cultural Inmaterial: memorias y colectivos sociales - Universidad Nacional de La Plata | Investiga sobre comunidad cannábica organizada y derechos culturales en Argentina
",
          "Stella Nuñez | Asociación Tricomas del Sur"
        ],
        "moderators": [
          "Tavo Depaoli | Acción Cannábica | Red Federal de Abogacía |  Secretaria legales Federación Argentina de Cannabis y Cáñamo (FACC)"
        ],
        "location": "Auditorio Anexo Cámara de Diputados",
        "type": "Presencial",
        "image": "legalImage"
      },
      {
        "time": "17:00 - 19:45",
        "title": "Ley 23.737 y su impacto",
        "description": "Derechos vulnerados y caminos a la Reforma",
        "speakers": [
          "Florencia Corbelle | Activista | Programa de Antropología Política y Jurídica, Instituto de Ciencias Antropológicas, UBA/CONICET",
          "Federico Sinagra | Asociación Cultivando Derecho",
          "Facundo De Luca | Activista | Asociación Cannabicultora del Sur (ACS) | FACC",
          "Nermi Zappia | Activista |Jardín del Unicornio"
        ],
        "moderators": [
          "Daniela Rodriguez | Activista | Asociacion Acción Cannábica | FACC"
        ],
        "location": "Auditorio Anexo Cámara de Diputados",
        "type": "Presencial",
        "image": "legalImage"
      },
      {
        "time": "19:45 - 20:15",
        "title": "Conclusión y cierre de la semana Cannabis",
        "description": "Cierre: Lectura de declaración de La Semana del Cannabis",
        "speakers": [],
        "moderators": [],
        "location": "Auditorio Anexo Cámara de Diputados",
        "type": "Presencial",
        "image": "legalImage"
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
        description: `
✨ Streaming en Vivo
🎧 DJs en escena
💃 Performances increíbles
🌿 Stands informativos y buena vibra
🎉 ¡Todo en un mismo lugar!
`,
        speakers: [
          "Organizaciones cannábicas y organizaciones sociales afines",
          "Toda persona que utiliza y/o respeta el cannabis"],
        moderators: [],
        location: "Plaza de Mayo, Ciudad Autónoma de Buenos Aires",
        type: "Presencial"
      },
      {
        time: "18:00",
        title: "15ª Marcha Nacional de la Marihuana",
        description: "Recorrido por Buenos Aires",
        speakers: ["Toda la comunidad"],
        moderators: [],
        location: "Desde Plaza hasta Congreso",
        type: "Presencial"
      }
    ]
  }
];




export default function ActivitySchedule() {
  const [selectedDay, setSelectedDay] = useState(0);

  const handleRegisterActivity = (activity: string) => {
    //alert(`Registro para actividad: ${activity}`);
    const url = window.location.origin + '#registrar';
    window.open(url, '_blank');
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
                    <span>{new Date(scheduleData[selectedDay].date + "T00:00:00").toLocaleDateString('es-AR')}</span>
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
                      <pre  className="font-semibold mb-3 whitespace-pre-wrap">
                        {activity.description}
                      </pre>

                      <div className="flex flex-col gap-1 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {activity.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {activity.type}
                        </div>
                      </div>
                      {activity.speakers && activity.speakers.length > 0 && (
                      <div className="mb-4">
                        <Badge className="">Participan:</Badge>
                        <ul className="list-disc pl-5 space-y-1">
                          {activity.speakers.map((speaker, speakerIndex) => (
                            <li>{speaker}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                      {
                        activity.moderators && activity.moderators.length > 0 && (
                          <div className="mb-4">
                            <Badge className="">{activity.moderators.length == 1 ? "Modera:" : "Moderan:"}</Badge>
                            <ul className="list-disc pl-5 space-y-1">
                              {activity.moderators.map((moderator, speakerIndex) => (
                                <li key={speakerIndex}>{moderator}</li>
                              ))}
                            </ul>
                          </div>
                        )


                      }
                    </div>

                    <div className="flex-shrink-0">
                      <Button
                        variant="outline"
                        data-testid={`register-activity-${index}`}
                      >
                        <Link href="/registro" onClick={() => window.scrollTo(0, 0)}>
                          Registrarse
                        </Link>
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


