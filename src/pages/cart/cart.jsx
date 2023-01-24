import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Products } from '../../Product'
import { shopContext } from '../../context/shop-context'
import { CartItem } from './cart-item'
import './cart.css'

export default function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(shopContext)
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()
  return (
    <div className="cart">
      <div>
        <h1>Your cart items</h1>
      </div>

      <div className="cart-items">
        {Products.map((product) => {
          if(cartItems[product.id] !== 0) {
            return <CartItem data={product}/>
          }
        })}
      </div>

      {totalAmount > 0 ? 
      (<div className="checkout">
        <p>Subtotal: ${totalAmount}</p>
        <button onClick={() => navigate("/")}>Continue shopping</button>
        <button>Checkout</button>
      </div>):
      (<h1>Your Cart is empty</h1>)}
    </div>
  )
}

