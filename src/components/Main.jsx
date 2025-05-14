import React from 'react'
import ServiceCost from './ServiceCost'
import ServiceGraph from './ServiceGraph'
import Savings from './Savings'
import KeyPerformIndicator from './KeyPerformIndicator'
import DashboardHeader from './DashboardHedear'

function Main() {

  
  return (
    <div className='flex-1 bg-[#0f1015] p-6 overflow-y-auto h-screen'>
      <DashboardHeader/>
      <KeyPerformIndicator/>
      <ServiceGraph/>
      <ServiceCost/>
      <Savings/>
    </div>
  )
}

export default Main
