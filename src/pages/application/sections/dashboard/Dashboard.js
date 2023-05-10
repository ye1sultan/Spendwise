import Bie from "./Bie";
import BieCharts from "./BieCharts";
import Title from "../../components/Title";
import { useEffect, useState } from "react";
import { getAllGoals, getAllTransactions, getMontlyBalance } from "../../../../services/api";

const Dashboard = () => {
    const [transactions, setTransactions] = useState([]);
    const [monthlyBalance, setMonthlyBalance] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const data = await getAllTransactions();
                setTransactions(getCurrentMonthTransactions(data));

                const monthly_balance = await getMontlyBalance();
                setMonthlyBalance(monthly_balance[monthly_balance.length - 1]);
                setIsLoading(false);
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

    const [isTLoading, setIsTLoading] = useState(true);

    const [goal, setGoal] = useState([]);
    const [isGLoading, setIsGLoading] = useState(true);

    const [separatedTransactions, setSeparatedTransactions] = useState({ incomeObjects: [], expenseObjects: [] });
    const [totals, setTotals] = useState({ totalIncome: 0, totalExpense: 0 });

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const data = await getAllTransactions();
                const currentMonthTransactions = getCurrentMonthTransactions(data);
                setIsTLoading(false);

                const goalData = await getAllGoals();
                setGoal(goalData[goalData.length - 1]);
                setIsGLoading(false);

                const separated = separateIncomeAndExpense(currentMonthTransactions);
                setSeparatedTransactions(separated);

                const calculatedTotals = calculateTotals(currentMonthTransactions);
                setTotals(calculatedTotals);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchTransactions();
    }, []);

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

    return (
        <>
            <Title title={'Dashboard'} />
            <div className="flex justify-between items-center flex-wrap w-full mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-[50px]">
                <Bie title="Current balance" svg="current" transactions={transactions} isLoading={isLoading} />
                <Bie title="Incomes" svg="incomes" transactions={transactions} isLoading={isLoading} />
                <Bie title="Expenses" svg="expenses" transactions={transactions} isLoading={isLoading} />
                <Bie title="Monthly balance" svg="monthly" transactions={transactions} isLoading={isLoading} monthlyBalance={monthlyBalance} />
            </div>
            {/* <div className="flex flex-wrap justify-between pt-[45px] w-full">
                <BieCharts title="Expenses by category" isLoading={isTLoading} isGLoading={isGLoading} goal={goal} separatedTransactions={separatedTransactions} totals={totals} />
                <BieCharts title="Incomes by category" isLoading={isTLoading} isGLoading={isGLoading} goal={goal} separatedTransactions={separatedTransactions} totals={totals} />
                <BieCharts title="Monthly balance" isLoading={isTLoading} isGLoading={isGLoading} goal={goal} separatedTransactions={separatedTransactions} totals={totals} />
                <BieCharts title="Goals" isLoading={isTLoading} isGLoading={isGLoading} goal={goal} separatedTransactions={separatedTransactions} totals={totals} />
            </div> */}
        </>
    );
}

export default Dashboard;