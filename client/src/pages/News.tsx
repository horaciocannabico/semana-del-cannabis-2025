import NewsSection from "@/components/NewsSection";

export default function News() {
  return (
    <main className="pt-16">
      <div className="bg-primary/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Reclamos de la Comunidad
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La voz oficial de la comunidad cannábica argentina. 
            Comparte esta nota para amplificar nuestros reclamos por una regulación justa.
          </p>
        </div>
      </div>
      <NewsSection />
    </main>
  );
}