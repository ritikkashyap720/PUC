import React, { useContext, useEffect, useState } from 'react';
import { dataContext } from '../context/Data';

const KeyPerformIndicator = () => {
    const [totalCostSpent, setTotalCostSpent] = useState(0);
    const [color, setColor] = useState('text-green-500');
    const { data } = useContext(dataContext)
    const kpis = [
        {
            title: 'Month to Date Spend',
            value: '₹86,704',
            subtext: '₹-74,866 vs prev',
            valueColor: 'text-green-500',
            subtextColor: 'text-green-400',
        },
        {
            title: 'Budget Utilization',
            value: `${totalCostSpent}%`,
            subtext: 'of INR 1,000',
            valueColor: `${color}`,
            subtextColor: 'text-gray-500',
        },
        {
            title: 'Savings Opportunities',
            value: '₹ 707',
            subtext: '4 opportunities',
            valueColor: 'text-green-500',
            subtextColor: 'text-green-400',
        },
        {
            title: 'Tag Compliance',
            value: '88%',
            subtext: '31 need tags',
            valueColor: 'text-yellow-400',
            subtextColor: 'text-yellow-400',
        },
        {
            title: 'Forecasted Month-End',
            value: '₹ 223,985',
            subtext: '448% of budget',
            valueColor: 'text-red-600',
            subtextColor: 'text-red-400',
        },
    ];


    function calculateTotalCost(data) {
        let total = 0;
        data.forEach(item => {
            total += item.TotalPreTaxCost;
        });
        let totalcost = ((total / 1000) * 100).toFixed(2)
        setTotalCostSpent(totalcost);
        if(totalcost<80){
            setColor('text-green-500');
        }else if(totalcost > 80 && totalcost<90){
            setColor('text-yellow-500');
        }else{
            setColor('text-red-500');
        }
    }

    useEffect(() => {
        calculateTotalCost(data);
    }, [])

    return (
        <div className=" text-white p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">Key Performance Indicators</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {kpis.map((kpi, idx) => (
                    <div key={idx} className="bg-white  p-6 rounded-lg">
                        <div className="text-[16px] text-gray-700 font-semibold mb-2">{kpi.title}</div>
                        <div className={`text-2xl  font-bold ${kpi.valueColor}`}>{kpi.value}</div>
                        <div className={`text-sm font-semibold mt-1 ${kpi.subtextColor}`}>{kpi.subtext}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KeyPerformIndicator;