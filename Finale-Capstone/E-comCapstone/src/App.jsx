import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from 'react-auth-kit'
import MainPage from './components/MainPage';
import Navigation from './components/Navbar'
import AllProducts from './components/AllProducts';
import SignIn from './components/UserData/SignIn'
// import Rate from './Ratings/Rate';
// import CreateAccount from './components/CreateAccount';
import Electronics from './components/products/Electronics';
import Jewelry from './components/products/Jewelry';
import MensClothing from './components/products/clothing/MensClothing';
import WomensClothing from './components/products/clothing/WomensClothing';
import SingleProduct from './components/SingleProduct';

// import Home from './Test.js/testrun1';
import CreateCart from './components/carts/CreateCart';
// import EditCart from './Test.js/testEdit';

function App() {

  const [cartItems, setCartItems] = useState([])

  const handleAddProduct = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ?
      {...ProductExist, quantity: ProductExist.quantity + 1}: item )
      );
    } else {
      setCartItems([])
    }
  }
 

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
              path="/products-list" exact
              element={<AllProducts/> }/>
            <Route 
              path="/products/:productId" exact
              element={<SingleProduct/>}/>
            <Route
              path="/category/electronics" exact
              element={<Electronics/>}/>
            <Route 
              path="/category/jewelery" exact
              element={<Jewelry/>}/>
            <Route
              path="/category/men's clothing" exact
              element={<MensClothing/>}/>
            <Route
              path="/category/women's clothing" exact
              element={<WomensClothing/>}/>
            {/* <Route
              path='account/create'
              element={<CreateAccount/>}/> */}
            <Route/>
            {/* <Route path='/ratings' element={<Rate/>}/> */}
            {/* <Route path='/edit' element={<EditCart/>}/>
            <Route path='/create' element={<CreateCart/>}/>
            <Route path="/test-cart" element={<Home />}/> */}
            <Route 
              path="/create-cart" exact
              element={<CreateCart cartItems={cartItems}/>}/>

          </Routes>
        </React.Fragment>
      </AuthProvider>
    </>
  )
}

export default App
