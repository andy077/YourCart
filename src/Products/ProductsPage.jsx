import React from 'react';
import { NavLink } from 'react-router-dom';
import categoryToggle from './categoryToggle.js';
import filterToggle from './filterToggle.js';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

const ProductsPage = () => {

    return (
        <>
            <div className='product_main'>

                <div className='category_btn'>
                    <button onClick={categoryToggle} id='cat_btn'>Categories <ExpandMoreIcon id='catArrow' /></button>
                    <button onClick={filterToggle} id='filter_btn'>Apply Filters <ExpandMoreIcon id='filterArrow' /></button>
                </div>
                <div className='category_main'>
                    <div className='category_div'>
                        <h3>Men <AddOutlinedIcon className='plus_icon' /></h3>
                        <h3>Women <AddOutlinedIcon className='plus_icon' /></h3>
                        <h3 >Kids <AddOutlinedIcon className='plus_icon' /></h3>
                        <h3 >Home And Appliances <AddOutlinedIcon className='plus_icon' /></h3>
                        <h3 >Offers <AddOutlinedIcon className='plus_icon' /></h3>
                    </div>
                    <div className='search_product'>
                        <input type='text' placeholder='Search for products...'></input>
                        <a href='' className='search_icon'><SearchIcon /></a>
                    </div>
                </div>

                <div className='category_main filter_main'>
                    <div className='category_div filter_div'>
                        <h3>Color <AddOutlinedIcon /></h3>
                        <h3>Size <AddOutlinedIcon /></h3>
                        <h3>Gender <AddOutlinedIcon /></h3>
                        <h3>price <AddOutlinedIcon /></h3>
                        <h3>Type <AddOutlinedIcon /></h3>
                    </div>
                </div>



                <div className='product_div'>
                    <div className='products_dropdown'>
                        <h2>All Products</h2>
                        <select>
                            <option>Short by Default</option>
                            <option>Short by Price</option>
                            <option>Short by Rating</option>
                            <option>Short by Popularity</option>
                        </select>
                    </div>

                    <div className='product_row'>
                        <div className='col'>
                            <NavLink exact to='/productDetails'><img src={require('../images/product1.jpg')} /></NavLink>
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
                            <NavLink exact to='/productDetails'><img src={require('../images/product2.jpg')} /></NavLink>
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
                            <NavLink exact to='/productDetails'><img src={require('../images/product3.jpg')} /></NavLink>
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
                            <NavLink exact to='/productDetails'><img src={require('../images/product4.jpg')} /></NavLink>
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
                            <NavLink exact to='/productDetails'><img src={require('../images/product5.jpg')} /></NavLink>
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
                            <NavLink exact to='/productDetails'><img src={require('../images/product6.jpg')} /></NavLink>
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
                            <NavLink exact to='/productDetails'><img src={require('../images/product7.jpg')} /></NavLink>
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
                            <NavLink exact to='/productDetails'><img src={require('../images/product8.jpg')} /></NavLink>
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
                            <NavLink exact to='/productDetails'><img src={require('../images/product9.jpg')} /></NavLink>
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
                            <NavLink exact to='/productDetails'><img src={require('../images/product10.jpg')} /></NavLink>
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
                            <NavLink exact to='/productDetails'><img src={require('../images/product11.jpg')} /></NavLink>
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
                            <NavLink exact to='/productDetails'><img src={require('../images/product12.jpg')} /></NavLink>
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
                        <div className='col'>
                            <NavLink exact to='/productDetails'><img src={require('../images/product13.jpg')} /></NavLink>
                            <h4>Marvel Tshirt</h4>
                            <div className='product_rating'>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarHalfIcon />
                            </div>
                            <p>Rs. 699</p>
                        </div>
                        <div className='col'>
                            <NavLink exact to='/productDetails'><img src={require('../images/product14.jpg')} /></NavLink>
                            <h4>Sun Glasses</h4>
                            <div className='product_rating'>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarHalfIcon />
                            </div>
                            <p>Rs. 1999</p>
                        </div>
                        <div className='col'>
                            <NavLink exact to='/productDetails'><img src={require('../images/product15.jpg')} /></NavLink>
                            <h4>Casual Shoes</h4>
                            <div className='product_rating'>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarHalfIcon />
                            </div>
                            <p>Rs. 2999</p>
                        </div>
                        <div className='col'>
                            <NavLink exact to='/productDetails'><img src={require('../images/product16.jpg')} /></NavLink>
                            <h4>Sweatshirt</h4>
                            <div className='product_rating'>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarHalfIcon />
                            </div>
                            <p>Rs. 1299</p>
                        </div>

                        <div className='page_btn'>
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>&#8594;</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsPage;