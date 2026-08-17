import { products } from "../assets/product";
import { useNavigate, useSearchParams } from "react-router-dom";
import ProductCard from "../Component/ProductCard";
import { useContext } from "react";
import { context } from "../context/AppContext";

const AllProducts = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    const { setCart, add } = useContext(context)
    const newArrivals = searchParams.get("newArrivals");
    const bestSeller = searchParams.get("tag");
    const shoeSearch = searchParams.get("shoeSearch");
    const collection = searchParams.get("collection");




    let productsToShow = products;
    let title = "All Products";

    if (collection) {
        productsToShow = products.filter(
            (product) => collection.toLowerCase().includes(product.collection.toLowerCase())
        );
        title = "New Arrivals";
    }

    if (newArrivals === "true") {
        productsToShow = products.filter(
            (product) => product.newArrivals === true
        );
        title = "New Arrivals";
    }

    if (bestSeller) {
        productsToShow = products.filter(
            (product) =>
                product.tag?.toLowerCase() === bestSeller.toLowerCase()
        );
        title = "Best Sellers";
    }
    if (shoeSearch) {
        productsToShow = products.filter(product => product.name.toLowerCase().includes(shoeSearch.toLowerCase()))
    }




    return (
        <section className="px-4 py-10 sm:px-6 md:px-8 lg:px-20 lg:py-16">
            <div className="mb-10">
                <p className="text-sm text-gray-500">Sneak Lovers</p>
                <h1 className="mt-2 text-3xl font-bold md:text-4xl">
                    {title}
                </h1>
                <p className="mt-2 text-gray-500">
                    Discover our latest collection of sneakers.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
                {productsToShow.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        add={add}
                        allProduct={productsToShow}
                    />
                ))}
            </div>
        </section>
    );
};

export default AllProducts;