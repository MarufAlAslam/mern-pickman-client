import React from 'react';
import { Helmet } from 'react-helmet';
import About from './About/About';
import Banner from './Banner/Banner';
import Counter from './Counter/Counter';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>PicMan-Home</title>
            </Helmet>
            <Banner></Banner>
            <About></About>
            <Counter></Counter>
        </div>
    );
};

export default Home;