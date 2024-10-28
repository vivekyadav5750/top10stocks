export type Stock = {
  _id?: string;
  name: string;
  currentPrice: number;
  marketCap: string;
  recommendedBuyPrice: number;
  oneYearReturn: string;
  high52: number;
  low52: number;
  moreInfo: string;
};

export type StockCategories = {
  _id: string;
  name: string;
  description: string;
  stocks: Stock[];
};

export type StockWithCategory = {
  category: string;
  stock: Stock;
};
