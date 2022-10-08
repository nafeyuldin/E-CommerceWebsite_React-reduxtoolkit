import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice'
import { fetchProducts } from '../store/productSlice'
import { STATUES } from '../store/productSlice' 

const Products = () => {
//   const [products, setProducts] = useState([])
const dispatch = useDispatch();
const {data : products, status} = useSelector((state) => state.product)
useEffect(() => {
// const fetchProducts = async () => {
// const res = await fetch('https://fakestoreapi.com/products');
// const data = await res.json();
// console.log(data)
// setProducts(data);
// }
// fetchProducts();
dispatch(fetchProducts())
}, [])
const handleAdd = (products) => {
 dispatch(add(products));
}

if(status === STATUES.LOADING){
    return <h2>loading....</h2>
}
if(status === STATUES.ERROR){
    return <h2>Something went Wrong</h2>
}

    return (
    <div className='productsWrapper'>
{
    products.map((products) => (
<div className='card' key={products.id}>
<img src={products.image} alt="" />
<h4>{products.title}</h4>
<h5>{products.price}</h5>
<button onClick={() => handleAdd(products)} className='btn'>Add to Cart</button>
</div>

    ))
}

    </div>
  )
}

export default Products