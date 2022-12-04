import React, { useRef, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './navbar.css';

const navbarItem = [
    {
        title: 'Home',
        titleUrl: '#hero',
    },
    {
        title: 'About',
        titleUrl: '#about',
    },
    {
        title: 'Menu',
        titleUrl: '#menu',
    },
    {
        title: 'Special',
        titleUrl: '#special',
    },
    {
        title: 'Events',
        titleUrl: '#events',
    },
    {
        title: 'Chefs',
        titleUrl: '#chefs',
    },
    {
        title: 'Gallery',
        titleUrl: '#gallery',
    },
    {
        title: 'Contact',
        titleUrl: '#contact',
    },
]

const Navbar = () => {

    const headerRef = useRef(null);

    const menuRef = useRef(null);

    useEffect(() => {
      window.addEventListener('scroll', ()=>{
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            headerRef.current.classList.add('header__shrink')
        } else{
            headerRef.current.classList.remove('header__shrink')
        }
      })
      return ()=> {
        window.removeEventListener('scroll')
      }
    }, []);

    const menuToggle = ()=> menuRef.current.classList.toggle('menu__active')

    const handleClick = e=>{
        e.preventDefault();
        const targetAttr = e.target.getAttribute('href');
        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            left: 0,
            top: location - 70
        });
    };

  return (
    <Container>
        <header ref={headerRef} className=' header'>
            <div className='navbar container d-flex align-items-center justify-content-between'>
                <div className="logo">
                    <h3><a href="/">Swili.</a></h3>
                </div>
                <div className="navbar_list" ref={menuRef} onClick={menuToggle}>
                    <ul className="nav-list">
                        {
                            navbarItem.map((item, index) => 
                                <li className="nav-items" key={index}>
                                    <a href={item.titleUrl} onClick={handleClick}>{item.title}</a>
                                </li>
    
                            )
                        }
                    </ul>
                </div>
    
                <div className="nav-button d-flex align-items-center gap-4">
                    {/* <button className='btn'><a href="https://www.github.com/sawalandry" target='_blank' rel="noreferrer">My Github <i className="ri-github-line"></i></a></button> */}
                    <span className="mobile-nav">
                    <i className="ri-menu-5-line" onClick={menuToggle}></i>
                    </span>
                </div>
            </div>
        </header>
    </Container> 
  )
}

export default Navbar