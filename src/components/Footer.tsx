import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="border-t bg-muted/30 py-16">
      <div className="container px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold">
                🧘
              </div>
              <span className="text-xl font-semibold">MindCheck</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md leading-relaxed">
              AI-coach dobrostanu, który pomoże Ci znaleźć spokój w codziennym zabieganiu. 
              3 minuty dziennie dla lepszego samopoczucia.
            </p>
            <Button variant="outline" size="sm" asChild>
              <a href="mailto:kontakt@mindcheck.pl" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                kontakt@mindcheck.pl
              </a>
            </Button>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="font-semibold mb-4">Informacje prawne</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Button variant="link" asChild className="h-auto p-0 text-sm">
                  <Link to="/privacy">Polityka prywatności</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild className="h-auto p-0 text-sm">
                  <Link to="/disclaimer">Zastrzeżenia</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild className="h-auto p-0 text-sm">
                  <Link to="/support">Wsparcie kryzysowe</Link>
                </Button>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold mb-4">Szybkie linki</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                  Jak to działa
                </a>
              </li>
              <li>
                <a href="#security" className="text-muted-foreground hover:text-foreground transition-colors">
                  Bezpieczeństwo
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MindCheck. Wszystkie prawa zastrzeżone.
          </p>
          <p className="text-xs text-muted-foreground">
            Wersja pilotażowa • Zbudowano z ❤️ dla Twojego dobrostanu
          </p>
        </div>
      </div>
    </footer>
  );
}