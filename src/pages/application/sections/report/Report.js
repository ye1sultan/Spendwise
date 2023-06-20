import { useEffect, useState } from "react";

import Title from "../../components/Title";
import BarChart from "./charts/BarChart";
import PieChart from "../../components/PieChart";
import MonthSelector from "./MonthSelector";

import { ReactComponent as NoResultRp } from "./NoResultRp.svg";
import { FiBarChart, FiPieChart } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import { getAllTransactions } from "../../../../services/api";

const Report = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [currentTransaction, setCurrentTransaction] = useState('transactions');

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const data = await getAllTransactions();
                setData(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchTransactions();
    }, []);

    const calculateTotals = (transactions) => {
        let totalIncome = 0;
        let totalExpense = 0;

        transactions.forEach((transaction) => {
            if (transaction.transaction_type === 'income') {
                totalIncome += parseInt(transaction.amount);
            } else if (transaction.transaction_type === 'expense') {
                totalExpense += parseInt(transaction.amount);
            }
        });

        return {
            totalIncome,
            totalExpense,
            totalBalance: totalIncome - totalExpense
        };
    };

    const separateIncomeAndExpense = (transactions) => {
        let incomeObjects = [];
        let expenseObjects = [];

        transactions.forEach((transaction) => {
            if (transaction.transaction_type === 'income') {
                incomeObjects.push(transaction);
            } else if (transaction.transaction_type === 'expense') {
                expenseObjects.push(transaction);
            }
        });

        return {
            incomeObjects,
            expenseObjects,
        };
    };

    const currentDate = new Date();
    const [currentMonth, setCurrentMonth] = useState({
        month: currentDate.getMonth(),
        year: currentDate.getFullYear(),
    });

    const getCurrentMonthTransactions = (transactions, month, year) => {
        return transactions.filter((transaction) => {
            const transactionDate = new Date(transaction.date);
            return (
                transactionDate.getMonth() === month &&
                transactionDate.getFullYear() === year
            );
        });
    };

    const [switched, setSwitched] = useState(false);
    const handleSwitch = () => {
        setSwitched((prevState) => !prevState);
    };

    const [dropDown, setDropDown] = useState(false);
    const handleDropDownClick = (name) => {
        setCurrentTransaction(name);
        setDropDown(false);
    }

    const renderData = () => {
        if (currentTransaction === 'transactions') {
            return (
                <>
                    {
                        (() => {
                            if (isLoading) {
                                return (
                                    <div>
                                        <h2>Loading...</h2>
                                    </div>
                                );
                            } else if (!getCurrentMonthTransactions(data, currentMonth.month, currentMonth.year) || getCurrentMonthTransactions(data, currentMonth.month, currentMonth.year).length === 0) {
                                return (
                                    <div className="flex flex-col w-full justify-center items-center 2xl:mb-8">
                                        <NoResultRp className="w-[160px] 2xl:w-full 2xl:mt-8" />
                                        <div className="font-medium 2xl:text-[24px] text-[#696969] w-full flex justify-center items-center 2xl:mt-8">
                                            No results
                                        </div>
                                    </div>
                                );
                            } else {
                                if (!switched) {
                                    return (
                                        <div className="flex flex-col sm:flex-row justify-between items-center w-full min-h-[300px]">
                                            <PieChart transactions={getCurrentMonthTransactions(data, currentMonth.month, currentMonth.year)} type={currentTransaction} />
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div className="flex justify-evenly items-center w-full h-full min-h-[300px]">
                                            <BarChart expenses={calculateTotals(getCurrentMonthTransactions(data, currentMonth.month, currentMonth.year)).totalExpense} incomes={calculateTotals(getCurrentMonthTransactions(data, currentMonth.month, currentMonth.year)).totalIncome} balance={calculateTotals(getCurrentMonthTransactions(data, currentMonth.month, currentMonth.year)).totalBalance} />
                                        </div>
                                    );
                                }
                            }
                        })()
                    }
                </>
            );
        }

        if (currentTransaction === 'incomes') {
            return (
                <>
                    {
                        (() => {
                            if (isLoading) {
                                return (
                                    <div>
                                        <h2>Loading...</h2>
                                    </div>
                                );
                            } else if (!separateIncomeAndExpense(getCurrentMonthTransactions(data, currentMonth.month, currentMonth.year)).incomeObjects || separateIncomeAndExpense(getCurrentMonthTransactions(data, currentMonth.month, currentMonth.year)).incomeObjects.length === 0) {
                                return (
                                    <div className="flex flex-col w-full justify-center items-center 2xl:mb-8">
                                        <NoResultRp className="w-[160px] 2xl:w-full 2xl:mt-8" />
                                        <div className="font-medium 2xl:text-[24px] text-[#696969] w-full flex justify-center items-center 2xl:mt-8">
                                            No results
                                        </div>
                                    </div>
                                );
                            } else {
                                if (!switched) {
                                    return (
                                        <div className="flex flex-col sm:flex-row justify-between items-center w-full min-h-[300px]">
                                            <PieChart transactions={separateIncomeAndExpense(getCurrentMonthTransactions(data, currentMonth.month, currentMonth.year)).incomeObjects} type={'incomes'} />
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div className="flex justify-evenly items-center w-full h-full min-h-[300px]">
                                            <BarChart expenses={calculateTotals(getCurrentMonthTransactions(data, currentMonth.month, currentMonth.year)).totalExpense} incomes={calculateTotals(getCurrentMonthTransactions(data, currentMonth.month, currentMonth.year)).totalIncome} />
                                        </div>
                                    );
                                }
                            }
                        })()
                    }
                </>
            );
        }

        if (currentTransaction === 'expenses') {
            return (
                <>
                    {
                        (() => {
                            if (isLoading) {
                                return (
                                    <div>
                                        <h2>Loading...</h2>
                                    </div>
                                );
                            } else if (!separateIncomeAndExpense(getCurrentMonthTransactions(data, currentMonth.month, currentMonth.year)).expenseObjects || separateIncomeAndExpense(getCurrentMonthTransactions(data, currentMonth.month, currentMonth.year)).expenseObjects.length === 0) {
                                return (
                                    <div className="flex flex-col w-full justify-center items-center 2xl:mb-8">
                                        <NoResultRp className="w-[160px] 2xl:w-full 2xl:mt-8" />
                                        <div className="font-medium 2xl:text-[24px] text-[#696969] w-full flex justify-center items-center 2xl:mt-8">
                                            No results
                                        </div>
                                    </div>
                                );
                            } else {
                                if (!switched) {
                                    return (
                                        <div className="flex flex-col sm:flex-row justify-between items-center w-full min-h-[300px]">
                                            <PieChart transactions={separateIncomeAndExpense(getCurrentMonthTransactions(data, currentMonth.month, currentMonth.year)).expenseObjects} type={'expenses'} />
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div className="flex justify-evenly items-center w-full h-full min-h-[300px]">
                                            <BarChart expenses={calculateTotals(getCurrentMonthTransactions(data, currentMonth.month, currentMonth.year)).totalExpense} incomes={calculateTotals(getCurrentMonthTransactions(data, currentMonth.month, currentMonth.year)).totalIncome} />
                                        </div>
                                    );
                                }
                            }
                        })()
                    }
                </>
            );
        }
    }

    return (
        <>
            <Title title={"Report"} />
            <button className="max-w-[180px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[340px] w-full min-w-[160px] h-[30px] sm:h-[40px] md:h-[50px] bg-[#381C46] bg-opacity-10 rounded-[30px] self-start relative" onClick={handleSwitch}>
                <div className={`w-[50%] h-full rounded-[30px] bg-[#BFA2E5] bg-opacity-80 ${switched ? " translate-x-[100%]" : "translate-x-0"} transition-transform ease-in-out duration-300`}></div>
                <FiPieChart className="absolute top-[50%] translate-y-[-50%] left-[20%] z-50 text-[20px] md:text-[30px] lg:text-[35px]" />
                <FiBarChart className="absolute top-[50%] translate-y-[-50%] right-[20%] z-50 text-[20px] md:text-[30px] lg:text-[35px]" />
            </button>
            {!switched && (
                <div className="self-start flex flex-col relative mt-[30px] ml-[20px]" onClick={() => setDropDown(!dropDown)}>
                    <button className="text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] flex items-center">
                        <div className="capitalize">{currentTransaction}</div>
                        <BiChevronDown className="text-[20px] md:text-[25px] lg:text-[30px]" />
                    </button>
                    {dropDown && (
                        <div className="absolute top-[120%] flex flex-col justify-start items-center text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] bg-white shadow-md rounded-[20px] py-2 z-50">
                            <button className="w-full mb-2 hover:bg-gray-100 px-4" onClick={() => handleDropDownClick('transactions')}>
                                Transactions
                            </button>
                            <button className="w-full mb-2 hover:bg-gray-100 px-4" onClick={() => handleDropDownClick('expenses')}>
                                Expenses
                            </button>
                            <button className="w-full hover:bg-gray-100 px-4" onClick={() => handleDropDownClick('incomes')}>
                                Incomes
                            </button>
                        </div>
                    )}
                </div>
            )}
            <div className="w-full h-full max-h-[1000px] bg-white rounded-[10px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[40px] mt-[30px] pb-[30px] px-[30px] overflow-auto relative">
                <MonthSelector
                    currentMonth={currentMonth}
                    setCurrentMonth={setCurrentMonth}
                />
                {renderData()}
            </div>
        </>
    );
};

export default Report;