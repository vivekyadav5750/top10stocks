import { Stock, StockCategories, StockWithCategory } from "@/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type StockState = {
  data: StockCategories[];
  loading: boolean;
  categorySelected?: string;
};

export const fetchItems = createAsyncThunk(
  "top10Stocks/fetchItems",
  async () => {
    const response = await fetch("http://localhost:4000/api/stock/");
    const data = (await response.json()) as StockCategories[];
    return data;
  }
);

export const updateItem = createAsyncThunk(
  "top10Stocks/updateItem",
  async (data: Stock) => {
    const response = await fetch(
      `http://localhost:4000/api/stock/updateStock/${data._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzFmYzNjZmE3YTZmOGM2YTFkNWE0ZmMiLCJpYXQiOjE3MzAxMzY1MjYsImV4cCI6MTczMDE0MDEyNn0.f3nO5zqn7jepwLYr699ZLq-f5nhSp7se706RVbdkrfg"
        },
        body: JSON.stringify(data)
      }
    );
    const response_data = (await response.json()) as Stock;
    return response_data;
  }
);

export const deleteItem = createAsyncThunk(
  "top10Stocks/deleteItem",
  async (data: Stock) => {
    console.log("deleteItem : ", data);
    const response = await fetch(
      `http://localhost:4000/api/stock/deleteStock/${data._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzFmYzNjZmE3YTZmOGM2YTFkNWE0ZmMiLCJpYXQiOjE3MzAxMzY1MjYsImV4cCI6MTczMDE0MDEyNn0.f3nO5zqn7jepwLYr699ZLq-f5nhSp7se706RVbdkrfg"
        },
        body: JSON.stringify(data)
      }
    );
    const response_data = (await response.json()) as StockState["data"];
    console.log("response_data : ", response_data);
    return response_data;
  }
);

export const addItem = createAsyncThunk(
  "top10Stocks/addItem",
  async (data: StockWithCategory) => {
    const response = await fetch(`http://localhost:4000/api/stock/addStock`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzFmYzNjZmE3YTZmOGM2YTFkNWE0ZmMiLCJpYXQiOjE3MzAxMzY1MjYsImV4cCI6MTczMDE0MDEyNn0.f3nO5zqn7jepwLYr699ZLq-f5nhSp7se706RVbdkrfg"
      },
      body: JSON.stringify({...data.stock, categoryName: data.category})
    });
    const response_data = (await response.json()) as Stock;
    console.log("response_data : ", response_data);
    return response_data;
  }
);


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
    builder.addCase(
      updateItem.fulfilled,
      (state, action: PayloadAction<Stock>) => {
        state.data = state.data.map((category) => {
          return {
            ...category,
            stocks: category.stocks.map((stock) =>
              stock._id === action.payload._id ? action.payload : stock
            )
          };
        });
      }
    );
    builder.addCase(
      deleteItem.fulfilled,
      (state, action: PayloadAction<StockState["data"]>) => {
        state.data = action.payload;
      }
    );
    builder.addCase(
      addItem.fulfilled,
      (state, action: PayloadAction<Stock>) => {
        state.data = state.data.map((category) => {
          if (category.name === state.categorySelected) {
            return {
              ...category,
              stocks: [...category.stocks, action.payload]
            };
          }
          return category;
        });
      }
    )
  }
});

export const stockReducer = stockSlice.reducer;
export const { setSector } = stockSlice.actions;