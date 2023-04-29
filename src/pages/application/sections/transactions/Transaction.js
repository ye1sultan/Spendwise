import { BsTrashFill } from 'react-icons/bs';
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
    const { category, description, payMethod, amount, type } = transaction;

    const categories = [
        { name: "Clothing", icon: <AiOutlineShop size={25} color="#ffffff" />, color: "#D942A6" },
        { name: "Health", icon: <TbHealthRecognition size={25} color="#ffffff" />, color: "#19AD50" },
        { name: "Beauty", icon: <AiOutlineHeart size={25} color="#ffffff" />, color: "#75C5D6" },
        { name: "Home", icon: <AiOutlineHome size={25} color="#ffffff" />, color: "#9CC741" },
        { name: "Supermarket", icon: <AiOutlineShoppingCart size={25} color="#ffffff" />, color: "#E1B136" },
        { name: "Education", icon: <BiBookAlt size={25} color="#ffffff" />, color: "#DB2647" },
        { name: "Restaurant", icon: <RiRestaurant2Line size={25} color="#ffffff" />, color: "#EB9499" },
        { name: "Transport", icon: <AiOutlineCar size={25} color="#ffffff" />, color: "#8DE7AE" },
        { name: "Travel", icon: <BsAirplaneEngines size={25} color="#ffffff" />, color: "#F67730" },
        { name: "Services", icon: <MdOutlineMiscellaneousServices size={25} color="#ffffff" />, color: "#A17BD0" },
        { name: "Electronics", icon: <BsLaptop size={25} color="#ffffff" />, color: "#3391D0" },
        { name: "Recreation", icon: <FaPray size={25} color="#ffffff" />, color: "#8D66E2" },
        { name: "Others", icon: <BsThreeDots size={25} color="#ffffff" />, color: "#AEAEAE" },
        { name: "Salary", icon: <IoWalletSharp size={25} color="#ffffff" />, color: "#6681DF" },
        { name: "Gift", icon: <AiOutlineGift size={25} color="#ffffff" />, color: "#B6415D" },
        { name: "Investment", icon: <AiOutlineStar size={25} color="#ffffff" />, color: "#2DB252" },
        { name: "Rewards", icon: <BsCoin size={25} color="#ffffff" />, color: "#EDBC3E" },
        { name: "Other", icon: <BsThreeDots size={25} color="#ffffff" />, color: "#AEAEAE" },
    ];

    const getCategory = () => {
        const currentCategory = categories.find(cat => cat.name === category);
        if (currentCategory) {
            return (
                <div
                    className="w-[35px] h-[35px] flex justify-center items-center rounded-full mr-4"
                    style={{ backgroundColor: currentCategory.color }}
                >
                    {currentCategory.icon}
                </div>
            );
        }
        return null;
    };

    return (
        <div className={`w-full flex justify-around items-center ${isLast ? '' : 'border-b'} border-black py-4`}>
            <div className="text-[22px] text-[#443A3A] font-medium w-1/6 text-center">{transactionDate}</div>
            <div className="text-[22px] text-[#443A3A] font-medium w-1/6 text-center">
                <div className='flex flex-row justify-center items-center'>
                    {getCategory()}
                    {category}
                </div>
            </div>
            <div className="text-[22px] text-[#443A3A] font-medium w-1/6 text-center">{description}</div>
            <div className="text-[22px] text-[#443A3A] font-medium w-1/6 text-center">{payMethod}</div>
            <div className={`text-[22px] font-medium w-1/6 text-center ${type === "income" ? "text-green-500" : "text-red-500"}`}>{amount} ₸</div>
            <div className="flex space-x-4 w-1/6 justify-center">
                <button onClick={() => editTransaction(transaction)}>
                    <BiPencil size={30} color="#443A3A" />
                </button>
                <button onClick={() => deleteTransaction(transaction.id)}>
                    <BsTrashFill size={25} color="#443A3A" />
                </button>
            </div>
        </div>
    );
};

export default Transaction;