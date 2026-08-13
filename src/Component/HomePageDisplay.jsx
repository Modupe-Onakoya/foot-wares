import React from 'react'

const HomePageDisplay = ({ image, index }) => {
    return (
        <div className={`overflow-hidden rounded-xl group cursor-pointer ${index === 0 ? "sm:col-span-2 xl:col-span-1" : ""}`}>
            <img
                src={image}
                alt=""
                className='w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-105'
            />
        </div>
    )
}

export default HomePageDisplay