import './styles/products.css'
import { useState, useEffect } from 'react';
import { set } from 'react-hook-form';
// import Rate from '../Ratings/Rate';
import { Link } from 'react-router-dom'
import SorterPage from './SorterPage'

export default function AllProducts({product}) {
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

    const handleSortChange = (props) => {
        const sortItems = [...filterProducts];
        if (props === "ascending") {
            sortItems.sort((a, b) => a.title.localeCompare(b.title));
          } else if (props === "descending") {
            sortItems.sort((a, b) => b.title.localeCompare(a.title));
        }
        setFilteringItems(sortItems);
    
    }

    const filterProducts = (word) => {
        if (word.trim() === "" || word.trim().length > 0) {
            // word = word.trim().toLowerCase();
            // return word === "" ? product : product.title.toLowerCase().includes(word);
            setFilteringItems(items);
        } else {
            const caseSense = items.filter((product) => 
                product.title().toLowerCase().includes(word)
                )
            setFilteringItems(caseSense);
        }
        
    }
    
    return (
        <div className="all-products-cards">
            <div className="organized-items">
                <SorterPage onSort={handleSortChange}/>
            </div>
            <section>
                <div className="product-card">
                    {filteringItems.map((product, key) => (
                        <div key={key} className="product-card">
                            <main key={product.id} className='product-id'>
                            <Link to={`/products/${product.id}`}>
                            <div className="product-image">
                                <img src={product.image}
                                    
                                    alt={product.title}
                                    />
                             </div>      
                            </Link>
                            <h4>{product.title}</h4>

                            <p>
                                {product.rating.rate} Star Rating  {product.rating.count} (Customer Reviews)
                                {/* <Rate {...product.rating.rate}> Star Rating </Rate> {product.rating.count} (Customer Reviews) */}
                            </p>
                            <p>
                                ${product.price}
                            </p>
                            <button>Add to Cart</button>
                            </main>
                        </div>       
                    ))}
                </div>
            </section>
        </div>
        
    )

}



 // <main key={product.id} className="all-items"/>
                            // <li>{product.title}</li>