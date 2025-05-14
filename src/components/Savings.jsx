import React, { useContext, useEffect, useState } from "react";
import { dataContext } from "../context/Data";

function Savings() {
  const [serviceCost, setServiceCost] = useState([]);
  const { data } = useContext(dataContext);

  useEffect(() => {
    // Define arrays of hardcoded values
    const resourceNames = ["Resource A", "Resource B", "Resource C"];
    const recommendations = ["Scale down", "Terminate unused", "Upgrade plan"];
    const potentialSavings = ["$120/month", "$80/month", "$200/month"];
    const impacts = ["High", "Medium", "Low"];

    // Enrich each item in the data array with corresponding hardcoded values
    const enrichedData = data.map((item, index) => ({
      ...item,
      resourceName: resourceNames[index]||  "Resource N/A",
      recommendation: recommendations[index] || "No recommendation",
      potentialSavings: potentialSavings[index]||  "N/A",
      impact: impacts[index]||  "Unknown",
    }));

    setServiceCost(enrichedData);
  }, [data]);

  return (
    <div className="text-white p-6 font-sans">
      <h1 className="text-4xl font-semibold mb-4">Savings Opportunities</h1>
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
            {serviceCost.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.resourceName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.ServiceName}
                </td>
                <td className="px-6 py-4">{item.recommendation}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.potentialSavings}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.impact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Savings;