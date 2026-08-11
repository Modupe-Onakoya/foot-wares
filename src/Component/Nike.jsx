import React from 'react'
import { assets } from '../assets/asset'
import Title from './Title'

const Nike = () => {
    return (
        <div className='px-4 sm:px-6 md:px-8 lg:px-24  mt-20 lg:mt-30'>
            <Title title="Nike" sub="View Nike Products" />

            <div className='grid sm:grid-cols-2 xl:grid-cols-3 items-center gap-2' >
                <img src={assets.nike_logo} alt="" className='w-full   h-[300px] ' />
                <img src={assets.nike_red_shoe} alt="" className='w-full  h-[300px]' />
                <img src={assets.addidas_black_shoe} alt="" className='w-full  h-[300px]' />


            </div>
        </div>
    )
}

export default Nike