// src/components/StockTicker.tsx

import React from 'react';

interface Stock {
  name: string;
  price: number;
  change: number;
  percentChange: number;
}

const stocksData: Stock[] = [
  { name: 'BAJFINANCE', price: 6995.80, change: 4.76, percentChange: 4.76 },
  { name: 'BHARTIARTL', price: 1685.80, change: -0.38, percentChange: -0.38 },
  { name: 'HDFCBANK', price: 1735.80, change: 1.24, percentChange: 1.24 },
  { name: 'HINDUNILVR', price: 2659.30, change: -0.84, percentChange: -0.84 },
  { name: 'INDIGO', price: 4520.00, change: -0.10, percentChange: -0.10 },
  { name: 'ITC', price: 480.35, change: -0.30, percentChange: -0.30 },
  { name: 'MARUTI', price: 9200.75, change: 2.10, percentChange: 2.10 },
  // Add more stocks as needed
];

export default function StockTicker() {
  return (
    <div className="w-full mt-1 bg-gray-800 text-white h-10 flex items-center overflow-hidden ">
      <div className="ticker-wrapper flex animate-marquee whitespace-nowrap">
        {stocksData.map((stock, index) => (
          <div key={index} className="ticker-item flex mx-4">
            <span className={`text-sm ${stock.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {stock.change > 0 ? '▲' : '▼'} {Math.abs(stock.percentChange).toFixed(2)}%
            </span>
            <span className="mx-2 font-bold">{stock.name}</span>
            <span>{stock.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
