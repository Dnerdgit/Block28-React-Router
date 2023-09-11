import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SingleProduct = () => {
  const { productId } = useParams();
  const [singleItem, setSingleItem] = useState({});

  useEffect(() => {
    console.log("Product number: ", productId);
    const fetchSingleItem = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const result = await response.json();
        setSingleItem(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSingleItem();
  }, [productId]);
  return (
    <>
      <div>
        <div>
          <img src={singleItem.image}/>
          <div>
            <h3>{singleItem.title}</h3>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct;
