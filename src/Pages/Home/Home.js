import React from 'react';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import About from './About/About';
import Banner from './Banner/Banner';
import Clients from './Clients/Clients';
import Contact from './Contact/Contact';
import Counter from './Counter/Counter';
import TopServices from './TopServices/TopServices';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>PicMan-Home</title>
            </Helmet>
            <Banner></Banner>
            <TopServices></TopServices>
            <About></About>
            <Counter></Counter>
            <Clients></Clients>
            <Contact></Contact>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Home;