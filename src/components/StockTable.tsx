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

const TABLE_COLUMNS = [
  // "Company",
  "Current Price",
  "Market Cap",
  "Recommended Buy Price",
  "1-Year Return",
  "52Week High",
  "52Week Low",
  "More Details"
];

export default function StockTable() {
  const disptach = useAppDispatch();
  const stockState = useAppSelector((state) => state.top10Stocks);
  const categorySelected = stockState.categorySelected;


  useEffect(() => {
    disptach(fetchItems());
  }, [disptach]);

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
                          {stock.name}
                          <span className="bg-border h-full w-[1px] inline-block absolute top-0 right-0 bottom-0"></span>
                        </TableCell>
                        <TableCell className="w-min">
                          {stock.currentPrice}
                        </TableCell>
                        <TableCell className="w-min">
                          {stock.marketCap}
                        </TableCell>
                        <TableCell className="w-min">
                          {stock.recommendedBuyPrice}
                        </TableCell>
                        <TableCell className="w-min">
                          {stock.oneYearReturn}
                        </TableCell>
                        <TableCell className="w-min">{stock.high52}</TableCell>
                        <TableCell className="w-min">{stock.low52}</TableCell>
                        <TableCell className="w-auto">
                          <a
                            href={stock.moreInfo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            View on MoneyControl
                          </a>
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
