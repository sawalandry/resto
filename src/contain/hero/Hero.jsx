import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './hero.css';

const Hero = () => {
    useEffect(() => {
      AOS.init();
    
    }, [])
    
  return (
    <section id="hero" className='d-flex align-items-center'>
        <div className="container position-relative text-center text-lg-start" data-aos='zoom-in' data-aos-delay='100'>
            <div className="row">
                <div className="col-lg-8">
                    <h1>Welcome to Swili <span>Restaurantly</span></h1>
                    <h2>Delivering great food for more than 18 years!</h2>

                    <div className="btns">
                        <a href="/" className='btn-menu animated fadeInUp scrollto'>
                            Our Menu
                        </a>
                        <a href="/" className='btn-book animated fadeInUp scrollto'>Book a Table</a>
                    </div>
                </div>
                <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos='zoom-in' data-aos-delay='100'>
                    <a href="https://www.youtube.com/watch?v=u6BOC7CDUTQ" className='glightbox play-btn'>.</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero;