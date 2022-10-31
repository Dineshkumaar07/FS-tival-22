import React from 'react';
import './Registeration.css';

import Back from '../../images/back.png';

function Registeration() {
  return (
    <div className='registeration-page'>
        <div className='side-bar'>
            <img src={Back} alt="" />
        </div>
        <div className='main-part'>
            <div className='heading'>
                <h1>Welcome to F'Fest</h1>
                <h3>Explore Your Tech Ideas in Free And Open Source</h3>
                <p>“Invoke Your Tony Here....”</p>
            </div>
            <div className='forms'>
                <div className='input-forms'>
                    <form action="">
                        <input type="text" placeholder='Enter your Full Name' />
                        <input type="text" placeholder='Enter your username' />
                        <input type="email" placeholder='Enter your email' />
                        <input type="text" placeholder='Enter your Phone number' />
                        <input type="password" placeholder='Enter your password' />
                        <input type="password" placeholder='Confirm Password' />
                    </form>
                </div>
                <div className='other-login-button'>
                    <p>Already a tech kid? <a href="/">Click here</a> to get with spidy.</p>
                    <button><a href="/home">Let's join the fun</a></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Registeration
