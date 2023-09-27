import { useState, useEffect } from 'react';
import { set } from 'react-hook-form';
import Rate from '../Ratings/Rate';
import { Link } from 'react-router-dom'

export default function AllProducts() {
    const [items, setItems] = useState([]);
    const [filteringItems, setFilteringItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const result = await response.json();
                setItems(result);
                setFilteringItems(result);
            } catch (error) {
                console.log(error);
            }   
        };
        fetchItems();
        
    }, [])

    const handleSort = (props) => {
        const sortItems = [...filterProducts];
    }

    const filterProducts = (word) => {
        if (word.trim() === "" || word.trim().length > 0) {
            word = word.trim().toLowerCase();
            return word === "" ? product : product.title.toLowerCase().includes(word);
            // setFilteringItems(items);
        } else {
            const caseSense = items.filter((product) => 
                product.title().toLowerCase().includes(word)
                )
            setFilteringItems(caseSense);
        }
        
    }
    
    return (
        <div className="all-products">
            <div className="organized-items">
            
            </div>

            <div className="product-comp">
                <h3>All Products</h3>
                {filteringItems.map((product, key) => {
                    return (
                        <div key={key} className="product">
                            <main key={product.id} className='product-id'>
                            <Link to={`/products/${product.id}`}>
                            <img src={product.image}
                                 className="product-image"
                                 alt="Products for viewing"
                                 />
                            </Link>
                            <h4>{product.title}</h4>

                            <li>
                                <Rate {...product.rating.rate}> Star Rating </Rate> {product.rating.count} (Customer Reviews)
                            </li>
                            <li>
                                ${product.price}
                            </li>
                            </main>
                        </div>
                    )
                   
                })
                }
            </div>
        </div>
        
    )

}



 // <main key={product.id} className="all-items"/>
                            // <li>{product.title}</li>