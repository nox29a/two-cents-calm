import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLinkButton } from "@/components/ExternalLinkButton";
import { ArrowRight, Clock, Shield, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

export function FinalCTA() {
  const benefits = [
    { icon: Clock, text: "Tylko 3 minuty dziennie" },
    { icon: Shield, text: "Bezpieczne i prywatne" },
    { icon: Heart, text: "Dopasowane do Ciebie" }
  ];

  const ButtonLink = ({ to, size, className, ariaLabel, children }) => {
    return (
      <Link
        to={to}
        className={`inline-flex items-center justify-center rounded-md font-semibold bg-primary text-black transition-all ${className} ${
          size === 'lg' ? 'text-lg px-8 py-6' : ''
        }`}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  };

  return (
    <section className="py-20 lg:py-32">
      <div className="container px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="mx-auto max-w-4xl border-0 bg-gradient-soft shadow-large">
            <CardContent className="p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold lg:text-4xl mb-4">
                Zacznij już dziś
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Dołącz do tysięcy osób, które codziennie inwestują 3 minuty w swój spokój i dobrostan. 
                Pierwszy check-in jest bezpłatny.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-10">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <benefit.icon className="h-4 w-4 text-primary" />
                    {benefit.text}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
<ButtonLink
  to="/form"
  size="lg"
  className="w-full sm:w-auto shadow-medium hover:shadow-large"
  ariaLabel="Rozpocznij swój pierwszy check-in głosowy"
>
  Zrób check-in teraz
  <ArrowRight className="ml-2 h-5 w-5" />
</ButtonLink>

                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 h-auto font-semibold"
                  asChild
                >
                  <a href="#how-it-works">
                    Dowiedz się więcej
                  </a>
                </Button>
              </motion.div>

              <p className="text-xs text-muted-foreground mt-6">
                Brak zobowiązań. Możesz zrezygnować w każdej chwili.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}