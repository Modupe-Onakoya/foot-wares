import React from 'react'
import { featuredProducts } from '../assets/asset'

const FeaturedProduts = () => {
    return (
        <div>
            <h1>
                Featured Produts
            </h1>
            <div>
                {featuredProducts.map((img) => (
                    <div>
                        <img src={img} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProduts