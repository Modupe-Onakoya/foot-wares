import React from 'react'

const Title = ({ title, sub }) => {
    return (
        <div className='flex justify-between pb-4'>
            <h1 className='text-2xl font-bold'>
                {title}
            </h1>
            <div>
                <span className='text-sm'>
                    {sub}
                </span>
            </div>
        </div>
    )
}

export default Title