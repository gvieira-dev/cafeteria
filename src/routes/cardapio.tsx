import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import croissant from "@/assets/croissant.jpg";
import icedCoffee from "@/assets/iced-coffee.jpg";
import chocolateCake from "@/assets/chocolate-cake.jpg";
import cinnamonRoll from "@/assets/cinnamon-roll.jpg";
import quiche from "@/assets/quiche.jpg";

export const Route = createFileRoute("/cardapio")({
  head: () => ({
    meta: [
      { title: "Cardápio — Casa Colombo Cafeteria" },
      {
        name: "description",
        content:
          "Croissants, bolos afetivos, quiches, cafés especiais V60, espresso e drinks autorais. Conheça os destaques do cardápio da Casa Colombo.",
      },
      { property: "og:title", content: "Cardápio Casa Colombo" },
      { property: "og:description", content: "Croissants, bolos, quiches e cafés especiais." },
    ],
  }),
  component: CardapioPage,
});

const sections = [
  {
    title: "Salgados & Padaria",
    italic: "do forno",
    items: [
      { name: "Croissant Folhado", desc: "Manteiga francesa, 36 horas de fermentação", price: "R$ 14", img: croissant, popular: true },
      { name: "Quiche de Damasco com Bacon", desc: "Massa amanteigada e recheio cremoso", price: "R$ 28", img: quiche },
      { name: "Pão na Chapa com Requeijão", desc: "Clássico da casa, dourado na manteiga", price: "R$ 12" },
      { name: "Pão de Queijo — Joelho de Porco", desc: "Recheio defumado, massa de polvilho", price: "R$ 18" },
      { name: "Roll de Frango", desc: "Massa folhada, frango cremoso e ervas", price: "R$ 16" },
      { name: "Croque Monsieur", desc: "Presunto, queijo gruyère e bechamel", price: "R$ 26" },
      { name: "Crepioca de Frango", desc: "Goma e ovos, recheio leve", price: "R$ 22" },
      { name: "Torta de Frango com Chocolate Quente", desc: "Combinação afetiva da casa", price: "R$ 32" },
    ],
  },
  {
    title: "Doces & Bolos",
    italic: "afetivos",
    items: [
      { name: "Bolo de Chocolate com Soda de Morango", desc: "Recheio cremoso, drink incluso", price: "R$ 24", img: chocolateCake, popular: true },
      { name: "Bolo Brownie", desc: "Denso, molhado, com nibs de cacau", price: "R$ 14" },
      { name: "Bolo de Pamonha", desc: "Receita mineira, milho fresco", price: "R$ 12" },
      { name: "Cinnamon Roll", desc: "Glacê de cream cheese", price: "R$ 16", img: cinnamonRoll },
      { name: "Mil Folhas — Nozes", desc: "Camadas crocantes e creme", price: "R$ 18" },
      { name: "Caramelo Salgado", desc: "Sobremesa autoral", price: "R$ 14" },
      { name: "Café Gourmand", desc: "Café acompanhado de mini doces", price: "R$ 28" },
    ],
  },
  {
    title: "Cafés & Bebidas",
    italic: "lentos",
    items: [
      { name: "Café Gelado da Casa", desc: "Receita autoral · mais pedido", price: "R$ 16", img: icedCoffee, popular: true },
      { name: "Café Coado Hario V60", desc: "Grãos especiais, perfil doce", price: "R$ 14" },
      { name: "Espresso", desc: "Encorpado e cremoso", price: "R$ 8" },
      { name: "Chá de Maçã com Canela", desc: "Quentinho e perfumado", price: "R$ 12" },
    ],
  },
];

function CardapioPage() {
  return (
    <div className="bg-cream text-forest-deep min-h-screen">
      <SiteHeader variant="solid" />

      <header className="pt-32 md:pt-40 pb-16 md:pb-20 text-center px-5">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">Cardápio</p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl mx-auto">
          O que está <span className="font-italic-display italic">quentinho</span> hoje
        </h1>
        <p className="mt-6 max-w-xl mx-auto opacity-75">
          Receitas feitas todos os dias, com ingredientes de origem. R$ 40–60 por pessoa.
        </p>
      </header>

      <div className="mx-auto max-w-6xl px-5 md:px-10 pb-24 space-y-24">
        {sections.map((section) => (
          <section key={section.title}>
            <div className="flex items-end justify-between border-b border-forest-deep/20 pb-4 mb-10">
              <h2 className="font-display text-3xl md:text-5xl">
                {section.title}{" "}
                <span className="font-italic-display italic opacity-70">{section.italic}</span>
              </h2>
            </div>
            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {section.items.map((item) => (
                <li key={item.name} className="flex gap-5 group">
                  {item.img && (
                    <div className="hidden sm:block flex-shrink-0">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="h-24 w-24 rounded-sm object-cover"
                        loading="lazy"
                        width={200}
                        height={200}
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-xl flex items-center gap-2">
                        {item.name}
                        {item.popular && (
                          <span className="text-[9px] uppercase tracking-[0.2em] bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
                            popular
                          </span>
                        )}
                      </h3>
                      <span className="font-display text-base whitespace-nowrap">{item.price}</span>
                    </div>
                    <p className="text-sm opacity-70 mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="bg-forest-deep text-cream rounded-sm p-10 md:p-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] opacity-70 mb-4">Quer pedir agora?</p>
          <h3 className="font-display text-3xl md:text-5xl">
            Faça seu pedido <span className="font-italic-display italic">online</span>
          </h3>
          <a
            href="https://cardapio.speedysistemas.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-full bg-cream text-forest-deep px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-accent hover:text-cream transition-colors"
          >
            Abrir cardápio digital →
          </a>
        </section>
      </div>

      <SiteFooter />
    </div>
  );
}
