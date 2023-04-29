import { useState } from "react";

import Title from "../../components/Title";
import BarChart from "./charts/BarChart";
import PieChart from "./charts/PieChart";
import MonthSelector from "./MonthSelector";

import { ReactComponent as NoResultRp } from "./NoResultRp.svg";
import { FiBarChart, FiPieChart } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";

const Report = ({ data }) => {
    const [currentTransaction, setCurrentTransaction] = useState('incomes');

    const calculateTotals = (transactions) => {
        let totalIncome = 0;
        let totalExpense = 0;

        transactions.forEach((transaction) => {
            if (transaction.type === 'income') {
                totalIncome += parseInt(transaction.amount);
            } else if (transaction.type === 'expense') {
                totalExpense += parseInt(transaction.amount);
            }
        });

        return {
            totalIncome,
            totalExpense,
        };
    };

    const separateIncomeAndExpense = (transactions) => {
        let incomeObjects = [];
        let expenseObjects = [];

        transactions.forEach((transaction) => {
            if (transaction.type === 'income') {
                incomeObjects.push(transaction);
            } else if (transaction.type === 'expense') {
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

    const currentMonthTransactions = getCurrentMonthTransactions(
        data,
        currentMonth.month,
        currentMonth.year
    );

    const totals = calculateTotals(currentMonthTransactions);

    const separatedTransactions = separateIncomeAndExpense(currentMonthTransactions);

    const transactions = currentTransaction === 'expenses' ? separatedTransactions.expenseObjects : separatedTransactions.incomeObjects;

    const [switched, setSwitched] = useState(false);

    const handleSwitch = () => {
        setSwitched((prevState) => !prevState);
    };

    const [dropDown, setDropDown] = useState(false);

    const handleExpensesClick = () => {
        setCurrentTransaction('expenses');
        setDropDown(false);
    }

    const handleIncomesClick = () => {
        setCurrentTransaction('incomes');
        setDropDown(false);
    }

    return (
        <>
            <Title title={"Report"} />
            <button className="w-[420px] h-[60px] bg-[#381C46] bg-opacity-10 rounded-[30px] self-start relative" onClick={handleSwitch}>
                <div className={`w-[210px] h-full rounded-[30px] bg-[#9F75D6] bg-opacity-80 ${switched ? " translate-x-[100%]" : "translate-x-0"} transition-transform ease-in-out duration-300`}></div>
                <FiPieChart className="absolute top-[50%] translate-y-[-50%] left-[20%] z-50" size={35} />
                <FiBarChart className="absolute top-[50%] translate-y-[-50%] right-[20%] z-50" size={35} />
            </button>
            <div className="w-full h-full min-h-[550px] max-h-[1000px] bg-white rounded-[40px] mt-[40px] border-[1px] border-[#AEAEAE] pt-[35px] px-[60px] overflow-auto relative">
                <div
                    className={`absolute ${switched ? 'hidden' : 'flex flex-col'}`}
                    onMouseEnter={() => setDropDown(true)}
                    onMouseLeave={() => setDropDown(false)}>
                    <button className="text-[24px] flex items-center">
                        <div className="border-b-[1px] border-black capitalize">{currentTransaction}</div>
                        <BiChevronDown size={30} />
                    </button>
                    <div className={`translate-x-[-30px] ${dropDown ? 'flex' : 'hidden'} flex-col text-[24px] bg-white shadow rounded-[20px] px-8 py-2`}>
                        <button className="mb-2" onClick={handleExpensesClick}>
                            Expenses
                        </button>
                        <button className="" onClick={handleIncomesClick}>
                            Incomes
                        </button>
                    </div>
                </div>
                <MonthSelector
                    currentMonth={currentMonth}
                    setCurrentMonth={setCurrentMonth}
                />
                <div className={`${transactions && transactions.length > 0 ? 'hidden' : 'flex'} flex-col justify-center items-center`}>
                    <NoResultRp />
                    <div className="font-medium text-[24px] text-[#696969] w-full flex justify-center items-center mt-6">
                        No results
                    </div>
                </div>
                <div className={`${switched ? 'hidden' : 'flex'} ${transactions && transactions.length > 0 ? 'flex' : 'hidden'} justify-between items-center w-full min-h-[300px]`}>
                    <PieChart transactions={transactions} type={currentTransaction} />
                </div>
                <div className={`${switched ? 'flex' : 'hidden'} ${getCurrentMonthTransactions(
                    data,
                    currentMonth.month,
                    currentMonth.year
                ) && getCurrentMonthTransactions(
                    data,
                    currentMonth.month,
                    currentMonth.year
                ).length > 0 ? 'flex' : 'hidden'} justify-evenly items-center w-full h-full min-h-[300px]`}>
                    <BarChart expenses={totals.totalExpense} incomes={totals.totalIncome} />
                </div>
            </div>
        </>
    );
};

export default Report;

