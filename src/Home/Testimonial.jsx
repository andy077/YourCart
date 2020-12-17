import React from 'react';

const Testmonial = () => {
    return (
        <>
            <div className='testimonials'>
                <h1 className='title'>Testimonials</h1>
                <div className='testimonial_inner_div'>
                    <div className='testm_row'>
                        <div className='testm_col'>
                            <img src={require('../images/testm1.jpg')}></img>
                            <div className='desc'>
                                <h2 className='name'>Robert Smith</h2>
                                <p>I love shopping at YourCart. Not only can I rely
                                   on their cloths being excellent quality, but I 
                                   find their photos and descriptions to be accurate 
                                   so that I can rely on getting what I expected.</p>
                            </div>
                        </div>
                        <div className='testm_col'>
                            <img src={require('../images/testm2.jpg')}></img>
                            <div className='desc'>
                                <h2 className='name'>Maria Garcia</h2>
                                <p>I love shopping at YourCart. Not only can I rely
                                   on their cloths being excellent quality, but I 
                                   find their photos and descriptions to be accurate 
                                   so that I can rely on getting what I expected.</p>
                            </div>
                        </div>
                        <div className='testm_col'>
                            <img src={require('../images/testm3.jpg')}></img>
                            <div className='desc'>
                                <h2 className='name'>Tom Synnott</h2>
                                <p>I love shopping at YourCart. Not only can I rely
                                   on their cloths being excellent quality, but I 
                                   find their photos and descriptions to be accurate 
                                   so that I can rely on getting what I expected.</p>
                            </div>
                        </div>
                        <div className='testm_col'>
                            <img src={require('../images/testm4.jpg')}></img>
                            <div className='desc'>
                                <h2 className='name'>Tamas Bedo</h2>
                                <p>I love shopping at YourCart. Not only can I rely
                                   on their cloths being excellent quality, but I 
                                   find their photos and descriptions to be accurate 
                                   so that I can rely on getting what I expected.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Testmonial;