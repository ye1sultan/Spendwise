import { useEffect, useState } from "react";
import { AiFillClockCircle, AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineClockCircle } from "react-icons/ai";
import { BsFillCalendar2CheckFill, BsFillClockFill } from "react-icons/bs";
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
    // w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] 2xl:w-[55px] 2xl:h-[55px]

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [iconSize, setIconSize] = useState(40);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth >= 1024) {
            setIconSize(40);
        } else if (windowWidth >= 768) {
            setIconSize(35);
        } else if (windowWidth >= 640) {
            setIconSize(30);
        } else {
            setIconSize(25);
        }
    }, [windowWidth]);

    const getBie = () => {
        if (svg === 'current') {
            if (isLoading) {
                return <div><h2>Loading...</h2></div>;
            } else {
                return (
                    <>
                        <div className="text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-medium">
                            {title}
                        </div>
                        <BsFillClockFill
                            className="absolute right-2 sm:right-4 sm:top-[50%] bottom-2 sm:translate-y-[-50%]"
                            size={iconSize}
                            color="#85B0E2" />
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
                        <div className="text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-medium">
                            {title}
                        </div>
                        <AiOutlineArrowDown
                            className="absolute right-2 sm:right-4 sm:top-[50%] bottom-2 sm:translate-y-[-50%]"
                            size={iconSize}
                            color="#C51F1F" />
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
                        <div className="text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-medium">
                            {title}
                        </div>
                        <AiOutlineArrowUp
                            className="absolute right-2 sm:right-4 sm:top-[50%] bottom-2 sm:translate-y-[-50%]"
                            size={iconSize}
                            color="#86B88A" />
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
                        <div className="text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-medium">
                            {title}
                        </div>
                        <BsFillCalendar2CheckFill
                            className="absolute right-2 sm:right-4 sm:top-[50%] bottom-2 sm:translate-y-[-50%]"
                            size={iconSize}
                            color="#86B88A" />
                        <div className="text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-medium flex justify-start items-center">
                            {formatNumber(Math.floor(monthlyBalance?.balance ? monthlyBalance?.balance : "0")) + " ₸"}
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
                                <div className="text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-medium mb-[10px]">
                                    Set monthly balance
                                </div>
                                <div className="relative w-full h-[50px] mb-[20px]">
                                    <input
                                        onChange={(e) => setSelectedAmount(e.target.value)}
                                        className="w-full h-full text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal pl-[40px] border-b-[1px] border-[#696969]"
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
        <div className="flex flex-col justify-between items-start flex-grow flex-shrink flex-basis-[140px] 
            w-[140px] h-[70px] rounded-[10px] p-[10px]
            sm:w-[180px] sm:h-[85px] sm:rounded-[15px] sm:p-[15px]
            md:w-[220px] md:h-[105px] md:rounded-[20px] md:p-[20px]
            lg:w-[250px] lg:h-[120px] lg:rounded-[30px] lg:p-[25px]
            xl:w-[300px] xl:h-[140px]
            bg-white border-[1px] border-[#AEAEAE] relative">
            {getBie()}
        </div>
    );
}

export default Bie;