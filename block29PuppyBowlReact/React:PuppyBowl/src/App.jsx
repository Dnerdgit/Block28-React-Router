import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import { Routes, Route } from "react-router-dom";
//import Navbar from "./components/Navbar.jsx"
import './App.css'

function App() {


  return (

    <div id="container">


      <div id="main-route">
        <Routes>
          <Route path='/' element={<AllPlayers/>} />
          <Route path='/players/:id' element={<SinglePlayer />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
