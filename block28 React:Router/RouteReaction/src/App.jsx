import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home.jsx'
import Blue from './components/Blue.jsx'
import Green from './components/Green.jsx'
import Red from './components/Red.jsx'
import Gray from './components/Gray.jsx'
import './App.css'

function App() {

  return (

  <div id="container">

      <div id="navbar">
        <Link to="/"/>
        <Link to="/blue"/>
        <Link to="/red"/>
        <Link to="/green"/>
        <Link to="/gray"/>
      </div>
      <div id="main-section">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/blue" element={<Blue/>}/>
            <Route path="/red" element={<Red/>}/>
            <Route path="/green" element={<Green/>}/>
            <Route path="/gray" element={<Gray/>}/>
        </Routes>
      </div>

  </div>
  )


}

export default App
