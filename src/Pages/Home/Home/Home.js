import React from 'react';
import Banner from '../Banner/Banner';
import LatestProducts from '../LatestProducts/LatestProducts';
import MainOfferings from '../MainOfferings/MainOfferings';
import StudyTours from '../StudyTours/StudyTours';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
           <LatestProducts></LatestProducts>
            <MainOfferings></MainOfferings>
            <StudyTours></StudyTours>
        </div>
    );
};

export default Home;