import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/home/home-page'
import ProductPage from './components/home/product-page'
import Navbar from './components/navigation/navbar'
import Cart from './components/cart/cart'
import { useState } from 'react'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product-page' element={<ProductPage />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </>
  )
}

export default App
