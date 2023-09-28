import './styles/searchbar.css'
import React, { useState, useEffect }from 'react'
// import { useSearchParams } from 'react-router-dom';
// import AllProducts from './AllProducts'

const Searchbar = ({placeholder, data}) => {
  const [searchParams, setSearchParams] = useState("");
  
  const handleChange = (value) => {
    setSearchParams(value);
    console.log(value);
    }
    
  return (
    <div className="search">
      <div className='searchInputs'>
        <input 
            id='searchbar'
            className='product-search'
            type='text'
            name='searchbar' 
            value={searchParams} 
            placeholder={placeholder}
            onChange={(e) => handleChange(e.target.value)} 
            />
          <div className="searchIcon"></div>
      </div>
    </div>
  );
}

export default Searchbar