import React, { useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { BiSearchAlt } from "react-icons/bi";
import { TbShoppingCart } from "react-icons/tb";
import { GiHeartOrgan } from "react-icons/gi";
import { FaUserAstronaut } from "react-icons/fa";
import { GiMissilePod } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaAlignJustify } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";







const Nav = ({auth,setAuth,userDetail,setSearch,search,searchProduct }) => {
    const[openNav,setOpenNav]=useState(false)
    const logout =()=>{
        setAuth(false)
    }
    const navopen = () =>{
        setOpenNav(true)
    }
    const closenav = ()=>{
        setOpenNav(false)
    }
  return (
    <div className='nav'>
        <div className='container'>
            <div className='top_bar'>
                <p>Get free shipping - Free 30 days money back guarantee</p>
                {
                    auth?
                    <>
                    <p><Link to='/login' className='link' onClick={logout}><FiLogOut/>Logout</Link></p>
                    </>
                    :
                    <p><Link to='/login' className='link'>Login</Link>/<Link to='/register' className='link'>Register</Link></p>

                }
            </div>
            <div className='mid_bar'>
                <div className='contant'>
                    <div className='navicon'>
                        {
                            openNav?
                            <>
                            <div className='closenav' onClick={closenav}>
                                <AiOutlineClose/>
                            </div>
                            </>
                            :
                            <>
                            <div className='navopen' onClick={navopen}>
                                <FaAlignJustify/> 
                            </div>
                            </>
                        }
                        
                    </div>
                    <div className='logo'>
                        <Link to='/'>
                            <img src={require('../image/gam.png')} alt='404'></img>
                        </Link>
                    </div>
                    <div className='search_bar'>
                        <input type="text" placeholder='Search Here..' value={search} onChange={(e)=> setSearch(e.target.value)}></input>
                        <button onClick={searchProduct}><BiSearchAlt/></button>
                        
                    </div>
                    <div className='icons'>
                        <div className='icon'>
                            <Link to="/cart"><TbShoppingCart/></Link>
                        </div>
                        <div className='icon'>
                            <GiHeartOrgan/>
                        </div>
                        <div className='icon'>
                            <IoPhonePortraitOutline/>
                            
                        </div>
                        <p>
                            +216 21568282
                        </p>
                    </div>
                </div>
            </div>
            <div className={`bottom_bar ${openNav && 'active'}`}>

                <div className='user_detail'>
                    
                    <div className='detail'>
                        {
                            
                            auth?
                            <>
                            
                            <div className='user'>
                            <h2>
                            <FaUserAstronaut/>
                            {userDetail.Name}
                            </h2>
                            <p>
                            {userDetail.Email}
                            </p>
                            </div>
                            </> 
                            :
                            <h2>
                            <FaUserAstronaut/>
                            Please,Sign in
                            </h2>             
                        }                       
                    </div>
                       

                </div>
                <ul>
                    <li>
                        <Link to='/' className='link'>Home</Link>
                        <Link to='/shop' className='link'>Shop</Link>
                        <Link to='/about' className='link'>About</Link>
                        <Link to='/contact' className='link'>Contact</Link>
                    </li>
                </ul>
                <div className='offer'>
                    <h2><GiMissilePod/>Get Started</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav