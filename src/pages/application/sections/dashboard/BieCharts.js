import PieChart from "./PieChart.js";
import BarChart from "./BarChart.js";
import NoContent from "./NoContent.js";
import Goal from "./Goal.js";
import { Link } from "react-router-dom";

const BieCharts = ({ title, isLoading, isGLoading, goal, separatedTransactions, totals }) => {
    const getBieChart = () => {
        if (title === 'Expenses by category') {
            return (
                <div className="flex flex-col justify-between items-center w-[723px] rounded-[30px] border-[#AEAEAE] border-[1px] bg-white">
                    {
                        (() => {
                            if (isLoading) {
                                return (
                                    <div>
                                        <h2>Loading...</h2>
                                    </div>
                                );
                            } else if (!separatedTransactions.expenseObjects || separatedTransactions.expenseObjects.length === 0) {
                                return <NoContent is={'expense'} />;
                            } else {
                                return (
                                    <div className="w-full flex flex-col justify-center items-center">
                                        <PieChart transactions={separatedTransactions.expenseObjects} />
                                        <Link
                                            to='/application/transactions'
                                            className="text-center text-[24px] text-[#590CC0] uppercase mt-[25px] py-[20px] w-full border-t-[1px] border-t-[#AEAEAE]">
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
                <div className="flex flex-col justify-between items-center w-[723px] rounded-[30px] border-[#AEAEAE] border-[1px] bg-white">
                    {
                        (() => {
                            if (isLoading) {
                                return (
                                    <div>
                                        <h2>Loading...</h2>
                                    </div>
                                );
                            } else if (!separatedTransactions.incomeObjects || separatedTransactions.incomeObjects.length === 0) {
                                return <NoContent is={'income'} />;
                            } else {
                                return (
                                    <div className="w-full flex flex-col justify-center items-center">
                                        <PieChart transactions={separatedTransactions.incomeObjects} />
                                        <Link
                                            to='/application/transactions'
                                            className="text-center text-[24px] text-[#590CC0] uppercase mt-[25px] py-[20px] w-full border-t-[1px] border-t-[#AEAEAE]">
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
                <div className="flex flex-col justify-between items-center w-[723px] rounded-[30px] border-[#AEAEAE] border-[1px] bg-white">
                    {
                        (() => {
                            if (isLoading) {
                                return (
                                    <div>
                                        <h2>Loading...</h2>
                                    </div>
                                );
                            } else if (totals.totalExpense === 0 && totals.totalExpense === 0) {
                                return <NoContent is={'month'} />;
                            } else {
                                return (
                                    <div className="w-full h-full flex flex-col justify-center items-center">
                                        <BarChart
                                            expense={totals.totalExpense}
                                            income={totals.totalIncome} />
                                        <Link
                                            to='/application/transactions'
                                            className="text-center text-[24px] text-[#590CC0] uppercase mt-[25px] py-[20px] w-full border-t-[1px] border-t-[#AEAEAE]">
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
                <div className="flex flex-col justify-center items-center min-h-[270px] w-[723px] rounded-[30px] border-[#AEAEAE] border-[1px] bg-white mb-8">
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
        <div className="flex flex-col mb-[60px]">
            <div className="text-[32px] text-[#6A6A6A] font-medium">
                {title}
            </div>
            {getBieChart()}
        </div>
    );
}

export default BieCharts;