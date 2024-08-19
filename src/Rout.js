import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Register from './Sign/Register'
import Login from './Sign/Login'
import Home from './Home/Home'
import Shop from './Shop/Shop'
import Cart from './Cart/Cart'
import Contact from './Contact/Contact'

const Rout = ({setUserDetail,setAuth,product,setProduct,addtocart,cart,setCart,userDetail,contact,auth}) => {
   
  return (
    
    <Routes>
        <Route path='/register' element={<Register setUserDetail={setUserDetail} setAuth={setAuth}/>}/>
        <Route path='/login' element={<Login setUserDetail={setUserDetail} setAuth={setAuth} />}/>
        <Route path='/' element={<Home addtocart={addtocart} setUserDetail={setUserDetail} product={product}/>}/>
        <Route path='/shop' element={<Shop addtocart={addtocart} product={product} setProduct={setProduct}/>}/>
        <Route path='/cart' element={<Cart userDetail={userDetail} setCart={setCart} cart={cart} auth={auth} />} />
        <Route path='/contact' element={<Contact Contact={contact}/>} />
    </Routes>
   
  )
}

export default Rout