
import React, { createContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const context = createContext()

const AppContext = ({ children }) => {
    const [cart, setCart] = useState([])
    const [searchShoe, setSearchShoe] = useState("")
    const navigate = useNavigate()


    function add(va, id) {

        const cartDetails = va.find((p) => p.id === id)
        setCart(prev => [...prev, cartDetails])
        navigate("/cart")

    }
    return (
        <div >
            <context.Provider value={{ add, cart, setCart, setSearchShoe, searchShoe }}>
                {children}
            </context.Provider>
        </div>
    )
}

export default AppContext