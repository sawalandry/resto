import React, { useEffect } from 'react';
import './gallery.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from '../../assets/gallery/gallery-1.jpg';
import image2 from '../../assets/gallery/gallery-2.jpg';
import image3 from '../../assets/gallery/gallery-3.jpg';
import image4 from '../../assets/gallery/gallery-4.jpg';
import image5 from '../../assets/gallery/gallery-5.jpg';
import image6 from '../../assets/gallery/gallery-6.jpg';
import image7 from '../../assets/gallery/gallery-7.jpg';
import image8 from '../../assets/gallery/gallery-8.jpg';

const galleryItems = [
    {
        imUrl: image1,
    },
    {
        imUrl: image2,
    },
    {
        imUrl: image3,
    },
    {
        imUrl: image4,
    },
    {
        imUrl: image5,
    },
    {
        imUrl: image6,
    },
    {
        imUrl: image7,
    },
    {
        imUrl: image8,
    },
]

const Gallery = () => {
    useEffect(() => {
      AOS.init();
    
    }, []);
    
  return (
    <section id="gallery" className="gallery section_bg">

        <div className="container" data-aos='fade-up'>
            <div className="section_title">
                <h2>Gallery</h2>
                <p>Some photo from Our Resto &amp; Bar</p>
            </div>
        </div>

        <div className="container-fluid" data-aos='fade-up' data-aos-delay='100'>
            <div className="row g-0">
                    {
                        galleryItems.map((item, index) => (
                            <div className="col-lg-3 col-md-4" key={index}>
                                <div className="gallery_item">
                                    <span className='gallery_lightbox'>
                                        <img src={item.imUrl} alt=" Gallery Pic" className='img-fluid' />
                                    </span>
                                </div>
                            </div>
                        ))
                    }
            </div>
        </div>
    </section>
  )
}
export default Gallery;