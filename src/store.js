import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./Slice/NewsSlice1";
// import cardReducer from "./Slice/CardSlice";

const store = configureStore({
  reducer: {
    news: newsReducer,
    // card: cardReducer,
  },
});

export default store;
