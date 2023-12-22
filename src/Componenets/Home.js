import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div>
            <section className='home ' id='home'>
            <div className='content'>
                <h3>
                    Fresh <span>food in the </span> morning
                </h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Magni labore quaerat suscipit, saepe minus commodi ullam neque nostrum.
                   
                </p>
                {/* <a href="get now" className='btn'>Get Now</a> */}
                <button className='btn'>get now</button>
            </div>

            </section>
        </div>
    )
}

export default Home;