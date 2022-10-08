import { useState } from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Header from './components/Navbar'
import './index.css'
import store from './store/store'
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
<Provider store={store}>
<BrowserRouter>
<Header/>
<Routes >
 
  <Route path ="/" element={<Home/>} />
  <Route path ="/cart" element={<Cart/>} />
</Routes>
</BrowserRouter>   
</Provider>
    </div>
  )
}

export default App
