export type Stock = {
  _id?: string;
  name: string;
  symbol?: string,
  currentPrice: number;
  priceChangePercent: number;
  marketCap: string;
  recommendedBuyPrice: string;
  oneYearReturn: string;
  high52: number;
  low52: number;
  moreDetailLink: string;
  note: string;
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

export type User = {
  email: string;
  password: string;
};
