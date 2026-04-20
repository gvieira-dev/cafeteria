import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, ArrowRight, Coffee, Heart, MapPin, Clock } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import hero from "@/assets/hero-cafe.jpg";
import croissant from "@/assets/croissant.jpg";
import icedCoffee from "@/assets/iced-coffee.jpg";
import chocolateCake from "@/assets/chocolate-cake.jpg";
import cinnamonRoll from "@/assets/cinnamon-roll.jpg";
import quiche from "@/assets/quiche.jpg";
import interior from "@/assets/interior-corner.jpg";
import barista from "@/assets/barista.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa Colombo — Cafeteria aconchegante em Montes Claros" },
      {
        name: "description",
        content:
          "Cafeteria especial no Ibituruna com croissants artesanais, bolos, café coado V60 e atmosfera acolhedora. Av. Norival Guilherme Viêira, 129 — Montes Claros · MG.",
      },
      { property: "og:title", content: "Casa Colombo · Cafeteria · Montes Claros" },
      { property: "og:description", content: "Café especial, doces afetivos e um espaço pra ficar." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={hero}
          alt="Interior da Casa Colombo com plantas e luz dourada"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/60 via-forest-deep/30 to-forest-deep/95" />
        <div className="absolute inset-0 grain" />

        <div className="relative mx-auto max-w-7xl px-5 md:px-10 pb-16 md:pb-28 pt-32 w-full text-cream">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] opacity-80 mb-6">
            <span className="h-px w-10 bg-cream/60" />
            Ibituruna · Montes Claros · MG
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl leading-[0.95] max-w-4xl">
            Um café <span className="font-italic-display italic font-light">como visita</span>
            <br />de domingo.
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg opacity-85 leading-relaxed">
            Croissants folhados na hora, bolos afetivos, V60 coado com calma e um canto bonito
            pra sentar. Casa Colombo é onde o tempo fica mais devagar.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/cardapio"
              className="group inline-flex items-center gap-2 rounded-full bg-cream text-forest-deep px-7 py-4 text-sm uppercase tracking-[0.2em] hover:bg-accent hover:text-cream transition-colors"
            >
              Ver cardápio
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/visite"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-4 text-sm uppercase tracking-[0.2em] hover:bg-cream/10 transition-colors"
            >
              Como chegar
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="opacity-90">4,5 · 236 avaliações no Google</span>
            </div>
            <span className="opacity-60">·</span>
            <span className="opacity-90">R$ 40–60 por pessoa</span>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">Bem-vindo à casa</p>
          <p className="font-display text-3xl md:text-5xl leading-tight text-forest-deep">
            Aqui o café é <span className="font-italic-display italic">passado devagar</span>,
            o pão de queijo sai quentinho do forno e tem sempre um bolo novo pra provar.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-8 text-left">
            <Feature icon={<Coffee className="h-5 w-5" />} title="Café especial" text="Grãos selecionados, V60, espresso e drinks gelados de assinatura." />
            <Feature icon={<Heart className="h-5 w-5" />} title="Feito à mão" text="Croissants, quiches, brownies e cinnamon rolls assados todos os dias." />
            <Feature icon={<MapPin className="h-5 w-5" />} title="Atmosfera" text="Espaço instagramável, plantas, luz natural e cantos pra ler ou conversar." />
          </div>
        </div>
      </section>

      {/* SIGNATURE GRID */}
      <section className="bg-background py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Mais pedidos</p>
              <h2 className="font-display text-4xl md:text-6xl text-forest-deep max-w-2xl">
                Os queridinhos <span className="font-italic-display italic">da casa</span>
              </h2>
            </div>
            <Link to="/cardapio" className="text-sm uppercase tracking-[0.2em] text-forest-deep border-b border-forest-deep pb-1 hover:text-accent hover:border-accent transition-colors">
              Cardápio completo →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <DishCard image={croissant} name="Croissant Folhado" tag="Mais pedido" />
            <DishCard image={icedCoffee} name="Café Gelado" tag="Assinatura" />
            <DishCard image={chocolateCake} name="Bolo de Chocolate" tag="Recheio + soda de morango" />
            <DishCard image={cinnamonRoll} name="Cinnamon Roll" tag="Quentinho" />
            <DishCard image={quiche} name="Quiche de Damasco" tag="Com bacon" />
            <DishCard image={chocolateCake} name="Bolo Brownie" tag="Denso & molhado" />
          </div>
        </div>
      </section>

      {/* SPLIT — STORY */}
      <section className="bg-forest-deep text-cream py-24 md:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 md:px-10 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative">
            <img
              src={interior}
              alt="Cantinho da Casa Colombo com tijolos e plantas"
              className="w-full aspect-[4/5] object-cover rounded-sm shadow-warm"
              loading="lazy"
              width={1200}
              height={1400}
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-accent text-accent-foreground px-6 py-4 rounded-sm shadow-soft">
              <div className="text-3xl font-display">4,5★</div>
              <div className="text-[10px] uppercase tracking-[0.25em]">236 avaliações</div>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] opacity-70 mb-6">Nossa história</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              Uma casa <span className="font-italic-display italic">aberta</span> pra quem ama café.
            </h2>
            <p className="mt-8 text-base md:text-lg opacity-85 leading-relaxed">
              A Casa Colombo nasceu da vontade de criar um lugar que fosse parte cafeteria,
              parte sala de visita. Receitas afetivas, ingredientes selecionados e um cuidado
              especial com cada detalhe — do prato à cor da parede.
            </p>
            <p className="mt-6 font-italic-display text-2xl opacity-90">
              "Sanduíche perfeito, croissant uma delícia. Voltarei sempre."
            </p>
            <p className="text-xs opacity-50 mt-2">— avaliação Google</p>
            <Link to="/sobre" className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] border-b border-cream pb-1 hover:text-accent hover:border-accent transition-colors">
              Conheça a casa →
            </Link>
          </div>
        </div>
      </section>

      {/* CRAFT */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">Café de origem</p>
            <h2 className="font-display text-4xl md:text-6xl text-forest-deep leading-[1.05]">
              V60, espresso, gourmand. <span className="font-italic-display italic">Do seu jeito.</span>
            </h2>
            <ul className="mt-10 space-y-5 text-forest-deep">
              {[
                ["Hario V60", "Coado lento, perfil delicado e doce."],
                ["Espresso", "Encorpado, com crema cremosa."],
                ["Café Gourmand", "Pequenos doces para acompanhar o café."],
                ["Café Gelado", "Receita autoral da casa."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-4 border-b border-forest-deep/15 pb-5">
                  <Coffee className="h-5 w-5 mt-1 text-accent flex-shrink-0" />
                  <div>
                    <div className="font-display text-xl">{t}</div>
                    <div className="text-sm opacity-75 mt-1">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={barista}
              alt="Barista coando café V60"
              className="w-full aspect-[4/5] object-cover rounded-sm shadow-soft"
              loading="lazy"
              width={1200}
              height={1400}
            />
          </div>
        </div>
      </section>

      {/* CTA VISIT */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-5 md:px-10 text-center">
          <Clock className="h-6 w-6 text-accent mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-6xl text-forest-deep">
            Te esperamos <span className="font-italic-display italic">amanhã às 9h.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg opacity-75 max-w-xl mx-auto">
            Av. Norival Guilherme Viêira, 129 — Ibituruna, Montes Claros · MG
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Casa+Colombo+Montes+Claros"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-forest-deep text-cream px-7 py-4 text-sm uppercase tracking-[0.2em] hover:bg-accent transition-colors"
            >
              Traçar rota <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+553821005000"
              className="inline-flex items-center gap-2 rounded-full border border-forest-deep px-7 py-4 text-sm uppercase tracking-[0.2em] text-forest-deep hover:bg-forest-deep hover:text-cream transition-colors"
            >
              (38) 2100-5000
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div>
      <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-forest-deep text-cream mb-4">
        {icon}
      </div>
      <h3 className="font-display text-xl text-forest-deep">{title}</h3>
      <p className="text-sm opacity-75 mt-2 leading-relaxed">{text}</p>
    </div>
  );
}

function DishCard({ image, name, tag }: { image: string; name: string; tag: string }) {
  return (
    <article className="group">
      <div className="overflow-hidden rounded-sm aspect-[4/5] bg-muted">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
          width={800}
          height={1000}
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-3">
        <h3 className="font-display text-xl text-forest-deep">{name}</h3>
        <span className="text-[10px] uppercase tracking-[0.2em] text-accent">{tag}</span>
      </div>
    </article>
  );
}
