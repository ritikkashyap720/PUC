import React from 'react'
import ServiceCost from './ServiceCost'
import ServiceGraph from './ServiceGraph'
import Savings from './Savings'

function Main() {
  return (
    <div className='flex-1 bg-[#0f1015] p-6 overflow-y-auto h-screen'>
      <ServiceGraph/>
      <ServiceCost/>
      <Savings/>
    </div>
  )
}

export default Main
