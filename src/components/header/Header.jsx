import React, { useState, useRef,  useEffect } from 'react';
import './header.css';

const Header = () => {

    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
      setInterval(() => setDateState(new Date()), 30000);

    }, []);

    const topRef = useRef(null);

    useEffect(() => {
      window.addEventListener('scroll', () => {
        if(document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
            topRef.current.classList.add('topbar_scrolled')
        } else {
            topRef.current.classList.remove('topbar_scrolled')
        }
      })
    
      return () => {
        window.removeEventListener('scroll')
      }
    }, []);
    
    

  return (
    <div id="topbar" className="d-flex align-items-center fixed-top" ref={topRef}>
        <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact_info d-flex align-items-center">
                <i className="ri-phone-line d-flex align-items-center">
                    <span>
                        +256776050007
                    </span>
                </i>
                
                <i className="ri-time-line d-flex align-items-center">
                    <span>
                            {' '}
                            {
                                dateState.toLocaleDateString('en-Gb', {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric',
                                })
                            }

                    </span>
                </i>
                
                <i className="ri-calendar-line d-flex align-items-center">
                    <span>
                            {' '}
                            {
                                dateState.toLocaleString('en-UG', {
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    hour12: true,
                                })
                            }
                    </span>
                </i>
                
            </div>

            <div className="languages d-none d-md-flex align-items-center">
                <ul>
                    <li>En</li>
                    <li><a href="/">De</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header;