import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStockChart } from "../redux/slices/stockSlice";
import StockChart from "./Chart/StockChart";
import Loader from "./Loader";
import useTheme from "../hooks/useTheme";
import "../styles/StockDetails.css";

const StockDetails = () => {
  const dispatch = useDispatch();
  const { selectedStock, chartData, loading, error } = useSelector(
    (state) => state.stock
  );
  const { theme } = useTheme();

  useEffect(() => {
    if (selectedStock && selectedStock.symbol) {
      dispatch(fetchStockChart(selectedStock.symbol));
    }
  }, [selectedStock, dispatch]);

  if (!selectedStock)
    return (
      <p className={`no-data ${theme}`}>
        ℹ️ Please select a stock from the list above to view detailed
        information and price trends.
      </p>
    );

  if (loading)
    return (
      <div className={`loader-wrapper ${theme}`}>
        <Loader />
      </div>
    );

  if (error) return <p className={`no-data ${theme}`}>{error}</p>;

  const isPositive = selectedStock.changePercent >= 0;

  return (
    <div className={`stock-details ${theme}`}>
      {/* Selected Stock Info */}
      <div className="selected-stock-info full-width">
        <h2 className="stock-title">
          {selectedStock.symbol} — {selectedStock.shortName}
        </h2>
        <div className="stock-metrics">
          <div className="metric">
            <span className="label">Price</span>
            <span className="value">
              ${selectedStock.price?.toFixed(2) || "N/A"}
            </span>
          </div>
          <div className="metric">
            <span className="label">Change</span>
            <span className={isPositive ? "value positive" : "value negative"}>
              {isPositive ? "▲" : "▼"}{" "}
              {selectedStock.changePercent?.toFixed(2) || "N/A"}%
            </span>
          </div>
          <div className="metric">
            <span className="label">Symbol</span>
            <span className="value">{selectedStock.symbol}</span>
          </div>
        </div>
      </div>

      {/* Stock Chart */}
      {chartData && chartData.length > 0 && (
        <div className="chart-section">
          <h3>Price Chart</h3>
          <StockChart />
        </div>
      )}
    </div>
  );
};

export default StockDetails;
