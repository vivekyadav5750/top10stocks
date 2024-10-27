import { StockCategories } from "@/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk(
  "top10Stocks/fetchItems",
  async () => {
    const response = await fetch("http://localhost:4000/api/stock/");
    const data = (await response.json()) as StockCategories[];
    return data;
  }
);

type StockState = {
  data: StockCategories[];
  loading: boolean;
  categorySelected?: string;
};

const initialState: StockState = {
  loading: true,
  data: [],
  categorySelected: "Nifty 50"
};

export const stockSlice = createSlice({
  name: "top10Stocks",
  initialState,
  reducers: {
    setSector: (
      state,
      action: PayloadAction<StockState["categorySelected"]>
    ) => {
      state.categorySelected = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchItems.fulfilled,
      (state, action: PayloadAction<StockState["data"]>) => {
        state.data = action.payload;
        state.loading = false;
      }
    );
  }
});

export const stockReducer = stockSlice.reducer;
export const { setSector } = stockSlice.actions;
