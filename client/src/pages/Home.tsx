import Hero from "@/components/Hero";
import ActivitySchedule from "@/components/ActivitySchedule";
import SpeakerCard from "@/components/SpeakerCard";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import { Link } from "wouter";


// todo: remove mock functionality
const featuredSpeakers = [
  {
    name: "Dra. María González",
    role: "Investigadora Principal",
    organization: "Instituto Nacional de Cannabis Medicinal",
    bio: "Especialista en neurología con 15 años de experiencia en investigación de cannabinoides. Ha publicado más de 50 artículos sobre el uso terapéutico del cannabis.",
    expertise: ["Cannabis Medicinal", "Neurología", "Investigación Clínica"]
  },
  {
    name: "Lic. Carlos Ruiz",
    role: "Abogado Constitucionalista",
    organization: "Fundación por los Derechos Cannábicos",
    bio: "Especialista en derechos humanos y reforma de políticas de drogas. Ha litigado casos emblemáticos ante la Corte Suprema de Justicia.",
    expertise: ["Derecho Constitucional", "Políticas Públicas", "Derechos Humanos"]
  },
  {
    name: "Ing. Ana Pérez",
    role: "Directora de Desarrollo",
    organization: "CañamoTech Argentina",
    bio: "Ingeniera agrónoma especializada en cultivo de cáñamo industrial. Pionera en el desarrollo de productos sustentables a base de hemp.",
    expertise: ["Cáñamo Industrial", "Sustentabilidad", "Agronomía"]
  }
];

export default function Home() {
  const handleRegister = () => {
    
  };

  const handleViewSchedule = () => {
    console.log("Ver cronograma triggered");
    document.getElementById("actividades")?.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <main>
      <Hero />
      <div className="container mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center mt-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-black/90">
              <Calendar className="w-5 h-5" />
              {/* Texto fecha */}
            </div>
            <div className="flex items-center gap-2 text-black/90">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Buenos Aires, Argentina</span>
            </div>
            <div className="flex items-center gap-2 text-black/90">
              <Users className="w-5 h-5" />
              <span className="font-medium">Presencial y Virtual</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-black/10  font-semibold px-8"
              data-testid="button-register-hero">
              <Link href="/registro">
              Registrarse Ahora
              </Link>

            </Button>
            <Button
              size="lg"

              className="bg-white text-primary hover:bg-black/10  font-semibold px-8"
              data-testid="button-schedule-hero"
            >
              <Link href="/actividades">
              Ver Cronograma
              </Link>
            </Button>
          </div>
        </div>
      </div>


    </main>
  );
}