import React, { useState } from 'react'
import { PiShoppingCartFill } from "react-icons/pi";
import { Link,useNavigate } from 'react-router-dom';
import './auth.css'
import { db , app } from '../firebase';
import {collection,addDoc,getDocs} from 'firebase/firestore'

const Register = ({setUserDetail , setAuth}) => {
  const[name,setName]= useState('')
  const[email,setEmail]= useState('')
  const[phone,setPhone]= useState('')
  const[password,setPassword]= useState('')

  const navigate = useNavigate()

  const dbref = collection(db,'Users')

  const authentification=async(e)=>{
    if (name.length===0 ||email.length===0||phone.length===0||password.length===0) {
      alert('All Fields are required*')
    } 
    else {
      try {
        e.preventDefault()
        const createAccount = await app.auth().createUserWithEmailAndPassword(email,password)
        if (createAccount) {
          const userInfo= await addDoc(dbref,{Name:name,Email:email,Phone:phone,Password:password})
          if(userInfo){     
                const getData = await getDocs(dbref)
                const data = getData.docs.map((doc)=>({id:doc.id,...doc.data()}))
                const userdata = data.find((info)=>
                {
                  return info.Email === email
                })
                 setUserDetail(userdata)
                 alert('User Register Successfully!')
                 setAuth(true)
                 navigate('/')

        }
        } 
        else {
          alert('ERROR While Registering User')
        }
        
      } catch (error) {
        alert(error)
      }

    }

    
  }
  return (
    <div className='auth'>
      <div className='container'>
        <img src={require('../image/gam.png')} alt=''></img>
        <div className='logo'>
          <PiShoppingCartFill/>
        </div>
        <div className='form'>
          <div className='box'>
            <input type='text' placeholder='Full Name*' value={name} onChange={(e)=> setName(e.target.value)}></input>
          </div>
          <div className='box'>
            <input type='email' placeholder='E-mail*' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
          </div>
          <div className='box'>
            <input type='number' placeholder='Phone Number' value={phone} onChange={(e)=> setPhone(e.target.value)}></input>
          </div>
          <div className='box'>
            <input type='password' placeholder='Password*' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
          </div>
          <button onClick={authentification}>Register</button>
          <p>Already have an account<Link to='/login'>Login</Link></p>
        </div>
      </div>
    </div>
  
    )
}

export default Register