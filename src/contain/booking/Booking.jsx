import React, { useEffect } from 'react';
import './booking.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Booking = () => {
    useEffect(() => {
      AOS.init();
    
    }, [])
    
  return (
    <section id="book_a_table" className="book_a_table">
        <div className="container" data-aos='fade-up'>

            <div className="section_title">
                <h2>Reservation</h2>
                <p>
                    Book a Table
                </p>
            </div>

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
    </section>
  )
}

export default Booking;