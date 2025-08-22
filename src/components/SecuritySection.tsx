import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Heart, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function SecuritySection() {
  const features = [
    {
      icon: AlertTriangle,
      title: "Granice narzędzia",
      description: "To nie jest diagnoza ani porada medyczna. Skupiamy się na refleksji i mikro-nawykach wspierających dobrostan."
    },
    {
      icon: Shield,
      title: "Prywatność i bezpieczeństwo",
      description: "Dane są przetwarzane zgodnie z RODO. Minimalizujemy zbieranie informacji i usuwamy nagrania po 30 dniach."
    },
    {
      icon: Heart,
      title: "Wsparcie w kryzysie",
      description: "Jeśli wykryjemy sygnały ryzyka, przekierujemy Cię do profesjonalnych zasobów pomocy i wsparcia."
    },
    {
      icon: Lock,
      title: "Szyfrowanie danych",
      description: "Wszystkie nagrania i analizy są szyfrowane. Dostęp mają tylko autoryzowane systemy AI i Ty."
    }
  ];

  return (
    <section id="security" className="py-20 lg:py-32 bg-muted/30">
      <div className="container px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold lg:text-4xl mb-4">
            Bezpieczeństwo i granice
          </h2>
          <p className="text-lg text-muted-foreground">
            Przejrzystość to podstawa zaufania. Dokładnie wyjaśniamy, jak działamy i jakie są granice naszego narzędzia.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Chcesz wiedzieć więcej? Przeczytaj szczegółowe informacje o naszych zasadach prywatności i ograniczeniach narzędzia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link to="/disclaimer">Przeczytaj zastrzeżenia</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/support">Wsparcie kryzysowe</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}