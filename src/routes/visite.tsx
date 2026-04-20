import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Instagram, Globe } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/visite")({
  head: () => ({
    meta: [
      { title: "Visite — Casa Colombo · Av. Norival Guilherme Viêira, 129" },
      {
        name: "description",
        content:
          "Estamos no Ibituruna, em Montes Claros · MG. Veja horários, telefone, rota e tudo que você precisa para visitar a Casa Colombo.",
      },
      { property: "og:title", content: "Visite a Casa Colombo" },
      { property: "og:description", content: "Av. Norival Guilherme Viêira, 129 — Ibituruna, Montes Claros · MG." },
    ],
  }),
  component: VisitePage,
});

function VisitePage() {
  return (
    <div className="bg-cream text-forest-deep min-h-screen">
      <SiteHeader variant="solid" />

      <header className="pt-32 md:pt-40 pb-16 text-center px-5">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">Venha tomar um café</p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl mx-auto">
          Te esperamos <span className="font-italic-display italic">na esquina</span> do Ibituruna
        </h1>
      </header>

      <section className="mx-auto max-w-7xl px-5 md:px-10 pb-24 grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3 aspect-[4/3] md:aspect-auto md:h-[600px] rounded-sm overflow-hidden shadow-soft">
          <iframe
            title="Mapa Casa Colombo"
            src="https://www.google.com/maps?q=Av.+Norival+Guilherme+Vi%C3%AAira,+129+-+Ibituruna,+Montes+Claros+-+MG&output=embed"
            className="w-full h-full border-0 grayscale-[20%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="md:col-span-2 bg-forest-deep text-cream p-8 md:p-12 rounded-sm flex flex-col">
          <h2 className="font-display text-3xl md:text-4xl">
            Casa Colombo
            <span className="block font-italic-display italic text-xl opacity-80 mt-1">Cafeteria</span>
          </h2>

          <div className="mt-8 space-y-6 text-sm">
            <Info icon={<MapPin className="h-4 w-4" />} title="Endereço">
              Av. Norival Guilherme Viêira, 129<br />
              Ibituruna · Montes Claros · MG · 39401-289
            </Info>
            <Info icon={<Phone className="h-4 w-4" />} title="Telefone">
              <a href="tel:+553821005000" className="hover:text-accent">(38) 2100-5000</a>
            </Info>
            <Info icon={<Clock className="h-4 w-4" />} title="Horários">
              Seg–Sex · 09h às 19h<br />
              Sábado · 09h às 20h<br />
              Domingo · 14h às 19h
            </Info>
            <Info icon={<Globe className="h-4 w-4" />} title="Cardápio digital">
              <a href="https://cardapio.speedysistemas.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-accent underline-offset-4 hover:underline">
                cardapio.speedysistemas.com.br
              </a>
            </Info>
            <Info icon={<Instagram className="h-4 w-4" />} title="Instagram">
              @casacolombo
            </Info>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Casa+Colombo+Montes+Claros"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto pt-10 inline-flex items-center justify-center rounded-full bg-cream text-forest-deep px-7 py-4 text-sm uppercase tracking-[0.2em] hover:bg-accent hover:text-cream transition-colors"
          >
            Traçar rota →
          </a>
        </div>
      </section>

      <section className="bg-forest-deep text-cream py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-10 text-center">
          <p className="font-italic-display text-3xl md:text-4xl leading-snug opacity-90">
            "Espaço acolhedor, cores aconchegantes, instagramável e ótimos produtos."
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] opacity-60">Avaliação Google · 4,5 ★</p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Info({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 text-accent">{icon}</div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.25em] opacity-60 mb-1">{title}</div>
        <div className="leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
