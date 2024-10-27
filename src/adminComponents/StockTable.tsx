"use client";
import React, { useState } from "react";
import ListItems from "./listItems";
import AddStockForm from "./AddStockForm";
import { useSelector } from "react-redux";
import { selectorStock } from "@/redux/reducer";
import dataStockCatergory from "@/data/stockCatergory";


type Stock = {
  name: string;
  currentPrice: number;
  marketCap: string;
  recommendedBuyPrice: number;
  oneYearReturn: string;
  high52: number;
  low52: number;
  moreDetailsLink: string;
};

export default function StockTable() {
  const [initialStockData, setInitialStockData] = useState(dataStockCatergory);
  const [showAddStockForm, setShowAddStockForm] = useState(false);

  const {categorySelected} = useSelector(selectorStock);

  const handleAddStock = (newStock: Stock) => {
    setInitialStockData((prevData) =>
      prevData.map((data) =>
        data.sector === sector_stock_data
          ? { ...data, stocks: [...data.stocks, newStock] }
          : data
      )
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold font-mono p-1">
          {categorySelected}
        </h1>
        <button
          className="bg-green-700 text-black py-2 px-4 rounded hover:bg-green-700"
          onClick={() => setShowAddStockForm(true)}
        >
          Add Stock
        </button>
      </div>

      <div className="container mx-auto overflow-auto">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="min-w-full table-auto divide-y divide-gray-200 p-2 bg-gray-100">
            <thead className="bg-blue-500 text-white">
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
                <th className="py-1 px-3 sm:p-3 text-left">52-Week High</th>
                <th className="py-1 px-3 sm:p-3 text-left">52-Week Low</th>
                <th className="py-1 px-3 sm:p-3 text-left">More Details</th>
                <th className="py-1 px-3 sm:p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {initialStockData
                .filter((data) => data.categories === categorySelected)
                .map((data) =>
                  data.stocks.map((stock) => (
                    <ListItems key={stock.name} stock={stock} />
                  ))
                )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-700">
            Submit Changes
          </button>
        </div>
      </div>

      {showAddStockForm && (
        <AddStockForm
          onClose={() => setShowAddStockForm(false)}
          onSubmit={handleAddStock}
        />
      )}
    </div>
  );
}
