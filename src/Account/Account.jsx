import React from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import login from './login.js';
import register from './register.js'

const Account = () => {

   

    return (
        <>
            <Navbar />

            <div className='hero account_main'>
                <div className='hero-col account_col'>
                    <img src={require('../images/loginHero.png')} alt='homebackground' />

                </div>
                <div className='hero-col account_col'>
                    <div className='form_container'>
                        <div className='form_btn'>
                            <span onClick={login}>Login</span>
                            <span onClick={register}>Register</span>
                            <hr id='active_form' />
                        </div>

                        <form id='loginForm'>
                            <input type='text' placeholder='Username'></input>
                            <input type='password' placeholder='Password'></input>
                            <button type='submit' className='btn'>Login</button>
                            <a href=''>Forgot Password</a>
                        </form>
                        <form id='regForm'>
                            <input type='text' placeholder='Username'></input>
                            <input type='email' placeholder='Email'></input>
                            <input type='password' placeholder='Password'></input>
                            <button type='submit' className='btn'>Register</button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Account;