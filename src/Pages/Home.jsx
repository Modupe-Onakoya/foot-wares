import React from 'react'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import Nike from '../Component/Nike'
import Puma from '../Component/Puma'
import Adidas from '../Component/Adidas'
import Hero1 from '../Component/Hero1'
import Footer from '../Component/Footer'
import FeaturedProduts from '../Component/FeaturedProduts'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <FeaturedProduts />
            <Footer />
        </div>
    )
}

export default Home