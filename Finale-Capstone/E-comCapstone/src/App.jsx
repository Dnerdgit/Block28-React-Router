import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from 'react-auth-kit'
import MainPage from './components/MainPage';

function App() {

  return (
    <>
    {/* <Navbar />
    <AuthProvider>
      <Routes>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
      </Routes>
    </AuthProvider> */}
    <React.Fragment>
      <MainPage/>
    </React.Fragment>
     
    </>
  )
}

export default App
