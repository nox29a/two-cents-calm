import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Clock, Users, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Privacy() {
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
            Polityka prywatności
          </h1>
          <p className="text-lg text-muted-foreground">
            Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
          </p>
        </div>

        {/* Quick overview */}
        <Card className="mb-8 border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Najważniejsze informacje
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <Clock className="h-4 w-4 text-accent mt-0.5" />
              <p className="text-sm">Nagrania przechowywane przez maksymalnie 30 dni</p>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="h-4 w-4 text-accent mt-0.5" />
              <p className="text-sm">Szyfrowanie end-to-end wszystkich danych</p>
            </div>
            <div className="flex items-start gap-3">
              <Users className="h-4 w-4 text-accent mt-0.5" />
              <p className="text-sm">Brak udostępniania danych stronom trzecim</p>
            </div>
          </CardContent>
        </Card>

        {/* Main content */}
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Administrator danych</h2>
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Administratorem Twoich danych osobowych jest MindCheck sp. z o.o. z siedzibą w Warszawie.
                </p>
                <div className="bg-muted/50 p-4 rounded-xl">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Kontakt w sprawach prywatności:</strong>
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    prywatnosc@mindcheck.pl
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Jakie dane zbieramy</h2>
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Nagrania głosowe</h3>
                  <p className="text-muted-foreground text-sm">
                    Zbieramy nagrania głosowe, które dobrowolnie nam przekazujesz w celu analizy i utworzenia spersonalizowanego planu działania.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Dane kontaktowe</h3>
                  <p className="text-muted-foreground text-sm">
                    Adres email potrzebny do przesłania wyników analizy i komunikacji z Tobą.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Dane techniczne</h3>
                  <p className="text-muted-foreground text-sm">
                    Podstawowe informacje techniczne (IP, przeglądarka) niezbędne do funkcjonowania usługi.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Retencja danych</h2>
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-4 rounded-xl mb-4">
                  <p className="text-sm font-medium text-primary mb-2">
                    🗓️ 30-dniowy okres przechowywania
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Wszystkie nagrania głosowe są automatycznie usuwane po 30 dniach od otrzymania.
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Analiza i transkrypcja: do 24 godzin</li>
                  <li>• Przechowywanie nagrania: maksymalnie 30 dni</li>
                  <li>• Automatyczne usunięcie: po upływie okresu retencji</li>
                  <li>• Dane kontaktowe: do momentu wycofania zgody</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Twoje prawa</h2>
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Zgodnie z RODO masz następujące prawa:
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm">Prawo dostępu</h4>
                      <p className="text-xs text-muted-foreground">Możesz sprawdzić jakie dane o Tobie posiadamy</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Prawo do sprostowania</h4>
                      <p className="text-xs text-muted-foreground">Możesz poprawić nieprawidłowe dane</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Prawo do usunięcia</h4>
                      <p className="text-xs text-muted-foreground">Możesz żądać usunięcia swoich danych</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm">Prawo do ograniczenia</h4>
                      <p className="text-xs text-muted-foreground">Możesz ograniczyć przetwarzanie</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Prawo do przenoszenia</h4>
                      <p className="text-xs text-muted-foreground">Możesz otrzymać swoje dane w formatach cyfrowych</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Prawo sprzeciwu</h4>
                      <p className="text-xs text-muted-foreground">Możesz sprzeciwić się przetwarzaniu</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Bezpieczeństwo</h2>
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground">
                  Stosujemy najwyższe standardy bezpieczeństwa:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Szyfrowanie AES-256 dla wszystkich nagrań</li>
                  <li>• Bezpieczne połączenia HTTPS/TLS</li>
                  <li>• Ograniczony dostęp tylko dla autoryzowanego personelu</li>
                  <li>• Regularne audyty bezpieczeństwa</li>
                  <li>• Kopie zapasowe w szyfrowanej infrastrukturze</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Kontakt</h2>
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  W przypadku pytań dotyczących prywatności lub chęci skorzystania ze swoich praw, skontaktuj się z nami:
                </p>
                <div className="bg-muted/50 p-4 rounded-xl">
                  <Button variant="outline" asChild>
                    <a href="mailto:prywatnosc@mindcheck.pl" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      prywatnosc@mindcheck.pl
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t text-center">
          <Button asChild>
            <Link to="/">Powrót do strony głównej</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}