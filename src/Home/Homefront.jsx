import React from 'react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';

const Homefront = () => {

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }
    
    return (
        <> 
            <div className='hero'>
                <div className='hero-col'>
                    <h1>Matching Style and Class<br />with Luxury and Comfort.</h1>
                    <p>Choose your style, because you choose your trend. </p>
                    <NavLink exact to='/products' activeClassName='active_class'> <a className='more_btn' onClick={scrollTop}>Go Shopping</a></NavLink>
                </div>
                {/* <div className='hero-col'>
                    <img src={require('../images/back.png')} alt='homebackground' />
                </div> */}
            </div>
        </>
    )

}

export default Homefront;