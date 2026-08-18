import React from 'react';
import { Link } from 'react-router-dom'

const BrandProductCard = ({ product, add, brandProducts }) => {
    const discount = product.originalPrice > product.price
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : null

    return (
        <div className="group flex flex-col">

            {/* image */}
            <Link to={`/product/${product.id}`} className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square block">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                    {product.tag && (
                        <span className="bg-black text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                            {product.tag}
                        </span>
                    )}
                    {discount && (
                        <span className="bg-red-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                            -{discount}%
                        </span>
                    )}
                </div>
                {/* out of stock overlay */}

            </Link>

            {/* details */}
            <div className="mt-3 flex flex-col gap-1 flex-1">
                <p className="text-xs text-gray-400 uppercase tracking-wider">{product.brand}</p>
                <Link to={`/product/${product.id}`}>
                    <h3 className="text-sm font-medium leading-tight hover:underline line-clamp-2">
                        {product.name}
                    </h3>
                </Link>

                {/* price */}
                <div className="flex items-center gap-2 mt-1">
                    <span className="font-bold">${product.price}</span>
                    {product.originalPrice > product.price && (
                        <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>
                    )}
                </div>

                {/* rating */}
                <div className="flex items-center gap-1">
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                    <span className="text-xs text-gray-400">4.5</span>
                </div>
            </div>

            {/* buttons */}
            <div className="mt-3 flex max-sm:flex-col gap-2">
                <button
                    onClick={() => add(brandProducts, product.id)}

                    className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all duration-200 border 
                        border-gray-300 text-black hover:bg-gray-300 hover:text-white"
                      
                        }`}
                >
                    Add to Cart
                </button>
                <Link
                    to={`/product/${product.id}`}
                    className="flex-1 py-2 rounded-xl text-sm font-medium bg-black text-white text-center hover:bg-gray-800 transition-all duration-200"
                >
                    Buy Now
                </Link>
            </div>

        </div>
    );
};

export default BrandProductCard;