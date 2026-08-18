import React, { useContext } from 'react'
import { motion } from "motion/react"
import { products } from '../assets/product'
import { Link, useNavigate } from 'react-router-dom'
import { context } from '../context/AppContext'
import { img } from 'motion/react-client'
import { assets } from '../assets/asset'

const FeaturedProduts = () => {
    const { cart, add } = useContext(context)
    const navigate = useNavigate()
    const featured = products.filter(product => product.isFeatured === true)


    return (
        <motion.div
            id='products'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='px-4 sm:px-6 md:px-8 lg:px-20 mt-20 lg:mt-30'>
            <h1 className='text-center text-2xl font-bold py-5'>
                Featured Produts
            </h1>
            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6">
                {featured.map((product) => (
                    <Link to={`/product/${product.id}`}
                        key={product.id}
                        className="rounded-xl overflow-hidden relative bg-white"

                    >
                        <div className='bg-gray-300'>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full aspect-square object-cover transition-transform duration-500 hover:scale-105"
                            />

                        </div>

                        <div className="p-4">
                            <p className="text-sm text-gray-500">{product.brand}</p>

                            <h3 className="font-semibold mt-1">{product.name}</h3>

                            <div className="absolute top-3 left-3 flex flex-col gap-1">
                                {product.tag && (
                                    <span className="bg-black text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                                        {product.tag}
                                    </span>
                                )}
                                {
                                    product.originalPrice > product.price
                                    && <span className="bg-red-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                                        -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                                    </span>
                                }


                            </div>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="font-bold">${product.price}</span>
                                {product.originalPrice > product.price && (
                                    <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>
                                )}
                            </div>
                            <div className='flex items-center'>

                                <div className="flex items-center gap-1">
                                    <span className="text-yellow-400 text-sm">★★★★★</span>
                                    <span className="text-xs text-gray-400">4.5</span>
                                </div>
                            </div>

                            <button onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                add(featured, product.id)
                            }

                            } className="w-full cursor-pointer mt-4 bg-black text-white py-2 rounded-lg">
                                Add to Cart
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
            <p onClick={() => navigate("/all-products")} className='text-center border rounded-lg shadow-sm border-gray-200 cursor-pointer mt-6 px-2 py-1 w-fit mx-auto'>View All</p>
        </motion.div >
    )
}

export default FeaturedProduts