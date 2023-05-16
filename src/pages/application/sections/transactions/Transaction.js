import { BsTrashFill } from 'react-icons/bs';
import { BiChevronRight, BiPencil } from 'react-icons/bi';

import { AiOutlineCar, AiOutlineHeart, AiOutlineHome, AiOutlineShop, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiBookAlt } from 'react-icons/bi';
import { BsAirplaneEngines, BsLaptop, BsThreeDots } from 'react-icons/bs';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { RiRestaurant2Line } from 'react-icons/ri';
import { IoWalletSharp } from 'react-icons/io5';
import { AiOutlineGift, AiOutlineStar } from 'react-icons/ai';
import { BsCoin } from 'react-icons/bs';
import { FaPray } from 'react-icons/fa';
import { TbHealthRecognition } from 'react-icons/tb';
import { useState } from 'react';

const Transaction = ({ transaction, transactionDate, isLast, deleteTransaction, editTransaction }) => {
    const { category, description, payment_method, amount, transaction_type } = transaction;
    const [iconWidth, setIconWidth] = useState(window.innerWidth < 1536 ? 15 : 25);

    const categories = [
        { name: "Clothing", icon: <AiOutlineShop size={iconWidth} color="#ffffff" />, color: "#D942A6" },
        { name: "Health", icon: <TbHealthRecognition size={iconWidth} color="#ffffff" />, color: "#19AD50" },
        { name: "Beauty", icon: <AiOutlineHeart size={iconWidth} color="#ffffff" />, color: "#75C5D6" },
        { name: "Home", icon: <AiOutlineHome size={iconWidth} color="#ffffff" />, color: "#9CC741" },
        { name: "Supermarket", icon: <AiOutlineShoppingCart size={iconWidth} color="#ffffff" />, color: "#E1B136" },
        { name: "Education", icon: <BiBookAlt size={iconWidth} color="#ffffff" />, color: "#DB2647" },
        { name: "Restaurant", icon: <RiRestaurant2Line size={iconWidth} color="#ffffff" />, color: "#EB9499" },
        { name: "Transport", icon: <AiOutlineCar size={iconWidth} color="#ffffff" />, color: "#8DE7AE" },
        { name: "Travel", icon: <BsAirplaneEngines size={iconWidth} color="#ffffff" />, color: "#F67730" },
        { name: "Services", icon: <MdOutlineMiscellaneousServices size={iconWidth} color="#ffffff" />, color: "#A17BD0" },
        { name: "Electronics", icon: <BsLaptop size={iconWidth} color="#ffffff" />, color: "#3391D0" },
        { name: "Recreation", icon: <FaPray size={iconWidth} color="#ffffff" />, color: "#8D66E2" },
        { name: "Others", icon: <BsThreeDots size={iconWidth} color="#ffffff" />, color: "#AEAEAE" },
        { name: "Salary", icon: <IoWalletSharp size={iconWidth} color="#ffffff" />, color: "#6681DF" },
        { name: "Gift", icon: <AiOutlineGift size={iconWidth} color="#ffffff" />, color: "#B6415D" },
        { name: "Investment", icon: <AiOutlineStar size={iconWidth} color="#ffffff" />, color: "#2DB252" },
        { name: "Rewards", icon: <BsCoin size={iconWidth} color="#ffffff" />, color: "#EDBC3E" },
        { name: "Other", icon: <BsThreeDots size={iconWidth} color="#ffffff" />, color: "#AEAEAE" },
    ];

    const getCategory = () => {
        const currentCategory = categories.find(cat => cat.name === category);
        if (currentCategory) {
            return (
                <div
                    className="w-[20px] h-[20px] 2xl:w-[35px] 2xl:h-[35px] flex justify-center items-center rounded-full mr-2 2xl:mr-4"
                    style={{ backgroundColor: currentCategory.color }}
                >
                    {currentCategory.icon}
                </div>
            );
        }
        return null;
    };

    function formatDate(dateString) {
        // Create a new Date object from the input string
        var date = new Date(dateString);

        // Define options for toLocaleDateString
        var options = { day: 'numeric', month: 'long' };

        // Return the formatted date
        return date.toLocaleDateString('en-GB', options);
    }

    const [mobileMore, setMobileMore] = useState(false);

    const handleMobileMoreClick = () => {
        setMobileMore(true);
    }

    return (
        <>
            <div className={`w-full hidden 2xl:flex items-center ${isLast ? '' : 'border-b'}  border-[#AEAEAE] border-opacity-50 py-4`}>
                <div className="text-[22px] text-[#443A3A] font-medium w-1/6 text-center">{formatDate(transactionDate)}</div>
                <div className="text-[22px] text-[#443A3A] font-medium w-1/6 text-center">
                    <div className='flex flex-row justify-center items-center'>
                        {getCategory()}
                        {category}
                    </div>
                </div>
                <div className="text-[22px] text-[#443A3A] font-medium w-1/6 text-center truncate overflow-hidden">{description}</div>
                <div className="text-[22px] text-[#443A3A] font-medium w-1/6 text-center">{payment_method}</div>
                <div className={`text-[22px] font-medium w-1/6 text-center ${transaction_type === "income" ? "text-green-500" : "text-red-500"}`}>{amount} ₸</div>
                <div className="flex space-x-4 w-1/6 justify-center">
                    <button onClick={() => editTransaction(transaction)}>
                        <BiPencil size={30} color="#443A3A" />
                    </button>
                    <button onClick={() => deleteTransaction(transaction.id)}>
                        <BsTrashFill size={25} color="#443A3A" />
                    </button>
                </div>
            </div>

            {/* <div className={`w-full 2xl:hidden flex justify-between items-center ${isLast ? '' : 'border-b'} border-[#AEAEAE] border-opacity-50 py-2 px-2`}>
                <div className="text-[12px] text-[#443A3A] font-medium text-center">
                    {formatDateMobile(transactionDate)}
                </div>
                <div className="text-[12px] text-[#443A3A] font-medium  text-center">
                    <div className='flex flex-row justify-center items-center'>
                        {getCategory()}
                        {category}
                    </div>
                </div>
                <div className={`text-[12px] font-medium  text-center ${transaction_type === "income" ? "text-green-500" : "text-red-500"}`}>
                    {amount} ₸
                </div>
                <button className="flex justify-center" onClick={() => editTransaction(transaction)}>
                    <BiChevronRight size={25} />
                </button>
            </div> */}
        </>
    );
};

export default Transaction;