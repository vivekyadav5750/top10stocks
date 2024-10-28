"use client";
// import IPOSection from '@/adminComponents/IPOSection'
import Sidebar from "@/adminComponents/Sidebar";
import StockTable from "@/adminComponents/StockTable";
import { useAppSelector } from "@/redux/hook";

export default function UpdatePage() {
  const { token } = useAppSelector((state) => state.userAdmin);
  console.log(token);

  return (
    <main className="w-full mt-16  ">
      <div className="flex w-full flex-col md:flex-row md:space-x-4 md:p-2 mt-2 ">
        <Sidebar />
        <main className="p-1 md:p-4 w-full">
          <StockTable />
        </main>
      </div>
      {/* <IPOSection /> */}
    </main>
  );
}
