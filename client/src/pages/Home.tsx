import Hero from "@/components/Hero";
import ActivitySchedule from "@/components/ActivitySchedule";
import SpeakerCard from "@/components/SpeakerCard";
import RegistrationForm from "@/components/RegistrationForm";

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
  return (
    <main>
      <Hero />
      
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl text-foreground mb-4">
              Exponentes Destacados
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Conoce a algunos de los especialistas que participarán en la Semana del Cannabis 2025
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredSpeakers.map((speaker, index) => (
              <SpeakerCard key={index} {...speaker} />
            ))}
          </div>
        </div>
      </section>

      <ActivitySchedule />
      <RegistrationForm />
    </main>
  );
}