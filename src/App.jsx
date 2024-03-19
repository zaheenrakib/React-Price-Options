import './App.css'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'
// import PieCharts from './components/PieCharts/PieCharts'
import PriceOptions from './components/PriceOptions/PriceOptions'

// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {
  return (
    <>
    <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      
      <h1 className='text-center text-7xl bg-red-500'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
      {/* <PieCharts></PieCharts> */}
    </>
  )
}

export default App
