import { Link } from "wouter";
import { Leaf, Mail, MapPin, Calendar, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (platform: string) => {
    console.log(`Social media click: ${platform}`);
    // Mock social media links
    const urls = {
      facebook: 'https://facebook.com/semanalcannabis2025',
      twitter: 'https://twitter.com/cannabis2025',
      instagram: 'https://instagram.com/semanalcannabis2025'
    };
    
    if (urls[platform as keyof typeof urls]) {
      window.open(urls[platform as keyof typeof urls], '_blank');
    }
  };

  const handleContactClick = (type: string, value: string) => {
    if (type === 'email') {
      window.location.href = `mailto:${value}`;
    } else if (type === 'location') {
      window.open(`https://maps.google.com/?q=${encodeURIComponent(value)}`, '_blank');
    }
    console.log(`Contact click: ${type} - ${value}`);
  };

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Leaf className="w-6 h-6" />
              <span className="font-display font-bold text-xl">Cannabis 2025</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              La Semana del Cannabis 2025 busca visibilizar y concientizar sobre 
              la regulación integral del cannabis en Argentina.
            </p>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleSocialClick('facebook')}
                data-testid="social-facebook"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleSocialClick('twitter')}
                data-testid="social-twitter"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleSocialClick('instagram')}
                data-testid="social-instagram"
              >
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/actividades">
                  <Button variant="ghost" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="footer-link-actividades">
                    Cronograma
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/exponentes">
                  <Button variant="ghost" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="footer-link-exponentes">
                    Exponentes
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/marcha">
                  <Button variant="ghost" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="footer-link-marcha">
                    La Gran Marcha
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/ubicacion">
                  <Button variant="ghost" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="footer-link-ubicacion">
                    Ubicación
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Event Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Información del Evento</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-foreground font-medium">10-15 Noviembre 2025</p>
                  <p className="text-muted-foreground">6 días de actividades</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-foreground font-medium">Buenos Aires</p>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-muted-foreground hover:text-foreground text-sm"
                    onClick={() => handleContactClick('location', 'Buenos Aires, Argentina')}
                    data-testid="footer-location"
                  >
                    Ver ubicación
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-muted-foreground hover:text-foreground text-sm"
                  onClick={() => handleContactClick('email', 'info@semanalcannabis2025.org')}
                  data-testid="footer-email"
                >
                  info@semanalcannabis2025.org
                </Button>
              </div>
              <div className="text-sm">
                <p className="text-foreground font-medium mb-1">Prensa y Medios:</p>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-muted-foreground hover:text-foreground text-sm"
                  onClick={() => handleContactClick('email', 'prensa@semanalcannabis2025.org')}
                  data-testid="footer-press-email"
                >
                  prensa@semanalcannabis2025.org
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-card-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              <p>&copy; {currentYear} Semana del Cannabis. Todos los derechos reservados.</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <Button variant="ghost" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="footer-privacy">
                Política de Privacidad
              </Button>
              <Button variant="ghost" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="footer-terms">
                Términos y Condiciones
              </Button>
              <Button variant="ghost" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="footer-legal">
                Aviso Legal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}