import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin } from "lucide-react";
import logo from "@/assets/casa-colombo-logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-forest-deep text-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-16 md:py-24 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Casa Colombo" className="h-12 w-12 rounded-full" loading="lazy" />
            <div>
              <div className="font-display text-2xl">Casa Colombo</div>
              <div className="text-xs uppercase tracking-[0.25em] opacity-60">Desde sempre, com afeto</div>
            </div>
          </div>
          <p className="mt-6 max-w-md font-italic-display text-xl leading-snug opacity-85">
            "Espaço acolhedor, cores aconchegantes, instagramável e ótimos produtos."
          </p>
          <p className="mt-2 text-xs opacity-50">— Avaliação Google · 4,5 ★ (236 avaliações)</p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] opacity-60 mb-4">Visite</h4>
          <p className="text-sm leading-relaxed flex gap-2">
            <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
            Av. Norival Guilherme Viêira, 129 — Ibituruna, Montes Claros · MG
          </p>
          <a href="tel:+553821005000" className="mt-4 text-sm flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="h-4 w-4" /> (38) 2100-5000
          </a>
          <a href="#" className="mt-2 text-sm flex items-center gap-2 hover:text-accent transition-colors">
            <Instagram className="h-4 w-4" /> @casacolombo
          </a>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] opacity-60 mb-4">Horários</h4>
          <ul className="text-sm space-y-1 opacity-90">
            <li className="flex justify-between"><span>Seg — Sex</span><span>09h — 19h</span></li>
            <li className="flex justify-between"><span>Sábado</span><span>09h — 20h</span></li>
            <li className="flex justify-between"><span>Domingo</span><span>14h — 19h</span></li>
          </ul>
          <div className="mt-6 flex gap-4 text-xs uppercase tracking-[0.2em]">
            <Link to="/cardapio" className="opacity-70 hover:opacity-100">Cardápio</Link>
            <Link to="/sobre" className="opacity-70 hover:opacity-100">Sobre</Link>
            <Link to="/visite" className="opacity-70 hover:opacity-100">Visite</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-5 md:px-10 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs opacity-50">
          <span>© {new Date().getFullYear()} Casa Colombo Cafeteria — Todos os direitos reservados.</span>
          <span className="font-italic-display text-sm">feito com café & cuidado</span>
        </div>
      </div>
    </footer>
  );
}
