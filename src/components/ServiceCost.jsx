import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { dataContext } from '../context/Data';

function ServiceCost() {
   const { data, currencySymbol,currentCurrency,currencyValue } = useContext(dataContext)
  




  return (
    <div className="text-white p-6 rounded-md shadow-md w-full max-w-md">
      <h2 className="text-4xl font-bold mb-10">Service Costs</h2>
      <table className="w-full border border-gray-600 border-opacity-30">
        <thead>
          <tr className="text-left">
            <th className="px-4 py-2 border border-gray-600 border-opacity-30">Service</th>
            <th className="px-4 py-2 border border-gray-600 border-opacity-30">Cost</th>
          </tr>
        </thead>
        <tbody>
          {data.map((service, idx) => (
            <tr key={idx} className="hover:bg-[#2A293B]">
              <td className="px-4 py-2 border border-gray-600 border-opacity-20 text-blue-400 underline cursor-pointer">
                {service.ServiceName}
              </td>
              <td className="px-4 py-2 border border-gray-600 border-opacity-20">
                
                {currencySymbol!=="SEK"?currencySymbol:""}{service.TotalPreTaxCost.toFixed(2)} {currencySymbol==="SEK"?currencySymbol:""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ServiceCost
