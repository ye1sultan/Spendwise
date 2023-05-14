import PieChart from "./PieChart.js";
import BarChart from "./BarChart.js";
import NoContent from "./NoContent.js";
import Goal from "./Goal.js";
import { Link } from "react-router-dom";

const BieCharts = ({ title, isLoading, isGLoading, goal, separatedTransactions, totals }) => {
    const getBieChart = () => {
        if (title === 'Expenses by category') {
            return (
                <div className="flex flex-col justify-between items-center w-full rounded-[10px] sm:rounded-[15px] md:rounded-[20px] lg:rounded-[30px] border-[#AEAEAE] border-[1px] bg-white">
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
                                            className="flex justify-center items-center lg:text-2xl md:text-xl sm:text-lg text-base text-purple-700 uppercase w-full lg:h-16 md:h-14 sm:h-12 h-10 border-t border-[#AEAEAE] mt-[20px]">
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
                <div className="flex flex-col justify-between items-center w-full rounded-[10px] sm:rounded-[15px] md:rounded-[20px] lg:rounded-[30px] border-[#AEAEAE] border-[1px] bg-white">
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
                                            className="flex justify-center items-center lg:text-2xl md:text-xl sm:text-lg text-base text-purple-700 uppercase w-full lg:h-16 md:h-14 sm:h-12 h-10 border-t border-[#AEAEAE] mt-[20px]">
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
                <div className="flex flex-col justify-between items-center w-full rounded-[10px] sm:rounded-[15px] md:rounded-[20px] lg:rounded-[30px] border-[#AEAEAE] border-[1px] bg-white">
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
                                            className="flex justify-center items-center lg:text-2xl md:text-xl sm:text-lg text-base text-purple-700 uppercase w-full lg:h-16 md:h-14 sm:h-12 h-10 border-t border-[#AEAEAE] mt-[20px]">
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
                <div className="flex flex-col justify-center items-center h-[170px] md:h-[220px] lg:h-[270px] w-full rounded-[10px] sm:rounded-[15px] md:rounded-[20px] lg:rounded-[30px] border-[#AEAEAE] border-[1px] bg-white mb-8">
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
        <div className="flex flex-col flex-grow flex-shrink flex-basis-[700px] max-w-[700px] w-full">
            <div className="text-base md:text-lg lg:text-xl xl:text-[28px] 2xl:text-[32px] mb-2 text-[#6A6A6A] font-medium">
                {title}
            </div>
            {getBieChart()}
        </div>
    );
}

export default BieCharts;