import React from 'react';
import { NavLink } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';

document.addEventListener('load', function() {   
        
        const h3test = document.querySelectorAll('h3');
        const backtest=document.getElementById('active_offer');
        const colRev = document.getElementById('product_rowSort');
        for(var j=0;j<h3test.length;j++)
        {
            h3test[0].onclick = () => {
                backtest.style.transform='translateX(75px)';
                h3test[0].style.color='#ff4757';
                h3test[1].style.color='#2f3542';
                h3test[2].style.color='#2f3542';
    
                colRev.style.flexDirection='initial';
            }
            h3test[1].onclick = () => {
                backtest.style.transform='translateX(443px)';
                h3test[1].style.color='#ff4757';
                h3test[0].style.color='#2f3542';
                h3test[2].style.color='#2f3542';
        
                colRev.style.flexDirection='row-reverse';
            }
            h3test[2].onclick = () => {
                backtest.style.transform='translateX(810px)';
                h3test[2].style.color='#ff4757';
                h3test[0].style.color='#2f3542';
                h3test[1].style.color='#2f3542';
            }
        }
}, true);

const LatestProducts = () => {

    return (
        <>
            <div className='product_main'>
                <div className='product_div'>
                    <h2 className='title_div'>Latest Products</h2>
                    <div className='offer_options'>
                        <h3>Top Brands</h3>
                        <h3>Festival Offers</h3>
                        <h3 >Clearance</h3>
                    </div>
                    <hr id='active_offer' />
                    <div className='product_row' id='product_rowSort'>
                        <div className='col'>
                        <NavLink exact to='/productDetails'><img src={require('../images/product1.jpg')}  alt ='LatestProduct'/></NavLink>
                            <h4>HRX Sweatshirt</h4>
                            <div className='product_rating'>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarHalfIcon />
                            </div>
                            <p>Rs. 1200</p>
                        </div>
                        <div className='col'>
                        <NavLink exact to='/productDetails'><img src={require('../images/product2.jpg')}  alt ='LatestProduct'/></NavLink>
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
                        <NavLink exact to='/productDetails'><img src={require('../images/product3.jpg')}  alt ='LatestProduct'/></NavLink>
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
                        <NavLink exact to='/productDetails'><img src={require('../images/product4.jpg')}  alt ='LatestProduct'/></NavLink>
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
                        <NavLink exact to='/productDetails'><img src={require('../images/product5.jpg')}  alt ='LatestProduct'/></NavLink>
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
                        <div className='col'>
                        <NavLink exact to='/productDetails'><img src={require('../images/product6.jpg')}  alt ='LatestProduct'/></NavLink>
                            <h4>Product By Charcoal</h4>
                            <div className='product_rating'>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarHalfIcon />
                            </div>
                            <p>Rs. 1400</p>
                        </div>
                        <div className='col'>
                        <NavLink exact to='/productDetails'><img src={require('../images/product7.jpg')}  alt ='LatestProduct'/></NavLink>
                            <h4>Roadster For Women</h4>
                            <div className='product_rating'>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarHalfIcon />
                            </div>
                            <p>Rs. 1600</p>
                        </div>
                        <div className='col'>
                        <NavLink exact to='/productDetails'><img src={require('../images/product8.jpg')}  alt ='LatestProduct'/></NavLink>
                            <h4>Red Chief</h4>
                            <div className='product_rating'>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarHalfIcon />
                            </div>
                            <p>Rs. 3890</p>
                        </div>
                        <div className='col'>
                        <NavLink exact to='/productDetails'><img src={require('../images/product9.jpg')}  alt ='LatestProduct'/></NavLink>
                            <h4>Roadster</h4>
                            <div className='product_rating'>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarHalfIcon />
                            </div>
                            <p>Rs. 1499</p>
                        </div>
                        <div className='col'>
                        <NavLink exact to='/productDetails'><img src={require('../images/product10.jpg')} alt ='LatestProduct' /></NavLink>

                            <h4>Ahika Kurta</h4>
                            <div className='product_rating'>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarHalfIcon />
                            </div>
                            <p>Rs. 799</p>
                        </div>
                        <div className='col'>
                        <NavLink exact to='/productDetails'><img src={require('../images/product11.jpg')} alt ='LatestProduct' /></NavLink>

                            <h4>Roadster Rapido</h4>
                            <div className='product_rating'>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarHalfIcon />
                            </div>
                            <p>Rs. 799</p>
                        </div>
                        <div className='col'>
                        <NavLink exact to='/productDetails'><img src={require('../images/product12.jpg')} alt ='LatestProduct' /></NavLink>

                            <h4>Puma Football</h4>
                            <div className='product_rating'>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarHalfIcon />
                            </div>
                            <p>Rs. 899</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestProducts;