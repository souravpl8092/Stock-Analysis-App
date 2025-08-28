import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchStockQuoteAPI,
  fetchStockChartAPI,
  fetchStocksListAPI,
} from "../../api/stockApi";

// Initial state
const initialState = {
  stocks: [],
  selectedStock: null,
  chartData: [],
  loading: false,
  error: null,
};

// ✅ Fetch multiple stocks
export const fetchStocksList = createAsyncThunk(
  "stocks/fetchStocksList",
  async (symbols) => {
    return await fetchStocksListAPI(symbols);
  }
);

// ✅ Fetch single stock quote
export const fetchStockQuote = createAsyncThunk(
  "stocks/fetchStockQuote",
  async (symbol) => {
    const stock = await fetchStockQuoteAPI(symbol);

    return {
      symbol: stock.symbol,
      shortName: stock.shortName || stock.longName || symbol.toUpperCase(),
      price: stock.price || stock.regularMarketPrice || 0,
      changePercent:
        stock.changePercent ?? stock.regularMarketChangePercent ?? 0,
    };
  }
);

// ✅ Fetch stock chart
export const fetchStockChart = createAsyncThunk(
  "stocks/fetchStockChart",
  async (symbol) => {
    return await fetchStockChartAPI(symbol);
  }
);

const stockSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {
    setSelectedStock(state, action) {
      state.selectedStock = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch multiple stocks
      .addCase(fetchStocksList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStocksList.fulfilled, (state, action) => {
        state.loading = false;
        state.stocks = action.payload;
      })
      .addCase(fetchStocksList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch stock list";
        console.error("❌ Redux Error (Stocks List):", state.error);
      })

      // Fetch single stock quote
      .addCase(fetchStockQuote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStockQuote.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedStock = action.payload;
      })
      .addCase(fetchStockQuote.rejected, (state, action) => {
        state.loading = false;
        state.selectedStock = null;
        state.error = action.error.message || "Failed to fetch stock quote";
        console.error("❌ Redux Error (Stock Quote):", state.error);
      })

      // Fetch stock chart
      .addCase(fetchStockChart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStockChart.fulfilled, (state, action) => {
        state.loading = false;
        state.chartData = action.payload;
      })
      .addCase(fetchStockChart.rejected, (state, action) => {
        state.loading = false;
        state.chartData = [];
        state.error = action.error.message || "Failed to fetch stock chart";
        console.error("❌ Redux Error (Stock Chart):", state.error);
      });
  },
});

export const { setSelectedStock, clearError } = stockSlice.actions;
export default stockSlice.reducer;
