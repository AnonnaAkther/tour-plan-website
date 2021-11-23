import React from 'react';
import './LatestProducts.css';
import special1 from '../../../images/special/special1.png.webp'
import special2 from '../../../images/special/special2.png.webp'
import special3 from '../../../images/special/special3.png.jpg'
import special4 from '../../../images/special/special4.png.jpg'
import special5 from '../../../images/special/special5.png.jpg'
import special6 from '../../../images/special/special6.png.jpg'
import special7 from '../../../images/special/thailand.webp'
import LatestProduct from '../LatestProduct/LatestProduct';

const specials = [
    {
        img: special1,
        PlaceName: 'Amerika',
        Specialize: '----<Tour>----'
    },
    {
        img: special2,
        PlaceName: 'Afghanistan',
        Specialize: '----<Tour>----'
    },
    {
        img: special3,
        PlaceName: 'Albania',
        Specialize: '----<Tour>----'
    },
    {
        img: special4,
        PlaceName: 'Denmark',
        Specialize: '----<Tour>----'
    },
    {
        img: special5,
        PlaceName: 'Saudi Arabia',
        Specialize: '----<Tour>----'
    },
    {
        img: special6,
        PlaceName: 'Belgium',
        Specialize: '----<Tour>----'
    },
    {
        img: special7,
        PlaceName: 'Thailand',
        Specialize: '----<Tour>----'
    }
]

const LatestProducts = () => {
    return (
        <div>
            <h2 className="text-success">Our Latest Tour Place</h2>
            <div>
                {
                    specials.map(special => <LatestProduct
                    special={special}
                    ></LatestProduct>)
                }
            </div>
        </div>
    );
};

export default LatestProducts;