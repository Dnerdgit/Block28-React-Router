import { useState, useEffect } from 'react';
import { set } from 'react-hook-form';

export default function AllProducts() {
    const [items, setItems] = useState("");

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const result = await response.json();
                setItems(result);
            } catch (error) {
                console.log(error);
            }   
        };
        fetchItems();
        
    }, [])
    
    return (
        <div className="allproducts">
            <div className="organized-items">

            </div>
        </div>
    )



}