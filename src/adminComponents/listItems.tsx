import { Stock } from "@/types";
import React, { useEffect, useState } from "react";
import { updateItem, deleteItem } from "@/redux/reducerStock";
import { useAppDispatch } from "@/redux/hook";
import { PencilLine, Trash2 } from "lucide-react";

export default function ListItems({ stock }: { stock: Stock }) {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useAppDispatch();

  // state for each parameter of the stock
  const [currentPrice, setCurrentPrice] = useState(stock.currentPrice || 0);
  const [marketCap, setMarketCap] = useState(stock.marketCap || "");
  const [recommendedBuyPrice, setRecommendedBuyPrice] = useState(
    stock.recommendedBuyPrice || 0
  );
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

  const handleSave = () => {
    console.log("Save");
    setEditMode(!editMode);

    const updatedStock = {
      // ...stock,
      _id: stock._id,
      name: stock.name,
      marketCap,
      currentPrice,
      recommendedBuyPrice,
      oneYearReturn,
      high52,
      low52,
      moreInfo: stock.moreInfo
    };
    console.log("updatedStock : ", updatedStock);
    dispatch(updateItem(updatedStock));
  };

  const handleDelete = () => {
    dispatch(deleteItem(stock));
  };

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
        <a href={stock.moreInfo}>More Details</a>
      </td>
      <td className="flex p-3 sm:p-3 text-left space-x-2">
        {!editMode ? (
          <button
            className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-700"
            onClick={() => setEditMode(!editMode)}
          >
            {" "}
            <PencilLine />{" "}
          </button>
        ) : (
          <button
            className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-700"
            onClick={() => handleSave()}
          >
            {" "}
            Save{" "}
          </button>
        )}
        <button
          className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700"
          onClick={() => handleDelete()}
        >
          <Trash2 />
        </button>
      </td>
    </tr>
  );
}
