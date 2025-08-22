import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, Compass } from "lucide-react";
import { motion } from "framer-motion";

export function TargetAudience() {
  const personas = [
    {
      icon: Briefcase,
      title: "Młodzi profesjonaliści",
      subtitle: "20-35 lat",
      description: "Czujesz się samotny w wielkim mieście? Doświadczasz wypalenia zawodowego? Szukasz sposobu na codzienną refleksję i lepsze zarządzanie stresem.",
      highlights: ["Stress zawodowy", "Samotność", "Work-life balance"]
    },
    {
      icon: Compass,
      title: "Pierwszy krok do pomocy",
      subtitle: "Wszystkie grupy wiekowe",
      description: "Zastanawiasz się nad wizytą u psychologa, ale nie wiesz od czego zacząć? Nasze narzędzie pomoże Ci lepiej zrozumieć swoje myśli przed pierwszą rozmową ze specjalistą.",
      highlights: ["Przygotowanie do terapii", "Samopoznanie", "Pierwszy krok"]
    },
    {
      icon: Users,
      title: "Osoby dbające o rozwój",
      subtitle: "25-45 lat",
      description: "Aktywnie pracujesz nad sobą i szukasz narzędzi do codziennej refleksji? Chcesz lepiej rozumieć swoje wzorce myślowe i rozwijać nawyki wspierające dobrostan.",
      highlights: ["Rozwój osobisty", "Mindfulness", "Nawyki dobrostanu"]
    }
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="container px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold lg:text-4xl mb-4">
            Dla kogo?
          </h2>
          <p className="text-lg text-muted-foreground">
            Nasze narzędzie jest szczególnie przydatne dla osób, które chcą lepiej rozumieć swoje emocje i rozwijać nawyki wspierające dobrostan.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <persona.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl">{persona.title}</CardTitle>
                  <p className="text-sm text-primary font-medium">{persona.subtitle}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {persona.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {persona.highlights.map((highlight, highlightIndex) => (
                      <span
                        key={highlightIndex}
                        className="inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}