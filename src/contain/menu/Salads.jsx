import React from 'react';
import './menu.css';
import img01 from '../../assets/menupic/greek-salad.jpg';
import img02 from '../../assets/menupic/spinach-salad.jpg';
import img03 from '../../assets/menupic/caesar.jpg';

const saladsData = [
    { 
        name: 'Greek Salad',
        price: '32.4',
        imgUrl: img01,
        desc: 'Lorem, deren, trataro, filede, nerada',
    },
    {
        name: 'Spinah Salad',
        price: '87.4',
        imgUrl: img02,
        desc: 'Lorem, deren, trataro, filede, nerada',
    },
    {
        name: 'Caesar Plat',
        price: '200',
        imgUrl: img03,
        desc: 'Lorem, deren, trataro, filede, nerada',
    }
]

const Salads = () => {
  return (
    <>
        {
            saladsData.map((item, index) =>(
                <SaladsDataItems
                    key={index}
                    name={item.name}
                    price={item.price}
                    desc={item.desc}
                    imgUrl={item.imgUrl}
                />
            ))
        }
    </>
  )
}

const SaladsDataItems = ({ name, price, imgUrl, desc }) => {
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

export default Salads;