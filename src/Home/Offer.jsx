import React from 'react';

const Offer = () => {
    return (
        <>
            <div className='offer_main'>
                <div className='offer_row'>
                    <div className='offer_col'>
                        <img src={require('../images/offer.jpeg')} alt='offerOnShoe' />
                    </div>
                    <div className='offer_col'>
                        <h2>Exclusive Offer</h2>
                        <h1>The All New Nike 5.0 Running Shoes</h1>
                        <p>Pre Booking Available...</p>
                        <a href='' className='offer_btn'>Book Now</a>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Offer;
