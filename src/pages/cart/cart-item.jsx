import React from 'react'
import { useContext } from 'react'
import { shopContext } from '../../context/shop-context'

export const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(shopContext)
    return (
        <div className='cart-item'>
            <img src={productImage} alt="" />
            <div className="description">
                <p><b>{productName}</b></p>
                <p>${price}</p>
                <div className="count-handler">
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                    <button onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
        </div>
    )
}
