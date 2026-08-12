import React, { useEffect, useState } from 'react'
import { assets } from '../assets/asset'

const slides = [
    { id: 1, name: "JUST DO IT", img: assets.nike_logo },
    { id: 2, name: "Puma JUST DO IT", img: assets.puma_shoe2 },
    { id: 3, name: "adida JUST DO IT", img: assets.adidas_shoe1 },

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
        <div className='    mt-20 lg:mt-30 h-[350px] flex mx-auto relative overflow-hidden w-[65%]  rounded-lg'>
            <div className='flex h-full   transition-transform duration-500 ease-in-out w-[100%] bg-gray-300   '
                style={{ transform: `translateX(-${current * 100}%)` }}
            >

                {
                    slides.map((slide) => (
                        <div key={slide.id} className='h-full  flex justify-center  min-w-full'>
                            <p className='text-4xl w-1/2'>{slide.name}</p>
                            <img src={slide.img} alt="" className='w-1/2' />

                        </div>

                    ))

                }
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-white scale-125" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </div>

    )
}

export default Hero