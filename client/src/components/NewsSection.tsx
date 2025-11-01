import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, Facebook, Twitter, MessageCircle, Copy, Edit } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const mockNewsContent = {
  title: "Reclamos de la Comunidad Cannábica Argentina: Por una Regulación Integral y Justa",
  content: `La Comunidad Canabica Argentina alza su voz en la Semana del Cannabis 2025 para exigir una regulación integral que reconozca los derechos fundamentales de los usuarios y la evidencia científica acumulada durante décadas.
**Nuestros Principales Reclamos:**

• Revisión urgente de la Ley 23.737: Una normativa que criminaliza a usuarios medicinales y recreativos, generando un impacto social desproporcionado.
• Acceso garantizado al cannabis medicinal: Simplificación del registro REPROCANN y cobertura por obras sociales y prepagas.
• Regulación del uso adulto: Reconocimiento del derecho a la autodeterminación y políticas de reducción de daños.
• Fomento del cáñamo industrial: Aprovechamiento del potencial económico y sustentable de esta industria.
• Liberación de detenidos por cannabis: Amnistía para personas privadas de libertad por delitos relacionados con cannabis.
La prohibición ha fracasado. Es hora de políticas basadas en evidencia, derechos humanos y salud pública.

**DOCUMENTO NACIONAL — MARCHA DE LA MARIHUANA 2026**
Han pasado más de 35 años desde la sanción de la Ley de Drogas y la comunidad cannábica argentina continúa siendo atacada y criminalizada por un sistema prohibicionista, anacrónico y violento.
Hoy, más que nunca, reafirmamos nuestras consignas centrales frente al recrudecimiento de la represión y el retroceso de derechos de este gobierno.
Este documento se construye desde la resistencia y la dignidad de nuestro pueblo, que sigue levantándose frente a las políticas que castigan, encarcelan y silencian.
Nos declaramos en pie de lucha por nuestras vidas, nuestra libertad y nuestra planta.
Nuestras consignas este año son claras y urgentes:
**BASTA DE PERSONAS PRESAS POR MARIHUANA.**
**EL PROHIBICIONISMO MATA.**
**BASTA DE VIOLENCIA MACHISTA Y PATRIARCAL EN NUESTRA COMUNIDAD.**
**POR UNA NUEVA LEY DE DROGAS, REGULACIÓN DE LA MARIHUANA YA!**

**BASTA DE PERSONAS PRESAS POR MARIHUANA**

Miles de personas siguen siendo encarceladas, criminalizadas y vulneradas en Argentina por el simple hecho de cultivar o portar marihuana.
Cada causa judicial, cada allanamiento y cada condena destruyen familias, arrasan proyectos de vida y criminalizan prácticas que forman parte de nuestra cultura, nuestra salud y nuestra libertad.
Detrás de cada planta incautada hay una historia de dolor, una vida interrumpida por la violencia estatal y una comunidad que resiste ante el miedo y la estigmatización.
Quienes ejercen tareas de cuidado, les jóvenes de barrios populares, las personas trans y travestis, así como usuaries que encuentran en la planta alivio y tratamiento, son quienes más sufren este sistema injusto.
El prohibicionismo convirtió el uso y el cultivo en delitos, persiguiendo a quienes menos tienen y garantizando la impunidad de los verdaderos negocios ilegales.
Mientras el Estado castiga a quienes cultivan, sostiene un mercado criminalizado donde la violencia y la corrupción se multiplican.
Denunciamos la selectividad del sistema penal, que persigue a usuaries y cultivadores mientras protege privilegios.
Exigimos la libertad inmediata de todes les preses por marihuana y la restitución de derechos para quienes fueron víctimas de causas armadas y abuso policial.
Ninguna persona debería perder su libertad por ejercer un derecho básico: decidir cómo cuidar su salud, su placer o su trabajo.
No queremos más miedo en los barrios ni allanamientos en nuestras casas.
Queremos justicia, respeto y libertad.
La ley convierte el acto legítimo en delito: CULTIVAR es soberanía, dignidad y salud.
**DEROGACIÓN YA EL ART. 5 y ART. 14 DE LA LEY 23737**

**EL PROHIBICIONISMO MATA**

El prohibicionismo no solo encarcela: también mata.
Mata con violencia institucional, con gatillo fácil, con requisas arbitrarias y con allanamientos sin pruebas.
Mata cuando empuja a les usuaries a la clandestinidad, cuando abandona a quienes necesitan acompañamiento, dejando sin acceso a tratamientos
Mata a cultivadores perseguidos, comunidades que viven bajo amenaza de allanamientos, a quienes buscan trabajar dignamente con la planta.
Mata cuando nos encarcela, abandonando a nuestro entorno afectivo, quienes mueren por privación de redes de sostén.
Mata la policía desinformada, jueces y fiscales atrasados en la interpretación de la ley, y la narcopolítica que favorece solo a quienes tienen contactos o privilegios.
Mata también en las cárceles, donde les preses por marihuana ven vulnerados sus derechos, enfrentan condiciones inhumanas, falta de acceso a medicamentos y atención médica, y un deterioro sistemático de su calidad de vida; presente en la violencia institucional, la estigmatización y el abandono del Estado.
La falta de políticas públicas de cuidado, la exclusión social, la pobreza y la represión, sostenidos por el prohibicionismo, son el origen de cualquier problemática, que nada tienen que ver con nuestra planta.
Exigimos un Estado que acompañe, que garantice salud integral y estrategias de reducción de daños, en lugar de un Estado que castiga y abandona.
El prohibicionismo también impide el acceso completo a la planta en todos sus usos -recreativo, espiritual, cultural, medicinal e industrial- y con ello niega trabajo, salud y soberanía.
Negar la integralidad del cannabis frena la creación de fuentes de empleo genuinas y de economías populares que ya demostraron su potencial en otros países.
Mata la hipocresía, la indiferencia y la falta de voluntad política.
Por eso marchamos: porque el prohibicionismo mata, pero la organización y el conocimiento comunitario salvan vidas.

**BASTA DE VIOLENCIA MACHISTA Y PATRIARCAL EN NUESTRA COMUNIDAD**

El patriarcado y el prohibicionismo se sostienen mutuamente: son sistemas de control sobre nuestros cuerpos, nuestras decisiones y nuestra libertad. Las violencias que sufrimos las feminidades y diversidades atraviesan todos los ámbitos de la vida social: se expresan en la represión estatal, la precarización económica, las redes del narcotráfico y también dentro de los movimientos que buscamos transformar el mundo.
Las mujeres, las personas trans y travestis, las juventudes de los barrios populares y las comunidades originarias son quienes más padecen la desigualdad y la persecución que el sistema narcoprohibicionista refuerza.
Los femicidios, travesticidios y transfemicidios siguen arrebatando vidas en los hogares, los barrios y los espacios comunitarios; también la violencia policial, las redes de trata y la complicidad judicial.
En nuestra comunidad cannábica, estas lógicas se reproducen cuando se invisibiliza el trabajo y los cuidados que sostenemos las mujeres y diversidades. No alcanza con hablar de libertad si seguimos replicando estructuras patriarcales.
Exigimos una comunidad libre de violencias, con feminismos y diversidades en los espacios de decisión. Porque no hay liberación posible mientras las prácticas patriarcales sigan vigentes, dentro y fuera de nuestra comunidad.

**POR UNA NUEVA LEY DE DROGAS, REGULACIÓN DE LA MARIHUANA YA!**

La Ley 23.737, vigente desde 1989, es un instrumento de persecución que alimenta el prohibicionismo y fortalece al narcotráfico.
Durante más de tres décadas, el Estado argentino ha sostenido un modelo de control y castigo que fracasó en todos sus objetivos: no redujo consumos, no garantizó salud y solo generó miedo, estigma y exclusión.
Necesitamos una nueva Ley de Drogas que nazca desde los territorios, desde la salud comunitaria y desde la defensa de los derechos humanos.
Una ley que repare el daño del prohibicionismo, que reconozca los saberes populares y que promueva políticas de cuidado, educación y reducción de riesgos y daños.
La regulación integral de la marihuana debe incluir a quienes sostienen la vida comunitaria: usuaries, cultivadores, cooperativas, organizaciones y trabajadores que hoy producen en la informalidad.
Queremos una ley que reconozca el valor del autocultivo, de los clubes y de las economías sociales, que abra puentes entre usuaries y cultivadores, y que garantice un acceso equitativo y seguro a la planta.
No queremos un mercado concentrado en pocas manos ni una regulación extractivista.
Queremos un modelo productivo con justicia social, feminismos y diversidades, que priorice la salud y el trabajo digno por sobre la ganancia. Estamos organizades: clubes, asociaciones civiles, cooperativas, federaciones, empresas, universidades;
El cannabis es comunidad, cultura, industria y vida. Es identidad, trabajo y soberanía.
Negar su integralidad impide el desarrollo de una economía verde e inclusiva que podría generar miles de empleos y oportunidades. La regulación es también una política de seguridad: desarma el negocio del narcotráfico, reduce la violencia institucional y devuelve derechos a quienes fueron perseguides.
Exigimos una nueva Ley de Drogas que priorice los derechos humanos, respete la autonomía de las personas y promueva una política basada en una perspectiva de cuidados, el acceso a la información, la evidencia científica y la justicia social.
Ya no alcanza con resistir: tenemos que seguir organizándonos, ocupando calles, fortaleciendo el poder popular para transformar las políticas de drogas desde abajo.
Marchamos por una ley que libere, que repare y que devuelva dignidad.
Por una ley hecha con y para el pueblo, no contra él.
Por una mejor calidad de vida , por el trabajo y por la libertad de todes.

**CIERRE**

La libertad no se pide, se ejerce.
Mientras existan leyes que castiguen y políticas que repriman, seguiremos organizades en los territorios, cultivando futuro, defendiendo nuestras vidas y comunidad.
Este gobierno elige la persecución; nosotres elegimos la organización. Habitamos todas las luchas.
Por una nueva ley, por la libertad de todes les preses, por salud y trabajo digno.
Porque no queremos sobrevivir: queremos vivir libres, con dignidad y sin miedo.
El prohibicionismo no persiste por error ni por ignorancia: persiste porque sostiene los negocios más oscuros de la política y del poder. La Cultura Cannabica no acepta ser cómplice de ese sistema. Elegimos la transparencia, la libertad y la vida digna sobre la hipocresía y la corrupción.

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