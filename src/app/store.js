import { configureStore } from "@reduxjs/toolkit";
import ImageReducer from "../features/Image/ISlice";
import journalReducer from "../features/journal/JSlice";
import quoteReducer from "../features/quote/quoteSlice";
import weatherReducer from "../features/weather/weatherSlice";
import errorReducer from "../features/error/errorSlice";

export default configureStore({
  reducer: {
    backgroundImage: ImageReducer,
    weather: weatherReducer,
    quote: quoteReducer,
    journal: journalReducer,
    error: errorReducer
  }
});
