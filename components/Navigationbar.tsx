"use client";

import { usePathname } from "next/navigation";

const components: { title: string; href: string; description: string }[] = [
  // {
  //   title: "HOME",
  //   href: "/",
  //   description: "La soluzione migliore per il tuo business?",
  // },
  {
    title: "BY DIGITAL PLATFORM",
    href: "/by-platform",
    description:
      "Cambia la modalità di lavoro e potenzia la produttività con Microsoft Teams. Ti forniamo prodotti audio e video di livello professionale, per collaborare efficacemente – ovunque ti trovi",
  },
  {
    title: "BY INDUSTRY",
    href: "/by-industry",
    description:
      "Porta il cliente all’interno della tua azienda virtuale in modo tale da presentare i tuoi migliori prodotti anche da remoto. Rendi la tua azienda flessibile e competitiva. Attiva gli strumenti di collaboration in ogni settore della tua azienda, compresa la produzione.",
  },
  {
    title: "BY WORKSPACE",
    href: "/by-workspace",
    description:
      "Sicurezza, efficienza e performance. Semplifica il tuo lavoro rendendo accessibili dati e applicazioni in qualsiasi momento e da qualsiasi luogo, in completa sicurezza. Scopri gli strumenti più adatti per i tuoi collaboratori aziendali",
  },
  {
    title: "SERVICES",
    href: "/servizi",
    description:
      "Scegli il percorso migliore per implementare Microsoft Teams, grazie ai nostri servizi.",
  },
];

export function NavigationBar() {
  const pathId = usePathname();

  return (
    <div className="flex gap-0">
      <a
        href="/"
        className="absolute left-0 top-2 ml-2 px-4 flex justify-center items-center">
        <img
          src="/images/logo_meetwirk_logo.png"
          alt="logo"
          className="w-8 h-8 z-[51]"
        />
      </a>

      <div className="text-black font-semibold flex flex-row grow justify-center">
        <a
          href="/"
          className={`group select-none relative self-center h-full p-3 ${
            pathId === "/" ? "text-gray-50 font-extrabold" : ""
          } hover:bg-torch-600 transition-colors duration-200`}>
          <span>HOME</span>
          <span
            className="pointer-events-none w-80 text-center bg-gray-50 p-1 mx-auto -mb-2 text-sm text-gray-900 rounded-md opacity-0 z-10
              absolute bottom-0 left-0 translate-y-full
              hover:hidden group-hover:opacity-100 transition-opacity">
            La soluzione migliore per il tuo business?
          </span>
        </a>

        {components.map((component, index) => (
          <a
            key={component.title}
            href={component.href}
            className={`group select-none relative self-center h-full p-3 ${
              pathId === component.href ? "text-gray-50 font-extrabold" : ""
            } hover:bg-torch-600 transition-colors duration-200`}>
            <span>{component.title}</span>

            <span
              className={`pointer-events-none w-80 text-center bg-gray-50 p-1 mx-auto -mb-2 text-sm text-gray-900 rounded-md opacity-0 z-10
                absolute bottom-0 translate-y-full ${
                  index < components.length - 1
                    ? "left-1/2 -translate-x-1/2 "
                    : "right-0"
                }
                hover:hidden group-hover:opacity-100 transition-opacity`}>
              {component.description.length > 60
                ? component.description.substring(0, 60) + "..."
                : component.description}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
