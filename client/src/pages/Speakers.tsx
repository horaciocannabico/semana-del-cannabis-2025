import SpeakerCard from "@/components/SpeakerCard";

// todo: remove mock functionality
const allSpeakers = [
  {
    "name": "Ricardo Eugenio Molinario",
    "role": "Exponente",
    "organization": "Asociación Civil Tricomas del Sur",
    "bio": "Activista y referente en derechos humanos y cannabis.",
    "expertise": ["Cannabis y Derechos Humanos", "Justicia Social", "Políticas Públicas"]
  },
  {
    "name": "Stella Maris Nuñez",
    "role": "Exponente",
    "organization": "Asociación Civil Tricomas del Sur",
    "bio": "Trabaja en la intersección entre cannabis, derechos humanos y acceso comunitario.",
    "expertise": ["Cannabis y Derechos Humanos", "Acceso Comunitario", "Legislación Cannábica"]
  },
  {
    "name": "Florencia Corbelle",
    "role": "Exponente",
    "organization": "Programa de Antropología Política y Jurídica, Instituto de Ciencias Antropológicas, UBA/CONICET",
    "bio": "Antropóloga especializada en políticas de drogas y derechos humanos.",
    "expertise": ["Antropología Jurídica", "Políticas de Drogas", "Reforma Legal"]
  },
  {
    "name": "Claudio Yacoy",
    "role": "Exponente",
    "organization": "Secretaría DDHH Partido de Avellaneda",
    "bio": "Funcionario público comprometido con los derechos humanos y la regulación del cannabis.",
    "expertise": ["Derechos Humanos", "Acceso al Cannabis", "Políticas Municipales"]
  },
  {
    "name": "Gustavo Depaoli",
    "role": "Exponente",
    "organization": "Asociación Civil Acción Cannábica, Red Federal de Abogacía Cannábica (ARFAC) | Secretaría Legales FACC",
    "bio": "Abogado especializado en legislación cannábica y defensa de derechos.",
    "expertise": ["Derecho Cannábico", "Reforma Legal", "Acceso Terapéutico"]
  },
  {
    "name": "Federico Ruecco",
    "role": "Modera",
    "organization": "Asociación Cannabicultora del Sur (ACS) | FACC",
    "bio": "Líder comunitario en el movimiento cannábico argentino.",
    "expertise": ["Cultivo Comunitario", "Modelos Asociativos", "Regulación Local"]
  },
  {
    "name": "Nermi Zappia",
    "role": "Exponente",
    "organization": "Jardín del Unicornio",
    "bio": "Activista y cultivadora comprometida con el acceso comunitario al cannabis.",
    "expertise": ["Cultivo Colectivo", "Acceso Terapéutico", "Modelos Asociativos"]
  },
  {
    "name": "Julian Pere",
    "role": "Exponente",
    "organization": "Jardín del Unicornio",
    "bio": "Miembro de colectivo cannábico enfocado en el cultivo asociativo.",
    "expertise": ["Cultivo Colectivo", "Acceso Comunitario", "Activismo Cannábico"]
  },
  {
    "name": "Juan Palomino",
    "role": "Exponente",
    "organization": "Cultivando Derecho",
    "bio": "Trabaja en la articulación entre derecho, justicia y acceso al cannabis.",
    "expertise": ["Derecho y Cannabis", "Acceso Terapéutico", "Políticas Públicas"]
  },
  {
    "name": "Federico Sinagra",
    "role": "Exponente",
    "organization": "Cultivando Derecho",
    "bio": "Activista legal en la promoción de derechos relacionados con el cannabis.",
    "expertise": ["Acceso Legal", "Derechos Humanos", "Cultivo Responsable"]
  },
  {
    "name": "Facundo De Luca",
    "role": "Exponente",
    "organization": "Asociación Cannabicultora del Sur | FACC",
    "bio": "Referente en modelos asociativos y políticas de regulación cannábica.",
    "expertise": ["Modelos Asociativos", "Regulación", "Derechos Humanos"]
  },
  {
    "name": "Daniel Pina",
    "role": "Exponente",
    "organization": "Derechos Humanos, Cannabis y Salud Comunitaria",
    "bio": "Médico especializado en la intersección entre salud comunitaria y derechos humanos.",
    "expertise": ["Salud Comunitaria", "Derechos Humanos", "Cannabis Medicinal"]
  },
  {
    "name": "Carlos Magdalena",
    "role": "Exponente",
    "organization": "Clase Magistral Trastorno del Stress Postraumático",
    "bio": "Especialista en estrés postraumático y uso terapéutico del cannabis.",
    "expertise": ["Trastorno de Estrés Postraumático", "Cannabis Medicinal", "Salud Mental"]
  },
  {
    "name": "Emilio García",
    "role": "Modera",
    "organization": "Doingcanna | Secretario de Salud FACC | Director Científico Cannamerica",
    "bio": "Médico investigador y referente en salud cannábica en Argentina.",
    "expertise": ["Cannabis Medicinal", "Salud Pública", "Investigación Clínica"]
  },
  {
    "name": "Agustin Pabón Maciel",
    "role": "Exponente",
    "organization": "Programa Cannabis - UNSL, AUPAC y FACC",
    "bio": "Docente universitario en formación técnica de cultivo cannábico.",
    "expertise": ["Formación Técnica", "Cultivo de Cannabis", "Extensión Universitaria"]
  },
  {
    "name": "Diana Barreneche",
    "role": "Exponente",
    "organization": "Programa Cannabis - UNSL, AUPAC y Proyecto Cáñamo",
    "bio": "Especialista en dimensiones jurídicas, sociales y ambientales del cannabis.",
    "expertise": ["Jurídico-Social", "Desarrollo Regional", "Cannabis y Ambiente"]
  },
  {
    "name": "Laura Scuteri",
    "role": "Exponente",
    "organization": "UTN Avellaneda, Asociación Cannabicultora del Sur (ACS) y Secretaría de Derechos Humanos de la municipalidad de Avellaneda",
    "bio": "Docente en diplomatura sobre Cannabis y Derechos Humanos.",
    "expertise": ["Derechos Humanos", "Educación Cannábica", "Formación Universitaria"]
  },
  {
    "name": "Sabrina Pimpinella",
    "role": "Exponente",
    "organization": "UNR, Asociación civil AUPAC",
    "bio": "Docente en posgrado sobre abordaje integral del cannabis para la salud.",
    "expertise": ["Abordaje Integral", "Salud", "Cannabis Terapéutico"]
  },
  {
    "name": "Juan Ignacio Gutierrez Garbiero",
    "role": "Exponente",
    "organization": "Diplomatura Superior en Cannabis y sus usos medicinales (UNAJ) | Asociación Civil Ciencia Sativa (ACCS)",
    "bio": "Investigador y docente en usos medicinales del cannabis.",
    "expertise": ["Cannabis Medicinal", "Investigación Científica", "Educación Universitaria"]
  },
  {
    "name": "Karina Romanelli",
    "role": "Exponente",
    "organization": "Universidad Nacional del Sur | Asociación Civil Cultivo Mi Medicina",
    "bio": "Bióloga y docente en cannabis terapéutico con enfoque comunitario.",
    "expertise": ["Biotecnología", "Cannabis Terapéutico", "Educación Científica"]
  },
  {
    "name": "Soledad Pedrana",
    "role": "Modera",
    "organization": "Secretaría de Educación de la Federación Argentina de Cannabis y Cáñamo (FACC)",
    "bio": "Responsable de estrategias educativas en el movimiento cannábico nacional.",
    "expertise": ["Educación Cannábica", "Formación", "Políticas de Conocimiento"]
  },
  {
    "name": "Laura Padovani",
    "role": "Exponente",
    "organization": "Dispositivo de Salud Cannábica (Dispensario de San Lorenzo / Hospital Regional de Mina Clavero)",
    "bio": "Médica pionera en dispositivos de salud con enfoque cannábico.",
    "expertise": ["Salud Pública", "Acceso Terapéutico", "Cannabis Medicinal"]
  },
  {
    "name": "Alejandro Alvarez",
    "role": "Exponente",
    "organization": "Asociación Civil Colectivo Cannábico Traslasierra",
    "bio": "Líder comunitario en políticas de salud y cannabis en Traslasierra.",
    "expertise": ["Salud Comunitaria", "Acceso Local", "Activismo Regional"]
  },
  {
    "name": "Jorge Capriotti",
    "role": "Exponente",
    "organization": "Universidad Nacional de Rosario | Hospital Centenario de Rosario",
    "bio": "Neurólogo y referente en consultorios especializados en cannabis medicinal.",
    "expertise": ["Neurología", "Cannabis Medicinal", "Atención Clínica"]
  },
  {
    "name": "Carina Villarreal",
    "role": "Modera",
    "organization": "Doingcanna | Secretaria de Salud FACC",
    "bio": "Profesional en gestión de salud y políticas cannábicas.",
    "expertise": ["Salud Pública", "Gestión Institucional", "Políticas Cannábicas"]
  },
  {
    "name": "Natalia Castro",
    "role": "Modera",
    "organization": "Asociación Civil Colectivo Cannábico Traslasierra | Secretaría de Comunicación FACC",
    "bio": "Comunicadora y activista del movimiento cannábico argentino.",
    "expertise": ["Comunicación", "Activismo", "Políticas Públicas"]
  },
  {
    "name": "Eric Turiansky",
    "role": "Exponente",
    "organization": "Grupo de Estudio y Trabajo en Cannabis de la Facultad de Agronomía (UBA) | Genética La Maga",
    "bio": "Agrónomo agroecólogo especializado en cultivo orgánico de cannabis.",
    "expertise": ["Cultivo Orgánico", "Agroecología", "Producción Sustentable"]
  },
  {
    "name": "Virginia Romaldi",
    "role": "Exponente",
    "organization": "Mujeres y Cannabis en Argentina",
    "bio": "Activista feminista y referente en derechos del cannabis.",
    "expertise": ["Género y Cannabis", "Activismo", "Derechos Humanos"]
  },
  {
    "name": "Candela Grossi",
    "role": "Exponente",
    "organization": "Asociación Cultivo en Familia La Plata | Emprendedora de cosméticos con cannabis",
    "bio": "Emprendedora en productos terapéuticos derivados del cannabis.",
    "expertise": ["Cosmética Cannábica", "Emprendedurismo Social", "Cannabis Medicinal"]
  },
    {
    name: "Esteban Calabria",
    role: "Investigadora Principal",
    organization: "Docencia",
    bio: "Autor de la web con oracio",
    expertise: ["Inteligencia Artificial", "Tecnología", "Innovación"]
  },
  {
    "name": "Roxana Aguirre",
    "role": "Modera",
    "organization": "Ciencia Sativa | Presidenta de la Federación Argentina de Cannabis y Cáñamo (FACC)",
    "bio": "Líder nacional en la articulación del movimiento cannábico argentino.",
    "expertise": ["Política Cannábica", "Organización Social", "Gestión Federativa"]
  },
  {
    "name": "Rolando Garcia Bernardo",
    "role": "Exponente",
    "organization": "Universidad de Buenos Aires",
    "bio": "Economista especializado en desarrollo agrario y cannabis industrial.",
    "expertise": ["Desarrollo Económico", "Cannabis Industrial", "Políticas Agroindustriales"]
  },
  {
    "name": "Gabriela Calzolary",
    "role": "Exponente",
    "organization": "ONG Ciencia Sativa | INTA Alto Valle",
    "bio": "Bióloga e investigadora en producción sustentable de cannabis.",
    "expertise": ["Biología del Cannabis", "Producción Sustentable", "Investigación Aplicada"]
  },
  {
    "name": "Gustavo Álvarez",
    "role": "Exponente",
    "organization": "Proyecto Socio-ambiental Oasis Cannábico de Traslasierra | Ex director del Programa Cáñamo de Córdoba",
    "bio": "Experto en políticas públicas y desarrollo socioambiental con cáñamo.",
    "expertise": ["Cáñamo Industrial", "Desarrollo Regional", "Políticas Públicas"]
  },
  {
    "name": "Mike Bifari",
    "role": "Exponente",
    "organization": "Museo del Cannabis (EEUU)",
    "bio": "Activista e investigador internacional del uso integral del cannabis.",
    "expertise": ["Uso Integral del Cannabis", "Activismo Internacional", "Cultivo Responsable"]
  },
  {
    "name": "Nicolás Costamagna",
    "role": "Modera",
    "organization": "Asociación Civil Cogollos Córdoba",
    "bio": "Referente del movimiento cannábico en la provincia de Córdoba.",
    "expertise": ["Activismo Regional", "Cultivo Colectivo", "Políticas Locales"]
  },
  {
    "name": "Mariela Hernández",
    "role": "Exponente",
    "organization": "Fundación Latinoamérica Reforma",
    "bio": "Periodista y presidenta de organización dedicada a la reforma de políticas de drogas.",
    "expertise": ["Reforma de Políticas de Drogas", "Periodismo", "Regulación Humanizada"]
  },
  {
    "name": "Verónica Russo",
    "role": "Exponente",
    "organization": "Red Latinoamericana y del Caribe de Personas que Usan Drogas",
    "bio": "Líder en derechos de personas usuarias de sustancias en América Latina.",
    "expertise": ["Derechos de Usuarias", "Políticas de Reducción de Daños", "Activismo Regional"]
  },
  {
    "name": "Martin Acuña",
    "role": "Exponente",
    "organization": "Asociación Civil MACU (Río Gallegos)",
    "bio": "Activista por el uso responsable y la despenalización en la Patagonia.",
    "expertise": ["Uso Responsable", "Activismo Patagónico", "Derechos Humanos"]
  },
  {
    "name": "Fausto Berjolis",
    "role": "Exponente",
    "organization": "ARFAC | RACME",
    "bio": "Abogado penalista especializado en derecho y políticas de drogas.",
    "expertise": ["Derecho Penal", "Políticas de Drogas", "Reforma Legal"]
  },
  {
    "name": "Joe Stefanolo",
    "role": "Exponente",
    "organization": "Impulsor del fallo Bazterrica",
    "bio": "Abogado pionero en la defensa del uso personal y la reforma penal.",
    "expertise": ["Fallo Bazterrica", "Derecho Constitucional", "Reforma Penal"]
  },
  {
    "name": "Lila Torres",
    "role": "Exponente",
    "organization": "Universidad Nacional de La Plata (UNLP)",
    "bio": "Investigadora en cultura, organización social y política del cannabis.",
    "expertise": ["Cultura Cannábica", "Organización Social", "Políticas Culturales"]
  },
  {
    "name": "Gastón Kapcitzky",
    "role": "Exponente",
    "organization": "Asociación Civil Colectivo Cannábico Traslasierra",
    "bio": "Activista comprometido con la reforma de la Ley 23.737.",
    "expertise": ["Reforma Legal", "Activismo Regional", "Derechos Humanos"]
  },
  {
    "name": "Daniela Rodriguez",
    "role": "Modera",
    "organization": "Asociación Acción Cannábica",
    "bio": "Activista legal en la defensa de derechos relacionados con el cannabis.",
    "expertise": ["Derechos Humanos", "Reforma Legal", "Acceso Terapéutico"]
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
