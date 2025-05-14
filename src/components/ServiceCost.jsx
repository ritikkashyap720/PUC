import React, { useEffect, useState } from 'react'

function ServiceCost() {
  const [serviceCost, setServiceCost] = useState([]);
  const data = [
    {
      "PreTaxCost": 25.8514378621875,
      "UsageDate": "11-05-2025",
      "ServiceName": "Azure Database for MySQL",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/resourcegroups/kudip-rg/providers/microsoft.dbformysql/flexibleservers/kudipadmin",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 4.45689889602363E-5,
      "UsageDate": "11-05-2025",
      "ServiceName": "Bandwidth",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/resourcegroups/spendtrack360/providers/microsoft.compute/virtualmachines/spendtrack01",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 0.0,
      "UsageDate": "11-05-2025",
      "ServiceName": "Microsoft Defender for Cloud",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/providers/microsoft.security/pricings/arm",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 0.0,
      "UsageDate": "11-05-2025",
      "ServiceName": "Microsoft Defender for Cloud",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/resourcegroups/kudip-rg/providers/microsoft.dbformysql/flexibleservers/kudipadmin",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 0.0,
      "UsageDate": "11-05-2025",
      "ServiceName": "Microsoft Defender for Cloud",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/resourcegroups/spendtrack360/providers/microsoft.compute/virtualmachines/spendtrack01",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 10.4827348357594,
      "UsageDate": "11-05-2025",
      "ServiceName": "Storage",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/resourcegroups/spendtrack360/providers/microsoft.compute/disks/spendtrack01_disk1_0bc7ef42668043acb35c4850f932d39c",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 163.124110539,
      "UsageDate": "11-05-2025",
      "ServiceName": "Virtual Machines",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/resourcegroups/spendtrack360/providers/microsoft.compute/virtualmachines/spendtrack01",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 8.08493658854167,
      "UsageDate": "11-05-2025",
      "ServiceName": "Virtual Network",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/resourcegroups/spendtrack360/providers/microsoft.network/publicipaddresses/spendtrack01-ip",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 42.956353873125,
      "UsageDate": "12-05-2025",
      "ServiceName": "Azure Database for MySQL",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/resourcegroups/kudip-rg/providers/microsoft.dbformysql/flexibleservers/kudipadmin",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 5.99178898846731E-5,
      "UsageDate": "12-05-2025",
      "ServiceName": "Bandwidth",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/resourcegroups/spendtrack360/providers/microsoft.compute/virtualmachines/spendtrack01",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 0.0,
      "UsageDate": "12-05-2025",
      "ServiceName": "Microsoft Defender for Cloud",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/providers/microsoft.security/pricings/arm",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 0.0,
      "UsageDate": "12-05-2025",
      "ServiceName": "Microsoft Defender for Cloud",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/resourcegroups/kudip-rg/providers/microsoft.dbformysql/flexibleservers/kudipadmin",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 0.0,
      "UsageDate": "12-05-2025",
      "ServiceName": "Microsoft Defender for Cloud",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/resourcegroups/spendtrack360/providers/microsoft.compute/virtualmachines/spendtrack01",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 13.1655606768,
      "UsageDate": "12-05-2025",
      "ServiceName": "Storage",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/resourcegroups/spendtrack360/providers/microsoft.compute/disks/spendtrack01_disk1_0bc7ef42668043acb35c4850f932d39c",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 195.640221078,
      "UsageDate": "12-05-2025",
      "ServiceName": "Virtual Machines",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/resourcegroups/spendtrack360/providers/microsoft.compute/virtualmachines/spendtrack01",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 10.20375,
      "UsageDate": "12-05-2025",
      "ServiceName": "Virtual Network",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/resourcegroups/spendtrack360/providers/microsoft.network/publicipaddresses/spendtrack01-ip",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 6.679745146125,
      "UsageDate": "13-05-2025",
      "ServiceName": "Azure App Service",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/resourcegroups/myresourcegroup/providers/microsoft.web/serverfarms/myappserviceplan",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 0.0,
      "UsageDate": "13-05-2025",
      "ServiceName": "Azure App Service",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/resourcegroups/myresourcegroup/providers/microsoft.web/sites/spendtrack360",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 41.3721528103125,
      "UsageDate": "13-05-2025",
      "ServiceName": "Azure Database for MySQL",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/resourcegroups/kudip-rg/providers/microsoft.dbformysql/flexibleservers/kudipadmin",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 0.0,
      "UsageDate": "13-05-2025",
      "ServiceName": "Bandwidth",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/resourcegroups/poc/providers/microsoft.web/sites/spendtrack360",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 6.06021046405658E-5,
      "UsageDate": "13-05-2025",
      "ServiceName": "Bandwidth",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/resourcegroups/spendtrack360/providers/microsoft.compute/virtualmachines/spendtrack01",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 0.0,
      "UsageDate": "13-05-2025",
      "ServiceName": "Log Analytics",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/resourcegroups/defaultresourcegroup-cus/providers/microsoft.operationalinsights/workspaces/defaultworkspace-b8e73211-ba0b-4545-b969-b079e74c7265-cus",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 0.0,
      "UsageDate": "13-05-2025",
      "ServiceName": "Microsoft Defender for Cloud",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/providers/microsoft.security/pricings/arm",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 0.0,
      "UsageDate": "13-05-2025",
      "ServiceName": "Microsoft Defender for Cloud",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/resourcegroups/kudip-rg/providers/microsoft.dbformysql/flexibleservers/kudipadmin",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 0.0,
      "UsageDate": "13-05-2025",
      "ServiceName": "Microsoft Defender for Cloud",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/resourcegroups/myresourcegroup/providers/microsoft.web/serverfarms/myappserviceplan",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 0.0,
      "UsageDate": "13-05-2025",
      "ServiceName": "Microsoft Defender for Cloud",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/resourcegroups/spendtrack360/providers/microsoft.compute/virtualmachines/spendtrack01",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 13.1655606768,
      "UsageDate": "13-05-2025",
      "ServiceName": "Storage",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/resourcegroups/spendtrack360/providers/microsoft.compute/disks/spendtrack01_disk1_0bc7ef42668043acb35c4850f932d39c",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 179.450110539,
      "UsageDate": "13-05-2025",
      "ServiceName": "Virtual Machines",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/resourcegroups/spendtrack360/providers/microsoft.compute/virtualmachines/spendtrack01",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 10.20375,
      "UsageDate": "13-05-2025",
      "ServiceName": "Virtual Network",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/resourcegroups/spendtrack360/providers/microsoft.network/publicipaddresses/spendtrack01-ip",
      "Currency": "INR"
    },
    {
      "PreTaxCost": 0.5485650282,
      "UsageDate": "14-05-2025",
      "ServiceName": "Storage",
      "ResourceId": "/subscriptions/b8e73211-ba0b-4545-b969-b079e74c7265/resourcegroups/spendtrack360/providers/microsoft.compute/disks/spendtrack01_disk1_0bc7ef42668043acb35c4850f932d39c",
      "Currency": "INR"
    }
  ]

  useEffect(() => { 
    const agegregatedData = aggregatePreTaxCostByService(data);
    setServiceCost(agegregatedData);

  },[])
  

  function aggregatePreTaxCostByService(data) {
    const serviceCosts = {};

    data.forEach(entry => {
      const service = entry.ServiceName;
      const cost = parseFloat(entry.PreTaxCost);

      if (!serviceCosts[service]) {
        serviceCosts[service] = 0;
      }

      serviceCosts[service] += cost;
    });

    // Convert the result to an array of objects
    const result = Object.entries(serviceCosts).map(([service, totalCost]) => ({
      ServiceName: service,
      TotalPreTaxCost: +totalCost.toFixed(6)  // rounded to 6 decimal places
    }));
    console.log(result);
    return result;

  }
 



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
          {serviceCost.map((service, idx) => (
            <tr key={idx} className="hover:bg-[#2A293B]">
              <td className="px-4 py-2 border border-gray-600 border-opacity-20 text-blue-400 underline cursor-pointer">
                {service.ServiceName}
              </td>
              <td className="px-4 py-2 border border-gray-600 border-opacity-20">
                {service.TotalPreTaxCost}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ServiceCost
