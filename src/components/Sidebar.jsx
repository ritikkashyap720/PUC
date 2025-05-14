import React from 'react'

function Sidebar() {
  return (
    <div className="w-[500px] min-h-screen bg-[#1C1B2A] text-white p-6 flex items-center justify-center">
      <div>
        <h2 className="text-4xl font-bold mb-10">Azure Cost Dashboard</h2>
        <p className="text-xl font-semibold mb-2 ">Dashboard Features</p>
        <div className="flex flex-col gap-4 text-xl font-semibold">
          <button
            className="w-full flex items-center justify-center gap-2 py-3 border rounded-[10px] border-gray-600 bg-gray-700 cursor-pointer">
            📊 <span>Main Dashboard</span>
          </button>

          <button className="w-full flex items-center justify-center gap-2 py-3 border rounded-[10px] border-gray-600  hover:bg-gray-700 cursor-pointer transition">
            💰 <span>Implemented Savings</span>
          </button>

          <button className="w-full flex items-center justify-center gap-2 py-3 border rounded-[10px] border-gray-600  hover:bg-gray-700 cursor-pointer transition">
            🔔 <span>Budget Alerts</span>
          </button>

          <button className="w-full flex items-center justify-center gap-2 py-3 border rounded-[10px] border-gray-600  hover:bg-gray-700 cursor-pointer transition">
            📉 <span>Cost Details</span>
          </button>
        </div>
      </div>
    </div>

  )
}

export default Sidebar
