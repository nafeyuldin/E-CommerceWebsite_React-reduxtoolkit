import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {remove} from '../store/cartSlice'
const Cart = () => {
const productss = useSelector((state) => state.cart)
const dispatch = useDispatch();
const handleRemove =(productsId) => {
  dispatch(remove(productsId))

}
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <h3>Cart</h3>
      <div className="cartWrapper">
{
productss.map((products)=> (
  <div className='cartCard' key={products.id}>
<img src={products.image} alt="" />
<h5>{products.title}</h5>
<h5>{products.price}</h5>
<button onClick={() => handleRemove(products.id)} className='btn'>Remove</button>
  </div>
))
}
      </div>
    </div>
  )
}

export default Cart