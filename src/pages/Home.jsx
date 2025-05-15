import React, { use, useContext } from 'react'

import DashboardHeader from '../components/DashboardHedear';
import KeyPerformIndicator from '../components/KeyPerformIndicator';
import ServiceGraph from '../components/ServiceGraph';
import ServiceCost from '../components/ServiceCost';
import Savings from '../components/Savings';
import { dataContext } from '../context/Data';

function Home() {
  const { loading } = useContext(dataContext)


  return (
    <div className='flex-1 bg-[#0f1015] p-6 overflow-y-auto h-screen'>
      {loading ? <div className="flex h-screen flex-1 bg-[#0f1015] justify-center items-center ">
        < div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div > : <>
        <DashboardHeader />
        <KeyPerformIndicator />
        <ServiceGraph />
        <ServiceCost />
        <Savings />
      </>
      }
    </div >
  )
}

export default Home
