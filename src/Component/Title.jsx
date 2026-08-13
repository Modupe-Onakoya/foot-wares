import React from 'react'
import { assets } from '../assets/asset'

const Title = ({ title, sub }) => {
    return (
        <div className='flex justify-between pb-4'>
            <h1 className='text-2xl font-bold'>
                {title}
            </h1>
            <div className='flex items-center gap-2 cursor-pointer bg-gray-300 py-1 px-2 rounded-2xl '>
                <span className='text-sm text-center '>
                    {sub}
                </span>
                <div className=' '>
                    <img src={assets.right_arrow} alt="" className='w-3 h-3 ' />

                </div>
            </div>
        </div >
    )
}

export default Title