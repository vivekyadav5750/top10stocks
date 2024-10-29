import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { User } from "../types";

type UserState = {
  status: "idle" | "loading" | "success" | "failed";
  message: string;
  token: string;
  refreshToken?: string;
};

type UserLoginResponse = {
  accessToken: string;
  refreshToken: string;
};

const initialState: UserState = {
  status: "idle",
  message: "",
  token: "",
  refreshToken: ""
};

export const userLogin = createAsyncThunk(
  "user/login",
  async (data: User, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:4000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const { msg } = await response.json();
        return rejectWithValue(msg);
      }

      const response_data = (await response.json()) as UserLoginResponse;
      return response_data;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : String(error)
      );
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.token = "";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = "success";
        state.token = action.payload.accessToken;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.token = "";
        state.status = "failed";
        state.message = action.payload as string;
      });
  }
});

export const userReducer = userSlice.reducer;
export const { logout } = userSlice.actions;
