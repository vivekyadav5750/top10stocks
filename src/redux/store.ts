import { configureStore } from "@reduxjs/toolkit";

import { stockReducer } from "./reducerStock";
import {userReducer} from "./reducerUser";

export const store = configureStore({
  reducer: {
    top10Stocks: stockReducer,
    userAdmin: userReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
