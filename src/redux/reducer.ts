import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface RootState {
  top10Stocks: typeof initialState;
}

export const fetchItems = createAsyncThunk(
  "top10Stocks/fetchItems",
  async () => {
    const response = await fetch("http://localhost:4000/api/stock/");
    const data = await response.json();
    return data;
  }
);

const initialState = {
  categorySelected: "Nifty 50",
  initialStockData: [],
};

export const stockSlice = createSlice({
  name: "top10Stocks",
  initialState,
  reducers: {
    setSector: (state, action) => {
      state.categorySelected = action.payload;
      console.log("sectorSelected", state.categorySelected);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.initialStockData = action.payload;
    });
  }
});

export const stockReducer = stockSlice.reducer;
export const { setSector } = stockSlice.actions;

export const selectorStock = (state: RootState) => state.top10Stocks;
