import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './why_us.css';

const tryData = [
    {
        number: '01',
        title: 'Bar',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur alias similique animi?',
    },
    {
        number: '02',
        title: 'Restaurent',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur alias similique animi?',
    },
    {
        number: '03',
        title: 'Motel',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur alias similique animi?',
    },
]

const Why_us = () => {
    useEffect(() => {
      AOS.init();
    
    }, [])
    
  return (
    <section id="why_us" className="why_us">
        <div className="container" data-aos='fade-up'>
            <div className="section_title">
                <h2>Why Us</h2>
                <p>Why Choose Our Restaurant</p>
            </div>

            <div className="row">
                    {
                        tryData.map((item, index) => (
                                <TryDataItems
                                    key={index}
                                    number={item.number}
                                    title={item.title}
                                    desc={item.desc}
                                />
                        ))
                    }
            </div>
        </div>
    </section>
  )
}

const TryDataItems = ({ number, title, desc }) => {
    return <div className="col-lg-4 mt-4 mt-lg-0">
        <div className="box" data-aos='zoom-in' data-aos-delay='100'>
            <span>{number}</span>
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    </div>
}

export default Why_us;