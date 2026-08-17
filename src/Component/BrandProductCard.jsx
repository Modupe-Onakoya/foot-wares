import React from 'react'


const BrandProductCard = ({ product, add, brandProduct }) => {
    return (
        <div className="group">
            <div className="overflow-hidden rounded-xl bg-gray-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
                />
            </div>

            <div className="mt-3">
                <p className="text-sm text-gray-500">{product.brand}</p>

                <h3 className="mt-1 font-medium">{product.name}</h3>

                <div className="mt-2 flex items-center gap-2">
                    <span className="font-semibold">${product.price}</span>

                    <span className="text-sm text-gray-500">
                        4.5
                    </span>

                    <span className="text-yellow-500">★</span>
                </div>

                <button onClick={() => add(brandProduct, product.id)} className="mt-3 w-full rounded-lg bg-black py-2 text-sm text-white transition hover:bg-gray-800">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default BrandProductCard;