import {React} from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';
import Page7 from './components/Page7';
import Footer from './components/Footer';
import Signin from './Signin';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import RestorePassword from './RestorePassword';

const Landing = () => {
    return (
        <div className="bg-gradient-to-r from-purple-300 via-purple-300 to-pink-100">
            <RestorePassword />
        </div>
    )
}

export default Landing;