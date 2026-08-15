import { assets } from "./asset";



export const products = [
    {
        id: 1,
        name: "Nike Air DT Max 96 Low white",
        brand: "Nike",
        collection: "Air",
        price: 180,
        originalPrice: 220,
        desc: "The shoe that started it all. Classic high-top silhouette with premium leather upper.",
        image: assets.nike_air_dt_max_white,
        tag: "Bestseller",       // "New", "Sale", "Limited" etc — optional
        isFeatured: true,
        newArrivals: true,
    },
    {
        id: 2,
        name: "Nike Air DT Max 96 Low black",
        brand: "Nike",
        collection: "Air",
        price: 180,
        originalPrice: 220,
        desc: "The shoe that started it all. Classic high-top silhouette with premium leather upper.",
        image: assets.nike_air_dt_max_black,
        tag: "Bestseller",       // "New", "Sale", "Limited" etc — optional

        isFeatured: true,

        newArrivals: true,


    },
    {
        id: 3,
        name: "Nike Pegasus Premium white",
        brand: "Nike",
        collection: "Pegasus",
        price: 180,
        originalPrice: 220,
        desc: "The shoe that started it all. Classic high-top silhouette with premium leather upper.",
        image: assets.nike_pegasus_premium_white,
        tag: "Bestseller",       // "New", "Sale", "Limited" etc — optional
        newArrivals: true,
        isFeatured: false,


    },
    {
        id: 4,
        name: "Nike Pegasus Premium black",
        brand: "Puma",
        collection: "Pegasus",
        price: 180,
        originalPrice: 220,
        desc: "The shoe that started it all. Classic high-top silhouette with premium leather upper.",
        image: assets.nike_pegasus_premium_black,
        tag: "Not Bestseller",       // "New", "Sale", "Limited" etc — optional
        isFeatured: true,
        newArrivals: false,


    },
]