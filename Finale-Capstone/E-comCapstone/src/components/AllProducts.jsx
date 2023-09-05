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
                item.title().toLowerCase().includes(word))
        }
    }
    
    return (
        <div className="all-products">
            <div className="organized-items">
            
            </div>

            <div>
                <h3>Filter Products</h3>
                {/* {filterProducts.map((product, id) => {
                    return (
                        <div key={id} className="product">

                        </div>

                    )
                    // <main key={product.id}/> 
                })
                } */}
            </div>
        </div>
        
    )



}