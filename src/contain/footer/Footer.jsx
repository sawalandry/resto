import React from 'react';
import './footer.css';

const socials = [
    {
        title: 'ri-twitter-fill',
        url: 'https://',
    },
    {
        title: 'ri-instagram-fill',
        url: 'https://',
    },
    {
        title: 'ri-skype-fill',
        url: 'https://',
    },
    {
        title: 'ri-facebook-fill',
        url: 'https://',
    },
    {
        title: 'ri-linkedin-fill',
        url: 'https://',
    },
]
const navLinks = [
    {
        name: 'Home',
        nameUrl: '/',
    },
    {
        name: 'About Us',
        nameUrl: '#about',
    },
    {
        name: 'Services',
        nameUrl: '#services',
    },
    {
        name: 'Terms of services',
        nameUrl: '/',
    },
    {
        name: 'Privacy policy',
        nameUrl: '/',
    },
]

const servicesItems = [
    {
        title: 'Person Party',
        titleUrl: '/',
    },
    {
        title: 'Intel & Local Events',
        titleUrl: '/',
    },
    {
        title: 'VIP Mariage',
        titleUrl: '/',
    },
    {
        title: 'Company Meeting',
        titleUrl: '/',
    },
    {
        title: 'Conference',
        titleUrl: '/',
    },
]

const Footer = () => {
  return (
    <footer id="footer">
        <div className="footer_top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col md-6">
                        <div className="footer_info">
                            <h3>Swili</h3>
                            <p>
                                Tinda Kisasi, <br />
                                Kampala Uganda <br /><br />
                                <strong>Phone:</strong> +256 776 050 007 <br /><br />
                                <strong>Email:</strong> Net@infomug.com
                            </p>
                            <div className="social_links mt-3">
                                {
                                    socials.map((item, index) => (
                                        <div key={index}>
                                            <a href={item.url} className='link'><i className={item.title}></i></a>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 footer_links">
                        <h4>Useful Links</h4>
                        <ul>
                            {
                                navLinks.map((item, index) => (
                                    <li key={index}>
                                        <i className="ri-arrow-right-s-fill"></i><a href={item.nameUrl}>{item.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 footer_links">
                        <h4>Our Services</h4>
                        <ul>
                            {
                                servicesItems.map((item, index) => (
                                    <li key={index}>
                                        <i className="ri-arrow-right-s-fill"></i><a href={item.titleUrl}>{item.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6 footer_newsletter">
                        <h4>Our Newsletter</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat nostrum architecto!</p>
                        <form action="">
                            <input type="email" name='email' placeholder='Enter your Email here'/><input type="submit" value='subscribe' />
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="copyright">
                &copy; Copyright <strong><span>SWILI</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
                Designed by <a href="https://sawajr.netlify.app">Landry Sawa INGABIRE</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer;