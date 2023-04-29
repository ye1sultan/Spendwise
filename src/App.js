import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

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

function App() {
    //USERDATA
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
        }
    }, []);

    // TRANSACTIONS SETTINGS
    const [showTrnEditModal, setShowTrnEditModal] = useState(false);
    const [showTrnDropDown, setShowTrnDropDown] = useState(false);

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

        setShowTrnDropDown(false);
    };


    const updateTransaction = (updatedTransaction) => {
        setTransactionsWithIdState((prevTransactions) =>
            prevTransactions.map((transaction) =>
                transaction.id === updatedTransaction.id ? updatedTransaction : transaction
            )
        );

        setShowTrnEditModal(false);
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

    // GOALS SETTINGS
    const initialGoals = [
        {
            name: "Initial Goal",
            deadline: "2023-12-31",
            amount: 100,
            totalAmount: 1000,
            color: "#F1BF5B",
            icon: "car",
            desciprtion: '',
            status: 'active',
        }
    ];

    const goalsWithId = initialGoals.map((transaction) => {
        return { ...transaction, id: uuid() }
    });


    const [goalsWithIdState, setGoalsWithIdState] = useState(goalsWithId);
    const [showGoalDropDown, setShowGoalDropDown] = useState(false);
    const [showGoalEditModal, setShowGoalEditModal] = useState(false);

    const addNewGoal = (newGoal) => {
        setGoalsWithIdState((prevGoals) => [...prevGoals, newGoal]);

        setShowGoalDropDown(false);
    }

    const updateGoals = (updatedGoal) => {
        setGoalsWithIdState((prevGoals) =>
            prevGoals.map((goal) => goal.id === updatedGoal.id ? updatedGoal : goal)
        );

        setShowGoalEditModal(false);
    }

    const deleteGoals = (id) => {
        const updatedGoals = goalsWithIdState.filter(goal => goal.id !== id);
        setGoalsWithIdState(updatedGoals);
    };

    const pauseGoal = (id) => {
        setGoalsWithIdState((prevGoals) =>
            prevGoals.map((goal) => {
                if (goal.id === id) {
                    return {
                        ...goal,
                        status: goal.status === 'active' ? 'paused' : 'active',
                    };

                }

                return goal;
            })
        );
    };

    const reachGoal = (id) => {
        setGoalsWithIdState((prevGoals) =>
            prevGoals.map((goal) => {
                if (goal.id === id) {
                    return {
                        ...goal,
                        status: 'reached',
                    };
                }
                return goal;
            })
        );
    };


    // SETTINGS SETTINGS

    const settings = [
        // myProfile = {
        //     user: {
        //         name: 'Niyaztay Yelsultan',
        //         email: 'niyaztaye@gmail.com',
        //         pic: 'https://picsum.photos/200/200',
        //     }
        // },

    ];

    const myProfile = {
        user: {
            name: 'Niyaztay Yelsultan',
            email: 'niyaztaye@gmail.com',
            pic: 'https://picsum.photos/200/200',
        }
    };

    const preferences = {
        language: 'English',
        appearence: 'Light Mode',
    }

    const security = {
        email: 'niyaztaye@gmail.com',
        password: 'elsik0000',
    }

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="*" element={<Navigate to="/home" />} />
                <Route path="home" element={<Landing />} />
                <Route path="login" element={<Login setUserData={setUserData} />} />
                <Route path="signup" element={<Signup />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="restore-password" element={<RestorePassword />} />

                <Route
                    path="application/*"
                    element={
                        <Application
                            userData={userData}
                        />
                    } >
                    <Route path="" element={<Navigate to="dashboard" />} />
                    <Route path="*" element={<Navigate to="dashboard" />} />
                    <Route path="dashboard" element={<Dashboard transactions={currentMonthTransactions} />} />
                    <Route
                        path="transactions/*"
                        element={
                            <Transactions />} >
                        <Route path="" element={<Navigate to=":month-year" />} />
                        <Route path="*" element={<Navigate to=":month-year" />} />
                        <Route path=":month-:year" element={<Transactions />} />
                    </Route>
                    <Route
                        path="goals"
                        element={
                            <Goals
                                goalsWithIdState={goalsWithIdState}
                                updateGoals={updateGoals}
                                deleteGoals={deleteGoals}
                                addNewGoal={addNewGoal}
                                pauseGoal={pauseGoal}
                                reachGoal={reachGoal}
                                showDropDown={showGoalDropDown}
                                setShowDropDown={setShowGoalDropDown}
                                showEditModal={showGoalEditModal}
                                setShowEditModal={setShowGoalEditModal}
                            />
                        } />
                    <Route path="report" element={<Report data={transactionsWithIdState} />} />
                    <Route path="notifications" element={<Notifications />} />
                    <Route path="settings" element={<Settings />} />
                </Route>

            </Routes>
        </div>
    );
}

export default App;