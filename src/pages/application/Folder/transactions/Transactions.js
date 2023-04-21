import { useState } from "react";

import Title from "../../components/Title";
import Bie from "../../components/Bie";

import MonthSelector from "./MonthSelector";
import Transaction from "./Transaction";
import TransactionModal from "./TransactionModal";

import { ReactComponent as NoResultTr } from '../../components/svgs/NoResultTr.svg';

const Transactions = () => {
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
            <TransactionTable />
        </>
    );
};

const TransactionTable = () => {
    const [showModal, setShowModal] = useState(false);

    const [transactions, setTransactions] = useState(
        {
            "2023-04-21": [
                {
                    id: 1,
                    category: "Food",
                    description: "Lunch at the restaurant",
                    payMethod: "Credit Card",
                    amount: -25,
                    type: "expense",
                },
                {
                    id: 2,
                    category: "Salary",
                    description: "Monthly Salary",
                    payMethod: "Bank Transfer",
                    amount: 5000,
                    type: "income",
                },
            ],
            "2023-04-22": [
                {
                    id: 3,
                    category: "Groceries",
                    description: "Weekly shopping",
                    payMethod: "Debit Card",
                    amount: -120,
                    type: "expense",
                },
                {
                    id: 4,
                    category: "Investment",
                    description: "Stock purchase",
                    payMethod: "Bank Transfer",
                    amount: 1000,
                    type: "income",
                },
            ],
            "2023-04-24": [
                {
                    id: 5,
                    category: "Transport",
                    description: "Gasoline",
                    payMethod: "Cash",
                    amount: -30,
                    type: "expense",
                },
            ],
            "2023-04-27": [
                {
                    id: 6,
                    category: "Utilities",
                    description: "Water bill",
                    payMethod: "Bank Transfer",
                    amount: -45,
                    type: "expense",
                },
            ],
            "2023-05-02": [
                {
                    id: 7,
                    category: "Entertainment",
                    description: "Movie tickets",
                    payMethod: "Credit Card",
                    amount: -20,
                    type: "expense",
                },
            ],
            "2023-05-05": [
                {
                    id: 8,
                    category: "Freelance",
                    description: "Client payment",
                    payMethod: "Bank Transfer",
                    amount: 800,
                    type: "income",
                },
            ],
        }
    );

    const [editingTransaction, setEditingTransaction] = useState(null);

    const startEditingTransaction = (transaction, date) => {
        setEditingTransaction(transaction);
        setShowModal(true);
    };


    const updateTransaction = (updatedTransaction) => {
        setTransactions((prevTransactions) => {
            const date = Object.keys(prevTransactions).find((date) =>
                prevTransactions[date].find((transaction) => transaction.id === updatedTransaction.id),
            );

            const updatedTransactions = { ...prevTransactions };
            const transactionIndex = updatedTransactions[date].findIndex(
                (transaction) => transaction.id === updatedTransaction.id,
            );

            updatedTransactions[date][transactionIndex] = updatedTransaction;

            return updatedTransactions;
        });

        setShowModal(false);
    };

    const deleteTransaction = (id, date) => {
        setTransactions((prevTransactions) => {
            const updatedTransactions = { ...prevTransactions };
            updatedTransactions[date] = updatedTransactions[date].filter((transaction) => transaction.id !== id);
            if (updatedTransactions[date].length === 0) {
                delete updatedTransactions[date];
            }
            return updatedTransactions;
        });
    };

    const formatDate = (date) => {
        const d = new Date(date);
        const month = ("0" + (d.getMonth() + 1)).slice(-2);
        const day = ("0" + d.getDate()).slice(-2);
        return `${month}/${day}/${d.getFullYear()}`;
    };

    const renderTransactions = () => {
        const dates = Object.keys(transactions);
        const lastDate = dates[dates.length - 1];

        return dates.map((date) => (
            <div key={date}>
                {transactions[date].map((transaction, index, array) => (
                    <Transaction
                        key={transaction.id}
                        transaction={transaction}
                        transactionDate={formatDate(date)}
                        isLast={date === lastDate && index === array.length - 1}
                        deleteTransaction={() => deleteTransaction(transaction.id, date)}
                        onEditClick={(transaction) => startEditingTransaction(transaction)}
                    />
                ))}
            </div>
        ));
    };

    return (
        <>
            <div className="w-full min-h-[550px] bg-white rounded-[40px] mt-[40px] border-[1px] border-[#AEAEAE] pt-[35px] ">
                <MonthSelector />
                <div className="w-full h-[60px] bg-[#E3E3E3] bg-opacity-80 flex justify-around items-center">
                    {['Date', 'Category', 'Description', 'Type', 'Amount', 'Action'].map((text, index) => (
                        <div key={index} className="text-[22px] text-[#6A6A6A] font-medium w-1/6 text-center">
                            {text}
                        </div>
                    ))}
                </div>
                <div className={`${transactions ? 'hidden' : 'flex'} w-full justify-center items-center mb-8`}>
                    <NoResultTr />
                    <div className="font-medium text-[2 4px] text-[#696969] w-full flex justify-center items-center">
                        No results
                    </div>
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