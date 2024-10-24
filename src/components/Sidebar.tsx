"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Sidebar() {
  const [sectorExpanded, setSectorExpanded] = useState(true);

  const INDEX_ITEMS = [
    { title: "Nifty50", path: "/about" },
    { title: "LargeCap", path: "/shop" },
    { title: "Mid Cap", path: "/categories" },
    { title: "Small Cap", path: "/contact" }
  ];

  const Sectors = [
    {
      title: "Banks",
      href: "/docs/primitives/alert-dialog",
      description:
        "A bank is a financial institution that accepts deposits from the public and creates a demand deposit while simultaneously making loans."
    },
    {
      title: "Software & IT",
      href: "/docs/primitives/hover-card",
      description:
        "Software & IT Services sector includes companies that develop software in various fields such as the Internet, applications, systems, and databases."
    },
    {
      title: "Automobile",
      href: "/docs/primitives/progress",
      description:
        "The automobile sector includes companies that design, develop, manufacture, market, and sell motor vehicles."
    },
    {
      title: "FMGC",
      href: "/docs/primitives/scroll-area",
      description:
        "The FMCG sector includes companies that produce and distribute consumer goods."
    },
    {
      title: "Metals, Mining and Energy",
      href: "/docs/primitives/tabs",
      description:
        "The Oil & Gas and Metals & Mining and Energy sector includes companies that explore, develop, and produce natural resources."
    },
    {
      title: "Defence",
      href: "/docs/primitives/tooltip",
      description:
        "The Defence sector includes companies that manufacture and distribute military equipment and services."
    }
  ];

  return (
    <aside className="hidden md:block w-64 bg-gray-100 p-4 h-full">
      <ul className="space-y-4 ">
        {/* Indices  */}
        <li className="space-y-2">
          <h2 className="font-semibold font-mono text-xl border-b-4 border-gray-700">Indices </h2>
          <ul className="space-y-2">
            {INDEX_ITEMS.map((item, index) => (
              <li
                key={item.title}
                // className={`text-md font-thin font-mono ${index % 2 === 0 ? 'bg-white' : 'bg-gray-200'} p-1`}
                className={`text-md font-thin font-mono shadow-[rgba(37,142,133,0.2)_-3px_0px_2px_0px] p-1 rounded-sm hover:bg-white`}
              >
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </ul>
        </li>

        {/* make sector expandable and like drop down */}
        <li className="space-y-2">
          <div className="flex items-center">
            <h2 className="font-semibold w-full font-mono text-xl border-b-4 border-gray-700">Sectors</h2>
            <button
              onClick={() => setSectorExpanded(!sectorExpanded)}
              className="ml-auto p-1"
            >
              {sectorExpanded ? <ChevronUp /> : <ChevronDown />}
            </button>
          </div>

          {sectorExpanded && (
            <ul className="space-y-2">
              {Sectors.map((item, index) => (
                <li
                  key={item.title}
                  // className={`text-md font-mono ${index % 2 === 0 ? 'bg-white' : 'bg-gray-200'} p-1`}
                  className={`text-md font-thin font-mono shadow-[rgba(37,142,133,0.2)_-3px_0px_2px_0px] p-1 rounded-sm hover:bg-white`}
                >
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </aside>
  );
}