import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { dataContext } from '../context/Data';

function Savings() {

    // const [serviceCost, setServiceCost] = useState([]);
    const {data} = useContext(dataContext)
  
    return (
        <div className="bg-[#111827] text-white min-h-screen p-6 font-sans">
            <h1 className="text-2xl font-semibold mb-4">Savings Opportunities</h1>
            <div className="overflow-auto rounded-lg border border-gray-700">
                <table className="min-w-full text-left text-sm text-white">
                    <thead className="bg-[#1f2937] text-gray-300">
                        <tr>
                            <th className="px-6 py-3">Resource Name</th>
                            <th className="px-6 py-3">Resource Type</th>
                            <th className="px-6 py-3">Recommendation</th>
                            <th className="px-6 py-3">Potential Savings</th>
                            <th className="px-6 py-3">Impact</th>
                        </tr>
                    </thead>
                    <tbody className="bg-[#111827] divide-y divide-gray-700">
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {/* {item.resourceName} */}
                                    empty
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.ServiceName}
                                </td>
                                <td className="px-6 py-4">Recommendation</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                   Saving
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">empty</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Savings
