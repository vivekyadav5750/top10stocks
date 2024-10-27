import { createSlice } from "@reduxjs/toolkit";

interface RootState {
  top10Stocks: typeof initialState;
}

const initialState = {
  categorySelected: "Nifty 50"
};

export const stockSlice = createSlice({
  name: "top10Stocks",
  initialState,
  reducers: {
    setSector: (state, action) => {
      state.categorySelected = action.payload;
      console.log("sectorSelected", state.categorySelected);
    }
  }
});

export const stockReducer = stockSlice.reducer;
export const { setSector } = stockSlice.actions;

export const selectorStock = (state: RootState) => state.top10Stocks;
