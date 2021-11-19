import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import quotesApi from "../../api/quotes";

export const getQuote = createAsyncThunk("quote/getQuote", quotesApi.getQuote);

export const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    quote: "",
    author: ""
  },
  extraReducers: {
    [getQuote.fulfilled]: (state, action) => {
      state.quote = action.payload.quote;
      state.author = action.payload.author;
    }
  }
});

export default quoteSlice.reducer;
