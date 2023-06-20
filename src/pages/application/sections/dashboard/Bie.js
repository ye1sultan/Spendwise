import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { BsFillCalendar2CheckFill, BsFillClockFill } from "react-icons/bs";
import { TbCurrencyTenge } from "react-icons/tb";

import { createMonthlyBalance } from "../../../../services/api";
import { IoCloseOutline } from "react-icons/io5";

const Bie = ({ title, svg, transactions, isLoading, monthlyBalance }) => {
    const [render, setRender] = useState(false);

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

    const handleSave = async () => {
        const correctedAmount = correctNumber(selectedAmount);
        const today = new Date();
        const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

        try {
            await createMonthlyBalance(date, correctedAmount);
            console.log('Monthly balance saved successfully');
            setShowBalanceModal(false);
            setRender(true);
        } catch (err) {
            console.error('Failed to save monthly balance', err);
        }
    }

    function correctNumber(num) {
        if (isNaN(num)) {
            console.error('Input is not a number');
            return;
        }

        num = Math.abs(num);

        if (num === 0 || num < 1) {
            return 0;
        }

        return num;
    }

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
                        <div className="text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-medium">
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
                        <div className="text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-medium">
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
                        <div className="text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-medium">
                            {title}
                        </div>
                        <BsFillCalendar2CheckFill className="absolute right-2 sm:right-4 sm:top-[50%] bottom-2 sm:translate-y-[-50%] text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px]" color="#86B88A" />
                        {(!monthlyBalance && !render) ? (
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

                        {showBalanceModal && (
                            <div className="fixed top-0 left-0 right-0 bottom-0 flex items-start justify-center m-6 h-full z-20">
                                <div className='bg-white shadow-md rounded-[30px] xl:rounded-[40px] mx-4 w-full max-w-[350px] xl:max-w-[400px] min-w-[280px] p-6 xl:p-8'>
                                    <div className='w-full flex justify-between items-center mb-[20px]'>
                                        <div className="text-xl xl:text-[28px] 2xl:text-[32px] font-medium">
                                            Set Balance
                                        </div>
                                        <IoCloseOutline className='cursor-pointer text-[25px] md:text-[30px] lg:text-[35px]' onClick={() => setShowBalanceModal(false)} />
                                    </div>
                                    <div className="relative w-full h-[40px] md:h-[50px] mb-[40px] border-b-[1px] border-[#696969]">
                                        <input
                                            onChange={(e) => setSelectedAmount(e.target.value)}
                                            className="w-full h-full text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal pl-[40px] placeholder:text-[#6A6A6A]"
                                            type="number"
                                            placeholder="Set balance" />
                                        <TbCurrencyTenge className="text-[25px] 2xl:text-[30px] absolute top-[50%] translate-y-[-50%] left-0" color="#696969" />
                                    </div>
                                    <div className='w-full flex justify-end'>
                                        <button className='uppercase text-black text-[14px] lg:text-[18px] font-medium py-[5px] px-[20px] 2xl:py-[10px] 2xl:px-[40px] bg-[#BFA2E5] rounded-[20px] 2xl:rounded-[40px]' onClick={() => handleSave()}>
                                            save
                                        </button>
                                    </div>
                                </div >
                            </div>
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
            bg-white relative">
            {getBie()}
        </div>
    );
}

export default Bie;