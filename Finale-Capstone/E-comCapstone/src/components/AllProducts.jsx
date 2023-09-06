import { useState, useEffect } from 'react';
import { set } from 'react-hook-form';

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

    const filterProducts = (word) => {
        if (word.trim() === "" || word.trim().length > 0) {
            word = word.trim().toLowerCase();
            setFilteringItems(items);
        } else {
            const caseSense = items.filter((item) => 
                item.title().toLowerCase().includes(word)
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
                            <img src={product.image}
                                 className="product-image"
                                 alt=""
                                 />
                            <h4>{product.title}</h4>

                            <li>
                                {product.rating.rate} Star Rating / {product.rating.count} Reviews
                            </li>
                            <li>
                                ${product.price}
                            </li>

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