import React from 'react'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import NikeProducts from './Pages/NikeProducts'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nike-products' element={<NikeProducts />} />

      </Routes>
    </div>
  )
}

export default App