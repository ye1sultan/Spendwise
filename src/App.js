import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Landing from './pages/Landing';
import Signin from './pages/sign/Signin';
import Signup from './pages/sign/Signup';
import ForgotPassword from './pages/sign/ForgotPassword';
import RestorePassword from './pages/sign/RestorePassword';
import Application from './pages/application/Application';

import Dashboard from './pages/application/folder/dashboard/Dashboard';
import Transactions from './pages/application/folder/transactions/Transactions';
import Goals from './pages/application/folder/goals/Goals';
import Report from './pages/application/folder/report/Report';
import Notifications from './pages/application/folder/Notifications';
import Settings from './pages/application/folder/settings/Settings';

function App() {
    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="*" element={<Navigate to="/home" />} />
                <Route path="home" element={<Landing />} />
                <Route path="signin" element={<Signin />} />
                <Route path="signup" element={<Signup />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="restore-password" element={<RestorePassword />} />
                <Route path="application/*" element={<Application />} />

                <Route path="application/*" element={<Application />} >
                    <Route index element={<Dashboard />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="transactions" element={<Transactions />} />
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