import Bie from "./Bie";
import BieCharts from "./BieCharts";
import Title from "../../components/Title";
import { useEffect, useState } from "react";
import { getAllGoals, getAllTransactions, getMontlyBalance } from "../../../../services/api";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
    const [transactions, setTransactions] = useState([]);
    const [monthlyBalance, setMonthlyBalance] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

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

        return () => {
            controller.abort();
        };
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
        const controller = new AbortController();

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

        return () => {
            controller.abort();
        };
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

    const { t, i18n } = useTranslation();

    return (
        <>
            <Title title={t("sidebar.dashboard")} />
            <div className="flex justify-between items-center flex-wrap w-full gap-x-12 gap-y-6 lg:mb-[40px] mb-[20px]">
                <Bie title={t("dashboard.bie.currentBalance")} svg="current" transactions={transactions} isLoading={isLoading} />
                <Bie title={t("dashboard.bie.incomes")} svg="incomes" transactions={transactions} isLoading={isLoading} />
                <Bie title={t("dashboard.bie.expenses")} svg="expenses" transactions={transactions} isLoading={isLoading} />
                <Bie title={t("dashboard.bie.monthlyBalance")} svg="monthly" transactions={transactions} isLoading={isLoading} monthlyBalance={monthlyBalance} />
            </div>
            <div className="flex justify-between items-start flex-wrap w-full gap-x-6 gap-y-12">
                <BieCharts title={t("dashboard.bieChart.expenses")} isLoading={isTLoading} isGLoading={isGLoading} goal={goal} separatedTransactions={separatedTransactions} totals={totals} />
                <BieCharts title={t("dashboard.bieChart.incomes")} isLoading={isTLoading} isGLoading={isGLoading} goal={goal} separatedTransactions={separatedTransactions} totals={totals} />
                <BieCharts title={t("dashboard.bieChart.monthlyBalance")} isLoading={isTLoading} isGLoading={isGLoading} goal={goal} separatedTransactions={separatedTransactions} totals={totals} />
                <BieCharts title={t("dashboard.bieChart.goals")} isLoading={isTLoading} isGLoading={isGLoading} goal={goal} separatedTransactions={separatedTransactions} totals={totals} />
            </div>
        </>
    );
}

export default Dashboard;