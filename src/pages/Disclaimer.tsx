import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, AlertTriangle, BookOpen, Users, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Powrót do strony głównej
            </Link>
          </Button>
          <h1 className="text-3xl font-bold lg:text-4xl mb-4">
            Zastrzeżenia i granice narzędzia
          </h1>
          <p className="text-lg text-muted-foreground">
            Ważne informacje o tym, czym jest i czym nie jest nasze narzędzie
          </p>
        </div>

        {/* Warning banner */}
        <Card className="mb-8 border-destructive/20 bg-destructive/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              Ważne zastrzeżenie
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-destructive/80">
              MindCheck nie jest narzędziem medycznym, diagnostycznym ani terapeutycznym. 
              Nie zastępuje profesjonalnej opieki zdrowotnej, terapii ani konsultacji medycznej.
            </p>
          </CardContent>
        </Card>

        {/* Main content */}
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              Czym jest MindCheck
            </h2>
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground">
                  MindCheck to narzędzie edukacyjne i rozwojowe, które pomaga w:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Refleksji</strong> - organizacji myśli i uczuć</li>
                  <li>• <strong>Samopoznaniu</strong> - lepszym zrozumieniu własnych wzorców</li>
                  <li>• <strong>Budowaniu nawyków</strong> - tworzeniu mikro-działań wspierających dobrostan</li>
                  <li>• <strong>Edukacji</strong> - dostarczaniu informacji o zdrowiu psychicznym</li>
                  <li>• <strong>Motywacji</strong> - zachęcaniu do pozytywnych zmian</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Stethoscope className="h-6 w-6 text-destructive" />
              Czym MindCheck NIE jest
            </h2>
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6 space-y-4">
                <div className="bg-destructive/10 p-4 rounded-xl">
                  <p className="text-sm font-medium text-destructive mb-3">
                    Nasze narzędzie nie może i nie powinno być używane jako:
                  </p>
                  <ul className="space-y-2 text-sm text-destructive/80">
                    <li>• Diagnoza medyczna ani psychiatryczna</li>
                    <li>• Terapia lub poradnictwo psychologiczne</li>
                    <li>• Leczenie zaburzeń psychicznych</li>
                    <li>• Porada lekarska lub medyczna</li>
                    <li>• Ocena ryzyka samobójczego</li>
                    <li>• Interwencja kryzysowa</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Users className="h-6 w-6 text-accent" />
              Kiedy szukać profesjonalnej pomocy
            </h2>
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground mb-4">
                  Zachęcamy do skontaktowania się z profesjonalistami, gdy doświadczasz:
                </p>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-accent/10 p-4 rounded-xl">
                    <h4 className="font-semibold text-accent mb-2 text-sm">Objawy wymagające uwagi</h4>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>• Długotrwały smutek lub depresja</li>
                      <li>• Lęk wpływający na codzienne życie</li>
                      <li>• Problemy ze snem lub apetytem</li>
                      <li>• Trudności w relacjach</li>
                      <li>• Spadek wydajności w pracy/szkole</li>
                    </ul>
                  </div>
                  
                  <div className="bg-destructive/10 p-4 rounded-xl">
                    <h4 className="font-semibold text-destructive mb-2 text-sm">Sytuacje kryzysowe</h4>
                    <ul className="space-y-1 text-xs text-destructive/80">
                      <li>• Myśli o krzywdzeniu siebie</li>
                      <li>• Myśli samobójcze</li>
                      <li>• Panika lub ataki lękowe</li>
                      <li>• Utrata kontaktu z rzeczywistością</li>
                      <li>• Przemoc lub zagrożenie</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <Button variant="outline" asChild>
                    <Link to="/support">Zobacz zasoby wsparcia kryzysowego</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Ograniczenia technologiczne</h2>
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground mb-4">
                  Nasze narzędzie AI ma następujące ograniczenia:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Nie rozumie kontekstu medycznego</strong> - nie zna Twojej historii zdrowia</li>
                  <li>• <strong>Nie wykrywa wszystkich sygnałów ryzyka</strong> - może przegapić subtelne oznaki</li>
                  <li>• <strong>Bazuje na ograniczonych danych</strong> - tylko na tym, co powiesz w nagraniu</li>
                  <li>• <strong>Może się mylić</strong> - algorytmy nie są nieomylne</li>
                  <li>• <strong>Nie zapewnia ciągłości opieki</strong> - to punktowe wsparcie, nie terapia</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Odpowiedzialność</h2>
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="bg-muted/50 p-4 rounded-xl">
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Korzystasz na własną odpowiedzialność.</strong>
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    MindCheck nie ponosi odpowiedzialności za decyzje podejmowane na podstawie analiz AI. 
                    Zawsze skonsultuj się z wykwalifikowanym specjalistą w sprawach dotyczących zdrowia psychicznego.
                    W sytuacjach kryzysowych natychmiast skontaktuj się z służbami ratunkowymi (112) lub profesjonalnym wsparciem.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
          </p>
          <Button asChild>
            <Link to="/">Powrót do strony głównej</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}