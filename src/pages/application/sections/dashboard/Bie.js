import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { BsFillCalendar2CheckFill, BsFillClockFill } from "react-icons/bs";
import SetMonthlyBalance from "./SetMonthlyBalance";

const Bie = ({ title, svg, transactions, isLoading, monthlyBalance }) => {
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

    const [showBalanceModal, setShowBalanceModal] = useState(false);

    let mode = localStorage.getItem("mode");
    
    const getBie = () => {
        if (svg === 'current') {
            if (isLoading) {
                return <div><h2>Loading...</h2></div>;
            } else {
                return (
                    <>
                        <div className="text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-medium capitalize">
                            {title}
                        </div>
                        <BsFillClockFill className="absolute right-2 sm:right-4 sm:top-[50%] bottom-2 sm:translate-y-[-50%] text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px]" color="#85B0E2" />
                        <div className="text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-medium">
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
                        <div className="text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-medium capitalize">
                            {title}
                        </div>
                        <AiOutlineArrowDown className="absolute right-2 sm:right-4 sm:top-[50%] bottom-2 sm:translate-y-[-50%] text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px]" color="#C51F1F" />
                        <div className="text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-medium">
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
                        <div className="text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-medium capitalize">
                            {title}
                        </div>
                        <AiOutlineArrowUp className="absolute right-2 sm:right-4 sm:top-[50%] bottom-2 sm:translate-y-[-50%] text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px]" color="#86B88A" />
                        <div className="text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-medium">
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
                        <div className="text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-medium capitalize">
                            {title}
                        </div>
                        <BsFillCalendar2CheckFill className="absolute right-2 sm:right-4 sm:top-[50%] bottom-2 sm:translate-y-[-50%] text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px]" color="#86B88A" />
                        {!monthlyBalance ? (
                            <button
                                onClick={() => { setShowBalanceModal(true) }}
                                className="uppercase text-black text-[12px] md:text-[14px] lg:text-[18px] font-medium py-[5px] px-[20px] bg-[#BFA2E5] rounded-[20px] 2xl:rounded-[40px]">
                                set
                            </button>
                        ) : (
                            <div className="text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-medium flex justify-start items-center">
                                {formatNumber(Math.floor(monthlyBalance?.balance ? monthlyBalance?.balance : "0")) + " ₸"}
                            </div>
                        )}

                        {showBalanceModal && <SetMonthlyBalance setShowBalanceModal={setShowBalanceModal} />}
                    </>
                );
            }
        }

    }

    return (
        <div className={`flex flex-col justify-between items-start flex-grow flex-shrink flex-basis-[140px] 
        w-[140px] h-[70px] rounded-[10px] p-[10px]
        sm:w-[180px] sm:h-[85px] sm:rounded-[15px] sm:p-[15px]
        md:w-[220px] md:h-[105px] md:rounded-[20px] md:p-[20px]
        lg:w-[250px] lg:h-[120px] lg:rounded-[30px] lg:p-[25px]
        xl:w-[300px] xl:h-[140px] relative 
        ${mode === "Light Mode" ? 'bg-white' : 'bg-[#BCB8B8] bg-opacity-10'}  ${mode === "Light Mode" ? 'text-[#2c3e50]' : 'text-white'}`}>
            {getBie()}
        </div>
    );
}

export default Bie;