import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {
  return (
    <>
    <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      
      <h1 className='text-center text-7xl bg-red-500'>Vite + React</h1>
      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
