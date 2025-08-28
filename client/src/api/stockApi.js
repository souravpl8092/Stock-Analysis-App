import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

/**
 * Fetch a single stock quote from backend
 * @param {string} symbol
 * @returns {Promise<Object>}
 */
export const fetchStockQuoteAPI = async (symbol) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/quote/${symbol}`);
    return data;
  } catch (error) {
    console.error(
      `❌ Error fetching stock quote for ${symbol}:`,
      error.message
    );
    throw new Error(
      error.response?.data?.error || "Failed to fetch stock quote"
    );
  }
};

/**
 * Fetch stock chart data from backend
 * @param {string} symbol
 * @returns {Promise<Array<{date: string, close: number}>>}
 */
export const fetchStockChartAPI = async (symbol) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/chart/${symbol}`);
    return data;
  } catch (error) {
    console.error(
      `❌ Error fetching stock chart for ${symbol}:`,
      error.message
    );
    throw new Error(
      error.response?.data?.error || "Failed to fetch stock chart"
    );
  }
};

/**
 * Fetch multiple stocks data from backend
 * @param {Array<string>} symbols
 * @returns {Promise<Array<Object>>}
 */
export const fetchStocksListAPI = async (symbols) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/multiple`, { symbols });
    return data;
  } catch (error) {
    console.error(`❌ Error fetching multiple stocks:`, error.message);
    throw new Error(
      error.response?.data?.error || "Failed to fetch multiple stocks"
    );
  }
};
