import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, Facebook, Twitter, MessageCircle, Copy, Edit } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// todo: remove mock functionality
const mockNewsContent = {
  title: "Reclamos de la Comunidad Cannábica Argentina: Por una Regulación Integral y Justa",
  content: `La comunidad cannábica argentina alza su voz en la Semana del Cannabis 2025 para exigir una regulación integral que reconozca los derechos fundamentales de los usuarios y la evidencia científica acumulada durante décadas.

**Nuestros Principales Reclamos:**

• **Revisión urgente de la Ley 23.737**: Una normativa que criminaliza a usuarios medicinales y recreativos, generando un impacto social desproporcionado.

• **Acceso garantizado al cannabis medicinal**: Simplificación del registro REPROCANN y cobertura por obras sociales y prepagas.

• **Regulación del uso adulto**: Reconocimiento del derecho a la autodeterminación y políticas de reducción de daños.

• **Fomento del cáñamo industrial**: Aprovechamiento del potencial económico y sustentable de esta industria.

• **Liberación de detenidos por cannabis**: Amnistía para personas privadas de libertad por delitos relacionados con cannabis.

La prohibición ha fracasado. Es hora de políticas basadas en evidencia, derechos humanos y salud pública.

#RegulacionJusta #Cannabis2025 #DerechosCannabicos`,
  date: "15 de noviembre de 2025",
  author: "Organizaciones Cannábicas Argentinas"
};

export default function NewsSection() {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(mockNewsContent);

  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/nota` : '';

  const handleShare = (platform: string) => {
    const text = `${editedContent.title} - ${shareUrl}`;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`);
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        toast({
          title: "Enlace copiado",
          description: "El enlace ha sido copiado al portapapeles",
        });
        break;
      default:
        console.log(`Compartir en ${platform}`);
    }
  };

  const handleEdit = () => {
    if (isEditing) {
      // Save changes
      console.log("Guardando cambios:", editedContent);
      toast({
        title: "Nota actualizada",
        description: "Los cambios han sido guardados correctamente",
      });
    }
    setIsEditing(!isEditing);
  };

  return (
    <section id="nota" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-display font-bold text-4xl text-foreground mb-4">
              Nota de la Comunidad
            </h2>
            <p className="text-lg text-muted-foreground">
              Reclamos y propuestas de la comunidad cannábica argentina
            </p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedContent.title}
                      onChange={(e) => setEditedContent(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full text-2xl font-bold bg-transparent border-b border-border focus:outline-none focus:border-primary"
                      data-testid="input-edit-title"
                    />
                  ) : (
                    <CardTitle className="text-2xl md:text-3xl" data-testid="text-news-title">
                      {editedContent.title}
                    </CardTitle>
                  )}
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span data-testid="text-news-date">{editedContent.date}</span>
                    <span data-testid="text-news-author">{editedContent.author}</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleEdit}
                  data-testid="button-edit-news"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  {isEditing ? "Guardar" : "Editar"}
                </Button>
              </div>
            </CardHeader>
            
            <CardContent>
              {isEditing ? (
                <textarea
                  value={editedContent.content}
                  onChange={(e) => setEditedContent(prev => ({ ...prev, content: e.target.value }))}
                  className="w-full h-96 p-4 bg-muted rounded-md border border-border focus:outline-none focus:border-primary resize-none"
                  data-testid="textarea-edit-content"
                />
              ) : (
                <div className="prose prose-lg max-w-none" data-testid="text-news-content">
                  {editedContent.content.split('\n').map((paragraph, index) => {
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return (
                        <h3 key={index} className="font-semibold text-lg mt-6 mb-3 text-primary">
                          {paragraph.slice(2, -2)}
                        </h3>
                      );
                    }
                    if (paragraph.startsWith('•')) {
                      return (
                        <li key={index} className="ml-4 mb-2">
                          {paragraph.slice(1).trim()}
                        </li>
                      );
                    }
                    if (paragraph.trim() === '') {
                      return <br key={index} />;
                    }
                    return (
                      <p key={index} className="mb-4 text-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Share Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                Compartir esta nota
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  onClick={() => handleShare('facebook')}
                  className="flex items-center gap-2"
                  data-testid="button-share-facebook"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => handleShare('twitter')}
                  className="flex items-center gap-2"
                  data-testid="button-share-twitter"
                >
                  <Twitter className="w-4 h-4" />
                  Twitter
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => handleShare('whatsapp')}
                  className="flex items-center gap-2"
                  data-testid="button-share-whatsapp"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => handleShare('copy')}
                  className="flex items-center gap-2"
                  data-testid="button-share-copy"
                >
                  <Copy className="w-4 h-4" />
                  Copiar enlace
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}