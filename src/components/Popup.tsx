"use client";
import { useState } from "react";

const Popup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => setIsVisible(false);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg text-center max-w-md w-full">
        <p className="text-gray-800">
          I can only recommend the stock, it&apos;s up to you to buy or sell.
          This is not a SEBI registered platform.
        </p>
        <button
          className="mt-4 text-red-500 hover:text-red-700"
          onClick={handleClose}
        >
          Close ✕
        </button>
      </div>
    </div>
  );
};

export default Popup;
