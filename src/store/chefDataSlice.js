import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchChefs = createAsyncThunk("chefs/fetchChefs", async () => {
  const response = await axios.get("http://localhost:8080/chefs");
  return response.data;
});

const chefsSlice = createSlice({
  name: "chefs",
  initialState: {
    chefs: [],
    isLoading: false,
  },
  reducers: {
    toggle(state) {
      state.sayHi = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchChefs.pending, (state, action) => {
        console.log("loading chefs fetch");
        state.isLoading = true;
      })
      .addCase(fetchChefs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.chefs= action.payload.result;        
      })
      .addCase(fetchChefs.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.error.message);
      });
  },
});

export const chefsActions = chefsSlice.actions;

export default chefsSlice;


