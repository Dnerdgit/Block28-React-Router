import { useState, useEffect } from "react";
import React from 'react'

const Electronics = () => {
    const [electronics, setElectronics] = useState("");

  return (
  
        <>
          <div className='single-product'>
              <div className="left-single-image">
                <img src={electronics.image}/>
              </div>
              <div className="right-single-above-details">
                <h2>{electronics.title}</h2>
                <p>{electronics.rating.rate} Star Rating / {electronics.rating.count} Reviews</p>
                <p>${electronics.price}</p>
                <br/>
                <p>Sign up to qualify for Members Discounts</p>
                <br/>
                <br/>
                <Button className='cart-plus' variant='success'>Add to Cart</Button>
                <br/>
                <div className="right-single-below-details">
                  <p>{electronics.description}</p>
                </div>
    
              </div>
          </div>
        </>
      
  )
}

export default Electronics