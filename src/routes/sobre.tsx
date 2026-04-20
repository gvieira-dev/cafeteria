import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import interior from "@/assets/interior-corner.jpg";
import barista from "@/assets/barista.jpg";
import hero from "@/assets/hero-cafe.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Casa Colombo Cafeteria" },
      {
        name: "description",
        content:
          "Conheça a história da Casa Colombo: uma cafeteria afetiva no Ibituruna, em Montes Claros, com receitas feitas à mão e cuidado em cada detalhe.",
      },
      { property: "og:title", content: "Sobre a Casa Colombo" },
      { property: "og:description", content: "Uma cafeteria afetiva em Montes Claros · MG." },
      { property: "og:image", content: interior },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      <section className="relative h-[80vh] min-h-[500px] flex items-end overflow-hidden">
        <img src={interior} alt="Casa Colombo" className="absolute inset-0 h-full w-full object-cover" width={1200} height={1400} />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/50 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-5 md:px-10 pb-20 text-cream">
          <p className="text-xs uppercase tracking-[0.3em] opacity-80 mb-6">Nossa casa</p>
          <h1 className="font-display text-5xl md:text-8xl leading-[0.95] max-w-3xl">
            Uma cafeteria <span className="font-italic-display italic">com alma</span> mineira.
          </h1>
        </div>
      </section>

      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-5 md:px-10 text-forest-deep space-y-8 text-lg leading-relaxed">
          <p className="font-italic-display text-3xl md:text-4xl text-center leading-snug">
            "Quem entra na Casa Colombo, sente que chegou em casa."
          </p>
          <p>
            A Casa Colombo nasceu da vontade de transformar uma esquina do Ibituruna em um lugar
            que fosse, ao mesmo tempo, cafeteria, sala de visita e atelier de receitas afetivas.
          </p>
          <p>
            Cada croissant é folhado por 36 horas. Cada bolo sai do forno na hora certa. O café é
            de origem, coado lento no V60 ou tirado com cuidado no espresso. Não tem pressa por
            aqui — e é isso que faz a diferença.
          </p>
          <p>
            Acreditamos que comer bem é também sentir-se bem. Por isso pensamos em tudo: as cores
            verdes que abraçam, a luz natural, as plantas, a louça, a trilha sonora. Tudo pra você
            ficar mais um pouquinho.
          </p>
        </div>
      </section>

      <section className="bg-forest-deep text-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10 grid md:grid-cols-3 gap-10">
          {[
            { n: "2018", t: "O começo", d: "Abrimos as portas com 12 lugares e um sonho." },
            { n: "+50", t: "Receitas autorais", d: "De clássicos a inéditos, todos da nossa cozinha." },
            { n: "236", t: "Avaliações 4,5★", d: "Clientes que voltam sempre — nossa maior alegria." },
          ].map((s) => (
            <div key={s.n} className="border-t border-cream/20 pt-8">
              <div className="font-display text-6xl text-accent">{s.n}</div>
              <div className="font-display text-2xl mt-2">{s.t}</div>
              <p className="text-sm opacity-75 mt-3">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10 grid md:grid-cols-2 gap-10">
          <img src={barista} alt="Barista" className="w-full aspect-[4/5] object-cover rounded-sm" loading="lazy" width={1200} height={1400} />
          <img src={hero} alt="Salão" className="w-full aspect-[4/5] object-cover rounded-sm" loading="lazy" width={1920} height={1080} />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
