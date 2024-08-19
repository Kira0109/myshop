import React from 'react'
import './Contact.css'
import { FaHome } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import {MdOutlineEmail} from'react-icons/md'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='container'>
        <div className='address'>
            <div className='address_container'>
                <h3>Contact Us</h3>
                <div className='box'>
                    <div className='title'>
                        <div className='icon'>
                            <FaHome/>
                        </div>
                        <h4>Adress</h4>
                    </div>
                    <div className='detail'>
                        <p>Ben Arous,Ezzahra-Tunisia</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='title'>
                        <div className='icon'>
                            <FaPhone/>
                        </div>
                        <h4>Phone</h4>
                    </div>
                    <div className='detail'>
                        <p>21568282</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='title'>
                        <div className='icon'>
                            <MdOutlineEmail/>
                        </div>
                        <h4>E-mail</h4>
                    </div>
                    <div className='detail'>
                        <p>KhalilCheguenni@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='message'>
                <div className='message_container'>
                    <h3>Tell Us Your Message</h3>
                
                    <div className='input_box'>
                        <input type='text' placeholder='Name' value=''></input>
                    </div>
                    <div className='input_box'>
                        <input type='email' placeholder='E-mail' value=''></input>
                    </div>
                    <div className='input_box'>
                        <input type='text' placeholder='Subject' value=''></input>
                    </div>
                    <div className='input_box'>
                        <textarea placeholder='Message' value=''></textarea>
                    </div>
                    <button>Send</button>
                </div>
                
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contact