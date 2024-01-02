import React, { useState } from "react";
import './Contact.css';
import axios from "axios";

const Contact = () => {
    const [values,setValues] = useState({
        name: '',
        email: '',
        number: ''
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/contact', values)
        .then(res => console.log(res))
        .then(err => console.log(err));
    }
    return (
        <section className="contact" id="contact">
            <h1 className="heading">
                <span>Contact</span> us
            </h1>
            <div className="row">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.485339764004!2d77.0842238800274!3d28.495042113187566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19386394df05%3A0x2f2805b9b4942a41!2sDLF%20CyberHub%20(Gurugram%2C%20Haryana)!5e0!3m2!1sen!2sin!4v1703222529300!5m2!1sen!2sin"
              width="600" 
             style={{border:"0"}} 
             allowfullscreen="" 
             loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade">   
             </iframe>
                <form onSubmit={handleSubmit}>
                    <h3>get in touch</h3>
                    <div className="inputBox">  
                        <span className="fa fa-user"></span>
                        <input type="text" placeholder="Name" name="name"
                        onChange={e => setValues({...values,name: e.target.value})} />

                    </div>
                    <div className="inputBox">
                        <span className="fa fa-envelope"></span>
                        <input type="email" placeholder="Email" name="email" 
                        onChange={e => setValues({...values,email: e.target.value})}/>

                    </div>
                    <div className="inputBox">
                        <span className="fa fa-phone"></span>
                        <input type="number" placeholder="number" name="number" 
                        onChange={e => setValues({...values,number: e.target.value})}/>

                    </div>
                    <input type="submit" value="contact now" className="btn" />

                </form>


            </div>

        </section>
    )
}
export default Contact;