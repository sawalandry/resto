import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.css';
import about from '../../assets/about.jpg';

const About = () => {
  useEffect(() => {
    AOS.init();
    
  }, [])
  
  return (
    <section id="about" className="about">
      <div className="container" data-aos='fade-up'>
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos='zoom-in' data-aos-delay='200'>
            <div className="about_img">
              <img src={about} alt="About Pic" />
            </div>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi reiciendis nobis mollitia.</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi deserunt nulla dolorem voluptatem, voluptatibus eveniet nesciunt earum illo neque, quam dolore perferendis tempore?
            </p>
            <ul>
              <li><i className="ri-checkbox-circle-line"></i>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur magni perspiciatis quo.</li>
              <li><i className="ri-checkbox-circle-line"></i>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur magni perspiciatis quo.</li>
              <li><i className="ri-checkbox-circle-line"></i>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur magni perspiciatis quo.</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Tempore fugiat, similique id maiores, 
              nesciunt minus quisquam voluptatibus consectetur 
              exercitationem amet voluptatum. Quod numquam amet 
              facere sint provident ducimus necessitatibus quae 
              suscipit doloribus ab. Ab modi iusto reprehenderit, 
              nemo eveniet asperiores perferendis voluptas maxime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;