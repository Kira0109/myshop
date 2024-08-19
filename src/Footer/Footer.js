import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='detail_box'>
                <div className='header'>
                    <div className='logo'>
                        <Link to='/'><img src={require('../image/gam.png')} alt=''></img></Link>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='detail'>
                        <p>We are a team of designers and developers that create Websites</p><br/>
                    </div>
                    <div className='adress'>
                        <p><span>Adress:</span>Tunisia,Ben Arous</p>
                        <p><span>Mobile:</span>+216 21568282</p>
                        <p><span>E-mail:</span>Khalilcheguenni@gmail.com</p>
                    </div>
                    <div className='contact'>
                        
                    </div>
                </div>
            </div>
            <div className='box'>
                <div className='header'>
                    <h2>Information</h2>
                </div>
                <div className='bottom'>
                    <ul>
                        <li>About Us</li>
                        <li>Delivery Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Customer Service</li>
                        <li>Return Policy</li>
                    </ul>
                </div>
            </div>
            <div className='box'>
                <div className='header'>
                    <h2>My Account</h2>
                </div>
                <div className='bottom'>
                    <ul>
                        <li>About Us</li>
                        <li>Delivery Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Customer Service</li>
                        <li>Return Policy</li>
                    </ul>
                </div>
            </div>
            <div className='box'>
                <div className='header'>
                    <h2>Quick Link</h2>
                </div>
                <div className='bottom'>
                    <ul>
                        <li>About Us</li>
                        <li>Delivery Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Customer Service</li>
                        <li>Return Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer