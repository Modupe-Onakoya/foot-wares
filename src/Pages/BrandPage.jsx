import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../assets/product";
import BrandProductCard from "../Component/BrandProductCard";
import { context } from "../context/AppContext";

const BrandPage = () => {
    const { add } = useContext(context);
    const { brand } = useParams();

    const [collection, setCollection] = useState("All");
    const [sort, setSort] = useState("default");
    const [inStock, setInStock] = useState(false);

    // First get products belonging to this brand
    let brandProducts = products.filter(
        (product) =>
            product.brand.toLowerCase() === brand.toLowerCase()
    );

    // Collection filter
    if (collection !== "All") {
        brandProducts = brandProducts.filter(
            (product) =>
                product.collection.toLowerCase() ===
                collection.toLowerCase()
        );
    }

    // In-stock filter
    // if (inStock) {
    //     brandProducts = brandProducts.filter(
    //         (product) => product.inStock
    //     );
    // }

    // Sorting
    if (sort === "low") {
        brandProducts = [...brandProducts].sort(
            (a, b) => a.price - b.price
        );
    }

    if (sort === "high") {
        brandProducts = [...brandProducts].sort(
            (a, b) => b.price - a.price
        );
    }

    return (
        <div className="px-4 sm:px-6 md:px-8 lg:px-20 mt-20 lg:mt-30">

            {/* Header */}
            <div className="mb-8">
                <p className="text-sm text-gray-400">
                    Sneak Lovers
                </p>

                <h1 className="mt-2 text-3xl font-bold capitalize">
                    {brand} Collection
                </h1>
            </div>

            {/* Filters */}
            <div className="mb-8 flex flex-wrap items-center gap-4">

                {/* Collection */}
                <select
                    value={collection}
                    onChange={(e) => setCollection(e.target.value)}
                    className="rounded-lg border border-gray-300 px-4 py-2"
                >
                    <option value="All">
                        All Collections
                    </option>

                    {/* Get collections belonging to this brand */}
                    {[...new Set(
                        products
                            .filter(
                                (product) =>
                                    product.brand.toLowerCase() ===
                                    brand.toLowerCase()
                            )
                            .map((product) => product.collection)
                    )].map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>

                {/* Sort */}
                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="rounded-lg border border-gray-300 px-4 py-2"
                >
                    <option value="default">
                        Sort By
                    </option>

                    <option value="low">
                        Price: Low to High
                    </option>

                    <option value="high">
                        Price: High to Low
                    </option>
                </select>

                {/* Stock */}
                {/* <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={inStock}
                        onChange={(e) =>
                            setInStock(e.target.checked)
                        }
                    />

                    In Stock
                </label> */}

                <span className="ml-auto text-sm text-gray-400">
                    {brandProducts.length} products
                </span>
            </div>

            {/* Products */}
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                {brandProducts.map((product) => (
                    <BrandProductCard
                        key={product.id}
                        product={product}
                        add={add}
                        brandProducts={brandProducts}
                    />
                ))}
            </div>

        </div>
    );
};

export default BrandPage;