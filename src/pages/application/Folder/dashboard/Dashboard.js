import Bie from "./Bie";
import BieCharts from "./BieCharts";
import Title from "../../components/Title";

const Dashboard = () => {
    const initialData = {
        "2023-02": {
            expenses: [
                {
                    category: "Restaurant",
                    value: 5950
                },
                {
                    category: "Supermarket",
                    value: 23400
                }
            ],
            incomes: [
                {
                    category: "Investment",
                    value: 90980,
                },
                {
                    category: "Salary",
                    value: 250030,
                },
                {
                    category: "Gift",
                    value: 25000,
                }
            ],
            monthlyBalance: 210450
        },
    };

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

    return (
        <>
            <Title title={'Dashboard'} />
            <div className="flex justify-between items-center flex-wrap w-full">
                <Bie title="Current balance" amount={totalIncomes - totalExpenses} svg="current" />
                <Bie title="Incomes" amount={totalIncomes} svg="incomes" />
                <Bie title="Expenses" amount={totalExpenses} svg="expenses" />
                <Bie title="Monthly balance" amount={initialData['2023-02'].monthlyBalance} svg="monthly" />
            </div>
            <div className="flex flex-wrap justify-between pt-[45px] w-full">
                <BieCharts title="Expenses by category" content="yes" initialData={initialData} />
                <BieCharts title="Incomes by category" content="yes" initialData={initialData} />
                <BieCharts title="Monthly balance" content="yes" initialData={initialData} />
                <BieCharts title="Goals" content="yes" initialData={initialData} />
            </div>
        </>
    );
}

export default Dashboard;