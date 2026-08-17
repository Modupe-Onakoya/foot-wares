import React, { useContext } from 'react'
import { motion } from "motion/react"
import { products } from '../assets/product'
import { Link, useNavigate } from 'react-router-dom'
import { context } from '../context/AppContext'

const FeaturedProduts = () => {
    const { cart, add } = useContext(context)
    const navigate = useNavigate()
    const featured = products.filter(product => product.isFeatured === true)

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='px-4 sm:px-6 md:px-8 lg:px-20 mt-20 lg:mt-30'>
            <h1 className='text-center text-2xl font-bold '>
                Featured Produts
            </h1>
            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6">
                {featured.map((product) => (
                    <Link to={`/product/${product.id}`}
                        key={product.id}
                        className="rounded-xl overflow-hidden bg-white"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full aspect-square object-cover transition-transform duration-500 hover:scale-105"
                        />

                        <div className="p-4">
                            <p className="text-sm text-gray-500">{product.brand}</p>

                            <h3 className="font-semibold mt-1">{product.name}</h3>

                            <p className="font-bold mt-2">${product.price}</p>

                            <button onClick={() => add(featured, product.id)} className="w-full mt-4 bg-black text-white py-2 rounded-lg">
                                Add to Cart
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
            <p onClick={() => navigate("/all-products")} className='text-center border rounded-lg shadow-sm border-gray-200 cursor-pointer mt-6 px-2 py-1 w-fit mx-auto'>View All</p>
        </motion.div>
    )
}

export default FeaturedProduts