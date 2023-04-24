import PieChart from "./PieChart.js";
import BarChart from "./BarChart.js";
import NoContent from "./NoContent.js";
import Goal from "./Goal.js";
import { Link } from "react-router-dom";

const BieCharts = ({ content, title, initialData }) => {
    const calculateTotalExpensesAndIncomes = (data) => {
        let totalExpenses = 0;
        let totalIncomes = 0;

        for (const month in data) {
            const { expenses, incomes } = data[month];

            totalExpenses += expenses.reduce((sum, expense) => sum + expense.value, 0);
            totalIncomes += incomes.reduce((sum, income) => sum + income.value, 0);
        }

        return { totalExpenses, totalIncomes };
    };

    const { totalExpenses, totalIncomes } = calculateTotalExpensesAndIncomes(initialData);

    const initialGoal = {
        name: "Initial Goal",
        deadline: "2023-12-31",
        amount: 100,
        totalAmount: 1000,
        color: "#BFA2E5",
        icon: "car",
    }

    return (
        <div className="flex flex-col mb-[60px]">
            <div className="text-[32px] text-[#696969] font-medium">
                {title}
            </div>
            <div
                className={`flex flex-col justify-between items-center w-[723px] ${content ? (title === 'Goals' ? 'h-[320px]' : 'h-full') : 'h-[328px]'} rounded-[30px] border-[#AEAEAE] border-[1px] bg-white 
                ${content ? (title === 'Goals' ? '' : 'pt-[20px]') : 'pt-[25px] px-[20px]'}`}>
                {
                    (() => {
                        if (title === 'Expenses by category') {
                            if (content) {
                                return (
                                    <div className="w-full flex flex-col justify-center items-center">
                                        <PieChart transactions={initialData['2023-02'].expenses} />
                                        <Link
                                            to='/application/transactions'
                                            className="text-center text-[24px] text-[#590CC0] uppercase mt-[25px] py-[20px] w-full border-t-[1px] border-t-black">
                                            See more
                                        </Link>
                                    </div>
                                );
                            } else {
                                return <NoContent is={'expense'} />;
                            }
                        }
                        if (title === 'Incomes by category') {
                            if (content) {
                                return (
                                    <div className="w-full flex flex-col justify-center items-center">
                                        <PieChart transactions={initialData['2023-02'].incomes} />
                                        <Link
                                            to='/application/transactions'
                                            className="text-center text-[24px] text-[#590CC0] uppercase mt-[25px] py-[20px] w-full border-t-[1px] border-t-black">
                                            See more
                                        </Link>
                                    </div>
                                );
                            } else {
                                return <NoContent is={'income'} />;
                            }
                        }
                        if (title === 'Monthly balance') {
                            if (content) {
                                return (
                                    <div className="w-full flex flex-col justify-center items-center">
                                        <BarChart expense={totalExpenses} income={totalIncomes} />
                                        <Link
                                            to='/application/transactions'
                                            className="text-center text-[24px] text-[#590CC0] uppercase mt-[25px] py-[20px] w-full border-t-[1px] border-t-black">
                                            See more
                                        </Link>
                                    </div>
                                );
                            } else {
                                return <NoContent is={'month'} />;
                            }
                        }
                        if (title === 'Goals') {
                            if (content) {
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