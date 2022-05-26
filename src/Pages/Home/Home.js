import React from 'react';
import Navebar from '../Shared/Navebar';
import Baneer from './Baneer';
import Business from './Business';
import Footer from './Footer';
import Hero from './Hero';
import Review from './Review';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Baneer></Baneer>
            <Tools></Tools>
            <Hero></Hero>
            <Business></Business>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;