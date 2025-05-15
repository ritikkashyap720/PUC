import { useContext, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { dataContext, DataProvider } from "./context/Data";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Budget from "./pages/Budget";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex min-h-screen">
        <Router>
          <Sidebar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/budget" element={<Budget />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
