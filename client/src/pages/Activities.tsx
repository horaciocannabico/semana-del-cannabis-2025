import ActivitySchedule from "@/components/ActivitySchedule";

export default function Activities() {
  return (
    <main className="pt-16">
      <div className="bg-primary/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-10">
            Cronograma de Actividades
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-bold">
            Semana Cannabis 2025 se realizará del 10 al 15 de noviembre en el AMBA, bajo el lema “Basta de personas presas por marihuana”. 
          </p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
            Habrá paneles y actividades sobre derechos humanos, salud, acceso Reprocann, cannabis industrial, cultura y activismo. 
          </p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-2">
            El programa incluye capacitaciones, mesas de debate, actividades culturales y la Gran Marcha Nacional. 
          </p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-2">
            Se destaca la colaboración de ONGs, profesionales, instituciones y activistas para reflexionar sobre una regulación justa, el cuidado, y el fin de la criminalización
          </p>
          
        </div>
      </div>
      <ActivitySchedule />
    </main>
  );
}