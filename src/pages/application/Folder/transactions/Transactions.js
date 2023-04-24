import { useState, useEffect } from "react";
import Title from "../../components/Title";

import MonthSelector from "./MonthSelector";
import Transaction from "./Transaction";
import TransactionModal from "./record-transaction/TransactionModal";

import { ReactComponent as NoResultTr } from '../../components/svgs/NoResultTr.svg';

import { BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs';
import { AiOutlinePlus } from "react-icons/ai";

const Transactions = () => {
    const [showModal, setShowModal] = useState(false);

    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const [transactions, setTransactions] = useState([
        {
            date: "2023-03-15",
            category: "Restaurant",
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
            category: "Supermarket",
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

    const [editingTransaction, setEditingTransaction] = useState(null);

    const startEditingTransaction = (transaction) => {

    };

    const updateTransaction = (updatedTransaction) => {

    };


    const deleteTransaction = (id) => {
        
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
    }

    return (
        <>
            <Title title={'Transaction'} />

            <div className="self-start dropdown">
                <label tabIndex={0} className="flex flex-row justify-center items-center h-[45px] w-[140px] cursor-pointer uppercase font-medium text-[16px] bg-[#9F75D6] bg-opacity-90 text-white rounded-[30px]">
                    <AiOutlinePlus className="mr-[10px]" size={25} />
                    new
                </label>
                <ul tabIndex={0} className="mt-[10px] dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <button className="font-normal" onClick={''}>
                            <BsArrowUpRight size={16} color="#2ecc71" />
                            Income
                        </button>
                    </li>
                    <li>
                        <button className="font-normal" onClick={''}>
                            <BsArrowDownRight size={16} color="#e74c3c" />
                            Expense
                        </button>
                    </li>
                </ul>
            </div>

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
        </>
    );
};

export default Transactions;