import "../styles/StockCard.css";
import useTheme from "../hooks/useTheme";

const StockCard = ({ stock, onClick }) => {
  const { theme } = useTheme();

  // Handle missing or invalid stock data
  if (!stock || typeof stock !== "object") {
    return (
      <div className={`stock-card ${theme}`}>
        <h3>Data Not Available</h3>
      </div>
    );
  }

  const isPositive = stock.changePercent >= 0;

  return (
    <div className={`stock-card ${theme}`} onClick={onClick}>
      <h3>
        {stock?.symbol || "N/A"} — {stock?.shortName || "N/A"}
      </h3>
      <p className="price">${stock?.price?.toFixed(2) || "N/A"}</p>
      <p className={isPositive ? "positive" : "negative"}>
        {isPositive ? "▲" : "▼"} {stock?.changePercent?.toFixed(2) || "N/A"}%
      </p>
    </div>
  );
};

export default StockCard;
