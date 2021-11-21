import { createSlice } from "@reduxjs/toolkit";
import { getBackgroundImage } from "../Image/ISlice";
import { getQuote } from "../quote/quoteSlice";
import { getWeather } from "../weather/weatherSlice";

export const errorSlice = createSlice({
  name: "errors",
  initialState: {
    errorMessage: "",
    retryHandler: null
  },
  reducers: {
    clearErrorMessage: (state) => {
      state.errorMessage = "";
      state.retryHandler = null;
    }
  },
  extraReducers: {
    [getBackgroundImage.rejected]: (state) => {
      state.errorMessage = "Sorry no image.";
      state.retryHandler = getBackgroundImage;
    },
    [getQuote.rejected]: (state) => {
      state.errorMessage = "sorry no quote.";
      state.retryHandler = getQuote;
    },
    [getWeather.rejected]: (state) => {
      state.errorMessage = "Getting the weather failed.";
      state.retryHandler = getWeather;
    }
  }
});
export const { clearErrorMessage } = errorSlice.actions;
export default errorSlice.reducer;
