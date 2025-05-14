import React, { use, useContext } from 'react'
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import { dataContext } from '../context/Data';

function Home() {
  const { loading } = useContext(dataContext);


  return (
    <div className="flex min-h-screen">
      <Sidebar />
      {loading ? <div className="flex h-screen flex-1 bg-[#0f1015] justify-center items-center ">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div> : <Main />}

    </div>
  )
}

export default Home
