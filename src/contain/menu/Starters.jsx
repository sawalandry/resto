import React from 'react';
import './menu.css';
import img01 from '../../assets/menupic/bread-barrel.jpg';
import img02 from '../../assets/menupic/cake.jpg';
import img03 from '../../assets/menupic/tuscan-grilled.jpg';

const startersData = [
    {
        name: 'Bread Barrel',
        price: '12',
        imgUrl: img01,
        desc: 'Lorem, deren, trataro, filede, nerada',
    },
    {
        name: 'Cake',
        price: '34',
        imgUrl: img02,
        desc: 'Lorem, deren, trataro, filede, nerada',
    },
    {
        name: 'Tuscan Grilled',
        price: '98.2',
        imgUrl: img03,
        desc: 'Lorem, deren, trataro, filede, nerada',
    },
]

const Starters = () => {
  return (
    <>
        {
            startersData.map((item, index) =>(
                <StartersItems
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

const StartersItems = ({name, price, imgUrl, desc}) => {
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

export default Starters;
