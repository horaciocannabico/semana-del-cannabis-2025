import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const activitiesOptions = [
  "Conferencia de Prensa de Lanzamiento",
  "Panel: La Ley 23.737 en el Siglo XXI",
  "Taller: Conocé tus Derechos",
  "Jornada de Actualización Médica",
  "Roles ante Reprocann",
  "Taller: Autocultivo Medicinal",
  "Foro Empresarial: Cáñamo Industrial",
  "Feria de Emprendedores",
  "Cannabis en la Gastronomía",
  "Ciclo de Cine/Documentales",
  "Uso Adulto Responsable",
  "Muestra de Arte",
  "Foro Legislativo",
  "Taller de Activismo",
  "Preparación para la Marcha",
  "15ª Marcha Nacional"
];

export default function RegistrationForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profession: "",
    organization: "",
    interests: "",
    selectedActivities: [] as string[],
    attendanceType: "",
    agreedToTerms: false,
    newsletter: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    
    if (!formData.agreedToTerms) {
      toast({
        title: "Error",
        description: "Debes aceptar los términos y condiciones",
        variant: "destructive"
      });
      return;
    }

    // Mock registration
    toast({
      title: "¡Registro exitoso!",
      description: "Te has registrado correctamente para la Semana del Cannabis 2025. Recibirás un email de confirmación.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      profession: "",
      organization: "",
      interests: "",
      selectedActivities: [],
      attendanceType: "",
      agreedToTerms: false,
      newsletter: false
    });
  };

  const handleActivityToggle = (activity: string) => {
    setFormData(prev => ({
      ...prev,
      selectedActivities: prev.selectedActivities.includes(activity)
        ? prev.selectedActivities.filter(a => a !== activity)
        : [...prev.selectedActivities, activity]
    }));
  };

  return (
    <section id="registro" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-display font-bold text-4xl text-foreground mb-4">
              Registro
            </h2>
            <p className="text-lg text-muted-foreground">
              Regístrate para participar en las actividades de la Semana del Cannabis 2025
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Formulario de Registro
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Nombre *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                      required
                      data-testid="input-first-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Apellido *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                      required
                      data-testid="input-last-name"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    data-testid="input-phone"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="profession">Profesión</Label>
                    <Input
                      id="profession"
                      value={formData.profession}
                      onChange={(e) => setFormData(prev => ({ ...prev, profession: e.target.value }))}
                      data-testid="input-profession"
                    />
                  </div>
                  <div>
                    <Label htmlFor="organization">Organización</Label>
                    <Input
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => setFormData(prev => ({ ...prev, organization: e.target.value }))}
                      data-testid="input-organization"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="attendanceType">Modalidad de Asistencia *</Label>
                  <Select 
                    value={formData.attendanceType}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, attendanceType: value }))}
                  >
                    <SelectTrigger data-testid="select-attendance">
                      <SelectValue placeholder="Selecciona tu modalidad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="presencial">Presencial</SelectItem>
                      <SelectItem value="virtual">Virtual</SelectItem>
                      <SelectItem value="hibrido">Híbrido</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="interests">Intereses/Motivación</Label>
                  <Textarea
                    id="interests"
                    placeholder="Cuéntanos qué te interesa más de la Semana del Cannabis..."
                    value={formData.interests}
                    onChange={(e) => setFormData(prev => ({ ...prev, interests: e.target.value }))}
                    data-testid="textarea-interests"
                  />
                </div>

                {/* Activity Selection */}
                <div>
                  <Label className="text-base font-semibold">Actividades de Interés</Label>
                  <p className="text-sm text-muted-foreground mb-3">
                    Selecciona las actividades a las que te gustaría asistir:
                  </p>
                  <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto">
                    {activitiesOptions.map((activity) => (
                      <div key={activity} className="flex items-center space-x-2">
                        <Checkbox
                          id={activity}
                          checked={formData.selectedActivities.includes(activity)}
                          onCheckedChange={() => handleActivityToggle(activity)}
                          data-testid={`checkbox-${activity}`}
                        />
                        <Label 
                          htmlFor={activity} 
                          className="text-sm cursor-pointer"
                        >
                          {activity}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Terms and Newsletter */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreedToTerms}
                      onCheckedChange={(checked) => 
                        setFormData(prev => ({ ...prev, agreedToTerms: !!checked }))
                      }
                      data-testid="checkbox-terms"
                    />
                    <Label htmlFor="terms" className="text-sm">
                      Acepto los términos y condiciones y la política de privacidad *
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => 
                        setFormData(prev => ({ ...prev, newsletter: !!checked }))
                      }
                      data-testid="checkbox-newsletter"
                    />
                    <Label htmlFor="newsletter" className="text-sm">
                      Quiero recibir noticias y actualizaciones sobre cannabis y eventos futuros
                    </Label>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  data-testid="button-submit-registration"
                >
                  Confirmar Registro
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}