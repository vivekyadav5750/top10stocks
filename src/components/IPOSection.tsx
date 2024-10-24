"use client";
import React, { useState } from "react";

type IPOSectionProps = {
  ipoList: {
    name: string;

    gmp: string;

    open: string;

    close: string;

    recommendation: string;

    allotment: string;

    link: string;
  }[];

  smpIpos: {
    name: string;

    gmp: string;

    open: string;

    close: string;

    recommendation: string;

    allotment: string;

    link: string;
  }[];
};

export default function IPOSection({
  ipoList = [],
  smpIpos = []
}: IPOSectionProps) {
  // Default value to empty array
  const [activeTab, setActiveTab] = useState<"main" | "sme">("main");
  console.log("smpe", smpIpos);
  return (
    <div className="bg-gray-50 p-4 rounded-lg my-8">
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "main" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setActiveTab("main")}
        >
          Main Board IPOs
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "sme" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setActiveTab("sme")}
        >
          SME IPOs
        </button>
      </div>
      <div className="container mx-auto  overflow-auto">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="min-w-full table-auto w-full">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="p-2">Name</th>
                <th className="p-2">GMP</th>
                <th className="p-2">Open</th>
                <th className="p-2">Close</th>
                <th className="p-2">Recommendation</th>
                <th className="p-2">Allotment</th>
                <th className="p-2">More Details</th>
              </tr>
            </thead>
            <tbody>
              {activeTab === "main" &&
                ipoList.map((ipo, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-100 transition-colors text-gray-700"
                  >
                    <td className="p-2">{ipo.name}</td>
                    <td className="p-2">{ipo.gmp}</td>
                    <td className="p-2">{ipo.open}</td>
                    <td className="p-2">{ipo.close}</td>
                    <td className="p-2">{ipo.recommendation}</td>
                    <td className="p-2">
                      <a
                        href={ipo.allotment}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Alotment Link
                      </a>
                    </td>
                    <td className="p-2">
                      <a
                        href={ipo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        View on MoneyControl
                      </a>
                    </td>
                  </tr>
                ))}

              {activeTab === "sme" &&
                smpIpos.map((ipo, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-100 transition-colors text-gray-700"
                  >
                    <td className="p-2">{ipo.name}</td>
                    <td className="p-2">{ipo.gmp}</td>
                    <td className="p-2">{ipo.open}</td>
                    <td className="p-2">{ipo.close}</td>
                    <td className="p-2">{ipo.recommendation}</td>
                    {/* <td className="p-2">{ipo.allotment}</td>
                    <td className="p-2">
                      <a href={ipo.link}>More Details</a>
                    </td> */}
                    <td className="p-2">
                      <a
                        href={ipo.allotment}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Alotment Link
                      </a>
                    </td>
                    <td className="p-2">
                      <a
                        href={ipo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        View on MoneyControl
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
