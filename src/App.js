import React, { useState } from 'react'
import Rout from './Rout'
import { BrowserRouter } from 'react-router-dom'
import Nav from './Nav/Nav'
import Product from './Home/Product'
import Footer from './Footer/Footer'
import {db} from './firebase'
import { collection , addDoc , getDocs , updateDoc, doc} from 'firebase/firestore'
const App = () => {
  const[userDetail,setUserDetail]=useState()
  const[auth,setAuth]=useState(false)
  const[product,setProduct]=useState(Product)
  const[search,setSearch]=useState('')
  const[cart,setCart]=useState([])
  const cartdb = collection(db,'cartData')
  const addtocart = async (data) =>{
    if (auth === false){
      alert('Please Log In First')
    }
    else{
      const fetchcartdata = await getDocs(cartdb)
      const cartsnap = fetchcartdata.docs.map((doc)=>({
        id:doc.id, ...doc.data()
      }))
      const findcartdata = cartsnap.find((x)=>{
        return userDetail.id === x.userId && data.id === x.cartId
      })
      if (findcartdata){
        const cartdataref = doc(cartdb,findcartdata.id)
        await updateDoc(cartdb,{Qty:findcartdata.Qty+1})
        alert('This Product Already In Cart')
      }
      else {
        const addCartData = await addDoc(cartdb,
           {
           userId:userDetail.id,
           Title: data.Name,
           cartId:data.id,
           img:data.img,
           Des:data.des,
           Cat:data.cat,
           Price:data.price,
           Type:data.type,
           Qty:1})
        alert('Product Added To Cart')
      }
      
    } 
  }
  const searchLength = (search || []).length ===0
  const searchProduct = () =>{
  if(searchLength){
    alert('Please enter seomthing to search')
    setProduct(Product)
  }
  else{
    const searchFilter = Product.filter((x)=>{
      return  x.cat === search
    })
    if (searchFilter.length===0) {
      alert('Product not Found')
    } else {
      setProduct(searchFilter)
    }
  }
 }
  return (
    <BrowserRouter>
    <Nav searchProduct={searchProduct} auth={auth} setAuth={setAuth} userDetail={userDetail} setSearch={setSearch} search={search} />
    <Rout userDetail={userDetail} cart={cart} setCart={setCart} addtocart={addtocart} setUserDetail={setUserDetail} setAuth={setAuth} auth={auth} product={product} setProduct={setProduct}/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App