import React from 'react';
import { Helmet } from 'react-helmet';
import About from './About/About';
import Banner from './Banner/Banner';
import Clients from './Clients/Clients';
import Contact from './Contact/Contact';
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
            <Clients></Clients>
            <Contact></Contact>
        </div>
    );
};

export default Home;