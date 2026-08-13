import React from 'react'
import { assets, nikeHomePage } from '../assets/asset'
import Title from './Title'
import HomePageDisplay from './HomePageDisplay'

const Nike = () => {
    return (
        <div className='px-4 sm:px-6 md:px-8 lg:px-20 mt-20 lg:mt-30'>
            <Title title="Nike" sub="View Products" />
            <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-6'>
                {nikeHomePage.map((img, idx) => (
                    <HomePageDisplay image={img} index={idx} key={idx} />
                ))}
            </div>
        </div>
    )
}

export default Nike