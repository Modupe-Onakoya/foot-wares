import { useNavigate, useParams } from "react-router-dom";
import { products } from "../assets/product";
import { useContext } from "react";
import { context } from "../context/AppContext";

const ProductDetails = () => {
    const { id } = useParams();
    const { setCart } = useContext(context)
    const navigate = useNavigate()

    const product = products.find(
        (product) => product.id === Number(id)
    );

    if (!product) {
        return <h1>Product not found</h1>;
    }

    const add = () => {
        setCart((prev) => [...prev, product])
        navigate("/cart")
    }
    return (
        <section className="px-4 py-20 lg:px-20">
            <div className="grid gap-10 md:grid-cols-2">

                {/* Image */}
                <div className="overflow-hidden rounded-2xl bg-gray-100">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full object-cover"
                    />
                </div>

                {/* Product information */}
                <div className="flex flex-col justify-center">

                    <p className="text-sm text-gray-500">
                        {product.brand}
                    </p>

                    <h1 className="mt-2 text-3xl font-bold">
                        {product.name}
                    </h1>

                    <div className="mt-3 flex items-center gap-2">
                        <span className="text-yellow-500">★</span>
                        <span>4.5</span>
                    </div>

                    <div className="mt-5 flex items-center gap-3">
                        <span className="text-2xl font-bold">
                            ${product.price}
                        </span>

                        {product.originalPrice && (
                            <span className="text-gray-400 line-through">
                                ${product.originalPrice}
                            </span>
                        )}
                    </div>

                    <p className="mt-6 leading-7 text-gray-600">
                        {product.desc}
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex gap-3">
                        <button onClick={() => add()} className="flex-1 rounded-lg border border-black py-3 font-medium">
                            Add to Cart
                        </button>

                        <button className="flex-1 rounded-lg bg-black py-3 font-medium text-white">
                            Buy Now
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProductDetails;