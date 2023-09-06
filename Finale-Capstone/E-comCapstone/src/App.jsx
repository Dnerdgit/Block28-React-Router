import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from 'react-auth-kit'
// import MainPage from './components/MainPage';
import Navbar from './components/Navbar'
import AllProducts from './components/AllProducts';
import SignIn from './components/SignIn'
// import Searchbar from './components/Searchbar';

function App() {

  return (
    <>
      <Navbar />
      <AuthProvider>
        <React.Fragment>
          <Routes>
            <Route
              path="/"
              element={
                <>
                {/* <MainPage/> */}
                <AllProducts/>
                </>
              }
              />
            <Route 
              path="/auth/login" 
              element={<SignIn/>}
              />
            <Route/>
            <Route/>
            <Route/>
          </Routes>
        </React.Fragment>
      </AuthProvider>
    </>
  )
}

export default App
