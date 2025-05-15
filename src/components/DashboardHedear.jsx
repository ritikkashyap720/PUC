import React, { useContext } from 'react';
import { dataContext } from '../context/Data';

const DashboardHeader = () => {
  const { setCurrentCurrency, currentCurrency } = useContext(dataContext)
  
  return (
    <div className="bg-[#121212] text-white p-8 rounded-xl space-y-6">
      <div className='flex flex-wrap flex-row gap-5 p-10 justify-between'>
        {/* Logo and Title */}
        <div className="flex items-start justify-between">
          <img
            src="/sedulous_logo.png" // placeholder logo
            alt="Logo"
            className=" h-[100px] object-cover"
          />
        </div>

        {/* Heading */}
        <div>
          <h1 className="text-6xl font-bold">Licence Manager Optimization</h1>
          <p className=" text-2xl mt-5">
            Azure Cost Optimization Dashboard
          </p>
        </div>
      </div>

      <hr className="border-gray-700" />

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Currency</label>
          <select
            value={currentCurrency}
            onChange={(e)=>setCurrentCurrency(e.target.value)}
            className="w-full bg-[#1E1E1E] text-white p-3 rounded-md border border-gray-600"
          >
            <option value="INR">INR</option>
            <option value="SEK">SEK</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Time Range</label>
          <select className="w-full bg-[#1E1E1E] text-white p-3 rounded-md border border-gray-600">
            <option>Monthly</option>
            <option>Quaterly</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Department</label>
          <select className="w-full bg-[#1E1E1E] text-white p-3 rounded-md border border-gray-600">
            <option>All Departments</option>
            <option>IT Operations</option>
            <option>Development</option>
            <option>Data Analytics</option>
            <option>Sales</option>
            <option>HR</option>
          </select>
        </div>
      </div>

      {/* Alert Box */}
      {/* <div className="bg-red-500 text-white p-3 rounded-md font-medium mt-2">
        ⚠️ Alert: Budget exceeded: 173% of monthly budget used
      </div> */}
    </div>
  );
};

export default DashboardHeader;
