import React from 'react'
import BrandCard from './BrandCard'
import { assets } from '../assets/asset';
import { Link } from 'react-router-dom';
const brands = [
    {
        name: "Nike",
        tagline: "Just Do It",
        logo: assets.nike_logo_1,
        image: assets.nike_shoe3,
        link: "/brand-page/nike",
        color: "bg-black"
    },
    {
        name: "Puma",
        tagline: "Forever Faster",
        logo: assets.puma_logo2,
        image: assets.puma_shoe2,
        link: "/brand-page/puma",
        color: "bg-red-600"
    },
    {
        name: "Adidas",
        tagline: "Impossible Is Nothing",
        logo: assets.adidas_logo,
        image: assets.adidas_shoe1,
        link: "/brand-page/adidas",
        color: "bg-white"
    },
]

const Brand = () => {
    return (
        <section className="px-4 sm:px-6 md:px-8 lg:px-20 mt-20 lg:mt-30">
            <h2 className="mb-6 text-2xl font-bold text-center py-5">Shop by Brand</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 group">
                {brands.map((brand) => (
                    <BrandCard key={brand.name} brand={brand} />
                ))}
            </div>
        </section>
    );
}

export default Brand