"use client";

import { NavigationButton } from "./NavigationButton";
import { NavigationBar } from "./Navigationbar";

// {
//   title: "HOME",
//   href: "/",
//   description: "La soluzione migliore per il tuo business?",
// },
const components: { title: string; href: string; description: string }[] = [
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

export function Nav(){

  return(
    <div>
      <div className="fixed top-2 left-2 z-50 md:hidden">
        <NavigationButton />
      </div>
      <div id="navigationbar" className="hidden fixed top-0 left-0 z-50 w-screen bg-torch-500 md:block">
        <NavigationBar />
      </div>
    </div>
  )
}