"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { useAppDispatch } from "@/redux/hook";
import { setSector } from "@/redux/reducerStock";
import { useRouter } from "next/navigation";

const components: { title: string; description: string }[] = [
  {
    title: "Finance/Bank",
    description:
      // description about banks sector in stock market
      "A bank is a financial institution that accepts deposits from the public and creates a demand deposit while simultaneously making loans."
  },
  {
    title: "Technology",
    description:
      "Software & IT Services sector includes companies that develop software in various fields such as the Internet, applications, systems, and databases."
  },
  {
    title: "Automobile",
    description:
      "The automobile sector includes companies that design, develop, manufacture, market, and sell motor vehicles."
  },
  {
    title: "FMCG",
    description:
      "The FMCG sector includes companies that produce and distribute consumer goods."
  },
  {
    title: "Energy",
    description:
      "The Oil & Gas and Metals & Mining and Energy sector includes companies that explore, develop, and produce natural resources."
  },
  {
    title: "Defence",
    description:
      "The Defence sector includes companies that manufacture and distribute military equipment and services."
  }
];

export function NavigationMenuDemo() {
  const router = useRouter();
  const dispatch = useAppDispatch();
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
                  onClick={() => {dispatch(setSector(component.title)); router.push(`/?category=${component.title}`);}}
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
