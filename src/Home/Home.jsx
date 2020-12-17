import React from 'react';
import Navbar from './Navbar';
import Categories from './Categories';
import Footer from './Footer';
import Homefront from './Homefront';
import LatestProducts from './LatestProducts';
import Offer from './Offer';
import Testmonial from './Testimonial';

const Home = () => {
    return (
        <>
            <Navbar />
            <Homefront />
            
            <Offer />
            <Categories />
            <LatestProducts />
            
            <Testmonial />
            <Footer />
        </>
    )
}

export default Home;