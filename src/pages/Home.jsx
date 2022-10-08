import React from 'react'
import Products from '../components/Products'
const Home = () => {
  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}
    >
<h2 className='heading' > Welcome to the E-Commerce Store</h2>
<section>
  <h3 style={{
    fontWeight: '800'
  }}>Products</h3>
  <Products/>
</section>

    </div>

  )
}

export default Home