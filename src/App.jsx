import React from 'react'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import BrandPage from './Pages/BrandPage'
import Navbar from './Component/Navbar'
import AllProducts from './Pages/AllProducts'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'
const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/brand-page/:brand' element={<BrandPage />} />
        <Route path='/all-products' element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </div>
  )
}

export default App