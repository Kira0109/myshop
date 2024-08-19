import React, { useState } from 'react'
import { PiShoppingCartFill } from "react-icons/pi";
import { Link ,useNavigate} from 'react-router-dom';
import './auth.css'
import { db , app } from '../firebase';
import {collection,getDocs} from 'firebase/firestore'

const Login = ({setUserDetail,setAuth}) => {
  const[email,setEmail]= useState('')
  const[password,setPassword]= useState('')

  const navigate=useNavigate()

  const dbref = collection(db,'Users')

  const authentification=async(e)=>{
    if (email.length===0||password.length===0) {
      alert('All Fields are required*')
    } 
    else {
      try {
        e.preventDefault()
        const createAccount = await app.auth().signInWithEmailAndPassword(email,password)
        if (createAccount) 
        {
            
                const getData = await getDocs(dbref)
                const data = getData.docs.map((doc)=>({id:doc.id,...doc.data()}))
                const userdata = data.find((info)=>
                {
                  return info.Email === email 

                })
                setUserDetail(userdata)
                 alert('User Login Successfully!')
                 setAuth(true)
                 navigate('/')
        }
        
        else {
          alert('ERROR While Login User')
        }
        
      } catch (error) {
        alert(error)
      }

    }

    
  }
  return (
    <div className='auth'>
      <div className='container'>
      <img src={require('../image/gam.png')} alt='404'></img>
        <div className='logo'>
          <PiShoppingCartFill/>
        </div>
        <div className='form'>
          
          <div className='box'>
            <input type='email' placeholder='E-mail*' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
          </div>
          
          <div className='box'>
            <input type='password' placeholder='Password*' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
          </div>
          <button onClick={authentification}>Login</button>
          <p>Don't have an account<Link to='/register'>Register</Link></p>
        </div>
      </div>
    </div>
  
  )
}

export default Login