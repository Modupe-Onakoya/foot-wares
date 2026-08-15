import React from 'react'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
// import Nike from '../Component/Nike'
// import Puma from '../Component/Puma'
// import Adidas from '../Component/Adidas'
// import Hero1 from '../Component/Hero1'
import Footer from '../Component/Footer'
import FeaturedProduts from '../Component/FeaturedProduts'
import Brand from '../Component/Brand'
import Testimonials from '../Component/Testimonial'

const Home = () => {
    return (
        <div>
            <Hero />
            <FeaturedProduts />
            <Brand />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default Home