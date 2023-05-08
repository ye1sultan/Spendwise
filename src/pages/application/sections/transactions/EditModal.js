import { useState } from "react";
import { updateTransaction } from "../../../../services/api";

import { AiOutlineCar, AiOutlineCreditCard, AiOutlineHeart, AiOutlineHome, AiOutlineShop, AiOutlineShoppingCart, AiOutlineCalendar, AiOutlineTag } from 'react-icons/ai';
import { BiBookAlt, BiFileBlank } from 'react-icons/bi';
import { BsAirplaneEngines, BsChevronDown, BsLaptop, BsThreeDots } from 'react-icons/bs';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { RiRestaurant2Line } from 'react-icons/ri';
import { IoCloseOutline, IoWalletSharp } from 'react-icons/io5';
import { AiOutlineGift, AiOutlineStar } from 'react-icons/ai';
import { BsCoin } from 'react-icons/bs';
import { FaPray } from 'react-icons/fa';
import { TbCoin, TbHealthRecognition, TbCurrencyTenge } from 'react-icons/tb';
import { format } from "date-fns";

const EditModal = ({ transaction, onSave, onCancel, onDelete }) => {
    const iconWidth = window.innerWidth < 1536 ? 15 : 25;
    const iconMWidth = window.innerWidth < 1536 ? 25 : 30;

    const expenseCategories = [
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
    ];

    const incomeCategories = [
        { name: "Salary", icon: <IoWalletSharp size={iconWidth} color="#ffffff" />, color: "#6681DF" },
        { name: "Gift", icon: <AiOutlineGift size={iconWidth} color="#ffffff" />, color: "#B6415D" },
        { name: "Investment", icon: <AiOutlineStar size={iconWidth} color="#ffffff" />, color: "#2DB252" },
        { name: "Rewards", icon: <BsCoin size={iconWidth} color="#ffffff" />, color: "#EDBC3E" },
        { name: "Other", icon: <BsThreeDots size={iconWidth} color="#ffffff" />, color: "#AEAEAE" },
    ]

    const handleCategoryClick = (category) => {
        setEditedTransaction({ ...editedTransaction, category: category.name });
        setCategoryDropDown(false);
    }


    const handlePaymentMethodClick = (paymentMethod) => {
        setEditedTransaction({ ...editedTransaction, payment_method: paymentMethod.name });
        setPaymentDropDown(false);
    }

    const getCategory = (name) => {
        const category = transaction.transaction_type === 'income' ? incomeCategories.find((category) => category.name === name) : expenseCategories.find((category) => category.name === name);

        return (
            <div className="flex justify-start items-center pr-2">
                <div className="w-[25px] h-[25px] 2xl:w-[30px] 2xl:h-[30px] rounded-full flex justify-center items-center mr-2 2xl:mr-4" style={{ backgroundColor: category?.color }}>
                    {category?.icon}
                </div>
                {category?.name}
            </div>
        );
    };

    const [categoryDropDown, setCategoryDropDown] = useState(null);

    const getAllCategories = () => {
        const ctg = transaction.transaction_type === 'income' ? incomeCategories : expenseCategories;

        return ctg.map((category, index) => (
            <button
                key={index}
                onClick={() => handleCategoryClick(category)}
                className="flex justify-start items-center py-2">
                <div className="w-[25px] h-[25px] 2xl:w-[40px] 2xl:h-[40px] rounded-full flex justify-center items-center mr-2 2xl:mr-4" style={{ backgroundColor: category?.color }}>
                    {category?.icon}
                </div>
                {category?.name}
            </button>
        ));
    }

    const paymentMethods = [
        { name: "Cash", icon: <TbCoin size={iconWidth} /> },
        { name: "Debit Card", icon: <AiOutlineCreditCard size={iconWidth} /> },
    ];

    const getPaymentMethod = (name) => {
        const paymentMethod = paymentMethods.find((paymentMethod) => paymentMethod.name === name);

        return (
            <div className="flex justify-start items-center pr-2">
                <div className="w-[25px] h-[25px] 2xl:w-[35px] 2xl:h-[35px] rounded-full flex justify-center items-center mr-2 2xl:mr-4">
                    {paymentMethod?.icon}
                </div>
                {paymentMethod?.name}
            </div>
        );
    };

    const [paymentDropDown, setPaymentDropDown] = useState(null);

    const getAllPaymentMethods = () => {
        return paymentMethods.map((paymentMethod, index) => (
            <button
                key={index}
                onClick={() => handlePaymentMethodClick(paymentMethod)}
                className="flex justify-start items-center py-2">
                <div className="2xl:w-[40px] 2xl:h-[40px] rounded-full flex justify-center items-center mr-2 2xl:mr-4" >
                    {paymentMethod?.icon}
                </div>
                {paymentMethod?.name}
            </button>
        ));
    }

    const [editedTransaction, setEditedTransaction] = useState(transaction);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditedTransaction({ ...editedTransaction, [name]: value });
    };

    const handleSave = async () => {
        try {
            const updatedTransaction = await updateTransaction(editedTransaction.id, removeKeys(editedTransaction, ['created_at', 'updated_at', 'id']));
            onSave(updatedTransaction);
        } catch (error) {
            console.error("Error updating transaction:", error);
        }
    };

    const removeKeys = (obj, keysToRemove) => {
        const newObj = { ...obj };
        keysToRemove.forEach((key) => {
            delete newObj[key];
        });

        return newObj;
    }

    const handleDeleteTransaction = () => {
        onDelete(transaction.id);
        onCancel();
    }

    let inputStyle = 'w-full h-full text-[24px] font-normal pl-[40px] border-b-[1px] border-[#696969]';

    return (
        <>
            <div className="fixed top-[5%] left-[50%] translate-x-[-50%] z-20 bg-white py-[20px] px-[30px] flex flex-col justify-center shadow-md rounded-[40px]">
                <div className="w-full flex justify-between items-center mb-[10px]">
                    <div className="text-[32px] font-medium">
                        Edit {transaction.transaction_type === 'income' ? 'Income' : 'Expense'}
                    </div>
                    <IoCloseOutline className='cursor-pointer' size={35} onClick={() => onCancel()} />
                </div>
                <div className="relative w-full h-[50px] mb-[10px]">
                    <div className='absolute top-[50%] translate-y-[-50%] left-0'>
                        <TbCurrencyTenge size={iconMWidth} />
                    </div>
                    <input
                        className={inputStyle}
                        type="number"
                        name="amount"
                        value={editedTransaction.amount}
                        onChange={handleChange}
                    />
                </div>
                <div className="relative w-full h-[50px] mb-[10px]">
                    <div className='absolute top-[50%] translate-y-[-50%] left-0'>
                        <AiOutlineCalendar size={iconMWidth} />
                    </div>
                    <input
                        className={inputStyle}
                        type="date"
                        name="date"
                        value={editedTransaction.date}
                        max={format(new Date(), 'yyyy-MM-dd')}
                        onChange={handleChange}
                    />
                </div>
                <div className="relative w-full h-[50px] mb-[10px]">
                    <div className='absolute top-[50%] translate-y-[-50%] left-0'>
                        <BiFileBlank size={iconMWidth} />
                    </div>
                    <input
                        className={inputStyle}
                        type="text"
                        name="description"
                        value={editedTransaction.description}
                        onChange={handleChange}
                    />
                </div>
                <div
                    onMouseEnter={() => setCategoryDropDown(true)}
                    onMouseLeave={() => setCategoryDropDown(false)}
                    className="relative w-full h-[50px] mb-[10px]">
                    <div className='absolute top-[50%] translate-y-[-50%] left-0'>
                        <AiOutlineTag size={iconMWidth} />
                    </div>
                    <div className={`${inputStyle} flex justify-between items-center relative`}>
                        <div className="cursor-pointer">
                            {getCategory(editedTransaction.category)}
                        </div>
                        <BsChevronDown size={20} />
                        <div className={`${categoryDropDown ? 'flex' : 'hidden'} flex-col absolute top-[100%] left-0 w-full max-h-[300px] overflow-auto bg-white py-[10px] 2xl:py-[20px] px-[40px] border-[1px] border-[#696969] rounded-[20px] 2xl:rounded-[50px] shadow z-10`}>
                            {getAllCategories()}
                        </div>
                    </div>
                </div>
                <div
                    onMouseEnter={() => setPaymentDropDown(true)}
                    onMouseLeave={() => setPaymentDropDown(false)}
                    className="relative w-full h-[50px] mb-[30px]">
                    <div className='absolute top-[50%] translate-y-[-50%] left-0'>
                        <AiOutlineTag size={iconMWidth} />
                    </div>
                    <div className={`${inputStyle} flex justify-between items-center relative`}>
                        <div className="cursor-pointer">
                            {getPaymentMethod(editedTransaction.payment_method)}
                        </div>
                        <BsChevronDown size={20} />
                        <div className={`${paymentDropDown ? 'flex' : 'hidden'} flex-col absolute top-[100%] left-0 w-full max-h-[300px] overflow-auto bg-white py-[10px] 2xl:py-[20px] px-[40px] border-[1px] border-[#696969] rounded-[20px] 2xl:rounded-[50px] shadow z-10`}>
                            {getAllPaymentMethods()}
                        </div>
                    </div>
                </div>
                <button onClick={handleSave} className='uppercase text-black text-[14px] 2xl:text-[18px] font-medium py-[5px] px-[20px] 2xl:py-[10px] 2xl:px-[40px] bg-[#BFA2E5] rounded-[20px] 2xl:rounded-[40px]'>
                    Save
                </button>
            </div>
        </>
    );
};

export default EditModal;