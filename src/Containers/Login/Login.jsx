import React from 'react'
import './Login.css'

import Back from '../../images/back.png';

function Login() {

  return (
    <div className='registeration-page'>
        <div className='side-bar'>
            <img src={Back} alt="" />
        </div>
        <div className='main-part'>
            <div className='heading'>
                <h1>Hey, Techie</h1>
                <h3>Just login to get into the tech party</h3>
                <p>“Invoke Your Tony Here....”</p>
            </div>
            <div className='forms'>
                <div className='input-forms'>
                    <form action="">
                        <input type="text" placeholder='Enter your username' />
                        <input type="password" placeholder='Enter your password' />
                    </form>
                </div>
                <div className='other-login-button'>
                    <p>New tech kid? <a href="/register">Click here</a> to join with us.</p>
                    <button><a href="/home">Let's join the fun</a></button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Login
