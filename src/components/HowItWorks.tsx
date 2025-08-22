import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Brain, ListChecks } from "lucide-react";
import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    {
      icon: Mic,
      title: "Nagraj 2–3 min audio",
      description: "Opowiedz o tym, co Cię zajmuje. Mów naturalnie, jak do przyjaciela. Twój głos pozostaje prywatny i bezpieczny."
    },
    {
      icon: Brain,
      title: "AI porządkuje Twoje myśli",
      description: "Zaawansowana analiza głosu pomaga zidentyfikować kluczowe tematy i emocje w Twojej wypowiedzi."
    },
    {
      icon: ListChecks,
      title: "Dostajesz plan 3 kroków",
      description: "Otrzymujesz konkretne, wykonalne działania dopasowane do Twojej sytuacji – gotowe do wdrożenia już dziś."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-32">
      <div className="container px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold lg:text-4xl mb-4">
            Jak to działa?
          </h2>
          <p className="text-lg text-muted-foreground">
            Prosty proces, który zajmuje tylko kilka minut, a może zmienić jakość Twojego dnia.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full text-center border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="mb-2 flex items-center justify-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}