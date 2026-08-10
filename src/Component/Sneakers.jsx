import React from 'react'
import { assets } from '../assets/asset'

const Sneakers = () => {
    return (
        <div className='px-4 sm:px-6 md:px-8 lg:px-24 xl:px-48 mt-20 lg:mt-30'>
            <div className='flex gap-2' >
                <img src={assets.nike_logo} alt="" className='w-1/3 ' />
                <img src={assets.nike_red_shoe} alt="" className='w-1/3' />
                <img src={assets.nike_logo} alt="" className='w-1/3' />

            </div>
        </div>
    )
}

export default Sneakers