import React,{useRef} from 'react';
import Logo from '../Assets/Images/rlogo.png';
import './Navbar.css'
import {cart} from "../Data"
import Search from './Search';

const Navbar = () => {
  const handleSearch = (searchTerm) => {
    // Implement your search logic here
    console.log(`Search term: ${searchTerm}`);
  };
  const cartRef = useRef();
  const navbarRef = useRef();
  
  const cartHandler = () => {
    
    cartRef.current.classList.toggle("active");
    navbarRef.current.classList.remove("active");
   

  }
  const navbarHandler = () => {
    console.log("clicking.....");
    
     navbarRef.current.classList.toggle("active");
   
    cartRef.current.classList.remove("active");

  }
  return (
    <div>
      <header className='header'>
        <a href="/" className='logo'>

          <img className='dd' src={Logo} alt="loading" />
        </a>

          <Search onSearch={handleSearch} /> 
        
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
