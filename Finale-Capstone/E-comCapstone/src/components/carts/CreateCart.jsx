import React from 'react'
import "../styles/cart.css"

const CreateCart = ({cartItems, handleAddProduct, handleRemoveProduct}) => {

  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

  return (
    <div className="cart-items">
          <div className="cart-items-header">
            <header className='cart-title'>Cart Items</header>
          </div>

          <br />
          {cartItems.length === 0 && (
              <div className="cart-items-empty"> No Items are added</div>    
          )}
              {cartItems.map((item, key) => (
                
                <div key={item.id} className="cart-items-list">
                      <img 
                          src={item.image} 
                          alt={item.title} 
                          className="cart-items-image" 
                          />
                  
                  <div className="cart-items-title">{item.title}</div>
                  <div className="cart-items-function">
                    <button 
                      className="cart-items-add" 
                      onClick={() => handleAddProduct(item)}>
                        +
                      </button>
                    <button 
                      className="cart-items-remove"
                      onClick={() => handleRemoveProduct(item)}>
                        -
                        </button>
                  </div>
                  <div className="cart-item-price">
                    {item.quantity} * {item.price}
                  </div>
                </div>
              
              ))}
      
      <div className="cart-items-total-price-name">
          Total Price
          <div className="cart-items-total-price">
            ${totalPrice}
          </div>
      </div>
    </div>
    
  );
};

export default CreateCart

