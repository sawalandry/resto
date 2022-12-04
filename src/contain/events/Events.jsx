import React, {useEffect} from 'react';
import './events.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from '../../assets/events/event-birthday.jpg';
import image1 from '../../assets/events/event-private.jpg';
import image2 from '../../assets/events/event-custom.jpg';
// import image3 from '../../assets/events/event-birthday.jpg';
import Slider from 'react-slick';

const eventData = [
    {
        name: 'Birth Parties',
        imgUrl: image,
        price: '34.9',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem ad delectus ut magnam similique consequuntur excepturi facilis, obcaecati harum dolorem soluta voluptatem explicabo.',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae aspernatur, deserunt fuga asperiores at recusandae sapiente ipsa rem iste, quidem quia molestiae esse.',
    },
    {
        name: 'Private Parties',
        imgUrl: image1,
        price: '34.9',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem ad delectus ut magnam similique consequuntur excepturi facilis, obcaecati harum dolorem soluta voluptatem explicabo.',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae aspernatur, deserunt fuga asperiores at recusandae sapiente ipsa rem iste, quidem quia molestiae esse.',
    },
    {
        name: 'Custom Parties',
        imgUrl: image2,
        price: '34.9',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem ad delectus ut magnam similique consequuntur excepturi facilis, obcaecati harum dolorem soluta voluptatem explicabo.',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae aspernatur, deserunt fuga asperiores at recusandae sapiente ipsa rem iste, quidem quia molestiae esse.',
    },
] 

const Events = () => {

    useEffect(() => {
      AOS.init();
    
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true,
    }
    

  return (
    <section id="events" className="events">
        <div className="container" data-aos='fade-up'>

            <div className="section_title">
                <h2>Events</h2>
                <p>Organize Your Events In Our Restaurant</p>
            </div>

            <div className="events_slider swiper" data-aos='fade-up' data-aos-delay='100'>
                <div className="swiper-wrapper">
                    <Slider {...settings}>
                        {
                            eventData.map((item, index) => (
                                <EventsDataItems
                                    key={index}
                                    name={item.name}
                                    price={item.price}
                                    imgUrl={item.imgUrl}
                                    desc={item.desc}
                                    detail={item.detail}
                                />
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    </section>
  )
}

const EventsDataItems = ({ name, price, desc, detail, imgUrl }) => {
    return <div className="row event_item">
        <div className="col-lg-6">
            <img src={imgUrl} alt="pic events" className='img-fluid' />
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0 content">
            <h3>{name}</h3>
            <div className="price">
                <p><span>${price}</span></p>
            </div>
            <p className="fst-italic">
                {desc}
            </p>
            <ul>
                <li><i className="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                <li><i className="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                <li><i className="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
            </ul>
            <p>
                {detail}
            </p>
        </div>
    </div>
}

export default Events;