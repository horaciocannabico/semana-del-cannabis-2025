import SpeakerCard from '../SpeakerCard';

export default function SpeakerCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <SpeakerCard
        name="Dra. María González"
        role="Investigadora Principal"
        organization="Instituto Nacional de Cannabis Medicinal"
        bio="Especialista en neurología con 15 años de experiencia en investigación de cannabinoides. Ha publicado más de 50 artículos sobre el uso terapéutico del cannabis."
        expertise={["Cannabis Medicinal", "Neurología", "Investigación Clínica"]}
      />
      <SpeakerCard
        name="Lic. Carlos Ruiz"
        role="Abogado Constitucionalista"
        organization="Fundación por los Derechos Cannábicos"
        bio="Especialista en derechos humanos y reforma de políticas de drogas. Ha litigado casos emblemáticos ante la Corte Suprema de Justicia."
        expertise={["Derecho Constitucional", "Políticas Públicas", "Derechos Humanos"]}
      />
      <SpeakerCard
        name="Ing. Ana Pérez"
        role="Directora de Desarrollo"
        organization="CañamoTech Argentina"
        bio="Ingeniera agrónoma especializada en cultivo de cáñamo industrial. Pionera en el desarrollo de productos sustentables a base de hemp."
        expertise={["Cáñamo Industrial", "Sustentabilidad", "Agronomía"]}
      />
    </div>
  );
}