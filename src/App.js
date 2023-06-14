import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/sign/Login';
import Signup from './pages/sign/Signup';
import ForgotPassword from './pages/sign/ForgotPassword';
import RestorePassword from './pages/sign/RestorePassword';
import Application from './pages/application/Application';

import Dashboard from './pages/application/sections/dashboard/Dashboard';
import Transactions from './pages/application/sections/transactions/Transactions';
import Goals from './pages/application/sections/goals/Goals';
import Report from './pages/application/sections/report/Report';
import Notifications from './pages/application/sections/Notifications';
import Settings from './pages/application/sections/settings/Settings';
import TermOfUse from './pages/sign/TermOfUse';

import ProtectedWrapper from './ProtectedRoute';

function App() {
    
    //text-lg lg:text-xl xl:text-[28px] 2xl:text-[32px] 32px
    //text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] 24px
    
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="*" element={<Navigate to="/home" />} />
                <Route path="home" element={<Landing />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="terms-of-use" element={<TermOfUse />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="restore-password" element={<RestorePassword />} />

                <Route path="application/*"
                    element={
                        <ProtectedWrapper>
                            <Application />
                        </ProtectedWrapper>
                    }>
                    <Route path="" element={<Navigate to="dashboard" />} />
                    <Route path="*" element={<Navigate to="dashboard" />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="transactions/*" element={<Transactions />}>
                        <Route path="" element={<Navigate to=":month-year" />} />
                        <Route path="*" element={<Navigate to=":month-year" />} />
                        <Route path=":month-:year" element={<Transactions />} />
                    </Route>
                    <Route path="goals" element={<Goals />} />
                    <Route path="report" element={<Report />} />
                    <Route path="notifications" element={<Notifications />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;