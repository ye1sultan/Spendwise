import PieChart from "./PieChart.js";
import BarChart from "./BarChart.js";
import NoContent from "./NoContent.js";
import Goal from "./Goal.js";
import { Link } from "react-router-dom";

const BieCharts = ({ title, initialGoal, data }) => {
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

    const totals = calculateTotals(data);

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

    const separatedTransactions = separateIncomeAndExpense(data);

    return (
        <div className="flex flex-col 2xl:mb-[60px]">
            <div className="text-[16px] 2xl:text-[32px] text-[#696969] font-medium">
                {title}
            </div>
            <div
                className={`flex flex-col justify-between items-center w-[285px] 2xl:w-[723px] ${data ? (title === 'Goals' ? '2xl:h-[320px]' : '2xl:h-full') : 'h-[328px]'} rounded-[15px] 2xl:rounded-[30px] border-[#AEAEAE] border-[1px] bg-white 
                ${data ? (title === 'Goals' ? '' : '2xl:pt-[20px]') : '2xl:pt-[25px] 2xl:px-[20px]'}`}>
                {
                    (() => {
                        if (title === 'Expenses by category') {
                            if (data) {
                                return (
                                    <div className="w-full flex flex-col justify-center items-center">
                                        <PieChart transactions={separatedTransactions.expenseObjects} />
                                        <Link
                                            to='/application/transactions'
                                            className="text-center 2xl:text-[24px] text-[#590CC0] uppercase mt-[25px] p-[10px] 2xl:py-[20px] w-full border-t-[1px] border-t-black">
                                            See more
                                        </Link>
                                    </div>
                                );
                            } else {
                                return <NoContent is={'expense'} />;
                            }
                        }
                        if (title === 'Incomes by category') {
                            if (data) {
                                return (
                                    <div className="w-full flex flex-col justify-center items-center">
                                        <PieChart transactions={separatedTransactions.incomeObjects} />
                                        <Link
                                            to='/application/transactions'
                                            className="text-center 2xl:text-[24px] text-[#590CC0] uppercase mt-[25px] py-[10px] 2xl:py-[20px] w-full border-t-[1px] border-t-black">
                                            See more
                                        </Link>
                                    </div>
                                );
                            } else {
                                return <NoContent is={'income'} />;
                            }
                        }
                        if (title === 'Monthly balance') {
                            if (data) {
                                return (
                                    <div className="w-full flex flex-col justify-center items-center">
                                        <BarChart expense={totals.totalExpense} income={totals.totalIncome} />
                                        <Link
                                            to='/application/transactions'
                                            className="text-center 2xl:text-[24px] text-[#590CC0] uppercase mt-[25px] py-[10px] 2xl:py-[20px] w-full border-t-[1px] border-t-black">
                                            See more
                                        </Link>
                                    </div>
                                );
                            } else {
                                return <NoContent is={'month'} />;
                            }
                        }
                        if (title === 'Goals') {
                            if (initialGoal) {
                                return (
                                    <Goal name={initialGoal.name} icon={initialGoal.icon} deadline={initialGoal.deadline} totalAmount={initialGoal.totalAmount} amount={initialGoal.amount} color={initialGoal.color} />
                                );
                            } else {
                                return <NoContent is={'goal'} />;
                            }
                        }
                    })()
                }
            </div>
        </div>
    );
}

export default BieCharts;