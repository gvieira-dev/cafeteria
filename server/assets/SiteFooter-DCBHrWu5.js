import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-CRLfITHM.js";
import { L as Link } from "./router-Bb06X24e.js";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$4 = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
];
const Instagram = createLucideIcon("instagram", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
const logo = "/cafeteria/assets/casa-colombo-logo-CpdYPLlA.png";
const nav = [
  { to: "/", label: "Início" },
  { to: "/cardapio", label: "Cardápio" },
  { to: "/sobre", label: "Sobre" },
  { to: "/visite", label: "Visite" }
];
function SiteHeader({ variant = "transparent" }) {
  const [open, setOpen] = reactExports.useState(false);
  const base = variant === "solid" ? "bg-background/95 backdrop-blur border-b border-border text-foreground" : "bg-transparent text-cream";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: `fixed top-0 inset-x-0 z-50 ${base} transition-colors`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-10 h-16 md:h-20 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Casa Colombo", className: "h-10 w-10 md:h-12 md:w-12 rounded-full object-cover ring-1 ring-current/20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg md:text-xl tracking-tight", children: "Casa Colombo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] md:text-xs uppercase tracking-[0.25em] opacity-70", children: "Cafeteria · MOC" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-8 text-sm", children: [
        nav.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: item.to,
            className: "relative tracking-wide hover:opacity-100 opacity-80 transition-opacity",
            activeProps: { className: "opacity-100 font-medium" },
            children: item.label
          },
          item.to
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://cardapio.speedysistemas.com.br",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "ml-2 inline-flex items-center rounded-full border border-current px-5 py-2 text-xs uppercase tracking-[0.2em] hover:bg-current hover:text-background transition-colors",
            children: "Pedir agora"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setOpen((v) => !v),
          className: "md:hidden p-2 -mr-2",
          "aria-label": "Abrir menu",
          children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6" })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden bg-forest-deep text-cream border-t border-cream/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "px-5 py-6 flex flex-col gap-4 text-base", children: [
      nav.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: item.to,
          onClick: () => setOpen(false),
          className: "py-2 border-b border-cream/10",
          children: item.label
        },
        item.to
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://cardapio.speedysistemas.com.br",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "mt-2 inline-flex items-center justify-center rounded-full bg-cream text-forest-deep px-5 py-3 text-xs uppercase tracking-[0.2em]",
          children: "Pedir agora"
        }
      )
    ] }) })
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-forest-deep text-cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-10 py-16 md:py-24 grid gap-12 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Casa Colombo", className: "h-12 w-12 rounded-full", loading: "lazy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl", children: "Casa Colombo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.25em] opacity-60", children: "Desde sempre, com afeto" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md font-italic-display text-xl leading-snug opacity-85", children: '"Espaço acolhedor, cores aconchegantes, instagramável e ótimos produtos."' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs opacity-50", children: "— Avaliação Google · 4,5 ★ (236 avaliações)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs uppercase tracking-[0.25em] opacity-60 mb-4", children: "Visite" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm leading-relaxed flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 flex-shrink-0 mt-0.5" }),
          "Av. Norival Guilherme Viêira, 129 — Ibituruna, Montes Claros · MG"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+553821005000", className: "mt-4 text-sm flex items-center gap-2 hover:text-accent transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
          " (38) 2100-5000"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "mt-2 text-sm flex items-center gap-2 hover:text-accent transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" }),
          " @casacolombo"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs uppercase tracking-[0.25em] opacity-60 mb-4", children: "Horários" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm space-y-1 opacity-90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Seg — Sex" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "09h — 19h" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sábado" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "09h — 20h" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Domingo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "14h — 19h" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex gap-4 text-xs uppercase tracking-[0.2em]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cardapio", className: "opacity-70 hover:opacity-100", children: "Cardápio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sobre", className: "opacity-70 hover:opacity-100", children: "Sobre" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/visite", className: "opacity-70 hover:opacity-100", children: "Visite" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-cream/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 md:px-10 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs opacity-50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Casa Colombo Cafeteria — Todos os direitos reservados."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-italic-display text-sm", children: "feito com café & cuidado" })
    ] }) })
  ] });
}
export {
  Instagram as I,
  MapPin as M,
  Phone as P,
  SiteHeader as S,
  SiteFooter as a,
  createLucideIcon as c
};
