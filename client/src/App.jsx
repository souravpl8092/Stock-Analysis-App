import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default App;
