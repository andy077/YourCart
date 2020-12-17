import React from 'react';
import { NavLink } from 'react-router-dom';
import menuToggle from './menutoggle.js';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
const Navbar = () => {

    return (
        <>
            <div className='nav_div'>
                <div className='container'>
                    <div className='navbar'>
                        <div className='logo'>
                            <NavLink exact to='/' activeClassName='active_class'>
                                <img src={require('../images/logo.png')} alt='logo'/>
                            </NavLink>
                        </div>
                        <div>
                        </div>
                        <nav>
                            <ul id='menu'>
                                <li className='menuList'><NavLink exact to='/' activeClassName='active_class'>Home</NavLink></li>
                                <li className='menuList'><NavLink exact to='/products' activeClassName='active_class'>Products</NavLink></li>
                                <li className='menuList'><NavLink exact to='/about' activeClassName='active_class'>About</NavLink></li>
                                <li className='menuList'><a href='#contact' id='contact_id'>Contact</a></li>
                                <li className='menuList'><NavLink exact to='/account' activeClassName='active_class'>Account</NavLink></li>
                                <li className='menuList'>
                                    <NavLink exact to='/cart' activeClassName='active_class'>
                                        <a href='' className='cart'><LocalMallOutlinedIcon /></a>
                                    </NavLink>
                                </li>

                            </ul>
                        </nav>
                        <img src={require('../images/menu.png')} alt='menuIcon' className='menu_icon' onClick={menuToggle} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;