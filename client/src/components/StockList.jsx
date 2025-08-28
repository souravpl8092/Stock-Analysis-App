import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import StockCard from "./StockCard";
import Loader from "./Loader";
import { setSelectedStock, fetchStocksList } from "../redux/slices/stockSlice";
import useTheme from "../hooks/useTheme";
import "../styles/StockList.css";

const StockList = () => {
  const { stocks, error } = useSelector((state) => state.stock);
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    dispatch(
      fetchStocksList(["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA"])
    ).finally(() => setInitialLoad(false));
  }, [dispatch]);

  if (initialLoad) return <Loader />;

  if (error) return <p className={`no-data ${theme}`}>Error: {error}</p>;

  return (
    <div className={`stock-list ${theme}`}>
      {stocks && stocks.length > 0 ? (
        stocks.map((stock) => (
          <StockCard
            key={stock.symbol}
            stock={stock}
            onClick={() => dispatch(setSelectedStock(stock))}
          />
        ))
      ) : (
        <p className={`no-data ${theme}`}>No stocks available.</p>
      )}
    </div>
  );
};

export default StockList;
