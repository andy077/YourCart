import React from 'react';
import { NavLink } from 'react-router-dom';

const Homefront = () => {
    
    return (
        <> 
            <div className='hero'>
                <div className='hero-col'>
                    <h1>Matching Style and Class<br />with Luxury and Comfort.</h1>
                    <p>Choose your style, because you choose your trend. </p>
                    <NavLink exact to='/products' activeClassName='active_class'> <a className='more_btn' >Go Shopping</a></NavLink>
                </div>
            </div>
        </>
    )

}

export default Homefront;