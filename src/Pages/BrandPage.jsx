import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../assets/product'
import BrandProductCard from '../Component/BrandProductCard'
import { div } from 'motion/react-client'
import { context } from '../context/AppContext'

const BrandPage = () => {
    const { add } = useContext(context)
    const { brand } = useParams()

    const brandProducts = products.filter((product) => product.brand.toLowerCase() === brand.toLowerCase())
    return (
        <div className='px-4 sm:px-6 md:px-8 lg:px-20 mt-20 lg:mt-30'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {brandProducts.map((product) => (
                    <BrandProductCard key={product.id} product={product} add={add} brandProducts={brandProducts} />
                ))}
            </div>
        </div>
    )
}

export default BrandPage