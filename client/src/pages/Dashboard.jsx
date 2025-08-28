import SearchBar from "../components/SearchBar";
import StockList from "../components/StockList";
import StockDetails from "../components/StockDetails";
import useTheme from "../hooks/useTheme";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const { theme } = useTheme(); // use custom hook
  return (
    <div className={`dashboard ${theme}`}>
      <br />
      {/* Search Bar */}
      <SearchBar />

      {/* Stock List */}
      <StockList />

      {/* Stock Details + Chart */}
      <StockDetails />
    </div>
  );
};

export default Dashboard;
