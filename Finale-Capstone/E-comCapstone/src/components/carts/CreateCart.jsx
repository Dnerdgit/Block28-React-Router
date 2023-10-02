import React from 'react'
import "../styles/cart.css"

const CreateCart = ({cartItems}) => {
  return (
    <div className="cart-items">
        <div className="cart-items-header">
          <header className='cart-title'>
          Cart Items
          </header>
          </div>

        {cartItems.length === 0 && (
            <div className="cart-items-empty"> No Items are added</div>    
        )}
            {cartItems.map(() => (
                <div key={item.id} className="cart-items-list">
                    <img 
                        src={item.image} 
                        alt={item.title} 
                        className="cart-items-image" />
                </div>
            ))}
    </div>
  )
}

export default CreateCart

