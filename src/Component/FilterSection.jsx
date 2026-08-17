import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import BrandProductCard from "./BrandProductCard"

const BRANDS = ["Nike", "Puma", "Adidas"]
const PRICE_RANGES = [
    { label: "Under $100", min: 0, max: 100 },
    { label: "$100 – $200", min: 100, max: 200 },
    { label: "$200 – $300", min: 200, max: 300 },
    { label: "$300+", min: 300, max: Infinity },
]
const SORT_OPTIONS = [
    "Price: Low to High",
    "Price: High to Low",
    "Newest First",
    "Highest Rated",
]

const FilterSection = ({ title, isOpen, onToggle, children }) => (
    <div className="border-b border-gray-200 py-4">
        {/* header — clicking toggles this section */}
        <button
            onClick={onToggle}
            className="flex items-center justify-between w-full text-left"
        >
            <span className="font-medium text-sm">{title}</span>
            <span className={`text-gray-400 transition-transform duration-300 text-xs ${isOpen ? "rotate-180" : ""}`}>
                ▼
            </span>
        </button>
        {/* collapsible content */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 mt-3" : "max-h-0"}`}>
            {children}
        </div>
    </div>
)

