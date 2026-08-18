import { products } from "../assets/product";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../Component/ProductCard";
import { useContext, useState } from "react";
import { context } from "../context/AppContext";

const AllProducts = () => {
    const [searchParams] = useSearchParams();
    const { add } = useContext(context);

    const newArrivals = searchParams.get("newArrivals");
    const bestSeller = searchParams.get("tag");
    const shoeSearch = searchParams.get("shoeSearch");
    const collection = searchParams.get("collection");

    const [brand, setBrand] = useState("All");
    const [sort, setSort] = useState("default");

    let productsToShow = products;
    let title = "All Products";


    if (collection) {
        productsToShow = products.filter(
            (product) =>
                collection.toLowerCase().includes(
                    product.collection.toLowerCase()
                )
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
        productsToShow = products.filter((product) =>
            product.name
                .toLowerCase()
                .includes(shoeSearch.toLowerCase())
        );

        title = `Search results for "${shoeSearch}"`;
    }

    // Brand filter
    if (brand !== "All") {
        productsToShow = productsToShow.filter(
            (product) =>
                product.brand.toLowerCase() === brand.toLowerCase()
        );
    }

    // Sort
    if (sort === "low") {
        productsToShow = [...productsToShow].sort(
            (a, b) => a.price - b.price
        );
    }

    if (sort === "high") {
        productsToShow = [...productsToShow].sort(
            (a, b) => b.price - a.price
        );
    }

    if (sort === "newest") {
        productsToShow = [...productsToShow].sort(
            (a, b) => b.id - a.id
        );
    }

    return (
        <section className="px-4 py-10 sm:px-6 md:px-8 lg:px-20 lg:py-16">


            <div className="mb-8">
                <p className="text-sm text-gray-500">
                    Sneak Lovers
                </p>

                <h1 className="mt-2 text-3xl font-bold md:text-4xl">
                    {title}
                </h1>

                <p className="mt-2 text-gray-500">
                    Discover our latest collection of sneakers.
                </p>
            </div>


            <div className="mb-8 flex flex-wrap items-center gap-4">


                <select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="rounded-lg border border-gray-300 px-4 py-2 outline-none"
                >
                    <option value="All">All Brands</option>
                    <option value="Nike">Nike</option>
                    <option value="Puma">Puma</option>
                    <option value="Adidas">Adidas</option>
                </select>

                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="rounded-lg border border-gray-300 px-4 py-2 outline-none"
                >
                    <option value="default">Sort By</option>
                    <option value="low">
                        Price: Low to High
                    </option>
                    <option value="high">
                        Price: High to Low
                    </option>
                    <option value="newest">
                        Newest
                    </option>
                </select>

                <p className="ml-auto text-sm text-gray-500">
                    {productsToShow.length} products
                </p>
            </div>

            {/* Products */}
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