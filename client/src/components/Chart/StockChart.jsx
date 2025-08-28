import { useState } from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const StockChart = () => {
  const { chartData, loading, error } = useSelector((state) => state.stock);
  const [filter, setFilter] = useState("1M"); // default 1 Month

  if (loading) return <p>Loading stock chart...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!chartData || chartData.length === 0)
    return <p>No chart data available</p>;

  // Date filter options
  const filterOptions = ["1W", "1M", "3M", "6M"];

  // Helper function to format date into dd-MM-YYYY
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Filter chart data based on selected range
  const filteredData = (() => {
    const now = new Date();
    let startDate;

    switch (filter) {
      case "1W":
        startDate = new Date(now.setDate(now.getDate() - 7));
        break;
      case "1M":
        startDate = new Date(now.setMonth(now.getMonth() - 1));
        break;
      case "3M":
        startDate = new Date(now.setMonth(now.getMonth() - 3));
        break;
      case "6M":
        startDate = new Date(now.setMonth(now.getMonth() - 6));
        break;
      case "1Y":
        startDate = new Date(now.setFullYear(now.getFullYear() - 1));
        break;
      default:
        return chartData;
    }

    return chartData
      .filter((item) => new Date(item.date) >= startDate)
      .map((item) => ({
        time: formatDate(item.date), // ✅ Using custom dd-MM-YYYY format
        price: parseFloat(item.close.toFixed(2)),
      }));
  })();

  const prices = filteredData.map((d) => d.price);
  const minPrice = Math.min(...prices) * 0.995;
  const maxPrice = Math.max(...prices) * 1.005;

  const formatPrice = (value) =>
    "$" + value.toLocaleString(undefined, { minimumFractionDigits: 2 });

  return (
    <div style={{ width: "100%" }}>
      {/* Date Filter */}
      <div style={{ marginBottom: 16, textAlign: "right" }}>
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => setFilter(option)}
            style={{
              marginLeft: 8,
              padding: "4px 12px",
              borderRadius: 6,
              border:
                filter === option ? "2px solid #2563eb" : "1px solid #cbd5e1",
              backgroundColor: filter === option ? "#2563eb" : "#f9fafb",
              color: filter === option ? "#fff" : "#1f2937",
              cursor: "pointer",
              fontSize: 12,
            }}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={filteredData}
          margin={{ top: 20, right: 30, bottom: 20, left: 0 }}
        >
          <CartesianGrid strokeDasharray="5 5" stroke="#f0f0f0" />
          <XAxis
            dataKey="time"
            tick={{ fontSize: 12, fill: "#6b7280" }}
            tickLine={false}
            axisLine={{ stroke: "#cbd5e1" }}
          />
          <YAxis
            domain={[minPrice, maxPrice]}
            tick={{ fontSize: 12, fill: "#6b7280" }}
            tickFormatter={formatPrice}
            tickLine={false}
            axisLine={{ stroke: "#cbd5e1" }}
          />
          <Tooltip
            formatter={(value) => [`$${value.toFixed(2)}`, "Price"]}
            labelFormatter={(label) => `Date: ${label}`}
            labelStyle={{ fontWeight: "bold" }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#2563eb"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;
