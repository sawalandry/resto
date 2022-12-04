import React from 'react';
import './contact.css';
const Contact = () => {
  return (
    <section id="contact" className="contact">
        <div className="container" data-aos='fade-up'>

            <div className="section_title">
                <h2>Contact</h2>
                <p>Contact Us</p>
            </div>
        </div>
        <div className="container" data-aos='fade-up'>
            <div className="row mt-5">
                <div className="col-lg-4">
                    <div className="info">
                        <div className="address">
                            <i className="ri-map-pin-fill"></i>
                            <h4>Location:</h4>
                            <p>Kampala Road, kampala city, Uganda</p>
                        </div>

                        <div className="open_hours">
                            <i className="ri-24-hours-line"></i>
                            <h4>Open Hours:</h4>
                            <p>
                                Monday-Saturday: <br />
                                11:00 AM - 2300 PM
                            </p>
                        </div>

                        <div className="email">
                            <i className="ri-mail-fill"></i>
                            <h4>Email:</h4>
                            <p> <a href="/"> Net@infomug.com</a></p>
                        </div>
                        <div className="phone">
                            <i className="ri-phone-fill"></i>
                            <h4>Call:</h4>
                            <p>+256 7605007</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-8 mt-5 mt-lg-0">
                <form action="" className="form" data-aos='fade-up' data-aos-delay='100'>
                <div className="row">
                    <div className="col-lg-4 col-md-6 form_group mt-3 mt-md-0">
                        <input type="text"  name='name' className='form-control' placeholder='Enter Your Full Name' />
                    </div>
                    <div className="col-lg-4 col-md-6 form_group mt-3 mt-md-0">
                        <input type="email"  name='email' className='form-control' placeholder='Enter Your email account' />
                    </div>
                    <div className="col-lg-4 col-md-6 form_group mt-3 mt-md-0">
                        <input type="text"  name='phone' className='form-control' placeholder='Enter Your Phone Number' />
                    </div>
                    <div className="col-lg-4 col-md-6 form_group mt-3 mt-md-0">
                        <input type="text"  name='date' className='form-control' placeholder='When?' />
                    </div>
                    <div className="col-lg-4 col-md-6 form_group mt-3 mt-md-0">
                        <input type="text"  name='time' className='form-control' placeholder='At which time?' />
                    </div>
                    <div className="col-lg-4 col-md-6 form_group mt-3 mt-md-0">
                        <input type="number"  name='people' className='form-control' placeholder='How many People' />
                    </div>
                </div>
                <div className="form_group mt-3">
                    <textarea name="message" rows="5" className='form-control' placeholder='Tell Us More..'></textarea>
                </div>
                <div className="mb-3">
                    <div className="loading">Loading</div>
                    <div className="error">Something went wrong. Please try again later</div>
                    <div className="success">Your booking request was sent. We will call back or send a Email to confirm your reservation. Thank You!</div>
                </div>
                <div className="text-center"><button type='submit'>Book a Table</button></div>
            </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact;