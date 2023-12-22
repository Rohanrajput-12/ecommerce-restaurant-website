import React from 'react'
import AboutImg from "../Assets/Images/pizza-removebg-preview.png"
import './About.css'

const About = () => {
    return (
        <div>
            <section className='about ' id='about'>
                <div className='heading'>
                    <h1>
                        <span>About</span> us
                    </h1>
                    <div className='row'>
                        <div className='image'>
                            <img src={AboutImg} alt="" />

                        </div>
                        <div className='content'>
                            <h3>Today's special Food</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, libero saepe,
                                 facere unde voluptatum quaerat commodi inventore corporis non ipsa enim quas,
                                  sequi fugiat dolores cumque nobis dolorum soluta vel?
                            </p>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, 
                                 minima qui dolore velit nihil est repellat? Illum blanditiis voluptate vel voluptatibus?
                            </p>
                            <button className='btn'>Know more</button>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default About;