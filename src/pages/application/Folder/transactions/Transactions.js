import { useState } from "react";

import Title from "../../components/Title";
import MonthSelector from "./MonthSelector";
import Transaction from "./Transaction";
import EditModal from "./EditModal";
import CreateTransaction from "./CreateTransaction";
import { ReactComponent as NoResultTr } from '../../components/svgs/NoResultTr.svg';

import { BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs';
import { AiOutlinePlus } from "react-icons/ai";

const Transactions = ({ transactionsWithIdState, updateTransaction, deleteTransaction, addNewTransaction, showDropDown, setShowDropDown, showEditModal, setShowEditModal }) => {
    const [showCreateModal, setShowCreateModal] = useState(false);

    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const [transactionOnEdit, setTransactionOnEdit] = useState(null);

    const editTransaction = (transaction) => {
        setTransactionOnEdit(transaction);
        setShowEditModal(true);
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

    const [trn, setTrn] = useState('expense');

    const handleIncomeClick = (trns) => {
        setTrn(trns);
        setShowCreateModal(true);
    }

    const handleExpenseClick = (trns) => {
        setTrn(trns);
        setShowCreateModal(true);
    }

    const closeCreateModal = (bool) => {
        setShowCreateModal(bool);
        setShowDropDown(false);
    }

    return (
        <>
            {showEditModal && setTransactionOnEdit && (
                <EditModal
                    transaction={transactionOnEdit}
                    onSave={updateTransaction}
                    onCancel={() => setShowEditModal(false)}
                />
            )}

            {showCreateModal && (
                <CreateTransaction
                    transaction={trn}
                    addNewTransaction={addNewTransaction}
                    onModalClose={closeCreateModal}
                />
            )}

            <Title title={'Transaction'} />
            <div className="self-start text-[#2c3e50] relative">
                <button
                    onClick={() => setShowDropDown(true)}
                    className="flex flex-row justify-center items-center h-[45px] w-[140px] cursor-pointer uppercase font-medium text-[16px] bg-[#9F75D6] bg-opacity-90 text-white rounded-[30px]">
                    <AiOutlinePlus className="mr-[10px]" size={25} />
                    new
                </button>
                <div
                    onMouseEnter={() => setShowDropDown(true)}
                    onMouseLeave={() => setShowDropDown(false)}
                    className={`${showDropDown ? 'flex flex-col opacity-100' : 'hidden opacity-0'} 
                absolute top-full w-[160px] mt-2 bg-white border-[1px] border-[#CED4DA] rounded-xl shadow-lg overflow-hidden`}>
                    <div>
                        <button
                            onClick={() => handleIncomeClick('income')}
                            className="w-full flex justify-between items-center px-4 py-2 text-left text-[22px] font-medium text-black hover:bg-gray-100 focus:outline-none">
                            <BsArrowUpRight size={24} color="#2ecc71" />
                            Income
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => handleExpenseClick('expense')}
                            className="w-full flex justify-between items-center px-4 py-2 text-left text-[22px] font-medium text-black hover:bg-gray-100 focus:outline-none">
                            <BsArrowDownRight size={24} color="#e74c3c" />
                            Expense
                        </button>
                    </div>
                </div>
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