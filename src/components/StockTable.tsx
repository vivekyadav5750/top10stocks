"use client";
import React from "react";
import { useSelector } from "react-redux";
import { selectorStock } from "@/redux/reducer";
import dataStockCatergory from "@/data/stockCatergory";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "./ui/table";

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
  const initialStockData = dataStockCatergory;
  const { categorySelected } = useSelector(selectorStock);
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-2xl font-semibold font-mono p-1  ">
          {categorySelected}
        </h1>
      </div>

      <div className="container mx-auto  overflow-auto">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <Table className="min-w-max lg:min-w-full lg:max-w-full text-sm lg:text-base table-fixed p-2">
            <TableHeader>
              <TableRow className="bg-blue-500 text-white p-2">
                <TableHead className="bg-inherit sticky left-0 z-10 text-inherit min-w-max">
                  Company
                </TableHead>
                {TABLE_COLUMNS.map((column, index) => (
                  <TableHead
                    className={`text-inherit text-center ${
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
              {initialStockData
                .filter((data) => data.categories === categorySelected)
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
                      <TableCell className="w-min">{stock.marketCap}</TableCell>
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
                          href={stock.moreDetailsLink}
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
      </div>
    </div>
  );
}