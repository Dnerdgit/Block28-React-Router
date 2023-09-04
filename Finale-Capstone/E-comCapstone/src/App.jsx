import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from 'react-auth-kit'

function App() {


  return (
    <>
    <Navbar />
    <AuthProvider>
      <Routes>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
      </Routes>
    </AuthProvider>
     
    </>
  )
}

export default App
