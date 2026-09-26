import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/eligibility", label: "Éligibilité" },
  { to: "/testimonials", label: "Témoignages" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const path = location.pathname;

  return (
    <header className="sticky top-0 z-50 border-b border-primary-foreground/10 bg-primary/95 text-primary-foreground backdrop-blur-md">
      <div className="mx-auto grid h-[72px] max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:flex">
        <Link to="/" onClick={() => setOpen(false)} className="min-w-0 shrink-0"><Logo /></Link>
        <nav className="ml-auto hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className={path === link.to ? "text-sm font-semibold text-accent" : "text-sm font-semibold text-primary-foreground/70 transition-colors hover:text-primary-foreground"}>
              {link.label}
            </Link>
          ))}
          <Link to="/user-space" className="border-l border-primary-foreground/15 pl-7 text-sm font-semibold text-primary-foreground/70 hover:text-primary-foreground">Mon espace</Link>
          <Link to="/loan-application" className="bg-accent px-5 py-3 text-sm font-extrabold text-accent-foreground transition-transform hover:-translate-y-0.5">Demander un prêt</Link>
        </nav>
        <button type="button" className="grid h-10 w-10 place-items-center text-primary-foreground lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-primary-foreground/10 px-5 py-5 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {[...links, { to: "/user-space" as const, label: "Mon espace" }].map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className={path === link.to ? "border-l-2 border-accent px-4 py-3 font-semibold text-accent" : "px-4 py-3 font-semibold text-primary-foreground/75"}>{link.label}</Link>
            ))}
            <Link to="/loan-application" onClick={() => setOpen(false)} className="mt-3 bg-accent px-5 py-3 text-center font-extrabold text-accent-foreground">Demander un prêt</Link>
          </div>
        </nav>
      )}
    </header>
  );
}