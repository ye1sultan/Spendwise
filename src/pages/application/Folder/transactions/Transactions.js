import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import Title from "../../components/Title";
import Bie from "../../components/Bie";

import MonthSelector from "./MonthSelector";
import Transaction from "./Transaction";
import TransactionModal from "./TransactionModal";

import { ReactComponent as NoResultTr } from '../../components/svgs/NoResultTr.svg';
import { useEffect } from "react";

const Transactions = ({ transactions, setTransactions }) => {
    const initialBalance = {
        monthlyBalance: '210020',
        incomes: '165000',
        expenses: '110030'
    };

    return (
        <>
            <Title title={'Transaction'} />
            <div className="flex justify-between items-center flex-wrap w-full">
                <Bie title="Current balance" amount={initialBalance.incomes - initialBalance.expenses} svg="current" />
                <Bie title="Incomes" amount={initialBalance.incomes} svg="incomes" />
                <Bie title="Expenses" amount={initialBalance.expenses} svg="expenses" />
                <Bie title="Monthly balance" amount={initialBalance.monthlyBalance} svg="monthly" />
            </div>
            <TransactionTable
                newTransactions={transactions}
                setNewTransactions={setTransactions}
            />
        </>
    );
};

const TransactionTable = ({ newTransactions, setNewTransactions }) => {
    console.log(newTransactions);

    const [showModal, setShowModal] = useState(false);

    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const [transactions, setTransactions] = useState([
        {
            date: "2023-03-15",
            category: "Food",
            description: "Dinner at a restaurant",
            payMethod: "Credit Card",
            amount: -50,
            type: "expense",
        },
        {
            date: "2023-03-20",
            category: "Salary",
            description: "Monthly Salary",
            payMethod: "Bank Transfer",
            amount: 4000,
            type: "income",
        },
        {
            date: "2023-04-05",
            category: "Groceries",
            description: "Weekly shopping",
            payMethod: "Debit Card",
            amount: -100,
            type: "expense",
        },
        {
            date: "2023-04-10",
            category: "Investment",
            description: "Stock purchase",
            payMethod: "Bank Transfer",
            amount: 1500,
            type: "income",
        },
    ]);

    useEffect(() => {
        const mergedTransactions = [
            ...transactions.map((transaction) => ({ ...transaction, id: uuidv4() })),
            ...newTransactions.flat().map((transaction) => ({ ...transaction, id: uuidv4() })),
        ];

        setTransactions(mergedTransactions);
    }, [newTransactions]);


    const [editingTransaction, setEditingTransaction] = useState(null);

    const startEditingTransaction = (transaction) => {
        setEditingTransaction(transaction);
        setShowModal(true);
    };

    const updateTransaction = (updatedTransaction) => {
        setTransactions((prevTransactions) => {
            return prevTransactions.map((transaction) =>
                transaction.id === updatedTransaction.id ? updatedTransaction : transaction
            );
        });

        setNewTransactions((prevNewTransactions) => {
            return prevNewTransactions.map((transaction) =>
                transaction.id === updatedTransaction.id ? updatedTransaction : transaction
            );
        });

        setShowModal(false);
    };


    const deleteTransaction = (id) => {
        setTransactions((prevTransactions) => {
            const updatedTransactions = prevTransactions.filter(
                (transaction) => transaction.id !== id
            );
            return updatedTransactions;
        });

        setNewTransactions((prevNewTransactions) => {
            const updatedNewTransactions = prevNewTransactions.filter(
                (transaction) => transaction.id !== id
            );
            return updatedNewTransactions;
        });
    };

    const formatDate = (date) => {
        if (!date) {
            return "Invalid date";
        }

        const d = new Date(date);
        if (isNaN(d.getTime())) {
            console.error(`Invalid date: ${date}`);
            return "Invalid date";
        }

        const month = ("0" + (d.getMonth() + 1)).slice(-2);
        const day = ("0" + d.getDate()).slice(-2);
        return `${month}/${day}/${d.getFullYear()}`;
    };

    const renderTransactions = () => {
        const validTransactions = transactions.map((transaction) => {
            console.log(transaction);
            return { ...transaction, date: formatDate(transaction.date) };
        });

        const filteredTransactions = validTransactions.filter((transaction) => { 
            const transactionDate = new Date(transaction.date); 
            return ( 
                transactionDate.getMonth() === currentMonth && 
                transactionDate.getFullYear() === currentYear 
            ); 
        });


        if (filteredTransactions.length === 0) {
            return (
                <div className="flex flex-col w-full justify-center items-center mb-8">
                    <NoResultTr className="mt-8" />
                    <div className="font-medium text-[24px] text-[#696969] w-full flex justify-center items-center mt-8">
                        No results
                    </div>
                </div>
            );
        }

        return filteredTransactions.map((transaction) => (
            <Transaction
                key={transaction.id}
                transaction={transaction}
                transactionDate={formatDate(transaction.date)}
                onEditClick={() => startEditingTransaction(transaction)}
                deleteTransaction={() => deleteTransaction(transaction.id)}
            />
        ));
    };

    return (
        <>
            <div className="w-full min-h-[550px] bg-white rounded-[40px] mt-[40px] border-[1px] border-[#AEAEAE] pt-[35px] ">
                <MonthSelector
                    currentMonth={currentMonth}
                    currentYear={currentYear}
                    setCurrentMonth={setCurrentMonth}
                    setCurrentYear={setCurrentYear}
                />
                <div className="w-full h-[60px] bg-[#E3E3E3] bg-opacity-80 flex justify-around items-center">
                    {['Date', 'Category', 'Description', 'Type', 'Amount', 'Action'].map((text, index) => (
                        <div key={index} className="text-[22px] text-[#6A6A6A] font-medium w-1/6 text-center">
                            {text}
                        </div>
                    ))}
                </div>
                {renderTransactions()}
            </div>
            {showModal && editingTransaction && (
                <TransactionModal
                    transaction={editingTransaction}
                    onSave={updateTransaction}
                    onCancel={() => setShowModal(false)}
                />
            )}
        </>
    );
};

export default Transactions;