import React from 'react'

const Hero = () => {
    return (
        <div className='px-4 sm:px-6 md:px-8 lg:px-24 xl:px-48 mt-20 lg:mt-30 flex flex-col items-center '>

            <h1 className='text-lg lg:text-2xl'>
                New collection 2026
            </h1>
            <p className='text-6xl text-center max-w-sm hidden lg:block py-5'>
                Take a bold step into the future
            </p>

            <p className='text-center pb-10 lg:text-lg lg:max-w-md'>
                Input your location lets recommend perfect foot ware according to your weather condition

            </p>

            <form action="" className='bg-gray-300 px-2 py-1 lg:py-2 rounded-sm lg:w-lg flex justify-between '>

                <input type="text" placeholder='location' className='outline-none' />
                <button className='bg-blue-500 text-white py-1 rounded-sm px-2'>search</button>

            </form>
        </div>
    )
}

export default Hero