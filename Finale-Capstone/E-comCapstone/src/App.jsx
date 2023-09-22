import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from 'react-auth-kit'
import MainPage from './components/MainPage';
import Navigation from './components/Navbar'
import AllProducts from './components/AllProducts';
import SignIn from './components/SignIn'
// import Rate from './Ratings/Rate';
// import CreateAccount from './components/CreateAccount';
import Home from './Test.js/testrun1';
import CreateCart from './Test.js/testAdd';
import Electronics from './components/products/Electronics';
import Jewelry from './components/products/Jewelry';
import MensClothing from './components/products/clothing/MensClothing';
import WomensClothing from './components/products/clothing/WomensClothing';
import SingleProduct from './components/SingleProduct';

function App() {

  return (
    <>
      <Navigation />
      <AuthProvider>
        <React.Fragment>
          <Routes>
            <Route
              path="/"
              element={
                <>
                <MainPage/>
                </>
              }
              />
            <Route 
              path="/auth/login" 
              element={<SignIn/>}
              />
            <Route
              path="/products-list"
              element={<AllProducts/>}/>
            <Route 
              path="/products/:productId"
              element={<SingleProduct/>}/>
            <Route
              path="/category/electronics"
              element={<Electronics/>}/>
            <Route 
              path="/category/jewelery"
              element={<Jewelry/>}/>
            <Route
              path="/category/men's clothing"
              element={<MensClothing/>}/>
            <Route
              path="/category/women's clothing"
              element={<WomensClothing/>}/>
            {/* <Route
              path='account/create'
              element={<CreateAccount/>}/> */}
            <Route/>
            {/* <Route path='/ratings' element={<Rate/>}/> */}
            <Route path="/test-cart" element={<Home />}/>
            <Route path="/create-cart" element={<CreateCart/>}/>
          </Routes>
        </React.Fragment>
      </AuthProvider>
    </>
  )
}

export default App
