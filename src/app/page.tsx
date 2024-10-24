import Sidebar from "../components/Sidebar";
import StockTable from "../components/StockTable";
import IPOSection from "../components/IPOSection";
import StockTicker from "@/components/stockTicker";
import Context from "@/components/Context";

export default function HomePage() {
  const stocks = [
    {
      name: "Adani Enterpris",
      currentPrice: 100,
      marketCap: "1B",
      recommendedBuyPrice: 90,
      oneYearReturn: "10%",
      high52: 110,
      low52: 80,
      moreDetailsLink: "/stocks/1"
    },
    {
      name: "Stock 2",
      currentPrice: 150,
      marketCap: "2B",
      recommendedBuyPrice: 130,
      oneYearReturn: "15%",
      high52: 170,
      low52: 120,
      moreDetailsLink: "/stocks/2"
    }
  ];

  const ipos = [
    { name: "IPO 1", gmp: "₹50",open:"2024-11-01", close: "2024-11-04", recommendation: "Buy",allotment:'link', link: "/ipo/1" },
    { name: "IPO 2", gmp: "₹30", open:"2024-11-01", close: "2024-11-05", recommendation: "Hold",allotment:'link', link: "/ipo/2" }
  ];

  const smpIpos = [
    { name: "SME IPO 1", gmp: "₹50",open:"2024-11-01", close: "2024-11-04", recommendation: "Buy",allotment:'link', link: "/ipo/1" },
    { name: "SME IPO 2", gmp: "₹30", open:"2024-11-01", close: "2024-11-05", recommendation: "Hold",allotment:'link', link: "/ipo/2" }
  ];

  return (
      <main className="w-full mt-16  ">
        <StockTicker />
        <div className="flex w-full flex-col md:flex-row md:space-x-4 md:p-2 mt-2 ">
          <Sidebar />
          <main className="p-1 md:p-4 w-full">
            <Context/>
            <StockTable stocks={stocks} />
          </main>
        </div>
        <IPOSection ipoList={ipos} smpIpos={smpIpos} />
      </main>
  );
}
