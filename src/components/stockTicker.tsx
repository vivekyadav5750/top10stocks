// src/components/StockTicker.tsx

import React, { useEffect, useState } from "react";

interface Stock {
  name: string;
  symbol: string;
  price: number;
  percentChange: number;
}

export default function StockTicker() {
  const [stickyStockData, setStickyStockData] = useState<Stock[]>([]);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/stock/getStickyStocks"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setStickyStockData(data);
        console.log("Stocks updated", data);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchStockData(); // Initial fetch
    const intervalId = setInterval(fetchStockData, 2550);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full mt-1 bg-gray-800 text-white h-10 flex items-center overflow-hidden ">
      <div className="ticker-wrapper flex animate-marquee whitespace-nowrap">
        {stickyStockData.map((stock, index) => (
          <div key={index} className="ticker-item flex mx-4">
            <span
              className={`text-sm ${
                stock.percentChange > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {stock.percentChange > 0 ? "▲" : "▼"}{" "}
              {Math.abs(stock.percentChange).toFixed(2)}%
            </span>
            <span className="mx-2 font-bold">{stock.name}</span>
            <span>{stock.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
