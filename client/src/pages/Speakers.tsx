import SpeakerCard from "@/components/SpeakerCard";

// todo: remove mock functionality
const allSpeakers = [
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
  },
  {
    name: "Dr. Roberto Martínez",
    role: "Neurólogo Especialista",
    organization: "Hospital Italiano de Buenos Aires",
    bio: "Pionero en el uso de cannabis medicinal para epilepsia refractaria. Director del programa de cannabis medicinal del hospital.",
    expertise: ["Epilepsia", "Cannabis Medicinal", "Neurología Pediátrica"]
  },
  {
    name: "Lic. Patricia Fernández",
    role: "Psicóloga Clínica",
    organization: "Centro de Estudios en Adicciones",
    bio: "Especialista en reducción de daños y políticas de drogas. Autora de múltiples publicaciones sobre uso problemático de sustancias.",
    expertise: ["Reducción de Daños", "Psicología Clínica", "Adicciones"]
  },
  {
    name: "Dr. Miguel Santos",
    role: "Abogado Penal",
    organization: "Defensoría Pública",
    bio: "Defensor público especializado en casos de drogas. Ha defendido más de 200 casos relacionados con cannabis.",
    expertise: ["Derecho Penal", "Defensa Criminal", "Políticas de Drogas"]
  },
  {
    name: "Ing. Laura Vega",
    role: "Bióloga Molecular",
    organization: "CONICET",
    bio: "Investigadora del CONICET especializada en fitoquímica de cannabis. Líder en investigación de cannabinoides menores.",
    expertise: ["Biología Molecular", "Fitoquímica", "Investigación"]
  },
  {
    name: "Lic. José Morales",
    role: "Activista y Educador",
    organization: "Cultivando Derechos",
    bio: "Activista cannábico con 20 años de trayectoria. Fundador de múltiples organizaciones de usuarios de cannabis.",
    expertise: ["Activismo", "Educación", "Organización Social"]
  },
  {
    name: "Dra. Carmen López",
    role: "Oncóloga",
    organization: "Instituto Alexander Fleming",
    bio: "Especialista en oncología que investiga los efectos del cannabis en el tratamiento del cáncer y cuidados paliativos.",
    expertise: ["Oncología", "Cuidados Paliativos", "Cannabis Medicinal"]
  }
];

export default function Speakers() {
  return (
    <main className="pt-16">
      <div className="bg-primary/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Exponentes
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conoce a los especialistas, investigadores, activistas y profesionales 
            que compartirán sus conocimientos y experiencias durante la Semana del Cannabis 2025.
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {allSpeakers.map((speaker, index) => (
              <SpeakerCard key={index} {...speaker} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}