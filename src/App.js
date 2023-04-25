import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

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
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);

    const transactions = [
        {
            date: "2023-03-15",
            category: "Restaurant",
            description: "Dinner at a restaurant",
            payMethod: "Cash",
            amount: -50,
            type: "expense",
        },
        {
            date: "2023-03-20",
            category: "Salary",
            description: "Monthly Salary",
            payMethod: "Debit Card",
            amount: 4000,
            type: "income",
        },
        {
            date: "2023-04-05",
            category: "Supermarket",
            description: "Weekly shopping",
            payMethod: "Cash",
            amount: -100,
            type: "expense",
        },
        {
            date: "2023-04-10",
            category: "Investment",
            description: "Stock purchase",
            payMethod: "Debit Card",
            amount: 1500,
            type: "income",
        },
        {
            date: "2023-02-02",
            category: "Gift",
            description: "Grandpa gave money",
            payMethod: "Cash",
            amount: 10000,
            type: "income",
        },
        {
            date: "2023-02-05",
            category: "Investment",
            description: "Stock purchase",
            payMethod: "Debit Card",
            amount: 1500,
            type: "income",
        },
        {
            date: "2023-04-05",
            category: "Investment",
            description: "Stock purchase",
            payMethod: "Debit Card",
            amount: 15000,
            type: "income",
        },
        {
            date: "2023-04-05",
            category: "Supermarket",
            description: "Stock purchase",
            payMethod: "Debit Card",
            amount: -1500,
            type: "expense",
        },
    ];

    const transactionsWithId = transactions.map((transaction) => {
        return { ...transaction, id: uuid() }
    });

    const [transactionsWithIdState, setTransactionsWithIdState] = useState(transactionsWithId);

    const addNewTransaction = (newTransaction) => {
        setTransactionsWithIdState((prevTransactions) => [...prevTransactions, newTransaction]);

        setShowDropDown(false);
    };


    const updateTransaction = (updatedTransaction) => {
        setTransactionsWithIdState((prevTransactions) =>
            prevTransactions.map((transaction) =>
                transaction.id === updatedTransaction.id ? updatedTransaction : transaction
            )
        );

        setShowEditModal(false);
    }

    const deleteTransaction = (id) => {
        const updatedTransactions = transactionsWithIdState.filter(transaction => transaction.id !== id);
        setTransactionsWithIdState(updatedTransactions);
    };

    const getCurrentMonthTransactions = (transactions) => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();

        return transactions.filter((transaction) => {
            const transactionDate = new Date(transaction.date);
            return (
                transactionDate.getMonth() === currentMonth &&
                transactionDate.getFullYear() === currentYear
            );
        });
    };

    const currentMonthTransactions = getCurrentMonthTransactions(transactionsWithIdState);

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

                <Route path="application/*" element={<Application />} >
                    <Route path="" element={<Navigate to="dashboard" />} />
                    <Route path="*" element={<Navigate to="dashboard" />} />
                    <Route path="dashboard" element={<Dashboard transactions={currentMonthTransactions} />} />
                    <Route
                        path="transactions/*"
                        element={
                            <Transactions
                                transactionsWithIdState={transactionsWithIdState}
                                updateTransaction={updateTransaction}
                                deleteTransaction={deleteTransaction}
                                addNewTransaction={addNewTransaction}
                                showDropDown={showDropDown}
                                setShowDropDown={setShowDropDown}
                                showEditModal={showEditModal}
                                setShowEditModal={setShowEditModal} />} >
                        <Route path="" element={<Navigate to=":month-year" />} />
                        <Route path="*" element={<Navigate to=":month-year" />} />
                        <Route path=":month-:year" element={<Transactions />} />
                    </Route>
                    <Route path="goals" element={<Goals />} />
                    <Route path="report" element={<Report data={transactionsWithIdState} />} />
                    <Route path="notifications" element={<Notifications />} />
                    <Route path="settings" element={<Settings />} />
                </Route>

            </Routes>
        </div>
    );
}

export default App;