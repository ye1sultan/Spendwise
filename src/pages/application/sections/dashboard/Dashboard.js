import Bie from "./Bie";
import BieCharts from "./BieCharts";
import Title from "../../components/Title";
import { useEffect } from "react";
import { getAllTransactions } from "../../../../services/api";
import { useState } from "react";

const Dashboard = () => {
    const initialGoal = {
        name: "Lambo",
        deadline: "2023-12-31",
        amount: 22500000,
        totalAmount: 240000000,
        color: "#BFA2E5",
        icon: "car",
    }

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

    // const totals = calculateTotals(currentMonthTransactions);

    return (
        <>
            <Title title={'Dashboard'} />
            <div className="flex justify-between items-center flex-wrap w-full">
                <Bie title="Current balance" amount={0} svg="current" />
                <Bie title="Incomes" amount={0} svg="incomes" />
                <Bie title="Expenses" amount={0} svg="expenses" />
                <Bie title="Monthly balance" amount={0} svg="monthly" />
            </div>
            <div className="flex flex-wrap justify-between pt-[45px] w-full">
                <BieCharts title="Expenses by category" />
                <BieCharts title="Incomes by category" />
                <BieCharts title="Monthly balance" />
                <BieCharts title="Goals" initialGoal={initialGoal} />
            </div>
        </>
    );
}

export default Dashboard;