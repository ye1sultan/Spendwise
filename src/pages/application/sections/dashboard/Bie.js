import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineClockCircle } from "react-icons/ai";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { TbCurrencyTenge } from "react-icons/tb";

import { createMonthlyBalance } from "../../../../services/api";

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
    const [selectedAmount, setSelectedAmount] = useState(0);

    const saveBalance = async () => {
        const correctedAmount = correctNumber(selectedAmount);

        // Get today's date in "YYYY-MM-DD" format
        const today = new Date();
        const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

        try {
            await createMonthlyBalance(date, correctedAmount); // You may replace these parameters as per your API requirements
            console.log('Monthly balance saved successfully');
            setShowBalanceModal(false);
        } catch (err) {
            console.error('Failed to save monthly balance', err);
        }
    }

    function correctNumber(num) {
        // First, check if num is a number.
        if (isNaN(num)) {
            console.error('Input is not a number');
            return;
        }

        // Convert the number to a positive one if it's negative.
        num = Math.abs(num);

        // If the number is zero or starts with zero and has more digits, return 0.
        if (num === 0 || num < 1) {
            return 0;
        }

        // Return the corrected number.
        return num;
    }


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
                        <div className="text-[16px] 2xl:text-[24px] font-medium flex justify-start items-center">
                            {formatNumber(Math.floor(monthlyBalance.balance)) + " ₸"}
                            {!monthlyBalance && (
                                <button
                                    onClick={() => { setShowBalanceModal(true) }}
                                    className="ml-4 uppercase text-black text-[16px] font-medium py-[10px] px-[40px] bg-[#BFA2E5] rounded-[40px] hover:bg-[#a97fdf]">
                                    set
                                </button>
                            )}
                        </div>
                        {showBalanceModal && (
                            <div className="fixed top-[5%] left-[50%] translate-x-[-50%] z-20 p-4 rounded-[30px] bg-white flex flex-col justify-center shadow-md ">
                                <div className="text-[16px] 2xl:text-[24px] font-medium mb-[10px]">
                                    Set monthly balance
                                </div>
                                <div className="relative w-full h-[50px] mb-[20px]">
                                    <input
                                        onChange={(e) => setSelectedAmount(e.target.value)}
                                        className="w-full h-full text-[24px] font-normal pl-[40px] border-b-[1px] border-[#696969]"
                                        type="number"
                                        placeholder="Set balance" />
                                    <div className="absolute top-[50%] translate-y-[-50%] left-0">
                                        <TbCurrencyTenge size={30} color="#696969" />
                                    </div>
                                </div>
                                <button
                                    onClick={saveBalance}
                                    className='uppercase text-black text-[16px] font-medium py-[10px] px-[40px] bg-[#BFA2E5] rounded-[40px]'>
                                    save
                                </button>
                            </div >
                        )}
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