import { Button } from "@/components/ui/button";
import { ExternalLinkButton } from "@/components/ExternalLinkButton";
import { Mic, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

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

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-soft py-20 lg:py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Hero Icon */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary"
          >
            <Mic className="h-10 w-10" />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 text-4xl font-bold tracking-tight lg:text-6xl xl:text-7xl"
          >
            3 minuty, by poczuć{" "}
            <span className="bg-gradient-primary text-indigo-400">
              większy spokój
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-10 text-lg text-muted-foreground lg:text-xl xl:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            Nagraj krótką wiadomość. Otrzymasz 3 konkretne kroki na dziś – 
            dopasowane do Twojej sytuacji.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
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
              className="w-full sm:w-auto text-lg px-8 py-6 h-auto font-semibold"
              asChild
            >
              <a href="#how-it-works">
                Dołącz do tygodniowego pilotażu
              </a>
            </Button>
          </motion.div>

          {/* Safety notice */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            To narzędzie nie zastępuje pomocy profesjonalnej. W razie kryzysu zadzwoń{" "}
            <a href="tel:112" className="font-medium text-primary hover:underline">
              112
            </a>
            {" "}lub skontaktuj się z{" "}
            <Button variant="link" asChild className="h-auto p-0 text-xs">
              <a href="/support">profesjonalnym wsparciem</a>
            </Button>
            .
          </motion.p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5"></div>
      </div>
    </section>
  );
}