import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from 'react-auth-kit'
import MainPage from './components/MainPage';
import Navbar from './components/Navbar'

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
                <MainPage/>
              }
              />
            <Route/>
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
