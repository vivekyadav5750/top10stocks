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

  // get stickyStockData in market hours and every 2.55 seconds ...
  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch(
          "https://top10stocks-backend.onrender.com/api/stock/getStickyStocks"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setStickyStockData(data);
        // console.log("Stocks updated", data);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };
  
    const isMarketOpen = () => {
      const now = new Date();
      const day = now.getDay();
      const hours = now.getHours();
      const minutes = now.getMinutes();
  
      // Market is open Monday to Friday, 9:15 AM - 3:30 PM
      const isWeekday = day >= 1 && day <= 5; // 1 = Monday, 5 = Friday
      const isDuringTradingHours =
        (hours > 9 || (hours === 9 && minutes >= 15)) && 
        (hours < 15 || (hours === 15 && minutes <= 30));
  
      return isWeekday && isDuringTradingHours;
    };
  
    // Initial fetch for data regardless of market hours
    fetchStockData();
  
    const intervalId = setInterval(() => {
      if (isMarketOpen()) {
        fetchStockData();
      }
    }, 2550);
  
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
