import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import heroImage from "@assets/generated_images/LogoSemanaCan.png";

export default function Hero() {
  const handleRegister = () => {
    console.log("Registro triggered");
    // Scroll to registration section or navigate
    document.getElementById("registro")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewSchedule = () => {
    console.log("Ver cronograma triggered");
    document.getElementById("actividades")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/80 to-primary/60"
      style={{
        backgroundColor: '#000000', // tono verde similar al de tu imagen
        backgroundImage: `linear-gradient(rgba(34, 71, 47, 0.7), rgba(34, 71, 47, 0.8)), url(${heroImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            Semana Cannabis
            <span className="block text-3xl md:text-4xl lg:text-5xl font-normal mt-2">
              2025
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
            
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-white/90">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">10-15 Noviembre 2025</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Buenos Aires, Argentina</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Users className="w-5 h-5" />
              <span className="font-medium">Presencial y Virtual</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
              onClick={handleRegister}
              data-testid="button-register-hero"
            >
              Registrarse Ahora
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 font-semibold px-8"
              onClick={handleViewSchedule}
              data-testid="button-schedule-hero"
            >
              Ver Cronograma
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}