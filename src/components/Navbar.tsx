"use client";
import Link from "next/link";
import { NavigationMenuDemo } from "./Nav-Dropdown-Menu";
import { useState } from "react";
import {
  Activity,
  ChartNoAxesColumnDecreasing,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sectorExpanded, setSectorExpanded] = useState(false);
  const NAV_ITEMS = [
    { title: "Nifty50", path: "/about" },
    { title: "LargeCap", path: "/shop" },
    { title: "Mid Cap", path: "/categories" },
    { title: "Small Cap", path: "/contact" }
  ];

  const sector = [
    { title: "Auto", path: "/auto" },
    { title: "Bank", path: "/bank" },
    { title: "FMCG", path: "/fmcg" },
    { title: "IT", path: "/it" }
  ];

  return (
    <>
      <nav className="flex font-mono  h-16  shrink-0 w-full items-center justify-between  bg-gray-800 text-white p-4 shadow-md fixed z-50 ">
        <div className=" flex space-x-2 md:w-1/4  items-center ">
          {/* <div>
            <Link href={"/"}>
              <Activity />
            </Link>
          </div> */}

          <div className="flex items-center ">
            <Link href={"/"}>
              <span className="flex ml-2 text-lg font-semibold  hover:font-bold bg-gray-100 text-blue-700  px-4 py-2 rounded-md">
                <Activity /> Top 10 Stocks
              </span>
            </Link>
          </div>
        </div>

        {/* large and medium screen nav items  */}
        <div className="hidden md:flex w-3/4   items-center space-x-1  ">
          {NAV_ITEMS.map((item) => (
            <Link key={item.title} href={item.path}>
              <span className="w- flex text-md font-medium hover:bg-accent hover:text-accent-foreground px-4 py-2 rounded-md   ">
                {item.title}
              </span>
            </Link>
          ))}
          <NavigationMenuDemo />
        </div>

        <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex">
          <ChartNoAxesColumnDecreasing className="-rotate-90 md:hidden ml-auto" />
        </div>
      </nav>

      {/* mobile screen nav items */}
      <div
        className={`fixed top-16 left-0 w-full h-full bg-background/90 backdrop-blur-xl z-50 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center mt-8  h-full space-y-4">
          <div
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <ChartNoAxesColumnDecreasing className="rotate-45" />
          </div>

          {NAV_ITEMS.map((item) => (
            <Link
              key={item.title}
              href={item.path}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="font-medium w-full font-mono text-xl border-b-2 hover:text-slate-500 ">
                {item.title}
              </span>
            </Link>
          ))}


          {/* sector with ChevronUp and ChevronDown */}
          <div className="flex items-center">
            <h2 className=" font-medium w-full font-mono text-xl border-b-2">
              Sectors
            </h2>
            <button
              onClick={() => setSectorExpanded(!sectorExpanded)}
              className="ml-auto p-1"
            >
              {sectorExpanded ? <ChevronUp /> : <ChevronDown />}
            </button>

            {/* This part can be put below div to change pattern to show the subchild */}
            {sectorExpanded && (
              <ul className="space-y-2">
                {sector.map((item) => (
                  <li key={item.title} className={`text-lg font-mono p-1`}>
                    <Link href={item.path}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            )}

          </div>
        </div>
      </div>
    </>
  );
}