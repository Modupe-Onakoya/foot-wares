import { Link } from "react-router-dom";

const ProductCard = ({ product, add }) => {
    return (
        <Link to={`/product/${product.id}`} className="group">
            {/* Image */}
            <div className="relative overflow-hidden rounded-xl bg-gray-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {product.tag && (
                    <span className="absolute left-3 top-3 rounded-full bg-black px-3 py-1 text-xs text-white">
                        {product.tag}
                    </span>
                )}
            </div>

            {/* Details */}
            <div className="mt-4">
                <p className="text-sm text-gray-500">{product.brand}</p>

                <h3 className="mt-1 font-semibold">{product.name}</h3>

                <div className="mt-2 flex items-center justify-between">
                    <p className="font-bold">${product.price}</p>

                    {product.originalPrice && (
                        <p className="text-sm text-gray-400 line-through">
                            ${product.originalPrice}
                        </p>
                    )}
                </div>

                {/* Rating */}
                <div className="mt-2 flex items-center gap-1 text-sm">
                    <span className="text-yellow-500">★</span>
                    <span>4.5</span>
                </div>

                {/* Buttons */}
                <div className="mt-4 flex gap-2">
                    <button onClick={() => add(product.id)} className="flex-1 rounded-lg bg-gray-300 py-2 text-sm font-medium transition hover:bg-black hover:text-white">
                        Add to Cart
                    </button>

                    <button className="flex-1 rounded-lg bg-black py-2 text-sm font-medium text-white transition hover:bg-gray-800">
                        Buy Now
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;