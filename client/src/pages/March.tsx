import MarchSection from "@/components/MarchSection";

export default function March() {
  return (
    <main className="pt-16">
      <div className="bg-primary/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            La Gran Marcha
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            El sábado 15 de noviembre culminamos la Semana del Cannabis con la 
            15ª Marcha Nacional de la Marihuana, una manifestación histórica por la regulación justa.
          </p>
        </div>
      </div>
      <MarchSection />
    </main>
  );
}