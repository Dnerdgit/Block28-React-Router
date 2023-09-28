import { useState, useEffect } from "react";
import React from 'react'
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Electronics = () => {
    const [electronics, setElectronics] = useState([]);
  
    useEffect(() => {
      const fetchElectronics = async () => {
        try {
          const response = await fetch(
            `https://fakestoreapi.com/products/category/electronics`
          );
          const result = await response.json();
          setElectronics(result);
        } catch (err) {
          console.log(err);
        }
      };
      fetchElectronics();
    }, []);
    
  return (
  
    <>
      <div>
          <h3>Electronics</h3>
          {electronics.map((product, key) => {
            return (
              <div key={key} className='single-product'>
                <Link to={`/products/${product.id}`}>
                  <div className="left-single-image">
                    <img src={product.image}/>
                  </div>
                </Link>
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

export default Electronics;

// onClick={() => addToCart(product)}