import React from 'react';
import './Product.css';
import {product} from "../Data"
import Footer from './Footer';

const Product = () => {
    return(
        <section className='product' id='product'>
        <h1 className='heading'>
            our <span>Product</span>
        </h1>
        <div className='box-container'>
            {
                product.map((item,index) =>(
                    <div className='box'>
                        <div className='icons'>
                        <a className='fa fa-shopping-cart'></a>
                        <a className='fa fa-heart'></a>
                        <a className='fa fa-eye'></a>
                        </div>
                        <div className='image'>
                            <img src={item.img} alt="" />
                        </div>
                        <div className='content'>
                            <h3>cofee</h3>
                            <div className='stars'>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            </div>
                        </div>
                         <div className='price'>
                            $18.45 <span>$20.3</span>
                         </div>
                    </div>
                ))
            }
        </div>
        <Footer/>
        </section>
    )
}

export default Product;