import React from "react";
import {blog} from "../Data"
import './Blog.css'
import Footer from "./Footer";

const Blog = () => {
    return (
        <div>
            <section className="blog" id="blog">
                <h3 className="heading">
                    Our <span>Blog</span>
                </h3> 
                <div className="box-container">
                    {blog.map((item,index) => (
                        <div className="box" key={index}>
                            <div className="image">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="content">
                                <a href="#" className="title">
                                    tasty and fresh
                                </a>
                                <span>by owner / 31st dec 2023</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea obcaecati aperiam laborum similique esse.</p>
                                <button className="btn">Read more</button>

                            </div>
                        </div>
                    ))}

                </div>
                <Footer/>

            </section>
        </div>
    )
}

export default Blog;