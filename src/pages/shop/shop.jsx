import React from 'react'
import { Products } from '../../Product'
import { Product } from './product'
import './shop.css'

export default function Shop() {
  return (
    <div className='shop'>
        <div className="shop-title">
            <p>DanielD Shop</p> 
        </div>
        <div className="products">
            {Products.map((product) => (
                <Product data={product}/>
            ))}
        </div>
    </div>
  )
}

