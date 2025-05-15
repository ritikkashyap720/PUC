import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router'

function Sidebar() {
  const [acticeTab, setActiveTab] = React.useState('')
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/budget") {
      setActiveTab("budget");
    } else {
      setActiveTab("main");
    }
  }, [location.pathname]);

  return (
    <div className="w-[30%] md:w-[300px] min-h-screen bg-[#1C1B2A] text-white p-6 flex items-center justify-center">
      <div>
        <h2 className="text-4xl font-bold mb-10">Sedulous Dashboard</h2>
        <p className="text-xl font-semibold mb-2 ">Dashboard Features</p>
        <div className="flex flex-col gap-4 text-xl font-semibold">
          <Link to="/" onClick={() => { setActiveTab("main") }} className={`w-full flex items-center justify-center gap-2 py-3 border rounded-[10px] border-gray-600 hover:bg-gray-700 ${acticeTab == "main" ? "bg-gray-700" : ""} cursor-pointer`}>
            📊 <span>Main Dashboard</span>
          </Link>

          <button className="w-full flex items-center justify-center gap-2 py-3 border rounded-[10px] border-gray-600  hover:bg-gray-700 cursor-pointer transition">
            💰 <span>Implemented Savings</span>
          </button>

          <Link to="/budget" onClick={() => { setActiveTab("budget") }} className={`w-full flex items-center justify-center gap-2 py-3 border rounded-[10px] border-gray-600 ${acticeTab == "budget" ? "bg-gray-700" : ""} hover:bg-gray-700 cursor-pointer transition`}>
            🔔 <span>Budget Alerts</span>
          </Link>

          <button className="w-full flex items-center justify-center gap-2 py-3 border rounded-[10px] border-gray-600  hover:bg-gray-700 cursor-pointer transition">
            📉 <span>Cost Details</span>
          </button>
        </div>
      </div>
    </div>

  )
}

export default Sidebar
