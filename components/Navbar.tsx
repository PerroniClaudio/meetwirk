"use client";

import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { FaBars } from "react-icons/fa";

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

export function NavigationButton() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <img src="/images/favicon-ift.webp" alt="logo" className="w-6 h-6" />
            {/* <FaBars /> */}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <div className="col-span-2 flex w-full justify-center">
                <ListItem
                  key="HOME"
                  title="HOME"
                  href="/"
                  className="w-full"
                >
                  La soluzione migliore per il tuo business?
                </ListItem>
              </div>

              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}>
                  {component.description}
                </ListItem>
              ))}

              {/* <div className="col-span-2 flex w-full justify-center">
                <ListItem
                  key="SERVICES"
                  title="SERVICES"
                  href="/servizi"
                  className="w-full justify-center"
                >
                  Scegli il percorso migliore per implementare Microsoft Teams, grazie ai nostri servizi.
                </ListItem>
              </div> */}

            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
