import { useState, useEffect } from "react";
import React from 'react'

const Jewelry = () => {
    const [jewels, setJewels] = useState("");

  return (
  
        <>
          <div className='single-product'>
              <div className="left-single-image">
                <img src={jewels.image}/>
              </div>
              <div className="right-single-above-details">
                <h2>{jewels.title}</h2>
                <p>{jewels.rating.rate} Star Rating / {jewels.rating.count} Reviews</p>
                <p>${jewels.price}</p>
                <br/>
                <p>Sign up to qualify for Members Discounts</p>
                <br/>
                <br/>
                <Button className='cart-plus' variant='success'>Add to Cart</Button>
                <br/>
                <div className="right-single-below-details">
                  <p>{jewels.description}</p>
                </div>
    
              </div>
          </div>
        </>
      
  )
}

export default Jewelry