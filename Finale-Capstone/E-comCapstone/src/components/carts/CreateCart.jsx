import React from 'react'
import "../styles/cart.css"

const CreateCart = ({cartItems, handleAddProduct, handleRemoveProduct}) => {
  return (
    <div className="cart-items">
        <div className="cart-items-header">
          <header className='cart-title'>
          Cart Items
          </header>
        </div>
        <br />
        {cartItems.length === 0 && (
            <div className="cart-items-empty"> No Items are added</div>    
        )}
            {cartItems.map((item) => (
              <>
                <div key={item.id} className="cart-items-list">
                    <img 
                        src={item.image} 
                        alt={item.title} 
                        className="cart-items-image" />
                </div>
                <div className="cart-items-name">{item.name}</div>
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
              </>
            ))}
    </div>
  )
}

export default CreateCart

