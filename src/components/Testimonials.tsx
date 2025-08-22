import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      name: "Anna K.",
      role: "Marketerka, 28 lat",
      content: "Po pierwszym check-inie poczułam się zrozumiana. Trzy kroki, które otrzymałam, były bardzo konkretne i łatwe do wdrożenia. Już następnego dnia czułam się spokojniej.",
      rating: 5
    },
    {
      name: "Michał P.",
      role: "Programista, 32 lata",
      content: "Jako osoba sceptyczna wobec 'gadania o uczuciach', byłem zaskoczony jak bardzo pomogło mi uporządkowanie myśli. AI nie ocenia, tylko słucha i organizuje.",
      rating: 5
    },
    {
      name: "Katarzyna M.",
      role: "Psycholożka, 35 lat",
      content: "Polecam swoim klientom jako uzupełnienie terapii. Świetne narzędzie do codziennej refleksji między sesjami. Bezpieczne i przemyślane podejście do AI w zdrowiu psychicznym."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold lg:text-4xl mb-4">
            Pierwsze doświadczenia użytkowników
          </h2>
          <p className="text-lg text-muted-foreground">
            Sprawdź, jak nasze narzędzie pomogło innym w codziennej refleksji i budowaniu spokoju.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  {testimonial.rating && (
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  )}
                  
                  <blockquote className="text-muted-foreground leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="pt-4 border-t">
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
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
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            * Opinie pochodzą z wczesnych testów narzędzia. Doświadczenia mogą być różne dla różnych osób.
          </p>
        </motion.div>
      </div>
    </section>
  );
}