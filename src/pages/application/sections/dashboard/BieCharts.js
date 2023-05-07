import PieChart from "./PieChart.js";
import BarChart from "./BarChart.js";
import NoContent from "./NoContent.js";
import Goal from "./Goal.js";
import { Link } from "react-router-dom";

const BieCharts = ({ title, isLoading, isGLoading, goal, separatedTransactions, totals }) => {
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
                            } else if (!separatedTransactions.expenseObjects || separatedTransactions.expenseObjects.length === 0) {
                                return <NoContent is={'expense'} />;
                            } else {
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
                            } else if (!separatedTransactions.incomeObjects || separatedTransactions.incomeObjects.length === 0) {
                                return <NoContent is={'income'} />;
                            } else {
                                return (
                                    <div className="w-full flex flex-col justify-center items-center">
                                        <PieChart transactions={separatedTransactions.incomeObjects} />
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
                            } else if (totals.totalExpense === 0 && totals.totalExpense === 0) {
                                return <NoContent is={'month'} />;
                            } else {
                                return (
                                    <div className="w-full flex flex-col justify-center items-center">
                                        <BarChart
                                            expense={totals.totalExpense}
                                            income={totals.totalIncome} />
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