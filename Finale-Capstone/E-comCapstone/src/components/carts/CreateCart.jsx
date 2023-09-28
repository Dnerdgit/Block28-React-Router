import React from 'react'

const CreateCart = ({cartItems}) => {
  return (
    <div className="cart-items">
        <div className="cart-items-header">Cart Items</div>

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

