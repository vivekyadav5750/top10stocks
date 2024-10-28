import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { User } from "../types";

type UserState = {
  token: string;
};

const initialState: UserState = {
  token: ""
};

export const userLogin = createAsyncThunk("user/login", async (data: User) => {
  const response = await fetch("http://localhost:4000/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const response_data = (await response.json()) as { token: string };
//   console.log("response_data : ", response_data);
  return response_data.token;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.token = "";
    }
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.token = action.payload;
    });
    builder.addCase(userLogin.rejected, (state) => {
      state.token = "";
    });
  }
});

export const userReducer = userSlice.reducer;
export const { logout } = userSlice.actions;
