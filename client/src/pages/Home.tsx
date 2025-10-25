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
      
 
      <ActivitySchedule />
      <RegistrationForm />
    </main>
  );
}