import React, { useEffect } from 'react';
import './testimonials.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import image1 from '../../assets/testimonials/testimonials-1.jpg';
import image2 from '../../assets/testimonials/testimonials-2.jpg';
import image3 from '../../assets/testimonials/testimonials-3.jpg';
import image4 from '../../assets/testimonials/testimonials-4.jpg';
import image5 from '../../assets/testimonials/testimonials-5.jpg';

const testimonialsData = [
  {
    name: 'Paulo Deprin',
    title: 'CEO & Founder',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam at ea natus laboriosam vel voluptate, numquam illo ut distinctio delectus. Repudiandae doloremque laborum consequuntur voluptates libero deleniti velit, sapiente atque commodi, expedita ullam debitis.',
    imUrl: image1,
  },
  {
    name: 'name',
    title: 'CEO',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam at ea natus laboriosam vel voluptate, numquam illo ut distinctio delectus. Repudiandae doloremque laborum consequuntur voluptates libero deleniti velit, sapiente atque commodi, expedita ullam debitis.',
    imUrl: image2,
  },
  {
    name: 'name',
    title: 'CEO',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam at ea natus laboriosam vel voluptate, numquam illo ut distinctio delectus. Repudiandae doloremque laborum consequuntur voluptates libero deleniti velit, sapiente atque commodi, expedita ullam debitis.',
    imUrl: image3,
  },
  {
    name: 'name',
    title: 'CEO',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam at ea natus laboriosam vel voluptate, numquam illo ut distinctio delectus. Repudiandae doloremque laborum consequuntur voluptates libero deleniti velit, sapiente atque commodi, expedita ullam debitis.',
    imUrl: image4,
  },
  {
    name: 'name',
    title: 'CEO',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam at ea natus laboriosam vel voluptate, numquam illo ut distinctio delectus. Repudiandae doloremque laborum consequuntur voluptates libero deleniti velit, sapiente atque commodi, expedita ullam debitis.',
    imUrl: image5,
  },
]

const Testimonials = () => {

  useEffect(() => {
    AOS.init();
  
  }, []);

  const setting = {
    dots: false,
    infinite: true,
    loop: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    swipeToSlide: true,
    keyBoardControl: true,
  }
  

  return (
    <section id="testimonials" className="testimonials section_bg">
        <div className="container" data-aos='fade-up'>

            <div className="section_title">
                <h2>Testimonials</h2>
                <p>What they're saying about us</p>
            </div>
              <div className="testimonials_slider swiper" data-aos='fade-up' data-aos-delay='100'>
                  <Slider {...setting}>
                    {
                      testimonialsData.map((item, index) => (
                        <TestimonialsDataItems
                        key={index}
                        name={item.name}
                        desc={item.desc}
                        imUrl={item.imUrl}
                        title={item.title}
                        />
                        ))
                      }
                  </Slider>
              </div>    
        </div>
    </section>
  )
}

const TestimonialsDataItems = ({ name, title, desc, imUrl }) => {
  return <div className="swiper-slider">
    <div className="testimonials_item">
      <p>
        <i className="ri-double-quotes-l quote_icon_left"></i>
        {desc}
        <i className="ri-double-quotes-r quote_icon_right"></i>
      </p>
      <img src={imUrl} alt={name} className='testimonials_img' />
      <h3>{name}</h3>
      <h4>{title}</h4>
    </div>
  </div>

}

export default Testimonials;