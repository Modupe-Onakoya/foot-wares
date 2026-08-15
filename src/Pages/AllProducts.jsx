import React from 'react'
import { products } from '../assets/product'
import { useSearchParams } from 'react-router-dom'
import { h1 } from 'motion/react-client'

const AllProducts = () => {
    const [searchParams] = useSearchParams()

    const newArrivals = searchParams.get("newArrivals") === "true"
    const bestSeller = searchParams.get("tag")

    const showNewArrivals = newArrivals && products.filter((product) => (product.newArrivals === newArrivals))
    const showBestSeller = bestSeller && products.filter((product) => (product.tag.toLowerCase() === bestSeller.toLowerCase()))

    const allProduct = products



    return (
        <div className='px-4 sm:px-6 md:px-8 lg:px-20 mt-20 lg:mt-30 -z-100'>
            {
                newArrivals &&
                <div>
                    <h1>New Arrivals</h1>
                    {
                        showNewArrivals.map((arrival) => (
                            <div>
                                {arrival.name}
                            </div>
                        ))
                    }
                </div>
            }
            {
                bestSeller &&
                <div>
                    <h1>Best Seller</h1>
                    {
                        showBestSeller.map((seller) => (
                            <div>
                                {seller.name}
                            </div>
                        ))
                    }
                </div>
            }
            {!newArrivals && !bestSeller && (
                <div>
                    <h1>All Products</h1>

                    {products.map((product) => (
                        <div key={product.id}>{product.name}</div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default AllProducts