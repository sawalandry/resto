import React from 'react';
import './menu.css';
import img4 from '../../assets/menupic/lobster-bisque.jpg';
import img5 from '../../assets/menupic/lobster-roll.jpg';
import img6 from '../../assets/menupic/mozzarella.jpg';

const specialtyData = [
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
]

const Specialty = () => {
  return (
    <>
        {
            specialtyData.map((item, index) =>(
                <SpecialtyDataItems
                    key={index}
                    name={item.name}
                    price={item.price}
                    imgUrl={item.imgUrl}
                    desc={item.desc}
                />
            ))
        }
    </>
  )
}

const SpecialtyDataItems = ({ name, price, imgUrl, desc }) => {
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

export default Specialty;