import OrganizersSection from "@/components/OrganizersSection";

export default function Organizers() {
  return (
    <main className="pt-16">
      <div className="bg-primary/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Organizan y acompañan
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            
          </p>
        </div>
      </div>
      <OrganizersSection />
    </main>
  );
}