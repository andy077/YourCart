import React from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const Cart = () => {
    return (
        <>
            <Navbar />

            <div className='cart_main'>
                <div className='cart_row'>
                    <div className='cartTitles'>
                        <h3>Product</h3>
                        <h3>Quantity</h3>
                        <h3>Subtotal</h3>
                    </div>
                    <div className='item_row'>
                        <div className='productImg'>
                            <img src={require('../images/product16.jpg')} alt='detailsImg' className='smallImg' />
                            <div className='added_details'>
                                <h4>Campus Sutra T-Shirt</h4>
                                <p>Price: Rs.1299</p>
                                <a href='' className='remove_btn'>Remove</a>
                            </div>
                        </div>

                        <input type="number" min="1" max="10" placeholder='1' />
                        <p>Rs.1299</p>
                    </div>

                    <div className='item_row'>
                        <div className='productImg'>
                            <img src={require('../images/product2.jpg')} alt='detailsImg' className='smallImg' />
                            <div className='added_details'>
                                <h4>Nike Soccer Shoes</h4>
                                <p>Price: Rs.7999</p>
                                <a href='' className='remove_btn'>Remove</a>
                            </div>
                        </div>

                        <input type="number" min="1" max="10" placeholder='1' />
                        <p>Rs.7999</p>
                    </div>


                    <div className='item_row'>
                        <div className='productImg'>
                            <img src={require('../images/product4.jpg')} alt='detailsImg' className='smallImg' />
                            <div className='added_details'>
                                <h4>Fastract Smart Band</h4>
                                <p>Price: Rs.3999</p>
                                <a href='' className='remove_btn'>Remove</a>
                            </div>
                        </div>

                        <input type="number" min="1" max="10" placeholder='1' />
                        <p>Rs.3999</p>


                    </div>
                    <div className='billing_info'>
                        <div className='row'>
                            <div className='bill_col'>
                                <h4>Subtotal</h4>
                                <p>Rs.13,297</p>
                            </div>
                            <div className='bill_col'>
                                <h4>Tax</h4>
                                <p>Rs.130</p>
                            </div>
                            <div className='bill_col'>
                                <h4>Total</h4>
                                <p>Rs.13,427</p>
                            </div>
                        </div>
                    </div>
                    <div className='checkout'>
                        <a href='' className='pay_btn'>Proceed To Pay</a>
                    </div>
                </div>
            </div>

            <div className='product_main'>
                <div className='product_div' style={{ width: '70%' }}>

                    <div className='related_title'>
                        <div className='row'>
                            <h2>Based On Your Purchase</h2>
                            <p>View More</p>
                        </div>
                    </div>

                    <div className='product_row'>
                        <div className='col'>
                            <img src={require('../images/product2.jpg')} />
                            <h4>Nike Soccer Shoes</h4>
                            <div className='product_rating'>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div>
                            <p>Rs. 6999</p>
                        </div>
                        <div className='col'>
                            <img src={require('../images/product3.jpg')} />
                            <h4>Roadster Tshirt</h4>
                            <div className='product_rating'>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarHalfIcon />
                                <StarBorderIcon />
                            </div>
                            <p>Rs. 900</p>
                        </div>
                        <div className='col'>
                            <img src={require('../images/product4.jpg')} />
                            <h4>Fastrack Watch</h4>
                            <div className='product_rating'>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarHalfIcon />
                            </div>
                            <p>Rs. 3999</p>
                        </div>
                        <div className='col'>
                            <img src={require('../images/product5.jpg')} />
                            <h4>Men Casual Shoes</h4>
                            <div className='product_rating'>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarBorderIcon />
                            </div>
                            <p>Rs. 2999</p>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Cart;