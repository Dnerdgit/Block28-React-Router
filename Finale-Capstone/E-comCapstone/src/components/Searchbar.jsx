import React, { useState, useEffect }from 'react'
// import { useSearchParams } from 'react-router-dom';
import AllProducts from './AllProducts'

const Searchbar = () => {
  const [searchParams, setSearchParams] = useState("");
  
  const handleChange = (value) => {
    setSearchParams(value);
    console.log(value);
    }
    
  return (
    <div>
        <input 
            id='searchbar'
            className='product-search'
            type='text'
            name='searchbar' 
            value={searchParams} 
            placeholder='Find products'
            onChange={(e) => handleChange(e.target.value)} 
            />
    </div>
  )
}

export default Searchbar