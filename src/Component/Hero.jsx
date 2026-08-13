import React, { useEffect, useState } from 'react'
import { assets } from '../assets/asset'

const slides = [
    {
        id: 1,
        brand: "Nike",
        slogan: "Just Do It",
        logo: assets.nike_logo_1,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
        bg: "bg-black",
        text: "text-white",
    },
    {
        id: 2,
        brand: "Puma",
        slogan: "Forever Faster",
        logo: assets.puma_logo2,
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
        bg: "bg-red-600",
        text: "text-white",
    },
    {
        id: 3,
        brand: "Adidas",
        slogan: "Impossible Is Nothing",
        logo: assets.adidas_logo,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
        bg: "bg-white",
        text: "text-black",
    },
]

const Hero = () => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className='relative overflow-hidden w-full mt-30 h-[500px] md:h-[600px] -z-100'>

            {/* sliding container */}
            <div
                className='flex h-full transition-transform duration-700 ease-in-out'
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className={`min-w-full h-full flex items-center justify-between px-10 md:px-24 ${slide.bg}`}
                    >
                        {/* left — text content */}
                        <div className={`flex flex-col gap-4 z-10 ${slide.text}`}>
                            <img
                                src={slide.logo}
                                alt={slide.brand}
                                className='w-20 h-20 object-contain'
                            />
                            <h1 className='text-5xl md:text-7xl font-black uppercase tracking-tight'>
                                {slide.brand}
                            </h1>
                            <p className='text-lg md:text-2xl font-light tracking-widest uppercase'>
                                {slide.slogan}
                            </p>
                            <button className={`mt-4 w-fit px-6 py-3 border-2 font-semibold uppercase tracking-wider text-sm transition-all duration-200 hover:scale-105 ${slide.text} border-current`}>
                                Shop Now
                            </button>
                        </div>

                        {/* right — shoe image */}
                        <div className='w-1/2 h-full flex items-center justify-center'>
                            <img
                                src={slide.image}
                                alt={slide.brand}
                                className='h-[80%] w-full object-contain drop-shadow-2xl'
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* dots */}
            <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3'>
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`rounded-full transition-all duration-300 ${i === current
                            ? "w-6 h-3 bg-white"
                            : "w-3 h-3 bg-white/40"
                            }`}
                    />
                ))}
            </div>

            {/* prev / next arrows */}
            <button
                onClick={() => setCurrent(prev => (prev - 1 + slides.length) % slides.length)}
                className='absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center transition-all duration-200'
            >
                ←
            </button>
            <button
                onClick={() => setCurrent(prev => (prev + 1) % slides.length)}
                className='absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center transition-all duration-200'
            >
                →
            </button>

        </div>
    )
}

export default Hero