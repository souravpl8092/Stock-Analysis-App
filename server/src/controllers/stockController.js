import yahooFinance from "yahoo-finance2";

/**
 * @desc Get single stock quote
 * @route GET /api/stocks/quote/:symbol
 */
export const getStockQuote = async (req, res) => {
  try {
    const { symbol } = req.params;
    const quote = await yahooFinance.quote(symbol);

    res.status(200).json({
      symbol: quote.symbol,
      shortName: quote.shortName,
      longName: quote.longName,
      currency: quote.currency,
      regularMarketPrice: quote.regularMarketPrice,
      previousClose: quote.regularMarketPreviousClose,
      change: quote.regularMarketChange,
      changePercent: quote.regularMarketChangePercent,
    });
  } catch (error) {
    console.error("❌ Error fetching stock quote:", error);
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
};

/**
 * @desc Get historical stock chart data
 * @route GET /api/stocks/chart/:symbol
 */
export const getStockChart = async (req, res) => {
  try {
    const { symbol } = req.params;

    // 3 months ago
    const period1 = new Date();
    period1.setMonth(period1.getMonth() - 3);
    const period2 = new Date(); // today

    const chart = await yahooFinance.chart(symbol, {
      period1,
      period2,
      interval: "1d",
    });

    if (!chart.quotes || chart.quotes.length === 0) {
      return res.status(404).json({ error: "No chart data available" });
    }

    const formattedChart = chart.quotes.map((q) => ({
      date: q.date,
      close: q.close,
    }));

    res.status(200).json(formattedChart);
  } catch (error) {
    console.error("❌ Error fetching chart data:", error);
    res.status(500).json({ error: "Failed to fetch chart data" });
  }
};

/**
 * @desc Get multiple stocks' quotes at once
 * @route POST /api/stocks/multiple
 */
export const getMultipleStocks = async (req, res) => {
  try {
    const { symbols } = req.body; // Array of stock symbols
    if (!symbols || !Array.isArray(symbols)) {
      return res.status(400).json({ error: "Symbols must be an array" });
    }

    const results = await Promise.all(
      symbols.map((symbol) => yahooFinance.quote(symbol))
    );

    const formattedData = results.map((quote) => ({
      symbol: quote.symbol,
      shortName: quote.shortName,
      price: quote.regularMarketPrice,
      changePercent: quote.regularMarketChangePercent,
    }));

    res.status(200).json(formattedData);
  } catch (error) {
    console.error("❌ Error fetching multiple stocks:", error);
    res.status(500).json({ error: "Failed to fetch multiple stock data" });
  }
};
