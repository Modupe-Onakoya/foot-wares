import React from 'react'

const HomePageDisplay = ({ image, index }) => {
    return (
        <div className='h-full'>
            <img src={image} alt="" className='h-full bg-cover' />
        </div>
    )
}

export default HomePageDisplay