import { createMonthlyBalance } from "../../../../services/api";
import { TbCurrencyTenge } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

const SetMonthlyBalance = ({ setShowBalanceModal }) => {
    const [selectedAmount, setSelectedAmount] = useState(0);
    const handleSave = async () => {
        const correctedAmount = correctNumber(selectedAmount);
        const today = new Date();
        const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

        if (correctedAmount < 100) {
            return;
        }

        try {
            const data = await createMonthlyBalance(date, correctedAmount);
            console.log(data.balance);

            setShowBalanceModal(false);
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

    return (
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
    );
}

export default SetMonthlyBalance;