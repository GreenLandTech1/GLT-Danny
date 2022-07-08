import React from 'react';
import Features from './Features';
import Footer from './Footer';
import Header from './Header';
import Howitworks from './Howitworks';
import Searching from './Searching';
import Services from './Services';
import Signup from './Signup';
import Team from './Team';
import Whoarewe from './Whoarewe';

function Home() {
    return (
        <>
            <Header />
            <Whoarewe />
            <Services />
            <Searching />
            <Features />
            <Howitworks />
            <Signup />
            <Team />
            <Footer />
        </>
    );
}

export default Home;