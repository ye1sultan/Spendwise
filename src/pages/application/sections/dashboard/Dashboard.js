import Bie from "./Bie";
import BieCharts from "./BieCharts";
import Title from "../../components/Title";

const Dashboard = ({ transactions }) => {
    const initialGoal = {
        name: "Lambo",
        deadline: "2023-12-31",
        amount: 2250000,
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

    const totals = calculateTotals(transactions);

    return (
        <>
            <Title title={'Dashboard'} />
            <div className="flex justify-between items-center flex-wrap w-full">
                <Bie title="Current balance" amount={totals.totalIncome + totals.totalExpense} svg="current" />
                <Bie title="Incomes" amount={totals.totalIncome} svg="incomes" />
                <Bie title="Expenses" amount={totals.totalExpense} svg="expenses" />
                <Bie title="Monthly balance" amount={totals.totalIncome} svg="monthly" />
            </div>
            <div className="flex flex-wrap justify-between pt-[45px] w-full">
                <BieCharts title="Expenses by category" data={transactions} />
                <BieCharts title="Incomes by category" data={transactions} />
                <BieCharts title="Monthly balance" data={transactions} />
                <BieCharts title="Goals" data={transactions} initialGoal={initialGoal} />
            </div>
        </>
    );
}

export default Dashboard;