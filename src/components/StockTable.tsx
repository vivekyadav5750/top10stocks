"use client";
import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "./ui/table";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { fetchItems } from "@/redux/reducerStock";
import { Loader } from "lucide-react";
import Link from "next/link";

const TABLE_COLUMNS = [
  // "Company",
  "Current Price",
  "Market Cap",
  "Recommended Buy Price",
  "1-Year Return",
  "52Week High",
  "52Week Low",
  "Notes/Comments"
];

export default function StockTable() {
  const dispatch = useAppDispatch();
  const stockState = useAppSelector((state) => state.top10Stocks);
  const categorySelected = stockState.categorySelected;

  // useEffect(() => {
  //   const isMarketOpen = () => {
  //     const now = new Date();
  //     const day = now.getDay();
  //     const hours = now.getHours();
  //     const minutes = now.getMinutes();

  //     // Market is open Monday to Friday, 9:15 AM - 3:30 PM
  //     const isWeekday = day >= 1 && day <= 5; // 1 = Monday, 5 = Friday
  //     const isDuringTradingHours =
  //       (hours > 9 || (hours === 9 && minutes >= 15)) &&
  //       (hours < 15 || (hours === 15 && minutes <= 30));

  //     return isWeekday && isDuringTradingHours;
  //   };

  //   const fetchStockData = () => {
  //     if (isMarketOpen()) {
  //       console.log("Fetching stock data... Market hours");
  //       dispatch(fetchItems());
  //     }
  //   };
  //   // Initial fetch if market is open
  //   fetchStockData();

  //   const intervalId = setInterval(fetchStockData, 5050);

  //   // Cleanup interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-2xl font-semibold font-mono p-1  ">
          {categorySelected}
        </h1>
      </div>

      <div className="container mx-auto  overflow-auto">
        {stockState.loading ? (
          <div className="w-full flex justify-center items-center h-40">
            <Loader className="animate-spin" />
          </div>
        ) : (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <Table className="min-w-max lg:min-w-full lg:max-w-full text-sm lg:text-base table-fixed p-2">
              <TableHeader>
                <TableRow className="bg-blue-500 text-white p-2">
                  <TableHead className="bg-inherit sticky left-0 z-10 text-inherit min-w-max">
                    Company
                  </TableHead>
                  {TABLE_COLUMNS.map((column, index) => (
                    <TableHead
                      className={`text-inherit text-right ${
                        TABLE_COLUMNS.length - 1 === index ? "w-auto" : "w-min"
                      }`}
                      key={column}
                    >
                      {column}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {stockState.data
                  .filter((data) => data.name === categorySelected)
                  .map((data) =>
                    data.stocks.map((stock, index) => (
                      <TableRow
                        key={stock.name}
                        className={`transition-colors text-gray-700 text-right ${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }`}
                      >
                        {/* Sticky column for the name */}
                        <TableCell className="sticky left-0 z-20 bg-inherit text-left ">
                          <Link href={stock.moreDetailLink}>{stock.name}</Link>
                          <span className="bg-border h-full w-[1px] inline-block absolute top-0 right-0 bottom-0"></span>
                        </TableCell>
                        <TableCell className="w-min">
                          <span
                            className={`text-sm  ${
                              stock.priceChangePercent > 0
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            <sup>
                              {stock.priceChangePercent}%
                              {stock.priceChangePercent > 0 ? "▲" : "▼"}{" "}
                            </sup>
                            ₹{stock.currentPrice}
                          </span>
                        </TableCell>
                        <TableCell className="w-min">
                          {stock.marketCap}
                        </TableCell>
                        <TableCell className="w-min">
                          {stock.recommendedBuyPrice}
                        </TableCell>
                        <TableCell className="w-min">
                          {stock.oneYearReturn} %
                        </TableCell>
                        <TableCell className="w-min">{stock.high52}</TableCell>
                        <TableCell className="w-min">{stock.low52}</TableCell>
                        <TableCell className="w-auto">
                          {/* <a
                            href={stock.moreDetailLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          > */}
                          {stock.note}
                          {/* </a> */}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}
