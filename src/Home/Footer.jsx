import React from 'react';

const currDate = new Date().getFullYear();

const Footer = () => {
    return (
        <>
            <div className='footer_container' id='contact'>
                <div className='contact_div'>
                    <img src={require('../images/logoWhite.png')} alt='logo' className='title' />
                </div>
                {/* <h1 className='title'>Contact Us</h1> */}
                <div className='footer_div'>
                    <div className='inner_div'>
                        <div className='links'>
                            <h3>More About Us</h3>
                            <ul>
                                <li>Return Policy</li>
                                <li>Our Blogs</li>
                                <li>Term and Conditions</li>
                                <li>Affiliate</li>
                            </ul>
                        </div>
                        <div className='connect'>
                            <h3>Connect With Us</h3>
                            <ul>
                                <li>Facebook</li>
                                <li>Youtube</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                            </ul>
                        </div>
                        <div className='account'>
                            <h3>Need Help?</h3>
                            <ul>
                                <li>Account</li>
                                <li>Security</li>
                                <li>App Download</li>
                                <li>Help</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='copyright'>
                    <p>YourCart | Copyright © <span>{currDate}</span></p>
                </div>
            </div>
        </>
    )
}

export default Footer;