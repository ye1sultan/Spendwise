import { useState } from "react";

import Bie from "../../components/Bie";
import BieCharts from "./BieCharts";
import Title from "../../components/Title";

const Dashboard = () => {
    const initialBalance = {
        monthlyBalance: '210020',
        incomes: '165000',
        expenses: '110030'
    }

    const [goals, setGoals] = useState([
        {
            name: "Initial Goal",
            deadline: "2023-12-31",
            amount: 400,
            totalAmount: 1000,
            color: "#BFA2E5",
            icon: "car"
        }
    ]);

    return (
        <>
            <Title title={'Dashboard'} />
            <div className="flex justify-between items-center flex-wrap w-full">
                <Bie title="Current balance" amount={initialBalance.incomes - initialBalance.expenses} svg="current" />
                <Bie title="Incomes" amount={initialBalance.incomes} svg="incomes" />
                <Bie title="Expenses" amount={initialBalance.expenses} svg="expenses" />
                <Bie title="Monthly balance" amount={initialBalance.monthlyBalance} svg="monthly" />
            </div>
            <div className="flex flex-wrap justify-between pt-[45px] w-full">
                <BieCharts title="Expenses by category" content="" />
                <BieCharts title="Incomes by category" content="" />
                <BieCharts title="Monthly balance" content="" />
                <BieCharts title="Goals" content="" />
            </div>
        </>
    );
}

export default Dashboard;