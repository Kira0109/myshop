import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { GiStorkDelivery, GiMoneyStack } from "react-icons/gi";
import { FaCreditCard } from "react-icons/fa6";
import { GoCommentDiscussion } from "react-icons/go";
import {CiHeart,CiSearch} from "react-icons/ci"
import {TfiReload} from "react-icons/tfi"

const Home = ({ product,addtocart }) => {
  const [sale, setSale] = useState([])
  const [newProduct, setNewProduct] = useState([])

  const fetchdata = () => {
    const salefilter = product.filter((curElm) => {
      return curElm.type === 'sale'
    })
    setSale(salefilter)
    const newProduct = product.filter((curElm) => {
      return curElm.type === 'new' 
    })
    setNewProduct(newProduct)
  }
  useEffect(() => {
    fetchdata();
  },);
  return (
    
      <div className='home'>
        <div className='top_banner'>
          <div className='contant'>
            <div className='info'>
              <h2>Pc series:for best gaming</h2>
              <p>Get <span>30% off</span> this week </p>
              <Link to='/shop'> <button>Discover Now</button></Link>
            </div>
            <div className='img_box'>
              <img src={require('../image/box-img.png')}alt=''></img>
            </div>
          </div>
        </div>
        <div className='about'>
            <div className='container'>
              <div className='box'>
                <div className='icon'> 
                  <GiStorkDelivery/>
                </div>
                <div className='info'>
                  <h3>FREE DELIVERY</h3>
                  <p>For all orders over 100dt</p>
                </div>
              </div>
              <div className='box'>
                <div className='icon'> 
                  <FaCreditCard/>
                </div>
                <div className='info'>
                  <h3>Secure Payment</h3>
                  <p>100% safe shipping</p>
                </div>
              </div>
              <div className='box'>
                <div className='icon'> 
                  <GiMoneyStack/>
                </div>
                <div className='info'>
                  <h3>Shop with confidence</h3>
                  <p>If goods have problems</p>
                </div>
              </div>
              <div className='box'>
                <div className='icon'> 
                  <GoCommentDiscussion/>
                </div>
                <div className='info'>
                  <h3>24/7</h3>
                  <p>Dedicated 24/7 support</p>
                </div>
              </div>
            </div>
          </div>
          <div className='sale_product'>
            <h2>Hot Deal Products</h2>
            <div className='container'>
              {
                sale.map((curElm)=>{
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
          <div className='mid_banner'>
            <div className='container'>
              <div className='banner_box'>
                <img src={require('../image/téléchargé.png')} alt='banner1'></img>
              </div>
              <div className='banner_box'>
                <img src={require('../image/banner-superior-laptops-gamer-ofertas-mobile-1.jpg')} alt=''></img>
              </div>
            </div>
          </div>
          <div className='top_category'>
            <div className='container'>
              <div className='cat_box'>
                <h2>Top Categories This Week</h2>
                <p>Aliquam eget consectuuro habitase interdum</p>
                <button>view all categories</button>
              </div>
              <div className='box'>
                <div className='img_box'>
                  <img src={require('../image/pc gamer.png')} alt=''></img>
                </div>
                <div className='info'>
                  <h4>Ordinateurs</h4>
                </div>
              </div>
              <div className='box'>
                <div className='img_box'>
                  <img src={require('../image/pc portable.png')} alt=''></img>
                </div>
                <div className='info'>
                  <h4>PC Portable</h4>
                </div>
              </div>
              <div className='box'>
                <div className='img_box'>
                  <img src={require('../image/composants.png')} alt=''></img>
                </div>
                <div className='info'>
                  <h4>Composants</h4>
                </div>
              </div>
              <div className='box'>
                <div className='img_box'>
                  <img src={require('../image/exra.png')} alt=''></img>
                </div>
                <div className='info'>
                  <h4>Ecrans</h4>
                </div>
              </div>
              <div className='box'>
                <div className='img_box'>
                <img src={require('../image/image4.jpg')} alt=''></img>
                </div>
                <div className='info'>
                  <h4>Consoles</h4>
                </div>
              </div>
              <div className='box'>
                <div className='img_box'>
                <img src={require('../image/accesoire.png')} alt=''></img>
                </div>
                <div className='info'>
                  <h4>Accessoires</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='featured_product'>
            <h3>Featured Products</h3>
            <div className='container'>
              
                 
                    <div className='box'>
                      <div className='img_box'>
                       <img src={require('../image/featured1.webp')} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h4>Souris</h4>
                        <p>200$</p>
                      </div>
                    </div>
                    <div className='box'>
                      <div className='img_box'>
                       <img src={require('../image/featured2.webp')} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h4>Casque</h4>
                        <p>200$</p>
                      </div>
                    </div>
                    <div className='box'>
                      <div className='img_box'>
                       <img src={require('../image/featured3.jpg')} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h4>Clavier</h4>
                        <p>200$</p>
                      </div>
                    </div>
                    <div className='box'>
                      <div className='img_box'>
                       <img src={require('../image/featured4.webp')} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h4>Tapis</h4>
                        <p>200$</p>
                      </div>
                    </div>
                    <div className='box'>
                      <div className='img_box'>
                       <img src={require('../image/71DlNwhYT1L.jpg')} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h4>Chaises</h4>
                        <p>200$</p>
                      </div>
                    </div>
                    <div className='box'>
                      <div className='img_box'>
                       <img src={require('../image/mic.jpg')} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h4>MicroPhone</h4>
                        <p>200$</p>
                      </div>
                    </div>
                    
                    
            </div>
          </div>
          <div className='newsletter'>
              <div className='container'>
                <div className='main'>
                  <h3>Newsletter Sign up</h3>
                  <p>Get <span>30% OFF</span> coupon today subscribers</p>
                </div>
                <div className='detail'>
                  <p><span>Join 226.000+ subscribers</span> and get a new discount coupon</p> 
                </div>
                <div className='box'>
                  <input  type='text' placeholder='Enter Your Email'></input>
                  <button>Subscribe!</button>
                 </div>
              </div>
          </div>
          <div className="brands">
            <div className='container'>
              <div className="box">
              <img src={require('../image/brand2.png')} alt=''></img>
              </div>
              <div className="box">
              <img src={require('../image/brand4.png')} alt=''></img>
              </div>
              <div className="box">
              <img src={require('../image/brand5.png')} alt=''></img>
              </div>
              <div className="box">
              <img src={require('../image/brand6.png')} alt=''></img>
              </div>
              <div className="box">
              <img src={require('../image/brand7.png')} alt=''></img>
              </div>
              <div className="box">
              <img src={require('../image/brand8.png')} alt=''></img>
              </div>
              <div className="box">
              <img src={require('../image/brand9.png')} alt=''></img>
              </div>
              <div className="box">
              <img src={require('../image/brand10.png')} alt=''></img>
              </div>
              <div className="box">
              <img src={require('../image/brand11.png')} alt=''></img>
              </div>
              <div className="box">
              <img src={require('../image/brand12.webp')} alt=''></img>
              </div>

            </div>
          </div>
      </div>
  )
}

export default Home