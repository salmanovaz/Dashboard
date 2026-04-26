import {Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import AddTransaction from "./pages/AddTransaction";
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/transactions' element={<Transactions/>}/>
          <Route path='/add' element={<AddTransaction/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
