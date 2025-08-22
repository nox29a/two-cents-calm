import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ExternalLinkButton } from "@/components/ExternalLinkButton";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Jak to działa", href: "#how-it-works" },
    { label: "Bezpieczeństwo", href: "#security" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontakt", href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold">
            🧘
          </div>
          <span className="text-xl font-semibold">MindCheck</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          
          {/* CTA Button - Desktop */}
          <ExternalLinkButton
            href={import.meta.env.VITE_FORM_URL || "#"}
            variant="default"
            size="sm"
            className="hidden md:inline-flex"
            aria-label="Rozpocznij check-in głosowy"
          >
            Zrób check-in
          </ExternalLinkButton>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Otwórz menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b bg-background"
          >
            <nav className="container space-y-4 px-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <ExternalLinkButton
                href={import.meta.env.VITE_FORM_URL || "#"}
                variant="default"
                size="sm"
                className="w-full"
                aria-label="Rozpocznij check-in głosowy"
              >
                Zrób check-in
              </ExternalLinkButton>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}