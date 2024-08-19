import React from 'react'
import './Shop.css'
import {CiHeart,CiSearch} from "react-icons/ci"
import {TfiReload} from "react-icons/tfi"
import Product from '../Home/Product'
const Shop = ({product,setProduct,addtocart}) => {
  const filterCat = (data) =>{
    const filter = Product.filter((x)=>{
      return x.cat ===data
    })
    setProduct(filter)
  }
  const allproduct = ()=>{
    setProduct(Product)
  }
  return (
    <div className='shop'>
        <h2>Home / Shop</h2>
        <div className='shop_container'>
            <div className='left_box'>
                <div className='contant'>
                    <h3>Product Categories</h3> 
                    <ul> 
                        <li onClick={allproduct}>All</li>
                        <li onClick={()=> filterCat('pc')}>Ordinateur Gamer</li>
                        <li onClick={()=> filterCat('laptop')}>Pc Gamer</li>
                        <li onClick={()=> filterCat('ecran')}>Ecran</li>
                        <li onClick={()=> filterCat('Mobile')}>Accessoires</li>
                    </ul>
                </div>
            </div>
            <div className='right_box'>
                <div className='contant'>
                    <div className='top_banner'>
                        <img src={require('../image/banner-superior-laptops-gamer-ofertas-mobile-1.jpg')} alt='banner1'></img>
                    </div>
                    <h2>Shop Now</h2>
                    <div className='product_container'>
                        {
                          product.map((curElm) =>{
                            return(
                              <div className='box'>
                                    <div className='img_box'>
                                      <img src={curElm.img} alt=''></img>
                                    </div>
                                    <div className='detail'>
                                        <div className='icons'>
                                          <div className='icon'>
                                            <CiHeart/>
                                          </div>
                                          <div className='icon'>
                                            <TfiReload/>
                                          </div>
                                          <div className='icon'>
                                            <CiSearch/>
                                          </div>
                                        </div>
                                      <h3>{curElm.Name}</h3>
                                      <h4>{curElm.price}$</h4>
                                      <button onClick={()=> addtocart(curElm)}>Add to Cart</button>
                                    </div> 
                                </div>
                            )
                          })
                        }
                            
                                  
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shop