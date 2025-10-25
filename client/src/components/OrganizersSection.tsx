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
        name: "Accion Cannabica",
        description: "No mas presos por cannabis",
        imagen: "ACCIONCannabica-LOGO2017-FondoTRANSPARENTE.png",
        focus: ["Cannabis", "Derechos", "Activismo"],
        contact: { email: "accioncannabica@gmail.com", website: "www.instagram.com/accannabica/" }
      },
      {
        name: "ACS",
        description: "Asociacion Canabicultura del sur",
        imagen: "logo_acs_2025.png",
        focus: ["Regulación", "Cultura", "Cultivo"],
        contact: { email: "contacto@cultivandoderechos.org", website: "cannabicultoradelsur.com.ar/" }
      },
      {
        name: "Doing Canna",
        imagen: "logodoing.png",
        description: "Docencia e Investigación Cannábica",
        focus: ["Docencia", "Investigacion"],
        contact: { email: "info@aac.org.ar", website: "www.instagram.com/doingcanna/" }
      },
      {
        name: "Colectivo Cannabico Traslasierra",
        imagen: "traslscolor.png",
        description: "Asociacion Civil",
        focus: ["Cultivo", "Activismo"],
        contact: { email: "info@aac.org.ar", website: "www.instagram.com/nodobuenosairescct/" }
      }
    ]
  },
  {
    title: "Acompañan",
    icon: Users,
    organizations: [
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
                      {/* Imagen (si existe) */}
                      {org.imagen && (
                        <div className="flex justify-center mb-4">
                          <img
                            src={`/organizadores/${org.imagen}`}
                            alt={org.name}
                            className="max-h-48 object-contain"
                            onError={(e) => {
                              // Opcional: ocultar imagen si falla la carga
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        </div>
                      )}


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

      </div>
    </section>
  );
}