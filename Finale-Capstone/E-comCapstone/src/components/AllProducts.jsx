import './styles/products.css'
import { useState, useEffect } from 'react';
import { set } from 'react-hook-form';
// import Rate from '../Ratings/Rate';
import { Link } from 'react-router-dom'
import SorterPage from './SorterPage'
import Searchbar from './Searchbar';

export default function AllProducts({}) {
    const [word, setWord] = useState("")
    const [items, setItems] = useState([]);
    // const [filteringItems, setFilteringItems] = useState([]);

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

    // const filterProducts = () => {
    //     if (word.trim() === "" || word.trim().length > 0) {
    //         // word = word.trim().toLowerCase();
    //         // return word === "" ? product : product.title.toLowerCase().includes(word);
    //         setFilteringItems(items);
    //     } else {
    //         const caseSense = items.filter((product) => 
    //             product.title().toLowerCase().includes(word)
    //             )
    //         setFilteringItems(caseSense);
    //     }
        
    // }

    const filteringItems = word ? items.filter((product) => 
                product.title.toLowerCase().includes(word.toLowerCase())
                ) : items;
    
    return (
        <>
            <div className="organized-items">
                    <SorterPage onSort={handleSortChange}/>
                    <Searchbar 
                        placeholder="Find Product"
                        data={AllProducts}
                        word={word} setWord={setWord}
                        />
                </div>        
            <div className="all-products-cards">
            
            <section>
                
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
                
            </section>
            </div>
     </>
    )

}



 // <main key={product.id} className="all-items"/>
                            // <li>{product.title}</li>