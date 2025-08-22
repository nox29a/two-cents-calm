import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Phone, MessageCircle, Globe, Heart, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Support() {
  const emergencyContacts = [
    {
      name: "Numer ratunkowy",
      phone: "112",
      description: "Natychmiastowa pomoc w sytuacjach zagrożenia życia",
      available: "24/7",
      icon: Phone
    },
    {
      name: "Centrum Wsparcia dla Osób w Kryzysie Psychicznym",
      phone: "800 70 2222",
      description: "Bezpłatna pomoc psychologiczna przez telefon",
      available: "24/7",
      icon: MessageCircle
    },
    {
      name: "Telefon Zaufania dla Dzieci i Młodzieży",
      phone: "116 111",
      description: "Specjalistyczna pomoc dla osób młodych",
      available: "24/7",
      icon: Heart
    }
  ];

  const onlineResources = [
    {
      name: "ITAKA - Centrum Poszukiwań Ludzi Zaginionych",
      url: "https://itaka.pl/telefon-zaufania/",
      description: "Telefon zaufania i wsparcie online"
    },
    {
      name: "Fundacja Dzieci Niczyje",
      url: "https://fdn.pl/",
      description: "Pomoc dzieciom i młodzieży w trudnych sytuacjach"
    },
    {
      name: "Niebieska Linia",
      url: "https://www.niebieskalinia.pl/",
      description: "Pomoc osobom doświadczającym przemocy domowej"
    }
  ];

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
            Wsparcie kryzysowe
          </h1>
          <p className="text-lg text-muted-foreground">
            Jeśli potrzebujesz natychmiastowej pomocy, oto zaufane źródła wsparcia
          </p>
        </div>

        {/* Emergency banner */}
        <Card className="mb-8 border-destructive/20 bg-destructive/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              W sytuacji zagrożenia życia
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive/80 mb-4">
              Jeśli Ty lub ktoś w Twoim otoczeniu znajduje się w bezpośrednim niebezpieczeństwie:
            </p>
            <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90">
              <a href="tel:112" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Zadzwoń 112 TERAZ
              </a>
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-8">
          {/* Emergency contacts */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Natychmiastowa pomoc</h2>
            <div className="space-y-4">
              {emergencyContacts.map((contact, index) => (
                <Card key={index} className="border-0 shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                        <contact.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold mb-2">{contact.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{contact.description}</p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                          <Button asChild>
                            <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-2">
                              <Phone className="h-4 w-4" />
                              {contact.phone}
                            </a>
                          </Button>
                          <span className="text-xs text-muted-foreground">
                            Dostępne: {contact.available}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Online resources */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Zasoby online</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {onlineResources.map((resource, index) => (
                <Card key={index} className="border-0 shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold mb-2 text-sm">{resource.name}</h3>
                        <p className="text-xs text-muted-foreground mb-3">{resource.description}</p>
                        <Button variant="outline" size="sm" asChild>
                          <a href={resource.url} target="_blank" rel="noopener noreferrer">
                            Odwiedź stronę
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Signs to watch for */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Kiedy szukać pomocy</h2>
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground mb-4">
                  Nie wahaj się szukać pomocy, gdy doświadczasz:
                </p>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-3 text-sm text-accent">Myśli i uczucia</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Myśli o krzywdzeniu siebie lub innych</li>
                      <li>• Uczucie beznadziei lub bezwartościości</li>
                      <li>• Przytłaczający smutek lub lęk</li>
                      <li>• Myśli o śmierci lub samobójstwie</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-sm text-accent">Zachowania i objawy</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Izolacja od rodziny i przyjaciół</li>
                      <li>• Znaczące zmiany w śnie lub apetycie</li>
                      <li>• Używanie substancji psychoaktywnych</li>
                      <li>• Niemożność radzenia z codziennymi zadaniami</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* How to help others */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Jak pomóc innym</h2>
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="bg-accent/10 p-4 rounded-xl">
                  <h4 className="font-semibold text-accent mb-3">Jeśli martwisz się o kogoś:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Słuchaj</strong> - bez osądzania i udzielania rad</li>
                    <li>• <strong>Bądź obecny</strong> - oferuj swoje wsparcie i czas</li>
                    <li>• <strong>Zachęcaj do szukania pomocy</strong> - oferuj pomoc w znalezieniu specjalisty</li>
                    <li>• <strong>Traktuj poważnie</strong> - każdą wzmiankę o krzywdzie lub samobójstwie</li>
                    <li>• <strong>Zadbaj o siebie</strong> - wsparcie innych może być wyczerpujące</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Pamiętaj: szukanie pomocy to znak siły, nie słabości.
          </p>
          <Button asChild>
            <Link to="/">Powrót do strony głównej</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}