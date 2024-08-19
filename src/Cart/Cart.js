import React, { useEffect } from 'react'
import './Cart.css'
import { db } from '../firebase'
import { collection , getDocs, updateDoc,doc, deleteDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom'


const Cart = ({cart,setCart,userDetail,auth}) => {
  const cartdb = collection(db,'cartData')
  useEffect(()=>{

    fetchcartdata() 

  },[])
  const fetchcartdata = async () =>{
    const cartdata = await getDocs(cartdb)
    const cartsnap = cartdata.docs.map((doc)=>({
      id:doc.id, ...doc.data()}))
    const findcartdata = cartsnap.filter((x)=>{
      return userDetail.id === x.userId 
    })
      setCart(findcartdata)
      console.log(findcartdata)
  }
  const cartlength = (cart || []).length === 0 
  const inc = async (data) =>{
    const cartdataref = doc(cartdb,data.id)
    await updateDoc(cartdataref,{Qty:data.Qty+1})
    fetchcartdata()
  }
  const dec = async (data) =>{
    if(data.Qty<=1){
      const cartdataref = doc(cartdb,data.id)
      await deleteDoc(cartdataref)
    }
    else {
      const cartdataref = doc(cartdb,data.id)
      await updateDoc(cartdataref,{Qty:data.Qty-1})
      fetchcartdata()
    }
  }
  const rmv = async (data) =>{
    const cartdataref = doc(cartdb,data.id)
    await deleteDoc(cartdataref)
    fetchcartdata()
  }
  const totalprice = cart.reduce((price,item)=> price + item.Qty*item.Price,0)
  return (
    <div className='cart'>
      <h2 className='title'>#Cart</h2>
      {
        auth
        ?
        <>
        {
                  cartlength ?
                 
                  <div className='empty_cart'>
                    <h2>Cart Is Empty Now</h2>
                     <Link to='/shop'><button>Shop Now</button></Link> 
                  </div>
                    
                 
                  :

                  <div className='cart_product'>
                      {
                        cart.map((curElm)=>{
                          return(
                           
                            <div className='box'>
                              <div className='img_box'>
                                <img src={curElm.img} alt=''></img>
                              </div>
                              <div className='detail'>
                                <h3>{curElm.Title}</h3>
                                <p>Price:{curElm.Price}DT</p>
                              <div className='qty'>
                                <button  onClick={()=>dec(curElm)}>-</button> 
                                <input type='number' value={curElm.Qty} readOnly></input>
                                <button onClick={()=>inc(curElm)}>+</button>
                              </div>
                              <h3 className='total_price'>Total:{curElm.Qty*curElm.Price} DT</h3>
                              <button onClick={()=>rmv(curElm)}>Remove</button>
                            </div>  
                            </div>

                          )
                        })
                      }
            
            <div className='totalp'>
                      <h3>Total:{totalprice} DT</h3>
            </div>
            <div className='checkout'>
                      <button>Checkout</button>
            </div>
  </div>
        

        }
        </>
        :
       <>
        <div className='user_login'>
          <h2>Please Login</h2>
          <Link to='/login'><button>Login Now</button></Link>
        </div>
       </>
      }
    </div>
  )
}

export default Cart