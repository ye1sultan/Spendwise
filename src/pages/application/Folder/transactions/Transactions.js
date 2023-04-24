import { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';

import Title from "../../components/Title";

import MonthSelector from "./MonthSelector";
import Transaction from "./Transaction";
import EditModal from "./EditModal";
import TransactionModal from "./record-transaction/TransactionModal";

import { ReactComponent as NoResultTr } from '../../components/svgs/NoResultTr.svg';

import { BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs';
import { AiOutlinePlus } from "react-icons/ai";

const Transactions = () => {
    const [showEditModal, setShowEditModal] = useState(false);

    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const [transactions, setTransactions] = useState([
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
    ]);

    const transactionsWithId = transactions.map((transaction) => {
        return { ...transaction, id: uuid() }
    });

    const [transactionsWithIdState, setTransactionsWithIdState] = useState(transactionsWithId);

    const deleteTransaction = (id) => {
        const updatedTransactions = transactionsWithIdState.filter(transaction => transaction.id !== id);
        setTransactionsWithIdState(updatedTransactions);
    };

    const [transactionOnEdit, setTransactionOnEdit] = useState(null);

    const editTransaction = (transaction) => {
        setTransactionOnEdit(transaction);
        setShowEditModal(true);
    }

    const updateTransaction = (updatedTransaction) => {
        setTransactionsWithIdState((prevTransactions) =>
            prevTransactions.map((transaction) =>
                transaction.id === updatedTransaction.id ? updatedTransaction : transaction
            )
        );

        setShowEditModal(false);
    }

    const renderTransactions = () => {
        const filteredTransactions = transactionsWithIdState.filter((transaction) => {
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
                transactionDate={transaction.date}
                deleteTransaction={() => deleteTransaction(transaction.id)}
                editTransaction={() => editTransaction(transaction)}
            />
        ));
    }

    const [showDropDown, setshowDropDown] = useState(false);

    return (
        <>
            {showEditModal && setTransactionOnEdit && (
                <EditModal
                    transaction={transactionOnEdit}
                    onSave={updateTransaction}
                    onCancel={() => setShowEditModal(false)}
                />
            )}

            <Title title={'Transaction'} />
            <div className="self-start text-[#2c3e50] relative" onMouseEnter={() => setshowDropDown(true)} onMouseLeave={() => setshowDropDown(false)}>
                <button className="flex flex-row justify-center items-center h-[45px] w-[140px] cursor-pointer uppercase font-medium text-[16px] bg-[#9F75D6] bg-opacity-90 text-white rounded-[30px]">
                    <AiOutlinePlus className="mr-[10px]" size={25} />
                    new
                </button>
                <ul className={`${showDropDown ? 'flex flex-col opacity-100' : 'hidden opacity-0'} absolute top-[120%] left-0 bg-[#fff] font-normal text-[24px] py-[15px] px-[40px] rounded-[20px] shadow `}>
                    <li>
                        <button className="flex justify-center items-center">
                            <BsArrowUpRight size={24} color="#2ecc71" />
                            Income
                        </button>
                    </li>
                    <hr className="w-full my-[10px] h-[1px] bg-[#000]" />
                    <li>
                        <button className="flex justify-center items-center">
                            <BsArrowDownRight size={24} color="#e74c3c" />
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