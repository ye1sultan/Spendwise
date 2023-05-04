import PieChart from "./PieChart.js";
import BarChart from "./BarChart.js";
import NoContent from "./NoContent.js";
import Goal from "./Goal.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getAllGoals, getAllTransactions } from "../../../../services/api.js";

const BieCharts = ({ title }) => {
    const [transactions, setTransactions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [goal, setGoal] = useState([]);
    const [isGLoading, setIsGLoading] = useState(true);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const data = await getAllTransactions();
                setTransactions(getCurrentMonthTransactions(data));
                setIsLoading(false);

                const goalData = await getAllGoals();
                setGoal(goalData[goalData.length - 1]);
                setIsGLoading(false);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchTransactions();
    }, []);

    const getCurrentMonthTransactions = (transactions) => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();

        return transactions.filter((transaction) => {
            const transactionDate = new Date(transaction.date);
            return (
                transactionDate.getMonth() === currentMonth &&
                transactionDate.getFullYear() === currentYear
            );
        });
    };

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

    const getBieChart = () => {
        if (title === 'Expenses by category') {
            return (
                <div className="flex flex-col justify-between items-center w-[285px] 2xl:w-[723px] rounded-[15px] 2xl:rounded-[30px] border-[#AEAEAE] border-[1px] bg-white mb-8 2xl:mb-0">
                    {
                        (() => {
                            if (isLoading) {
                                return (
                                    <div>
                                        <h2>Loading...</h2>
                                    </div>
                                );
                            } else if (!separateIncomeAndExpense(transactions).expenseObjects || separateIncomeAndExpense(transactions).expenseObjects.length === 0) {
                                return <NoContent is={'expense'} />;
                            } else {
                                return (
                                    <div className="w-full flex flex-col justify-center items-center">
                                        <PieChart transactions={separateIncomeAndExpense(transactions).expenseObjects} />
                                        <Link
                                            to='/application/transactions'
                                            className="text-center 2xl:text-[24px] text-[#590CC0] uppercase mt-[25px] p-[10px] 2xl:py-[20px] w-full border-t-[1px] border-t-black">
                                            See more
                                        </Link>
                                    </div>
                                );
                            }
                        })()
                    }
                </div>
            );
        }

        if (title === 'Incomes by category') {
            return (
                <div className="flex flex-col justify-between items-center w-[285px] 2xl:w-[723px] rounded-[15px] 2xl:rounded-[30px] border-[#AEAEAE] border-[1px] bg-white mb-8 2xl:mb-0">
                    {
                        (() => {
                            if (isLoading) {
                                return (
                                    <div>
                                        <h2>Loading...</h2>
                                    </div>
                                );
                            } else if (!separateIncomeAndExpense(transactions).incomeObjects || separateIncomeAndExpense(transactions).incomeObjects.length === 0) {
                                return <NoContent is={'income'} />;
                            } else {
                                return (
                                    <div className="w-full flex flex-col justify-center items-center">
                                        <PieChart transactions={separateIncomeAndExpense(transactions).incomeObjects} />
                                        <Link
                                            to='/application/transactions'
                                            className="text-center 2xl:text-[24px] text-[#590CC0] uppercase mt-[25px] p-[10px] 2xl:py-[20px] w-full border-t-[1px] border-t-black">
                                            See more
                                        </Link>
                                    </div>
                                );
                            }
                        })()
                    }
                </div>
            );
        }
        if (title === 'Monthly balance') {
            return (
                <div className="flex flex-col justify-between items-center w-[285px] 2xl:w-[723px] rounded-[15px] 2xl:rounded-[30px] border-[#AEAEAE] border-[1px] bg-white mb-8 2xl:mb-0">
                    {
                        (() => {
                            if (isLoading) {
                                return (
                                    <div>
                                        <h2>Loading...</h2>
                                    </div>
                                );
                            } else if (calculateTotals(transactions).totalExpense === 0 && calculateTotals(transactions).totalExpense === 0) {
                                return <NoContent is={'month'} />;
                            } else {
                                return (
                                    <div className="w-full flex flex-col justify-center items-center">
                                        <BarChart
                                            expense={calculateTotals(transactions).totalExpense}
                                            income={calculateTotals(transactions).totalIncome} />
                                        <Link
                                            to='/application/transactions'
                                            className="text-center 2xl:text-[24px] text-[#590CC0] uppercase mt-[25px] py-[10px] 2xl:py-[20px] w-full border-t-[1px] border-t-black">
                                            See more
                                        </Link>
                                    </div>
                                );
                            }
                        })()
                    }
                </div>
            );
        }

        if (title === 'Goals') {
            return (
                <div className="flex flex-col justify-center items-center min-h-[270px] w-[285px] 2xl:w-[723px] rounded-[15px] 2xl:rounded-[30px] border-[#AEAEAE] border-[1px] bg-white mb-8">
                    {
                        (() => {
                            if (isGLoading) {
                                return (
                                    <div>
                                        <h2>Loading...</h2>
                                    </div>
                                );
                            } else if (!goal) {
                                return <NoContent is={'goal'} />;
                            } else {
                                return (
                                    <Goal name={goal.name} icon={goal.icon} deadline={goal.deadline} totalAmount={goal.target_amount} amount={goal.initial_target_amount} color={goal.color} />
                                );
                            }
                        })()
                    }
                </div>
            );
        }
    }

    return (
        <div className="flex flex-col 2xl:mb-[60px]">
            <div className="text-[16px] 2xl:text-[32px] text-[#696969] font-medium">
                {title}
            </div>
            {getBieChart()}
        </div>
    );
}

export default BieCharts;