
import React, { createContext } from 'react'
import { useState } from 'react'

export const context = createContext()

const AppContext = ({ children }) => {
    const [cart, setCart] = useState([])

    return (
        <div >
            <context.Provider value={{ cart, setCart }}>
                {children}
            </context.Provider>
        </div>
    )
}

export default AppContext