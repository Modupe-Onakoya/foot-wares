import React from 'react'
import { assets, nikeHomePage } from '../assets/asset'
import Title from './Title'
import HomePageDisplay from './HomePageDisplay'
import { motion } from "motion/react"
import { Link } from 'react-router-dom'

const Nike = () => {
    return (
        <motion.div

            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            // viewport={{ once: true, amount: 0.2 }}
            className='px-4 sm:px-6 md:px-8 lg:px-20 mt-20 lg:mt-30'>
            <Title title="Nike" sub="View Products" link="/nike-products" />
            <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-6'>
                {nikeHomePage.map((img, idx) => (
                    <HomePageDisplay image={img} index={idx} key={idx} />
                ))}
            </div>
        </motion.div>
    )
}

export default Nike