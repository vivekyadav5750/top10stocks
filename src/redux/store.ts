import { configureStore } from "@reduxjs/toolkit";

import { stockReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    top10Stocks: stockReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
