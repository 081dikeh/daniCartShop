import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="links">
            <Link className='link' to='/'>Shop</Link>
            <Link className='link' to='/cart'><ShoppingCart size={32}/></Link>
        </div>
    </div>
  )
}

export default Navbar