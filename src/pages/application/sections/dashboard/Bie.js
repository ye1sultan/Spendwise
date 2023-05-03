import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineClockCircle } from "react-icons/ai";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { getAllTransactions } from "../../../../services/api";
import { useEffect } from "react";

const Bie = ({ title, svg }) => {
    const [transactions, setTransactions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const data = await getAllTransactions();
                setTransactions(getCurrentMonthTransactions(data));
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

    const formatNumber = (num) => {
        if (num === undefined) {
            return "0";
        }
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    const getBie = () => {
        if (svg === 'current') {
            if (isLoading) {
                return <div><h2>Loading...</h2></div>;
            } else {
                return (
                    <>
                        <div className="text-[14px] 2xl:text-[24px] font-medium">
                            {title}
                        </div>
                        <div className="absolute right-2 2xl:right-4 top-[70%] 2xl:top-[50%] translate-y-[-50%]" >
                            <div className="rounded-full bg-[#85B0E2] w-[25px] 2xl:w-[55px] h-[25px] 2xl:h-[55px] flex justify-center items-center">
                                <div className="block 2xl:hidden">
                                    <AiOutlineClockCircle size={20} color="#ffffff" />
                                </div>
                                <div className="hidden 2xl:block">
                                    <AiOutlineClockCircle size={40} color="#ffffff" />
                                </div>
                            </div>
                        </div>
                        <div className="text-[16px] 2xl:text-[24px] font-medium">
                            {formatNumber(calculateTotals(transactions).totalExpense + calculateTotals(transactions).totalIncome) + " ₸"}
                        </div>
                    </>
                );
            }
        }

        if (svg === 'expenses') {
            if (isLoading) {
                return <div><h2>Loading...</h2></div>;
            } else {
                return (
                    <>
                        <div className="text-[14px] 2xl:text-[24px] font-medium">
                            {title}
                        </div>
                        <div className="absolute right-2 2xl:right-4 top-[70%] 2xl:top-[50%] translate-y-[-50%]" >
                            <div className="rounded-full bg-[#C51F1F] w-[25px] 2xl:w-[55px] h-[25px] 2xl:h-[55px] flex justify-center items-center">
                                <div className="block 2xl:hidden">
                                    <AiOutlineArrowDown size={20} color="#ffffff" />
                                </div>
                                <div className="hidden 2xl:block">
                                    <AiOutlineArrowDown size={40} color="#ffffff" />
                                </div>
                            </div>
                        </div>
                        <div className="text-[16px] 2xl:text-[24px] font-medium">
                            {formatNumber(calculateTotals(transactions).totalExpense) + " ₸"}
                        </div>
                    </>
                );
            }
        }

        if (svg === 'incomes') {
            if (isLoading) {
                return <div><h2>Loading...</h2></div>;
            } else {
                return (
                    <>
                        <div className="text-[14px] 2xl:text-[24px] font-medium">
                            {title}
                        </div>
                        <div className="absolute right-2 2xl:right-4 top-[70%] 2xl:top-[50%] translate-y-[-50%]" >
                            <div className="rounded-full bg-[#86B88A] w-[25px] 2xl:w-[55px] h-[25px] 2xl:h-[55px] flex justify-center items-center">
                                <div className="block 2xl:hidden">
                                    <AiOutlineArrowUp size={20} color="#ffffff" />
                                </div>
                                <div className="hidden 2xl:block">
                                    <AiOutlineArrowUp size={40} color="#ffffff" />
                                </div>
                            </div>
                        </div>
                        <div className="text-[16px] 2xl:text-[24px] font-medium">
                            {formatNumber(calculateTotals(transactions).totalIncome) + " ₸"}
                        </div>
                    </>
                );
            }
        }

        if (svg === 'monthly') {
            if (isLoading) {
                return <div><h2>Loading...</h2></div>;
            } else {
                return (
                    <>
                        <div className="text-[14px] 2xl:text-[24px] font-medium">
                            {title}
                        </div>
                        <div className="absolute right-2 2xl:right-4 top-[70%] 2xl:top-[50%] translate-y-[-50%]" >
                            <div className="rounded-full bg-[#86B88A] w-[25px] 2xl:w-[55px] h-[25px] 2xl:h-[55px] flex justify-center items-center">
                                <div className="block 2xl:hidden">
                                    <BsFillCalendar2CheckFill size={20} color="#ffffff" />
                                </div>
                                <div className="hidden 2xl:block">
                                    <BsFillCalendar2CheckFill size={35} color="#ffffff" />
                                </div>
                            </div>
                        </div>
                        <div className="text-[16px] 2xl:text-[24px] font-medium">
                            {formatNumber(210000) + " ₸"}
                        </div>
                    </>
                );
            }
        }

    }


    return (
        <div className="flex flex-col justify-between items-start w-[135px] 2xl:w-[297px] h-[70px] 2xl:h-[138px] rounded-[15px] 2xl:rounded-[30px] bg-white border-[1px] border-[#AEAEAE] relative p-[7px] 2xl:p-[25px] mb-[20px] 2xl:mb-0">
            {getBie()}
        </div>
    );
}

export default Bie;