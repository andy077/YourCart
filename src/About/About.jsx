import React from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer'

const About = () => {
    return (
        <>
            <Navbar />

            <div className='about_main'>
                    <div className='about_title'>
                        <h1>About Us</h1>
                    </div>
                    <div className='about_details'>
                        <p>Since its inception in 2018, YourCart has quickly emerged as India’s largest omnichannel 
                        fashion destination with millions of happy customers across the country. From bringing you 
                        your favorite brands and keeping you up-to-date with the latest fashion trends, expert advice
                        and videos, to more than 68 Luxe and On-Trend Stores, an ever growing online community for 
                        branded fashion and products, we go out of our way to give you only the very best. 
                        With 1200+, 100% genuine brands, and six warehouses across India that stock lakhs of well curated,
                        well priced products, YourCart offers a comprehensive selection of clothes, footware, sports, 
                        beauty products, personal care, luxury and wellness products for women and men. YourCart is all about 
                        celebrating the star in each men and women, and being our confidante and companion as we embarks on our own 
                        journey to discover our unique identity and personal style. From the widest selection of genuine 
                        branded clothes from around the world to beauty care products, YourCart is truly passionate about caring
                        about each and every customer. Because after all, We all are Family.
                        </p>
                    </div>
            </div>

            <Footer />
        </>
    )
}

export default About;