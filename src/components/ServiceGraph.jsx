import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    Legend,
    Cell
} from 'recharts';
import { dataContext } from '../context/Data';


function ServiceGraph() {
    const { data, currencySymbol,currentCurrency,currencyValue } = useContext(dataContext)

    const COLORS = {
        'Azure Database for MySQL': '#EC4899', // pink
        'Bandwidth': '#F59E0B',               // amber
        'Microsoft Defender for Cloud': '#8B5CF6', // violet
        'Storage': '#10B981',                // emerald
        'Virtual Machines': '#3B82F6',       // blue
        'Virtual Network': '#F43F5E',        // rose
        'Azure App Service': '#A855F7',      // purple
        'Log Analytics': '#22D3EE',          // cyan
    };

    return (
        <div className='p-8'>
            <h2 className="text-4xl font-bold mb-6 text-white">Cost Analysis</h2>
            <h2 className="text-3xl font-bold mb-4 text-white">Spend by Azure Services</h2>
            <div className='flex flex-row'>
                <div className="w-[800px] h-[600px]  text-white rounded-xl p-8">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} margin={{ top: 40, right: 30, left: 50, bottom: 100 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                            <XAxis
                                dataKey="ServiceName"
                                stroke="#ccc"
                                angle={-40}
                                textAnchor="end"
                                interval={0}
                                height={100}
                                label={{
                                    value: `Azure Services VS Pre-Tax Cost(in ${currentCurrency})`,
                                    position: 'insideBottom',
                                    offset: -40,
                                    fill: '#ccc',
                                    fontSize: 18,
                                }}
                            />
                            <YAxis stroke="#ccc" />
                            <Tooltip />
                            <Legend />
                            <Bar
                                dataKey="TotalPreTaxCost"
                                barSize={40}
                                isAnimationActive={false}

                            >
                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[entry.ServiceName] || '#8884d8'}
                                    />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex flex-col gap-4 mt-18 text-[14px]">
                    {Object.entries(COLORS).map(([service, color]) => (
                        <div key={service} className="flex items-center space-x-2">
                            <div
                                className="w-4 h-4 rounded"
                                style={{ backgroundColor: color }}
                            ></div>
                            <span className="text-white">{service}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServiceGraph
