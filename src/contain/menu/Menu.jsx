import React, { useState } from 'react';
import './menu.css';
import img0 from '../../assets/menupic/bread-barrel.jpg';
import img1 from '../../assets/menupic/cake.jpg';
import img2 from '../../assets/menupic/caesar.jpg';
import img3 from '../../assets/menupic/greek-salad.jpg';
import img4 from '../../assets/menupic/lobster-bisque.jpg';
import img5 from '../../assets/menupic/lobster-roll.jpg';
import img6 from '../../assets/menupic/mozzarella.jpg';
import img7 from '../../assets/menupic/spinach-salad.jpg';
import img8 from '../../assets/menupic/tuscan-grilled.jpg';
import Starters from './Starters';
import Salads from './Salads';
import Specialty from './Specialty';

const menuData = [
    {
        name: 'Bread Barrel',
        price: '12',
        imgUrl: img0,
        desc: 'Lorem, deren, trataro, filede, nerada',
    },
    {
        name: 'Cake',
        price: '34',
        imgUrl: img1,
        desc: 'Lorem, deren, trataro, filede, nerada',
    },
    {
        name: 'Caesar Plat',
        price: '200',
        imgUrl: img2,
        desc: 'Lorem, deren, trataro, filede, nerada',
    },
    {
        name: 'Greek Salad',
        price: '32.4',
        imgUrl: img3,
        desc: 'Lorem, deren, trataro, filede, nerada',
    },
    {
        name: 'Lobster Bisque',
        price: '21.9',
        imgUrl: img4,
        desc: 'Lorem, deren, trataro, filede, nerada',
    },
    {
        name: 'Lobster Roll',
        price: '45.8',
        imgUrl: img5,
        desc: 'Lorem, deren, trataro, filede, nerada',
    },
    {
        name: 'Mozzarella',
        price: '21.8',
        imgUrl: img6,
        desc: 'Lorem, deren, trataro, filede, nerada',
    },
    {
        name: 'Spinah Salad',
        price: '87.4',
        imgUrl: img7,
        desc: 'Lorem, deren, trataro, filede, nerada',
    },
    {
        name: 'Tuscan Grilled',
        price: '98.2',
        imgUrl: img8,
        desc: 'Lorem, deren, trataro, filede, nerada',
    },
]

const Menu = () => {

    const [menuFilter, setMenuFilter] = useState('ALL');


  return (
    <section id="menu" className="menu section_bg">
        <div className="container" data-aos='fade-up'>
            <div className="section_title">
                <h2>Menu</h2>
                <p>Check Our Tasty Menu</p>
            </div>

            <div className="row" data-aos='fade-up' data-aos-delay='100'>
                <div className="col-lg-12 d-flex justify-content-center">
                    <ul id='menu_flters'>
                        <li className={`filter_starters ${menuFilter === 'ALL' ? 'filter_active': ''}`} onClick={()=>setMenuFilter('ALL')}>All</li>
                        <li className={`filter_starters ${menuFilter === 'STARTERS' ? 'filter_active': ''}`} onClick={()=>setMenuFilter('STARTERS')}>Starters</li>
                        <li className={`filter_starters ${menuFilter === 'SALADS' ? 'filter_active': ''}`} onClick={()=>setMenuFilter('SALADS')}>Salads</li>
                        <li className={`filter_starters ${menuFilter === 'SPECIALTY' ? 'filter_active': ''}`} onClick={()=>setMenuFilter('SPECIALTY')}>Specialty</li>
                    </ul>
                </div>
            </div>
            
            <div className="row menu_container" data-aos='fade-up' data-aos-delay='200'>
                {
                    menuFilter === 'ALL' && <>
                        {
                            menuData.map((item, index) => (
                                <MenuDataItems
                                    key={index}
                                    name={item.name}
                                    price={item.price}
                                    imgUrl={item.imgUrl}
                                    desc={item.desc}
                                />
                    ))
                }
                    </>
                }
                {
                    menuFilter === 'STARTERS' && <Starters />
                }
                {
                    menuFilter === 'SALADS' && <Salads />
                }
                {
                    menuFilter === 'SPECIALTY' && <Specialty />
                }
            </div>
        </div>
    </section>
  )
}

const MenuDataItems = ({ name, price, imgUrl, desc }) => {
    return <div className="col-lg-6 menu-item filter_starters">
    <img src={imgUrl} alt={name} className='menu_img' />
    <div className="menu_content">
        <a href="/">{name}</a><span>${price}</span>
    </div>
    <div className="menu_ingredients">
        {desc}
    </div>
</div>
}

export default Menu;