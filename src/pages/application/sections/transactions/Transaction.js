import { BsChevronRight, BsTrashFill } from 'react-icons/bs';
import { BiPencil } from 'react-icons/bi';

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

const Transaction = ({ transaction, transactionDate, isLast, deleteTransaction, editTransaction }) => {
    const { category, description, payment_method, amount, transaction_type } = transaction;

    const categories = [
        { name: "Clothing", icon: <AiOutlineShop className='text-[15px] lg:text-[30px]' color="#ffffff" />, color: "#D942A6" },
        { name: "Health", icon: <TbHealthRecognition className='text-[15px] lg:text-[30px]' color="#ffffff" />, color: "#19AD50" },
        { name: "Beauty", icon: <AiOutlineHeart className='text-[15px] lg:text-[30px]' color="#ffffff" />, color: "#75C5D6" },
        { name: "Home", icon: <AiOutlineHome className='text-[15px] lg:text-[30px]' color="#ffffff" />, color: "#9CC741" },
        { name: "Supermarket", icon: <AiOutlineShoppingCart className='text-[15px] lg:text-[30px]' color="#ffffff" />, color: "#E1B136" },
        { name: "Education", icon: <BiBookAlt className='text-[15px] lg:text-[30px]' color="#ffffff" />, color: "#DB2647" },
        { name: "Restaurant", icon: <RiRestaurant2Line className='text-[15px] lg:text-[30px]' color="#ffffff" />, color: "#EB9499" },
        { name: "Transport", icon: <AiOutlineCar className='text-[15px] lg:text-[30px]' color="#ffffff" />, color: "#8DE7AE" },
        { name: "Travel", icon: <BsAirplaneEngines className='text-[15px] lg:text-[30px]' color="#ffffff" />, color: "#F67730" },
        { name: "Services", icon: <MdOutlineMiscellaneousServices className='text-[15px] lg:text-[30px]' color="#ffffff" />, color: "#A17BD0" },
        { name: "Electronics", icon: <BsLaptop className='text-[15px] lg:text-[30px]' color="#ffffff" />, color: "#3391D0" },
        { name: "Recreation", icon: <FaPray className='text-[15px] lg:text-[30px]' color="#ffffff" />, color: "#8D66E2" },
        { name: "Others", icon: <BsThreeDots className='text-[15px] lg:text-[30px]' color="#ffffff" />, color: "#AEAEAE" },
        { name: "Salary", icon: <IoWalletSharp className='text-[15px] lg:text-[30px]' color="#ffffff" />, color: "#6681DF" },
        { name: "Gift", icon: <AiOutlineGift className='text-[15px] lg:text-[30px]' color="#ffffff" />, color: "#B6415D" },
        { name: "Investment", icon: <AiOutlineStar className='text-[15px] lg:text-[30px]' color="#ffffff" />, color: "#2DB252" },
        { name: "Rewards", icon: <BsCoin className='text-[15px] lg:text-[30px]' color="#ffffff" />, color: "#EDBC3E" },
        { name: "Other", icon: <BsThreeDots className='text-[15px] lg:text-[30px]' color="#ffffff" />, color: "#AEAEAE" },
    ];

    const getCategory = () => {
        const currentCategory = categories.find(cat => cat.name === category);
        if (currentCategory) {
            return (
                <div
                    className="w-[20px] h-[20px] lg:w-[40px] lg:h-[40px] flex justify-center items-center rounded-full mr-2 2xl:mr-4"
                    style={{ backgroundColor: currentCategory.color }}
                >
                    {currentCategory.icon}
                </div>
            );
        }
        return null;
    };

    function formatDate(dateString) {
        let date = new Date(dateString);
        const options = { day: 'numeric', month: 'long' };

        return date.toLocaleDateString('en-GB', options);
    }

    return (
        <>
            <div className={`w-full flex items-center ${isLast ? '' : 'border-b'}  border-[#AEAEAE] border-opacity-50 py-4 text-xs md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-medium`}>
                <div className="w-1/4 sm:w-1/6 text-center">{formatDate(transactionDate)}</div>
                <div className="w-1/4 sm:w-1/6 text-center">
                    <div className='flex flex-row justify-center items-center'>
                        <div className="flex-shrink-0">{getCategory()}</div>
                        <div className="flex-shrink truncate">{category}</div>
                    </div>
                </div>
                <div className="hidden sm:block w-1/6 text-center truncate overflow-hidden">{description}</div>
                <div className="hidden sm:block w-1/6 text-center">{payment_method}</div>
                <div className={`w-1/4 sm:w-1/6 text-center ${transaction_type === "income" ? "text-green-500" : "text-red-500"}`}>{parseInt(amount)} ₸</div>
                <div className="flex sm:space-x-4 w-1/4 sm:w-1/6 justify-center">
                    <button onClick={() => editTransaction(transaction, transaction.id)}>
                        <BiPencil className='hidden sm:block text-[20px] lg:text-[30px]' color="#443A3A" />
                        <BsChevronRight className='block sm:hidden text-[15px]' color="#443A3A" />
                    </button>
                    <button className='hidden sm:block' onClick={() => deleteTransaction(transaction.id)}>
                        <BsTrashFill className='text-[17px] lg:text-[25px]' color="#443A3A" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Transaction;