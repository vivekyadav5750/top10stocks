import { configureStore } from "@reduxjs/toolkit";

import { stockReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    top10Stocks: stockReducer
  }
});