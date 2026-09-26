import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <div className="grid gap-12 border-b border-primary-foreground/15 pb-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div><Logo size="lg" /><p className="mt-5 max-w-sm text-sm leading-7 text-primary-foreground/60">Un accès simple au financement pour les étudiants du Bénin, avec des conditions expliquées avant tout engagement.</p></div>
          <div><p className="mb-4 text-xs font-extrabold uppercase text-accent">Explorer</p><div className="grid gap-3 text-sm text-primary-foreground/70"><Link to="/eligibility">Éligibilité</Link><Link to="/testimonials">Témoignages</Link><Link to="/faq">Questions fréquentes</Link></div></div>
          <div><p className="mb-4 text-xs font-extrabold uppercase text-accent">Accès</p><div className="grid gap-3 text-sm text-primary-foreground/70"><Link to="/user-space">Mon espace</Link><Link to="/contact">Nous contacter</Link><Link to="/admin" className="inline-flex items-center gap-1">Administration <ArrowUpRight className="h-3.5 w-3.5" /></Link></div></div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-primary-foreground/45 sm:flex-row sm:items-center sm:justify-between"><p>© 2024 CampusFund. Tous droits réservés.</p><p>Accessibilité · Confiance · Clarté</p></div>
      </div>
    </footer>
  );
}