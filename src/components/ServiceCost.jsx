import React from 'react'

function ServiceCost() {
    const services = [
        { name: "Azure Functions", cost: "€10,186" },
        { name: "Virtual Machines", cost: "€13,797" },
        { name: "Network", cost: "€13,388" },
        { name: "Storage Accounts", cost: "€10,898" },
        { name: "App Service", cost: "€11,610" },
        { name: "Azure SQL", cost: "€13,061" },
        { name: "Other Services", cost: "€13,765" },
      ];
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
          {services.map((service, idx) => (
            <tr key={idx} className="hover:bg-[#2A293B]">
              <td className="px-4 py-2 border border-gray-600 border-opacity-20 text-blue-400 underline cursor-pointer">
                {service.name}
              </td>
              <td className="px-4 py-2 border border-gray-600 border-opacity-20">
                {service.cost}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ServiceCost
