import React,{useRef} from 'react';
import Logo from '../Assets/Images/rlogo.png';
import './Navbar.css'
import {cart} from "../Data"

const Navbar = () => {
  const searchRef = useRef();
  const cartRef = useRef();
  const navbarRef = useRef();
  const searchHandle = () => {
      searchRef.current.classList.toggle("active");
      cartRef.current.classList.remove("active");
      navbarRef.current.classList.remove("active");
  
  };
  const cartHandler = () => {
    
    cartRef.current.classList.toggle("active");
    navbarRef.current.classList.remove("active");
    searchRef.current.classList.remove("active");

  }
  const navbarHandler = () => {
    console.log("clicking.....");
    
     navbarRef.current.classList.toggle("active");
     searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");

  }
  return (
    <div>
      <header className='header'>
        <a href="logo" className='logo'>

          <img className='dd' src={Logo} alt="loading" />
        </a>
        <nav className='navbar' ref={navbarRef} >
          <a href="home">Home</a>
          <a href="about">About</a>
          <a href="menu">Menu</a>
          <a href="products">Products</a>
          <a href="review">Reviews</a>
          <a href="contact">Contact</a>
          <a href="blogs">Blogs</a>
        </nav>
        <div className='icons'>
          <div className='fa fa-search' onClick={searchHandle}></div>
          <div className='fa fa-shopping-cart' onClick={cartHandler}></div>
          <div className='fa fa-bars' id='menu-btn' onClick={navbarHandler}></div>
        </div>
        <div className='search-form' ref={searchRef}>
          <input type="search" placeholder='Search here...' id='search-box'/>
          <label htmlFor="search-box" className='fa fa-search'></label>
        </div>
        <div className='cart-items-container' ref={cartRef}>  
        {
            cart.map((item,index) => (
              <div className='cart-item' key={index}>
                <span className='fa fa-times' ></span>
                <img src={item.img} alt="" />
                <div className='content'>
                  <h3>cart item 01</h3>
                  <div className='price'>$1.5/-</div>
                </div>
              </div>
            ))
        }
        <a className='btn' href="demo" >checkout now</a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
