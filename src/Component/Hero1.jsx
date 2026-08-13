import React, { useEffect, useState } from 'react'

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Product Designer",
        comment: "This is the best product I have ever used. Completely changed my workflow.",
    },
    {
        id: 2,
        name: "James Okafor",
        role: "Software Engineer",
        comment: "Incredible quality and fast delivery. Will definitely be ordering again.",
    },
    {
        id: 3,
        name: "Amina Yusuf",
        role: "Marketing Lead",
        comment: "Exceeded every expectation. The attention to detail is outstanding.",
    },
]
const Hero1 = () => {
    const [current, setCurrent] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % testimonials.length)
        }, 2000)
        return () => clearInterval(interval)
    }, [])
    // style={{ transform: `translateX(-${current * 100}%)` }}

    return (
        <div className='w-[50%] bg-gray-200 flex mt-20 mx-auto overflow-hidden py-2 relative '>
            <div className={`flex  w-full transition-transform duration-300 ease-in-out  `}
                style={{ transform: `translateX(-${current * 100}%)` }}

            >

                {testimonials.map((items, idx) => (
                    <div className=' border gap-2 min-w-[100%]'>
                        <p>{items.name}</p>
                        <p>{items.role}</p>
                        <p>{items.comment}</p>


                    </div>
                ))}
            </div>
            <div className='absolute bottom-2 left-1/2 flex '>
                {testimonials.map((_, idx) => (
                    <div
                        onClick={() => setCurrent(idx)}
                        className={`w-3 h-3 rounded-full   ${idx === current ? "bg-white" : "bg-white/40"}`}>

                    </div>
                ))}
            </div>
        </div >
    )
}

export default Hero1