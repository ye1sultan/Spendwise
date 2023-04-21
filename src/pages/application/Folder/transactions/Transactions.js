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

    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const [transactions, setTransactions] = useState([
        {
            id: 1,
            date: "2023-03-15",
            category: "Food",
            description: "Dinner at a restaurant",
            payMethod: "Credit Card",
            amount: -50,
            type: "expense",
        },
        {
            id: 2,
            date: "2023-03-20",
            category: "Salary",
            description: "Monthly Salary",
            payMethod: "Bank Transfer",
            amount: 4000,
            type: "income",
        },
        {
            id: 3,
            date: "2023-04-05",
            category: "Groceries",
            description: "Weekly shopping",
            payMethod: "Debit Card",
            amount: -100,
            type: "expense",
        },
        {
            id: 4,
            date: "2023-04-10",
            category: "Investment",
            description: "Stock purchase",
            payMethod: "Bank Transfer",
            amount: 1500,
            type: "income",
        },
    ]);

    const [editingTransaction, setEditingTransaction] = useState(null);

    const startEditingTransaction = (transaction, date) => {
        setEditingTransaction({ ...transaction, date });
        setShowModal(true);
    };


    const updateTransaction = (updatedTransaction) => {
        setTransactions((prevTransactions) => {
            const updatedTransactions = prevTransactions.filter(
                (transaction) => transaction.id !== updatedTransaction.id
            );

            return [...updatedTransactions, updatedTransaction].sort(
                (a, b) => new Date(a.date) - new Date(b.date)
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
    };

    const formatDate = (date) => {
        const d = new Date(date);
        const month = ("0" + (d.getMonth() + 1)).slice(-2);
        const day = ("0" + d.getDate()).slice(-2);
        return `${month}/${day}/${d.getFullYear()}`;
    };

    const renderTransactions = () => {
        const filteredTransactions = transactions.filter(
            (transaction) => {
                const transactionDate = new Date(transaction.date);
                return (
                    transactionDate.getMonth() === currentMonth &&
                    transactionDate.getFullYear() === currentYear
                );
            }
        );

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
                onEditClick={(transaction) => startEditingTransaction(transaction)}
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