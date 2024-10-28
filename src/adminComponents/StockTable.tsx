"use client";
import React, { useEffect, useState } from "react";
import ListItems from "./listItems";
import AddStockForm from "./AddStockForm";
import { addItem, fetchItems } from "@/redux/reducerStock";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Stock } from "@/types";
import { Loader } from "lucide-react";

export default function StockTable() {
  const dispatch = useAppDispatch();
  const top10Stocks = useAppSelector((state) => state.top10Stocks);
  const { data, categorySelected } = top10Stocks;
  
  const [showAddStockForm, setShowAddStockForm] = useState(false);
  
  const handleAddStock = (newStock: Stock) => {
    console.log("newStock : ", newStock);
    if (categorySelected) {
      dispatch(addItem({ category: categorySelected, stock: newStock }));
    } else {
      console.error("Category is undefined");
    }
    console.log("submitting new stock");
  };

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  // useEffect(() => {
  //   setInitialStockData(top10Stocks.data);
  // }, [top10Stocks]);

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
        {top10Stocks.loading ? (
          <div className="w-full flex justify-center items-center h-40">
            <Loader className="animate-spin" />
          </div>
        ) : (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="text-sm min-w-full table-auto divide-y divide-gray-200 p-2 bg-gray-100">
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
                {data
                  .filter((data) => data.name === categorySelected)
                  .map((data) =>
                    data.stocks.map((stock) => (
                      <ListItems key={stock.name} stock={stock} />
                    ))
                  )}
              </tbody>
            </table>
          </div>
        )}
        {/* <div className="flex justify-center mt-4">
          <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-700">
            Submit Changes
          </button>
        </div> */}
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
