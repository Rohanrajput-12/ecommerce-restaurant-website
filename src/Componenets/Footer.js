import React from "react";

import './Footer.css';

const Footer = () => {
    return (
        <div>
            <section className="footer" id="footer">
            <div className="share">
                <a href="" className="fa fa-facebook"></a>
                <a href="" className="fa fa-twitter"></a>
                <a href="" className="fa fa-instagram"></a>
                <a href="" className="fa fa-linkedin"></a>
                <a href="" className="fa fa-pinterest"></a>
            </div>  
            <div className="link"> 
                <a href="">home</a>
                <a href="">about</a>
                <a href="">products</a>
                <a href="">review</a>
                <a href="">blogs</a>
                <a href="">contacts</a>
            </div> 
            <div className="credit">
                copyrights<span>© 2024</span>

            </div>

            </section>
        </div>
    )
}

export default Footer;