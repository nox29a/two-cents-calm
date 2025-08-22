import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export function FAQ() {
  const faqs = [
    {
      question: "Ile czasu trwa cały proces?",
      answer: "Nagranie trwa 2-3 minuty, a całkowity czas od nagrania do otrzymania spersonalizowanego planu to zwykle 10-20 minut. Otrzymasz email z trzema konkretnymi krokami dopasowanymi do Twojej sytuacji."
    },
    {
      question: "Czy to jest forma terapii?",
      answer: "Nie, to nie jest terapia ani porada medyczna. Nasze narzędzie oferuje edukacyjne wsparcie rozwojowe, pomaga w refleksji i organizacji myśli. Nie zastępuje profesjonalnej pomocy psychologicznej czy psychiatrycznej."
    },
    {
      question: "Co z moją prywatnością i bezpieczeństwem danych?",
      answer: "Przestrzegamy RODO i minimalizujemy zbieranie danych. Nagrania są szyfrowane, przetwarzane tylko przez autoryzowane systemy AI, a następnie automatycznie usuwane po 30 dniach. Nie udostępniamy danych osobowych stronom trzecim."
    },
    {
      question: "Czy to jest płatne?",
      answer: "Obecnie prowadzimy bezpłatny pilotaż programu. Uczestnicy mogą korzystać z narzędzia przez tydzień za 0 zł. Po zakończeniu pilotażu poinformujemy o planach cenowych."
    },
    {
      question: "Jak szybko otrzymam wynik i plan działania?",
      answer: "Analiza trwa zwykle 10-20 minut. Otrzymasz email z trzema spersonalizowanymi krokami na dziś. W rzadkich przypadkach, gdy system wykryje potrzebę dodatkowego wsparcia, możesz otrzymać także informacje o profesjonalnych zasobach pomocy."
    }
  ];

  return (
    <section id="faq" className="py-20 lg:py-32">
      <div className="container px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold lg:text-4xl mb-4">
            Najczęściej zadawane pytania
          </h2>
          <p className="text-lg text-muted-foreground">
            Znajdź odpowiedzi na pytania dotyczące działania narzędzia, prywatności i bezpieczeństwa.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-2xl px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}