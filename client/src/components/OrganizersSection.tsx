import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Mail, Phone, Users, Building } from "lucide-react";

// todo: remove mock functionality
const organizerCategories = [
  {
    title: "Organizaciones Cannábicas",
    icon: Users,
    organizations: [
      {
        name: "MAMECANN",
        description: "Madres en Lucha por el Cannabis Medicinal",
        focus: ["Cannabis Medicinal", "Derechos de Pacientes"],
        contact: { email: "info@mamecann.org", website: "www.mamecann.org" }
      },
      {
        name: "Cultivando Derechos",
        description: "Asociación por la regulación del cannabis",
        focus: ["Regulación", "Derechos Humanos", "Activismo"],
        contact: { email: "contacto@cultivandoderechos.org", website: "www.cultivandoderechos.org" }
      },
      {
        name: "Asociación Argentina de Cannabis",
        description: "Promoción del uso responsable y la regulación",
        focus: ["Uso Adulto", "Educación", "Política Pública"],
        contact: { email: "info@aac.org.ar", website: "www.aac.org.ar" }
      }
    ]
  },
  {
    title: "Organizaciones de la Sociedad Civil",
    icon: Building,
    organizations: [
      {
        name: "Centro de Estudios Legales y Sociales (CELS)",
        description: "Derechos humanos y políticas públicas",
        focus: ["Derechos Humanos", "Reforma Judicial"],
        contact: { email: "info@cels.org.ar", website: "www.cels.org.ar" }
      },
      {
        name: "Intercambios Asociación Civil",
        description: "Reducción de daños y políticas de drogas",
        focus: ["Reducción de Daños", "Salud Pública"],
        contact: { email: "info@intercambios.org.ar", website: "www.intercambios.org.ar" }
      },
      {
        name: "Fundación Huésped",
        description: "Salud pública y derechos humanos",
        focus: ["Salud Pública", "VIH", "Derechos"],
        contact: { email: "info@huesped.org.ar", website: "www.huesped.org.ar" }
      }
    ]
  },
  {
    title: "Instituciones Académicas",
    icon: Building,
    organizations: [
      {
        name: "Universidad de Buenos Aires - Facultad de Medicina",
        description: "Investigación en cannabis medicinal",
        focus: ["Investigación", "Cannabis Medicinal", "Farmacología"],
        contact: { email: "cannabis@medicina.uba.ar", website: "www.medicina.uba.ar" }
      },
      {
        name: "CONICET",
        description: "Consejo Nacional de Investigaciones Científicas",
        focus: ["Investigación Científica", "Cannabis Terapéutico"],
        contact: { email: "cannabis@conicet.gov.ar", website: "www.conicet.gov.ar" }
      },
      {
        name: "Universidad Nacional de La Plata",
        description: "Estudios sobre políticas de drogas",
        focus: ["Política Pública", "Sociología", "Criminología"],
        contact: { email: "drogas@unlp.edu.ar", website: "www.unlp.edu.ar" }
      }
    ]
  },
  {
    title: "Empresas y Emprendimientos",
    icon: Building,
    organizations: [
      {
        name: "CannabisArg",
        description: "Plataforma de información y productos",
        focus: ["Información", "Productos", "Mercado"],
        contact: { email: "info@cannabisarg.com", website: "www.cannabisarg.com" }
      },
      {
        name: "Hemporium",
        description: "Productos de cáñamo industrial",
        focus: ["Cáñamo Industrial", "Productos Sustentables"],
        contact: { email: "info@hemporium.com.ar", website: "www.hemporium.com.ar" }
      },
      {
        name: "Green Lab",
        description: "Laboratorio de investigación y desarrollo",
        focus: ["I+D", "Cannabis Medicinal", "Calidad"],
        contact: { email: "lab@greenlab.com.ar", website: "www.greenlab.com.ar" }
      }
    ]
  }
];

export default function OrganizersSection() {
  const handleContact = (type: 'email' | 'website', value: string) => {
    if (type === 'email') {
      window.location.href = `mailto:${value}`;
    } else {
      window.open(`https://${value}`, '_blank');
    }
    console.log(`Contactar via ${type}: ${value}`);
  };

  return (
    <section id="organizadores" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl text-foreground mb-4">
            Organizadores
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            La Semana del Cannabis 2025 es posible gracias al trabajo conjunto de organizaciones,
            instituciones académicas, empresas y la sociedad civil comprometida con la regulación justa.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {organizerCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-primary" />
                <h3 className="font-display font-bold text-2xl text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.organizations.map((org, orgIndex) => (
                  <Card key={orgIndex} className="hover-elevate">
                    <CardHeader>
                      <CardTitle className="text-lg" data-testid={`org-name-${categoryIndex}-${orgIndex}`}>
                        {org.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 text-sm" data-testid={`org-desc-${categoryIndex}-${orgIndex}`}>
                        {org.description}
                      </p>
                      
                      <div className="mb-4">
                        <p className="text-sm font-medium text-foreground mb-2">Áreas de enfoque:</p>
                        <div className="flex flex-wrap gap-1">
                          {org.focus.map((focus, focusIndex) => (
                            <Badge key={focusIndex} variant="secondary" className="text-xs">
                              {focus}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {org.contact.email && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start p-2 h-auto"
                            onClick={() => handleContact('email', org.contact.email!)}
                            data-testid={`contact-email-${categoryIndex}-${orgIndex}`}
                          >
                            <Mail className="w-3 h-3 mr-2 flex-shrink-0" />
                            <span className="truncate text-xs">{org.contact.email}</span>
                          </Button>
                        )}
                        
                        {org.contact.website && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-full justify-start p-2 h-auto"
                            onClick={() => handleContact('website', org.contact.website!)}
                            data-testid={`contact-website-${categoryIndex}-${orgIndex}`}
                          >
                            <Globe className="w-3 h-3 mr-2 flex-shrink-0" />
                            <span className="truncate text-xs">{org.contact.website}</span>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="max-w-2xl mx-auto mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                ¿Quieres formar parte de la organización?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Si tu organización está interesada en participar en futuras ediciones 
                de la Semana del Cannabis, nos encantaría conocerte.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  onClick={() => handleContact('email', 'organizacion@semanalcannabis.org')}
                  data-testid="button-join-organizers"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contactar Organización
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => handleContact('website', 'www.semanalcannabis.org')}
                  data-testid="button-visit-website"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Visitar Sitio Web
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}