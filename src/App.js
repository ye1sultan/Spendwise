import { React } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Landing from './pages/Landing';

import Signin from './pages/sign/Signin';
import Signup from './pages/sign/Signup';
import ForgotPassword from './pages/sign/ForgotPassword';
import RestorePassword from './pages/sign/RestorePassword';

import Application from './pages/application/Application';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Navigate to="/home" />} />
                <Route path='*' element={<Navigate to="/home" />} />
                <Route path='home' element={<Landing />} />
                <Route path='signin' element={<Signin />} />
                <Route path='signup' element={<Signup />} />
                <Route path='forgot-password' element={<ForgotPassword />} />
                <Route path='restore-password' element={<RestorePassword />} />

                <Route path='application/*' element={<Application />} />
            </Routes>
        </div>
    );
}

export default App;