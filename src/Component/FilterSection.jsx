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

const AllProducts = ({ products, add }) => {
  const [searchParams] = useSearchParams()

  // filter/sort state
  const [openSections, setOpenSections] = useState({
    brand: true,
    price: false,
    sort: false,
  })
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedPrice, setSelectedPrice] = useState("")
  const [selectedSort, setSelectedSort] = useState("")

  // toggle a section open/closed
  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  // toggle a brand in/out of selectedBrands array
  const toggleBrand = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    )
  }

  // clear all filters
  const clearAll = () => {
    setSelectedBrands([])
    setSelectedPrice("")
    setSelectedSort("")
  }

  const hasFilters = selectedBrands.length > 0 || selectedPrice || selectedSort

  // derive filtered + sorted products
  const displayed = products
    .filter(p => selectedBrands.length > 0 ? selectedBrands.includes(p.brand) : true)
    .filter(p => {
      if (!selectedPrice) return true
      const range = PRICE_RANGES.find(r => r.label === selectedPrice)
      return range ? p.price >= range.min && p.price < range.max : true
    })
    .sort((a, b) => {
      if (selectedSort === "Price: Low to High") return a.price - b.price
      if (selectedSort === "Price: High to Low") return b.price - a.price
      if (selectedSort === "Newest First") return b.id - a.id
      return 0
    })

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-20 mt-20 lg:mt-30">

      <div className="flex flex-col lg:flex-row gap-8">

        {/* FILTER SIDEBAR */}
        <aside className="w-full lg:w-56 shrink-0">

          {/* filter header */}
          <div className="flex items-center justify-between mb-2">
            <p className="font-semibold text-sm">Filters</p>
            {hasFilters && (
              <button
                onClick={clearAll}
                className="text-xs text-gray-400 hover:text-black transition-colors"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Brand */}
          <FilterSection
            title="Brand"
            isOpen={openSections.brand}
            onToggle={() => toggleSection("brand")}
          >
            <div className="space-y-2">
              {BRANDS.map(brand => (
                <label key={brand} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    className="rounded"
                  />
                  <span className="text-sm text-gray-600">{brand}</span>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Price */}
          <FilterSection
            title="Price"
            isOpen={openSections.price}
            onToggle={() => toggleSection("price")}
          >
            <div className="space-y-2">
              {PRICE_RANGES.map(range => (
                <label key={range.label} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    checked={selectedPrice === range.label}
                    onChange={() => setSelectedPrice(
                      selectedPrice === range.label ? "" : range.label
                    )}
                    className="rounded"
                  />
                  <span className="text-sm text-gray-600">{range.label}</span>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Sort */}
          <FilterSection
            title="Sort By"
            isOpen={openSections.sort}
            onToggle={() => toggleSection("sort")}
          >
            <div className="space-y-2">
              {SORT_OPTIONS.map(option => (
                <label key={option} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="sort"
                    checked={selectedSort === option}
                    onChange={() => setSelectedSort(
                      selectedSort === option ? "" : option
                    )}
                  />
                  <span className="text-sm text-gray-600">{option}</span>
                </label>
              ))}
            </div>
          </FilterSection>

        </aside>

        {/* PRODUCTS */}
        <div className="flex-1">

          {/* results count */}
          <p className="text-sm text-gray-400 mb-5">
            {displayed.length} product{displayed.length !== 1 ? "s" : ""}
            {hasFilters ? " found" : ""}
          </p>

          {displayed.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-4xl mb-3">🔍</p>
              <p className="font-semibold mb-1">No products found</p>
              <p className="text-gray-400 text-sm mb-4">Try adjusting your filters</p>
              <button
                onClick={clearAll}
                className="text-sm border border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {displayed.map(product => (
                <BrandProductCard
                  key={product.id}
                  product={product}
                  add={add}
                  brandProducts={products}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AllProducts