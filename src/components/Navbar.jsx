import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Navbar = () => {
  const items= useSelector((state) => state.cart )
  return (
    <div style={{
      display:'flex',
      justifyContent: "space-between",
      backgroundColor: "#764abc",
      color: 'white',
      padding: '10px'

    }}
    className='header'
    >
      <span className='logo' style={{
        fontWeight: 700,
        letterSpacing: 2
      }}>E-Commerce Store</span>
      <div  className='Nlink'>
        <Link to = "/" className="navLink">Home</Link>
        <Link to = "/cart" className="navLink">Cart</Link>
        <span className='cartCount' style={{
          padding: '0px 25px',
        }}>
          Cart Items :  {items.length}
        </span>
      </div>
    </div>
  )
}

export default Navbar