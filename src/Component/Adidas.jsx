import React from 'react'
import { adidasHomePage, assets } from '../assets/asset'
import Title from './Title'
import HomePageDisplay from './HomePageDisplay'
import { motion } from "motion/react"

const Adidas = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='px-4 sm:px-6 md:px-8 lg:px-24  mt-20 lg:mt-30'>
            <Title title="Adidas" sub="View Products" />


            <div className='grid sm:grid-cols-2 xl:grid-cols-3 items-center gap-4 '>
                {
                    adidasHomePage.map((img, idx) => (
                        <HomePageDisplay image={img} index={idx} />
                    ))
                }
            </div>


            {/* <div className='grid sm:grid-cols-2 xl:grid-cols-3 items-center gap-2' >
                <img src={assets.nike_logo} alt="" className='w-full   h-[300px] ' />
                <img src={assets.nike_red_shoe} alt="" className='w-full  h-[300px]' />
                <img src={assets.addidas_black_shoe} alt="" className='w-full  h-[300px]' />


            </div> */}
        </motion.div>
    )
}

export default Adidas