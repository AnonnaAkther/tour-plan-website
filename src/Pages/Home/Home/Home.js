import React from 'react';
import LatestProducts from '../LatestProducts/LatestProducts';
import Products from '../Products/Products';
import StudyTours from '../StudyTours/StudyTours';

const Home = () => {
    return (
        <div>
           <LatestProducts></LatestProducts>
            <Products></Products>
            <StudyTours></StudyTours>
        </div>
    );
};

export default Home;