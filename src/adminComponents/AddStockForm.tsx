import { Stock } from "@/types";
import React, { useState } from "react";

type AddStockFormProps = {
  onClose: () => void;
  onSubmit: (newStock: Stock) => void;
};

export default function AddStockForm({ onClose, onSubmit }: AddStockFormProps) {
  const [newStock, setNewStock] = useState<Stock>({
    name: "",
    currentPrice: 0,
    marketCap: "",
    recommendedBuyPrice: 0,
    oneYearReturn: "",
    high52: 0,
    low52: 0,
    moreInfo: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewStock((prevStock) => ({
      ...prevStock,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(newStock);
    onClose();
  };

  return (
    <div className="fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl mb-4">Add New Stock</h2>
        <form onSubmit={handleSubmit}>
          <div className="md:flex md:space-x-2">
            <div className="mb-2">
              <label className="block">Name</label>
              <input
                type="text"
                name="name"
                value={newStock.name}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block">Current Price</label>
              <input
                type="number"
                name="currentPrice"
                value={newStock.currentPrice}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              />
            </div>
          </div>

          <div className="md:flex md:space-x-2">
            <div className="mb-2">
              <label className="block">Market Cap</label>
              <input
                type="text"
                name="marketCap"
                value={newStock.marketCap}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block">Recommended Buy Price</label>
              <input
                type="number"
                name="recommendedBuyPrice"
                value={newStock.recommendedBuyPrice}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              />
            </div>
          </div>

          <div className="md:flex md:space-x-2">
            <div className="mb-2">
              <label className="block">1-Year Return</label>
              <input
                type="text"
                name="oneYearReturn"
                value={newStock.oneYearReturn}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block">52-Week High</label>
              <input
                type="number"
                name="high52"
                value={newStock.high52}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              />
            </div>
          </div>

          <div className="md:flex md:space-x-2">
            <div className="mb-2">
              <label className="block">52-Week Low</label>
              <input
                type="number"
                name="low52"
                value={newStock.low52}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block">More Details Link</label>
              <input
                type="text"
                name="moreInfo"
                value={newStock.moreInfo}
                onChange={handleChange}
                className="border p-2 w-full"
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Add Stock
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
