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
import Notifications from './pages/application/sections/notifications/Notifications';
import Settings from './pages/application/sections/settings/Settings';
import TermOfUse from './pages/sign/TermOfUse';

import ProtectedWrapper from './ProtectedRoute';

function App() {

    //text-[18px] lg:text-[20px] xl:text-[28px] 2xl:text-[32px] text 32px
    //text-md lg:text-lg xl:text-[26px] 2xl:text-[30px] text 30px
    //text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] text 24px
    //text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] text 22px
    //text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] text 20px
    //text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] text 18px

    //text-[25px] md:text-[30px] lg:text-[35px] icon 35

    //px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px] padding x 50
    //py-[20px] md:py-[30px] lg:py-[40px] padding y 40

    //rounded-[10px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[40px] rounded 40

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
                    <Route path="transactions/*" element={<Transactions />} />
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