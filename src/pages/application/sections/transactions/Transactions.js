import { useState, useEffect } from "react";
import { getAllTransactions, addTransaction, deleteTransaction as deleteTransactionAPI, updateMonthlyBalance, getMontlyBalance } from '../../../../services/api';

import Title from "../../components/Title";
import MonthSelector from "./MonthSelector";
import Transaction from "./Transaction";
import EditModal from "./EditModal";
import CreateTransaction from "./CreateTransaction";
import { ReactComponent as NoResultTr } from './NoResultTr.svg';

import { BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs';
import { AiOutlinePlus } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const Transactions = () => {
    const { t, i18n } = useTranslation();

    const [showEditModal, setShowEditModal] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [isTLoading, setIsTLoading] = useState(true);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const data = await getAllTransactions();
                const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setTransactions(sortedData);
                setIsTLoading(false);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchTransactions();
    }, []);

    const addNewTransaction = async (newTransaction) => {
        try {
            const addedTransaction = await addTransaction(newTransaction);
            setTransactions((prevTransactions) => [
                ...prevTransactions, addedTransaction
            ]);

            const monthly_balance = await getMontlyBalance();
            const balanceId = monthly_balance[monthly_balance.length - 1].id;
            const currentBalance = monthly_balance[monthly_balance.length - 1].balance;

            if (monthly_balance && addedTransaction.transaction_type === 'expense') {
                const date = new Date();
                const year = date.getFullYear();
                const month = ("0" + (date.getMonth() + 1)).slice(-2);
                const day = ("0" + date.getDate()).slice(-2);
                const formattedDate = `${year}-${month}-${day}`;

                updateMonthlyBalance(formattedDate, currentBalance - Math.abs(addedTransaction.amount), balanceId);
                console.log("Balance updated!");
            }
        } catch (error) {
            console.error('Error adding transaction:', error);
        }

        setShowDropDown(false);
    };

    const updateTransaction = (updatedTransaction) => {
        setTransactions((prevTransactions) =>
            prevTransactions.map((transaction) =>
                transaction.id === updatedTransaction.id ? updatedTransaction : transaction
            )
        );

        setShowEditModal(false);
    }

    const deleteTransaction = async (id) => {
        try {
            await deleteTransactionAPI(id);
            const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
            setTransactions(updatedTransactions);
        } catch (error) {
            console.error('Error deleting transaction:', error);
        }
    };

    const iconWidth = window.innerWidth < 1536 ? 15 : 20;

    const [showCreateModal, setShowCreateModal] = useState(false);

    const currentDate = new Date();
    const [currentMonth, setCurrentMonth] = useState({
        month: currentDate.getMonth(),
        year: currentDate.getFullYear(),
    });

    const [transactionOnEdit, setTransactionOnEdit] = useState(null);

    const editTransaction = (transaction, id) => {
        setTransactionOnEdit(transaction);
        setShowEditModal(true);
    }

    const renderTransactions = () => {
        if (isTLoading) {
            return (
                <div>
                    Loading...
                </div>
            );
        }

        const filteredTransactions = transactions.filter((transaction) => {
            const transactionDate = new Date(transaction.date);
            return (
                transactionDate.getMonth() === currentMonth.month &&
                transactionDate.getFullYear() === currentMonth.year
            );
        });

        if (filteredTransactions.length === 0) {
            return (
                <div className="flex flex-col w-full justify-center items-center 2xl:mb-8">
                    <NoResultTr className="w-[160px] 2xl:w-full 2xl:mt-8" />
                    <div className={`font-medium 2xl:text-[24px] ${localStorage.getItem("mode") === "Light Mode" ? 'text-[#696969]' : 'text-white'} w-full flex justify-center items-center 2xl:mt-8`}>
                        {t("trn.noResults")}
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
                isLast={transaction.id === filteredTransactions[filteredTransactions.length - 1].id}
            />
        ));
    }

    const [trn, setTrn] = useState('expense');

    const handleIncomeClick = (trns) => {
        setTrn(trns);
        setShowCreateModal(true);
        setShowDropDown(false);
    }

    const handleExpenseClick = (trns) => {
        setTrn(trns);
        setShowCreateModal(true);
        setShowDropDown(false);
    }

    const closeCreateModal = (bool) => {
        setShowCreateModal(bool);
        setShowDropDown(false);
    }

    const toggleState = () => {
        setShowDropDown((prevState) => !prevState);
    }

    return (
        <>
            {showEditModal && setTransactionOnEdit && (
                <EditModal
                    transaction={transactionOnEdit}
                    onSave={updateTransaction}
                    onCancel={() => setShowEditModal(false)}
                    onDelete={deleteTransaction}
                />
            )}

            {showCreateModal && (
                <CreateTransaction
                    transaction={trn}
                    addNewTransaction={addNewTransaction}
                    onModalClose={closeCreateModal}
                />
            )}

            <Title title={t("sidebar.transactions")} />
            <div className="self-start relative">
                <button
                    onClick={() => toggleState()}
                    className="h-[35px] md:h-[40px] bg-[#BFA2E5] rounded-[30px] text-black font-medium text-[16px] lg:text-[20px] flex justify-between items-center px-5 z-10">
                    <AiOutlinePlus className="mr-1 2xl:mr-[10px]" size={iconWidth} />
                    {t("trn.new")}
                </button>
                {showDropDown && (
                    <div className="flex flex-col absolute top-full 2xl:w-[160px] 2xl:mt-2 bg-white rounded-xl shadow-lg overflow-hidden">
                        <button
                            onClick={() => handleIncomeClick('income')}
                            className="w-full flex justify-between items-center px-4 py-2 text-left 2xl:text-[22px] font-medium text-black hover:bg-gray-100 focus:outline-none">
                            <BsArrowUpRight className="mr-2 2xl:mr-0" size={iconWidth} color="#2ecc71" />
                            {t("trn.income")}
                        </button>
                        <button
                            onClick={() => handleExpenseClick('expense')}
                            className="w-full flex justify-between items-center px-4 py-2 text-left 2xl:text-[22px] font-medium text-black hover:bg-gray-100 focus:outline-none">
                            <BsArrowDownRight className="mr-2 2xl:mr-0" size={iconWidth} color="#e74c3c" />
                            {t("trn.expense")}
                        </button>
                    </div>
                )}
            </div>
            <div className={`w-full ${localStorage.getItem("mode") === "Light Mode" ? 'bg-white' : 'bg-[#BCB8B8] bg-opacity-10'} rounded-[10px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[40px] mt-[40px] pb-[20px] ${localStorage.getItem("mode") === "Light Mode" ? 'text-[#2c3e50]' : 'text-white'}`}>
                <MonthSelector
                    currentMonth={currentMonth}
                    setCurrentMonth={setCurrentMonth}
                />
                <div className="hidden sm:flex justify-around items-center w-full bg-[#BFA2E5] bg-opacity-90">
                    {[t("trn.bar.date"), t("trn.bar.category"), t("trn.bar.description"), t("trn.bar.type"), t("trn.bar.amount"), t("trn.bar.action")].map((text, index) => (
                        <div key={index} className={`py-3 md:py-5 text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-medium w-1/6 text-center ${localStorage.getItem("mode") === "Light Mode" ? 'text-[#2c3e50]' : 'text-white'}`}>
                            {text}
                        </div>
                    ))}
                </div>
                <div className="flex sm:hidden justify-around items-center w-full bg-[#BFA2E5] bg-opacity-90">
                    {[t("trn.bar.date"), t("trn.bar.category"), t("trn.bar.amount"), t("trn.bar.more")].map((text, index) => (
                        <div key={index} className={`py-3 md:py-5 text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-medium w-1/4 text-center ${localStorage.getItem("mode") === "Light Mode" ? 'text-[#2c3e50]' : 'text-white'}`}>
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