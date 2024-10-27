import React, { useEffect, useState } from "react";

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

export default function ListItems({ stock }: { stock: Stock }) {
  const [editMode, setEditMode] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(stock.currentPrice || 0);
  const [marketCap, setMarketCap] = useState(stock.marketCap || "");
  const [recommendedBuyPrice, setRecommendedBuyPrice] = useState(stock.recommendedBuyPrice || 0);
  const [oneYearReturn, setOneYearReturn] = useState(stock.oneYearReturn || "");
  const [high52, setHigh52] = useState(stock.high52 || 0);
  const [low52, setLow52] = useState(stock.low52 || 0);

 useEffect(() => {
    setCurrentPrice(stock.currentPrice);
    setMarketCap(stock.marketCap);
    setRecommendedBuyPrice(stock.recommendedBuyPrice);
    setOneYearReturn(stock.oneYearReturn);
    setHigh52(stock.high52);
    setLow52(stock.low52);
  }, [stock]);

  return (
    <tr key={stock.name}>
      <td className="p-3 sm:p-3 text-left sticky left-0 bg-gray-100 z-10 border-r-1">
        {stock.name}
      </td>
      <td className="p-3 sm:p-3 text-left">
        <input
          type="text"
          value={currentPrice}
          readOnly={!editMode}
          onChange={(e) => setCurrentPrice(Number(e.target.value))}
          name="currentPrice"
          className={`${
            editMode ? "border-2 border-gray-300" : "border-none bg-transparent"
          } focus:outline-none w-full p-2`}
        />
      </td>
      <td className="p-3 sm:p-3 text-left">
        <input
          type="text"
          value={marketCap}
          readOnly={!editMode}
          onChange={(e) => setMarketCap(e.target.value)}
          name="marketCap"
          className={`${
            editMode ? "border-2 border-gray-300" : "border-none bg-transparent"
          } focus:outline-none w-full p-2`}
        />
      </td>
      <td className="p-3 sm:p-3 text-left">
        <input
          type="text"
          value={recommendedBuyPrice}
          readOnly={!editMode}
          onChange={(e) => setRecommendedBuyPrice(Number(e.target.value))}
          name="recommendedBuyPrice"
          className={`${
            editMode ? "border-2 border-gray-300" : "border-none bg-transparent"
          } focus:outline-none w-full p-2`}
        />
      </td>
      <td className="p-3 sm:p-3 text-left">
        <input
          type="text"
          value={oneYearReturn}
          readOnly={!editMode}
          onChange={(e) => setOneYearReturn(e.target.value)}
          name="oneYearReturn"
          className={`${
            editMode ? "border-2 border-gray-300" : "border-none bg-transparent"
          } focus:outline-none w-full p-2`}
        />
      </td>
      <td className="p-3 sm:p-3 text-left">
        <input
          type="text"
          value={high52}
          readOnly={!editMode}
          onChange={(e) => setHigh52(Number(e.target.value))}
          name="high52"
          className={`${
            editMode ? "border-2 border-gray-300" : "border-none bg-transparent"
          } focus:outline-none w-full p-2`}
        />
      </td>
      <td className="p-3 sm:p-3 text-left">
        <input
          type="text"
          value={low52}
          readOnly={!editMode}
          onChange={(e) => setLow52(Number(e.target.value))}
          name="low52"
          className={`${
            editMode ? "border-2 border-gray-300" : "border-none bg-transparent"
          } focus:outline-none w-full p-2`}
        />
      </td>
      <td className="p-3 sm:p-3 text-left">
        <a href={stock.moreDetailsLink}>More Details</a>
      </td>
      <td className="p-3 sm:p-3 text-left space-x-2">
        <button
          className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-700"
          onClick={() => setEditMode(!editMode)}
        >
          {editMode ? "Save" : "Edit"}
        </button>
        <button className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700">
          Delete
        </button>
      </td>
    </tr>
  );
}