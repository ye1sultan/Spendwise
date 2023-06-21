import { React } from 'react';

import Header from './landing/Header';
import Hero from './landing/Hero';
import Objective1 from './landing/Objective1';
import Traking from './landing/Traking';
import Report from './landing/Report';
import Objective2 from './landing/Objective2';
import Try from './landing/Try';
import Footer from './landing/Footer';
import AboutUs from './landing/AboutUs';

const Landing = () => {
    return (
        <div className="bg-gradient-to-r from-purple-300 via-purple-300 to-pink-100">
            <Header />
            <Hero />
            <AboutUs />
            <Objective1 />
            <Traking />
            <Report />
            <div className='w-full h-[50px] bg-gradient-to-r from-purple-300 via-purple-300 to-pink-100'></div>
            <Objective2 />
            <Try />
            <Footer />
        </div>
    );
}

export default Landing;