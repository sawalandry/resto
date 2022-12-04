import React, { useEffect } from 'react';
import './chefs.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import chefs0 from '../../assets/chefs/chefs-1.jpg';
import chefs1 from '../../assets/chefs/chefs-2.jpg';
import chefs2 from '../../assets/chefs/chefs-3.jpg';


const chefsData = [
    {
        imUrl: chefs0,
        name: 'Walter White',
        title: 'Master Chef',
    },
    {
        imUrl: chefs1,
        name: 'Sarah Jhonson',
        title: 'Patissier',
    },
    {
        imUrl: chefs2,
        name: 'William Anderson',
        title: 'Cooker',
    },
]




const Chefs = () => {
    useEffect(() => {
      AOS.init();
    
    }, [])
    
  return (
    <section id="chefs" className="chefs">
        <div className="container" data-aos='fade-up'>
            <div className="section_title">
                <h2>Chefs</h2>
                <p>Our Proffessional Chefs</p>
            </div>

            <div className="row">
                    {
                        chefsData.map((item, index) => (
                            <ChefsDataItems
                                key={index}
                                name={item.name}
                                title={item.title}
                                imUrl={item.imUrl}
                            />
                        ))
                    }
            </div>
        </div>
    </section>
  )
}
const ChefsDataItems = ({ name, imUrl, title }) => {
    return <div className="col-lg-4 col-md-6">
         <div className="member" data-aos='zoom-in' data-aos-delay='100'>
            <img src={imUrl} alt={name} className="img-fluid" />
            <div className="member_info">
                <div className="member_info_content">
                    <h4>{name}</h4>
                    <span>{title}</span>
                </div>
                <div className="social">
                    <a href="/"><i className="ri-twitter-fill"></i></a>
                    <a href="/"><i className="ri-facebook-circle-fill"></i></a>
                    <a href="/"><i className="ri-instagram-fill"></i></a> 
                    <a href="/"><i className="ri-linkedin-fill"></i></a>
                </div>
            </div>
        </div>
        </div>
}

export default Chefs;