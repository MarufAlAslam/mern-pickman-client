import React from 'react';
import { Helmet } from "react-helmet";
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Footer></Footer>
        </div>
    );
};

export default Main;