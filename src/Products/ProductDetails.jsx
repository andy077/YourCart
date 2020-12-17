import React from 'react'
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const ProductDetails = () => {

    window.onload = () => {
        const productImage = document.getElementById('productImg');
        const smallImage = document.getElementsByClassName('smallImg');

        for (let i = 0; i < smallImage.length; i++) {
            smallImage[i].onclick = () => {
                productImage.src = smallImage[i].src;
            }
        }
    }

    return (
        <>
            <Navbar />

            <div className='details'>

                <div className='details-col' id='gallery_main'>
                    <div className='gallery'>
                        <img src={require('../images/gallery1.jpg')} alt='detailsImg' className='smallImg' />
                        <img src={require('../images/gallery2.jpg')} alt='detailsImg' className='smallImg' />
                        <img src={require('../images/gallery3.jpg')} alt='detailsImg' className='smallImg' />
                        <img src={require('../images/gallery4.jpg')} alt='detailsImg' className='smallImg' />
                        <img src={require('../images/gallery5.jpg')} alt='detailsImg' className='smallImg' />
                    </div>
                    <img src={require('../images/gallery1.jpg')} alt='detailsImg' className='choose_img' id='productImg' />
                </div>

                <div className='details-col details_media'>
                    <p id='detail_title'>Campus Sutra T-Shirt</p>
                    <h1>Men Blue Round Neck T-shirt</h1>
                    <p>Price: <span>Rs. 1299</span></p>
                    <div className='size_quantity'>
                        <div className='col-2'>
                            <p className='size'>Size:</p>
                            <select>
                                <option>Select Size</option>
                                <option>Small</option>
                                <option>Medium</option>
                                <option>Large</option>
                                <option>Extra-Large</option>
                            </select>
                        </div>
                        <div className='col-2'>
                            <p className='size'>Quantity (10 <span>max</span>)</p>
                            <input type="number" min="1" max="10" placeholder='1' />
                        </div>
                    </div>
                    <a className='addCart_btn'>Add To Cart</a>
                    <h3>Product Details:</h3>
                    <p className='product_desc'>Retro is back in style, flaunt the same as you adorn
                    this regular-fit full sleeve T-shirt, in Black colour, from the house of Campus Sutra.
                    Fashioned using cotton, this can be easily worn when heading out for a crazy day ahead with friends.</p>

                </div>
            </div>

            <div className='product_main'>
                <div className='product_div' style={{ width: '70%' }}>

                    <div className='related_title'>
                        <div className='row'>
                            <h2>Related Products</h2>
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

export default ProductDetails;