import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../assets/product'
import BrandProductCard from '../Component/BrandProductCard'
import { div } from 'motion/react-client'

const BrandPage = () => {

    const { brand } = useParams()

    const brandProducts = products.filter((product) => product.brand.toLowerCase() === brand.toLowerCase())
    return (
        <div className='px-4 sm:px-6 md:px-8 lg:px-20 mt-20 lg:mt-30 -z-100'>
            <div className='className="mt-8 grid grid-cols-4 gap-5 md:grid-cols-4"'>
                {
                    brandProducts.map((product) => (
                        <BrandProductCard product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default BrandPage