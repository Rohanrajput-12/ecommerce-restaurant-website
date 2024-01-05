import React from "react";
import {review} from "../Data"
import qouteImg from "../Assets/Images/quoteimg.png"
import './Review.css';
import Footer from "./Footer";

const Review = () => {
    return (
        <section className="review">
            <h1 className="heading">
                cutomer's <span>review</span>
            </h1>
            <div className="box-container">
            {
            review.map((item,index)=> (
                <div className="box">
                        <img src={qouteImg} alt="" className="quote"/>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos tenetur rem provident maiores repellendus fugiat commodi,
                             eveniet eligendi praesentium ullam incidunt tempora possimus quaerat!
                            
                        </p>
                        <img src={item.img} alt="" className="user"/>
                        <h3>Rojer</h3>
                        <div className="stars">
                            <i className=""></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>

                        </div>
                </div>
            ))
            }

            </div>
        <Footer/>
        </section>
    )
}

export default Review;