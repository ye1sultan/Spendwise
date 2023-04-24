import { useState } from 'react';
import { AiOutlineCar, AiOutlineGift, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';
import { IoEarthOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Goal = ({ name, icon, deadline, totalAmount, amount, color }) => {
    const getPercent = (amount, totalAmount) => {
        let res = parseFloat(((amount / totalAmount) * 100).toFixed(2));
        return (res);
    }

    let progress = getPercent(amount, totalAmount);

    const getIconComponent = (iconName) => {
        switch (iconName) {
            case "car":
                return <AiOutlineCar size={30} />;
            case "earth":
                return <IoEarthOutline size={30} />;
            case "cart":
                return <AiOutlineShoppingCart size={30} />;
            case "gift":
                return <AiOutlineGift size={30} />;
            default:
                return null;
        }
    }

    const iconComponent = getIconComponent(icon);

    return (
        <>
            <div
                className="overflow-hidden w-full h-full bg-white rounded-[40px] p-[30px] flex flex-col justify-between items-start">
                <div className="flex justify-between items-center w-full">
                    <div className='flex justify-center items-center' >
                        <div className="w-[50px] h-[50px] bg-opacity-50 rounded-full flex justify-center items-center mr-[20px]" style={{ backgroundColor: color }}>
                            {iconComponent}
                        </div>
                        <div className="text-[25px] font-medium text-[#4E4949]">
                            {name}
                        </div>

                    </div>
                    <Link to='/application/goals' className='cursor-pointer'>
                        <BsArrowRightShort size={45} />
                    </Link>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div>
                        <div className="text-[20px] font-medium text-[#979393]">
                            Till
                        </div>
                        <div className="text-[25px] font-medium text-[#4E4949]">
                            {deadline}
                        </div>
                    </div>
                    <div className="text-[36px] font-medium">
                        {progress + " %"}
                    </div>
                </div>
                <div className="w-full h-[20px] bg-[#EEECEC] rounded-[10px]">
                    <div className="h-full rounded-[10px]" style={{ width: progress + "%", backgroundColor: color }}></div>
                </div>
                <div className="text-[16px] font-semibold text-[#696969]">
                    {`₸ ${amount} / ₸ ${totalAmount}`}
                </div>
            </div>
        </>
    );
}

export default Goal;