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
  {
    title: "HOME",
    href: "/",
    description: "La soluzione migliore per il tuo business?",
  },
  {
    title: "BY PLATFORM",
    href: "/by-platform",
    description:
      "Prodotti audio e video di livello professionale, per offrirti straordinarie esperienze con Microsoft Teams - ovunque ti trovi",
  },
  {
    title: "BY INDUSTRY",
    href: "/by-industry",
    description:
      "Coinvolgi le persone. Crea connessioni più profonde. Ottieni di più. Con potenti prodotti e servizi di collaboration per il tuo settore. Nessuno è meglio di noi nell’aiutare le persone a lavorare insieme per fare qualcosa di eccezionale.",
  },
  {
    title: "BY WORKSPACE",
    href: "/by-workspace",
    description:
      "Come tutti i migliori nuovi assunti, ognuna delle nostre soluzioni entra nei tuoi sistemi e si mette subito al lavoro. Grazie alla partnership con Microsoft ti offriamo una suite di prodotti realizzati appositamente.",
  },
];

export function NavigationButton() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <FaBars />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}>
                  {component.description}
                </ListItem>
              ))}
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
