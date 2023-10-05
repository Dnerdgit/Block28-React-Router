import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from 'react-auth-kit'
import Home from './components/Home'
import Navigation from './components/Navbar'
import AllProducts from './components/AllProducts';
import SignIn from './components/UserData/SignIn'
// import Rate from './Ratings/Rate';
import CreateAccount from './components/CreateAccount';
import Electronics from './components/products/Electronics';
import Jewelry from './components/products/Jewelry';
import MensClothing from './components/products/clothing/MensClothing';
import WomensClothing from './components/products/clothing/WomensClothing';
import SingleProduct from './components/SingleProduct';
import CreateCart from './components/carts/CreateCart';
import Checkout from './components/Checkout';



function App() {
  const { productItems } = fetch('https://fakestoreapi.com/products');
  const [cartItems, setCartItems] = useState([])

  const handleAddProduct = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ?
      {...ProductExist, quantity: ProductExist.quantity + 1}: item )
      );
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  }

  const handleRemoveProduct = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((item) => 
          item.id === product.id 
          ? { ...ProductExist, quantity: ProductExist.quantity -1} 
          : item
        )
      );
    }
  };
 
 
  return (
    <>
      <Navigation />
      <AuthProvider>
        <React.Fragment>
          <Routes
            productItems={productItems} 
            cartItems={cartItems} 
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}>
            <Route
              path="/"
              element={<Home/>}
              />
            <Route 
              path="/auth/login" 
              element={<SignIn/>}
              />
            <Route
              path="/products-list" exact
              element={<AllProducts 
              productItems={productItems} 
              handleAddProduct={handleAddProduct}/> }/>
            <Route 
              path="/products/:productId" exact
              element={<SingleProduct
              productItems={productItems} 
              handleAddProduct={handleAddProduct}/>}/>
            <Route
              path="/category/electronics" exact
              element={<Electronics
              productItems={productItems} 
              handleAddProduct={handleAddProduct}/>}/>
            <Route 
              path="/category/jewelery" exact
              element={<Jewelry
              productItems={productItems} 
              handleAddProduct={handleAddProduct}/>}/>
            <Route
              path="/category/men's clothing" exact
              element={<MensClothing
              productItems={productItems} 
              handleAddProduct={handleAddProduct}/>}/>
            <Route
              path="/category/women's clothing" exact
              element={<WomensClothing
              productItems={productItems} 
              handleAddProduct={handleAddProduct}/>}/>
            <Route
              path='/account/create'
              element={<CreateAccount/>}/>
            <Route/>
            {/* <Route path='/ratings' element={<Rate/>}/> */}
            {/* <Route path='/edit' element={<EditCart/>}/>
            <Route path='/create' element={<CreateCart/>}/>
            <Route path="/test-cart" element={<Home />}/> */}
            <Route 
              path="/carts" exact
              element={<CreateCart 
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
            />}/>


            <Route 
              path="/checkout" exact
              element={<Checkout/>}/>

          </Routes>
        </React.Fragment>
      </AuthProvider>
    </>
  )
}

export default App
