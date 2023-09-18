import { useState, useEffect } from "react";
import React from 'react'
import Button from "react-bootstrap/Button";

const WomensClothing = () => {
    const [womensClothing, setWomensClothing] = useState([]);
  
    useEffect(() => {
      const fetchmensClothing = async () => {
        try {
          const response = await fetch(
            `https://fakestoreapi.com/products/category/women's clothing`
          );
          const result = await response.json();
          setWomensClothing(result);
        } catch (err) {
          console.log(err);
        }
      };
      fetchmensClothing();
    }, []);
    
  return (
  
    <>
    <div>
        <h3>Women's Clothing</h3>
        {womensClothing.map((product, key) => {
          return (
            <div key={key} className='single-product'>
                <div className="left-single-image">
                  <img src={product.image}/>
                </div>
                <div className="right-single-above-details">
                  <h2>{product.title}</h2>
                  <p>{product.rating.rate} Star Rating / {product.rating.count} Reviews</p>
                  <p>${product.price}</p>
                  <br/>
                  <p>Sign up to qualify for Members Discounts</p>
                  <br/>
                  <br/>
                  <Button className='cart-plus' 
                    onClick={() => alert(product.id)} 
                    variant='success'>Add to Cart</Button>
                  <br/>
                  <div className="right-single-below-details">
                    <p>{product.description}</p>
                  </div>
                </div>
            </div>
          )
          })
        }
    </div>
  </>
      
  )
}

export default WomensClothing