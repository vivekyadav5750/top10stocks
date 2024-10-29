"use client";
import Sidebar from "../components/Sidebar";
import StockTable from "../components/StockTable";
import IPOSection from "../components/IPOSection";
import StockTicker from "@/components/stockTicker";
import Context from "@/components/Context";
import { useSearchParams } from "next/navigation";
import { useAppDispatch } from "@/redux/hook";
import { setSector } from "@/redux/reducerStock";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  if (category) {
    dispatch(setSector(category));
  }

  const ipos = [
    {
      name: "IPO 1",
      gmp: "₹50",
      open: "2024-11-01",
      close: "2024-11-04",
      recommendation: "Buy",
      allotment: "link",
      link: "/ipo/1"
    },
    {
      name: "IPO 2",
      gmp: "₹30",
      open: "2024-11-01",
      close: "2024-11-05",
      recommendation: "Hold",
      allotment: "link",
      link: "/ipo/2"
    }
  ];

  const smpIpos = [
    {
      name: "SME IPO 1",
      gmp: "₹50",
      open: "2024-11-01",
      close: "2024-11-04",
      recommendation: "Buy",
      allotment: "link",
      link: "/ipo/1"
    },
    {
      name: "SME IPO 2",
      gmp: "₹30",
      open: "2024-11-01",
      close: "2024-11-05",
      recommendation: "Hold",
      allotment: "link",
      link: "/ipo/2"
    }
  ];

  return (
    <main className="w-full mt-16  ">
      <StockTicker />
      <div className="flex w-full flex-col md:flex-row md:space-x-4 md:p-2 mt-2 ">
        <Sidebar />
        <main className="p-1 md:p-4 w-full">
          <Context />
          <StockTable />
        </main>
      </div>
      <IPOSection ipoList={ipos} smpIpos={smpIpos} />
    </main>
  );
}
