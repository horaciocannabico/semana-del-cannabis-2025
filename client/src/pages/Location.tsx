import LocationMap from "@/components/LocationMap";

export default function Location() {
  return (
    <main className="pt-16">
      <div className="bg-primary/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Ubicación
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Todas las actividades de la Semana del Cannabis 2025 se realizarán 
            en el corazón de Buenos Aires, con fácil acceso en transporte público.
          </p>
        </div>
      </div>
      <LocationMap />
    </main>
  );
}