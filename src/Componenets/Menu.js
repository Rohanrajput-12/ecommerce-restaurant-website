import React from 'react';
import './Menu.css';
import {menu} from "../Data"

const Menu = () => {
    return(
        <section className='menu' id='menu'>
        <h1 className='heading'>
            our <span>menu</span>
        </h1>
        <div className='box-container'>
            {
                menu.map((item,index) =>(
                    <div className='box'>
                        <img src={item.img} alt="" />
                        <h3>Tasty and Delicious</h3>
                        <div className='price'>
                            $15.44$/- <span>20.33</span>
                        </div>
                        <button className='btn'>Add to cart</button>
                    </div>
                ))
            }
        </div>

        </section>
    )
}

export default Menu;