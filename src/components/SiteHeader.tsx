import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/casa-colombo-logo.png";

const nav = [
  { to: "/", label: "Início" },
  { to: "/cardapio", label: "Cardápio" },
  { to: "/sobre", label: "Sobre" },
  { to: "/visite", label: "Visite" },
] as const;

export function SiteHeader({ variant = "transparent" }: { variant?: "transparent" | "solid" }) {
  const [open, setOpen] = useState(false);
  const base =
    variant === "solid"
      ? "bg-background/95 backdrop-blur border-b border-border text-foreground"
      : "bg-transparent text-cream";

  return (
    <header className={`fixed top-0 inset-x-0 z-50 ${base} transition-colors`}>
      <div className="mx-auto max-w-7xl px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Casa Colombo" className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover ring-1 ring-current/20" />
          <div className="leading-none">
            <div className="font-display text-lg md:text-xl tracking-tight">Casa Colombo</div>
            <div className="text-[10px] md:text-xs uppercase tracking-[0.25em] opacity-70">Cafeteria · MOC</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative tracking-wide hover:opacity-100 opacity-80 transition-opacity"
              activeProps={{ className: "opacity-100 font-medium" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://cardapio.speedysistemas.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center rounded-full border border-current px-5 py-2 text-xs uppercase tracking-[0.2em] hover:bg-current hover:text-background transition-colors"
          >
            Pedir agora
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2"
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-forest-deep text-cream border-t border-cream/10">
          <nav className="px-5 py-6 flex flex-col gap-4 text-base">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2 border-b border-cream/10"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://cardapio.speedysistemas.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-cream text-forest-deep px-5 py-3 text-xs uppercase tracking-[0.2em]"
            >
              Pedir agora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
