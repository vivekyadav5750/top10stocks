"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Banks",
    href: "/docs/primitives/alert-dialog",
    description:
    // description about banks sector in stock market
      "A bank is a financial institution that accepts deposits from the public and creates a demand deposit while simultaneously making loans.",
  },
  {
    title: "Software & IT Services",
    href: "/docs/primitives/hover-card",
    description:
      "Software & IT Services sector includes companies that develop software in various fields such as the Internet, applications, systems, and databases.",
  },
  {
    title: "Automobile",
    href: "/docs/primitives/progress",
    description:
      "The automobile sector includes companies that design, develop, manufacture, market, and sell motor vehicles.",
  },
  {
    title: "FMGC",
    href: "/docs/primitives/scroll-area",
    description: "The FMCG sector includes companies that produce and distribute consumer goods.",
  },
  {
    title: "Oil & Gas and Metals & Mining and Energy", 
    href: "/docs/primitives/tabs",
    description:
      "The Oil & Gas and Metals & Mining and Energy sector includes companies that explore, develop, and produce natural resources.",
  },
  {
    title: "Defence",
    href: "/docs/primitives/tooltip",
    description:
      "The Defence sector includes companies that manufacture and distribute military equipment and services.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
       
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sector Wise</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
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
          {...props}
        >
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
