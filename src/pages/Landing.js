import {React} from 'react';
import Header from './landing/Header';
import Hero from './landing/Hero';
import Objective1 from './landing/Objective1';
import Traking from './landing/Traking';
import Report from './landing/Report';
import Secure from './landing/Secure';
import Objective2 from './landing/Objective2';
import Try from './landing/Try';
import Footer from './landing/Footer';


const Landing = () => {
    return (
        <div className="bg-gradient-to-r from-purple-300 via-purple-300 to-pink-100">
            <Header />
            <Hero />
            <Objective1 />
            <Traking />
            <Report />
            <Secure /> 
            <Objective2 />
            <Try />
            <Footer />
        </div>
    );
}

export default Landing;