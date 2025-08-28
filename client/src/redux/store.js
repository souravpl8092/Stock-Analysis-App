import { configureStore } from "@reduxjs/toolkit";
import stockReducer from "./slices/stockSlice";

// Configure Redux store
export const store = configureStore({
  reducer: {
    stock: stockReducer,
  },
});
