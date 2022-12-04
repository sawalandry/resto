import React from 'react';
import About from '../about/About';
import Booking from '../booking/Booking';
import Contact from '../contact/Contact';
import Events from '../events/Events';
import Gallery from '../gallery/Gallery';
import Menu from '../menu/Menu';
import Testimonials from '../testimonials/Testimonials';
import WhyUs from '../whyus/WhyUs';
import './layout.css';
import Chefs from '../chefs/Chefs'

const Layout = () => {
  return (
    <main id="main">
        <About />
        <WhyUs />
        <Menu />
        <Events />
        <Booking />
        <Testimonials />
        <Gallery />
        <Chefs />
        <Contact />
    </main>
  )
}

export default Layout;