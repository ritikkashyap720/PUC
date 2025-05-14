import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { DataProvider } from './context/Data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DataProvider>
        <Home />
      </DataProvider>
    </>
  )
}

export default App
