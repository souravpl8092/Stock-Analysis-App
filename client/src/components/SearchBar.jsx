import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchStockQuote, setSelectedStock } from "../redux/slices/stockSlice";
import useTheme from "../hooks/useTheme";
import "../styles/SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchStockQuote(query))
        .unwrap()
        .then((stock) => {
          const normalizedStock = {
            symbol: stock.symbol,
            shortName: stock.shortName || stock.longName || query.toUpperCase(),
            price: stock.price || stock.regularMarketPrice || 0,
            changePercent:
              stock.changePercent ?? stock.regularMarketChangePercent ?? 0,
          };

          // Set the selected stock in Redux
          dispatch(setSelectedStock(normalizedStock));

          // ✅ Clear input after successful search
          setQuery("");
        })
        .catch((err) => {
          console.error("Failed to fetch stock:", err);
        });
    }
  };

  return (
    <div className={`search-bar ${theme}`}>
      <input
        type="text"
        placeholder="Enter stock symbol..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button className={`search-btn ${theme}`} onClick={handleSearch}>
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
