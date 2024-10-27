"use client"
import React from "react";
import { useSelector } from "react-redux";
import { selectorStock } from "@/redux/reducer";
import dataStockCatergory from "@/data/stockCatergory";


export default function StockTable() {
  const initialStockData = dataStockCatergory;
  const { categorySelected } = useSelector(selectorStock);
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-2xl font-semibold font-mono p-1  ">{categorySelected}</h1>
      </div>

      <div className="container mx-auto  overflow-auto">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="min-w-full table-fixed divide-y divide-gray-200 p-2 bg-red-300">
            <thead className="bg-blue-500 text-white p-2">
              <tr>
                <th className="py-1 px-8 sm:p-3 text-left sticky left-0 bg-blue-700 z-10 border-r-1">
                  Company
                </th>
                <th className="py-1 px-3 sm:p-3 text-left">Current Price</th>
                <th className="py-1 px-3 sm:p-3 text-left">Market Cap</th>
                <th className="py-1 px-3 sm:p-3 text-left">
                  Recommended Buy Price
                </th>
                <th className="py-1 px-3 sm:p-3 text-left">1-Year Return</th>
                <th className="py-1 px-3 sm:p-3 text-left">52Week High</th>
                <th className="py-1 px-3 sm:p-3 text-left">52Week Low</th>
                <th className="py-1 px-3 sm:p-3 text-left">More Details</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 p-2">
              {initialStockData
                .filter((data) => data.categories === categorySelected)
                .map((data) =>
                  data.stocks.map((stock) => (
                    <tr
                      key={stock.name}
                      className="hover:bg-gray-100 transition-colors text-gray-700"
                    >
                      {/* Sticky column for the name */}
                      <td className="py-1  sm:p-3 sticky left-0 bg-white z-10 border-2">
                        {stock.name}
                      </td>
                      <td className="py-1  sm:p-3">{stock.currentPrice}</td>
                      <td className="py-1  sm:p-3">{stock.marketCap}</td>
                      <td className="py-1  sm:p-3">
                        {stock.recommendedBuyPrice}
                      </td>
                      <td className="py-1  sm:p-3">{stock.oneYearReturn}</td>
                      <td className="py-1  sm:p-3">{stock.high52}</td>
                      <td className="py-1  sm:p-3">{stock.low52}</td>
                      <td className="py-1  sm:p-3">
                        <a
                          href={stock.moreDetailsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          View on MoneyControl
                        </a>
                      </td>
                    </tr>
                  ))
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
