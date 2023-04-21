import { useState } from "react";

import Title from "../../components/Title";
import BarChart from "./charts/BarChart";
import PieChart from "./charts/PieChart";
import MonthSelector from "./MonthSelector";

import { ReactComponent as NoResultRp } from "../../components/svgs/NoResultRp.svg";
import { FiBarChart, FiPieChart } from "react-icons/fi";

const Report = () => {
    const initialData = {
        "2023-02": {
            expenses: [
                {
                    name: "Health",
                    value: 50980,
                    percentage: "50.00%",
                    color: "#9CC741",
                    icon: 'earth',
                },
                {
                    name: "Clothing",
                    value: 20030,
                    percentage: "50.00%",
                    color: "#D942A6",
                    icon: 'car',
                },
                {
                    name: "Games",
                    value: 15080,
                    percentage: "50.00%",
                    color: "#F67730",
                    icon: 'cart',
                },
            ],
            incomes: 123456,
        },
        "2023-03": {
            expenses: [
                {
                    name: "Health",
                    value: 24030,
                    percentage: "50.00%",
                    color: "#9CC741",
                    icon: 'car'
                },
                {
                    name: "Clothing",
                    value: 24990,
                    percentage: "50.00%",
                    color: "#D942A6",
                    icon: 'cart',
                },
                {
                    name: "Games",
                    value: 60490,
                    percentage: "50.00%",
                    color: "#F67730",
                    icon: 'earth'
                },
            ],
            incomes: 78910,
        },
    };

    const currentDate = new Date();
    const [currentMonth, setCurrentMonth] = useState({
        month: currentDate.getMonth(),
        year: currentDate.getFullYear(),
    });

    const currentData = initialData[`${currentMonth.year}-${currentMonth.month.toString().padStart(2, "0")}`] || { expenses: [], incomes: 0 };

    function getTotalExpense(expenses) {
        return expenses.reduce((total, expense) => total + expense.value, 0);
    }

    const [switched, setSwitched] = useState(false);
    const handleSwitch = () => {
        setSwitched((prevState) => !prevState);
    };

    return (
        <>
            <Title title={"Report"} />
            <button className="w-[420px] h-[60px] bg-[#381C46] bg-opacity-10 rounded-[30px] self-start relative" onClick={handleSwitch}>
                <div className={`w-[210px] h-full rounded-[30px] bg-[#9F75D6] bg-opacity-80 ${switched ? " translate-x-[100%]" : "translate-x-0"} transition-transform ease-in-out duration-300`}></div>
                <FiPieChart className="absolute top-[50%] translate-y-[-50%] left-[20%] z-50" size={35} />
                <FiBarChart className="absolute top-[50%] translate-y-[-50%] right-[20%] z-50" size={35} />
            </button>
            <div className="w-full h-full min-h-[550px] max-h-[1000px] bg-white rounded-[40px] mt-[40px] border-[1px] border-[#AEAEAE] pt-[35px] px-[60px] overflow-auto">
                <MonthSelector
                    currentMonth={currentMonth}
                    setCurrentMonth={setCurrentMonth}
                />
                <div className={`${currentData.expenses && currentData.expenses.length > 0 ? 'hidden' : 'flex'} flex-col justify-center items-center`}>
                    <NoResultRp />
                    <div className="font-medium text-[24px] text-[#696969] w-full flex justify-center items-center mt-6">
                        No results
                    </div>
                </div>
                <div className={`${switched ? 'hidden' : 'flex'} ${currentData.expenses && currentData.expenses.length > 0 ? 'flex' : 'hidden'} justify-between items-center w-full min-h-[300px]`}>
                    <PieChart expenses={currentData.expenses} />
                </div>
                <div className={`${switched ? 'flex' : 'hidden'} ${currentData.expenses && currentData.expenses.length > 0 ? 'flex' : 'hidden'} justify-evenly items-center w-full h-full min-h-[300px]`}>
                    <BarChart expenses={getTotalExpense(currentData.expenses)} incomes={currentData.incomes} />
                </div>
            </div>
        </>
    );
};

export default Report;

