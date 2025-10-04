import ActivitySchedule from "@/components/ActivitySchedule";

export default function Activities() {
  return (
    <main className="pt-16">
      <div className="bg-primary/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Actividades
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre el cronograma completo de la Semana del Cannabis 2025. 
            Seis días de actividades que cubren todos los aspectos del cannabis: 
            legal, medicinal, industrial, cultural y político.
          </p>
        </div>
      </div>
      <ActivitySchedule />
    </main>
  );
}