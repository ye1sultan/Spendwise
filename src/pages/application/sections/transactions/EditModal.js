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

const EditModal = ({ transaction, onSave, onCancel }) => {
    const expenseCategories = [
        { name: "Clothing", icon: <AiOutlineShop className="text-[15px] 2xl:text-[25px]" color="#ffffff" />, color: "#D942A6" },
        { name: "Health", icon: <TbHealthRecognition className="text-[15px] 2xl:text-[25px]" color="#ffffff" />, color: "#19AD50" },
        { name: "Beauty", icon: <AiOutlineHeart className="text-[15px] 2xl:text-[25px]" color="#ffffff" />, color: "#75C5D6" },
        { name: "Home", icon: <AiOutlineHome className="text-[15px] 2xl:text-[25px]" color="#ffffff" />, color: "#9CC741" },
        { name: "Supermarket", icon: <AiOutlineShoppingCart className="text-[15px] 2xl:text-[25px]" color="#ffffff" />, color: "#E1B136" },
        { name: "Education", icon: <BiBookAlt className="text-[15px] 2xl:text-[25px]" color="#ffffff" />, color: "#DB2647" },
        { name: "Restaurant", icon: <RiRestaurant2Line className="text-[15px] 2xl:text-[25px]" color="#ffffff" />, color: "#EB9499" },
        { name: "Transport", icon: <AiOutlineCar className="text-[15px] 2xl:text-[25px]" color="#ffffff" />, color: "#8DE7AE" },
        { name: "Travel", icon: <BsAirplaneEngines className="text-[15px] 2xl:text-[25px]" color="#ffffff" />, color: "#F67730" },
        { name: "Services", icon: <MdOutlineMiscellaneousServices className="text-[15px] 2xl:text-[25px]" color="#ffffff" />, color: "#A17BD0" },
        { name: "Electronics", icon: <BsLaptop className="text-[15px] 2xl:text-[25px]" color="#ffffff" />, color: "#3391D0" },
        { name: "Recreation", icon: <FaPray className="text-[15px] 2xl:text-[25px]" color="#ffffff" />, color: "#8D66E2" },
        { name: "Others", icon: <BsThreeDots className="text-[15px] 2xl:text-[25px]" color="#ffffff" />, color: "#AEAEAE" },
    ];

    const incomeCategories = [
        { name: "Salary", icon: <IoWalletSharp className="text-[15px] 2xl:text-[25px]" color="#ffffff" />, color: "#6681DF" },
        { name: "Gift", icon: <AiOutlineGift className="text-[15px] 2xl:text-[25px]" color="#ffffff" />, color: "#B6415D" },
        { name: "Investment", icon: <AiOutlineStar className="text-[15px] 2xl:text-[25px]" color="#ffffff" />, color: "#2DB252" },
        { name: "Rewards", icon: <BsCoin className="text-[15px] 2xl:text-[25px]" color="#ffffff" />, color: "#EDBC3E" },
        { name: "Other", icon: <BsThreeDots className="text-[15px] 2xl:text-[25px]" color="#ffffff" />, color: "#AEAEAE" },
    ];

    const paymentMethods = [
        { name: "Cash", icon: <TbCoin className="text-[25px]" /> },
        { name: "Debit Card", icon: <AiOutlineCreditCard className="text-[25px]" /> },
    ];

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
            <div className="flex flex-row justify-center items-center w-full h-full">
                <div className="w-[25px] h-[25px] 2xl:w-[35px] 2xl:h-[35px] rounded-full flex justify-center items-center mr-2 2xl:mr-4" style={{ backgroundColor: category?.color }}>
                    {category?.icon}
                </div>
                <div className="flex items-center text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal">
                    {category?.name}
                </div>
            </div>
        );
    }

    const [categoryDropDown, setCategoryDropDown] = useState(null);

    const getAllCategories = () => {
        const ctg = transaction.transaction_type === 'income' ? incomeCategories : expenseCategories;

        return ctg.map((category, index) => (
            <button
                key={index}
                onClick={() => handleCategoryClick(category)}
                className="w-full flex justify-start items-center mb-2 hover:bg-[#ecf0f1] pl-[30px]">
                <div className="w-[25px] h-[25px] 2xl:w-[40px] 2xl:h-[40px] rounded-full flex justify-center items-center mr-2 2xl:mr-4" style={{ backgroundColor: category?.color }}>
                    {category?.icon}
                </div>
                <div className="flex items-center text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal">
                    {category?.name}
                </div>
            </button>
        ));
    }

    const getPaymentMethod = (name) => {
        const paymentMethod = paymentMethods.find((paymentMethod) => paymentMethod.name === name);

        return (
            <div className="flex flex-row justify-center items-center w-full h-full">
                <div className="w-[25px] h-[25px] 2xl:w-[35px] 2xl:h-[35px] rounded-full flex justify-center items-center mr-2 2xl:mr-4">
                    {paymentMethod?.icon}
                </div>
                <div className="flex items-center text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal">
                    {paymentMethod?.name}
                </div>
            </div>
        );
    }

    const [paymentDropDown, setPaymentDropDown] = useState(null);

    const getAllPaymentMethods = () => {
        return paymentMethods.map((paymentMethod, index) => (
            <button
                key={index}
                onClick={() => handlePaymentMethodClick(paymentMethod)}
                className="w-full flex justify-start items-center 2xl:text-[24px] mb-2 hover:bg-[#ecf0f1] pl-[30px]">
                <div className="w-[25px] h-[25px] 2xl:w-[40px] 2xl:h-[40px] rounded-full flex justify-center items-center mr-2 2xl:mr-4" >
                    {paymentMethod?.icon}
                </div>
                <div className="flex items-center text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal">
                    {paymentMethod?.name}
                </div>
            </button>
        ));
    }

    const [editedTransaction, setEditedTransaction] = useState(transaction);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditedTransaction({ ...editedTransaction, [name]: value });
    }

    const handleSave = async () => {
        try {
            const updatedTransaction = await updateTransaction(editedTransaction.id, removeKeys(editedTransaction, ['created_at', 'updated_at', 'id']));
            onSave(updatedTransaction);
        } catch (error) {
            console.error("Error updating transaction:", error);
        }
    }

    const removeKeys = (obj, keysToRemove) => {
        const newObj = { ...obj };
        keysToRemove.forEach((key) => {
            delete newObj[key];
        });

        return newObj;
    }

    let color = transaction.transaction_type === 'income' ? '#22A447' : '#E81E1E';

    const showAllCategories = () => {
        if (!categoryDropDown) {
            setCategoryDropDown(true);
        } else {
            setCategoryDropDown(false);
        }

        setPaymentDropDown(false);
    }

    const showAllPaymentMethod = () => {
        if (!paymentDropDown) {
            setPaymentDropDown(true);
        } else {
            setPaymentDropDown(false);
        }

        setCategoryDropDown(false);
    }

    return (
        <>
            <div className="fixed top-0 left-0 right-0 bottom-0 flex items-start justify-center m-6 h-full z-20">
                <div className='bg-white shadow-md rounded-[30px] xl:rounded-[40px] mx-4 w-full max-w-[350px] xl:max-w-[400px] min-w-[280px] p-6 xl:p-8'>
                    <div className='w-full flex justify-between items-center mb-[10px]'>
                        <div className="text-lg lg:text-xl xl:text-[28px] 2xl:text-[32px] font-medium">
                            Edit <span style={{ color: color }}>{transaction.transaction_type === 'income' ? 'Income' : 'Expense'}</span>
                        </div>
                        <IoCloseOutline className='cursor-pointer' size={35} onClick={() => onCancel()} />
                    </div>
                    <div className="relative w-full h-[50px] mb-[10px] border-b-[1px] border-[#696969]">
                        <input
                            className="w-full h-full text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal pl-[40px]"
                            type="number"
                            name="amount"
                            value={editedTransaction.amount}
                            onChange={handleChange}
                        />
                        <TbCurrencyTenge className="text-[25px] 2xl:text-[30px] absolute top-[50%] translate-y-[-50%] left-0" color="#696969" />
                    </div>
                    <div className="relative w-full h-[50px] mb-[10px] border-b-[1px] border-[#696969]">
                        <input
                            className="w-full min-w-[95%] h-full text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal pl-[40px]"
                            type="date"
                            name="date"
                            value={editedTransaction.date}
                            max={format(new Date(), 'yyyy-MM-dd')}
                            onChange={handleChange}
                        />
                        <AiOutlineCalendar className="text-[25px] 2xl:text-[30px] absolute top-[50%] translate-y-[-50%] left-0" color="#696969" />
                    </div>
                    <div className="relative w-full h-[50px] mb-[10px] border-b-[1px] border-[#696969]">
                        <input
                            className="w-full h-full text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal pl-[40px]"
                            type="text"
                            name="description"
                            value={editedTransaction.description}
                            onChange={handleChange}
                        />
                        <BiFileBlank className="text-[25px] 2xl:text-[30px] absolute top-[50%] translate-y-[-50%] left-0" color="#696969" />
                    </div>

                    <div onClick={() => showAllCategories()} className="relative w-full h-[50px] mb-[10px] border-b-[1px] border-[#696969]">
                        <div className="w-full h-full text-[24px] font-normal pl-[40px] flex justify-between items-center relative">
                            <div className="cursor-pointer">
                                {getCategory(editedTransaction.category)}
                            </div>
                            <BsChevronDown size={20} />
                            {categoryDropDown && (
                                <div className="flex flex-col absolute top-[100%] left-0 w-full max-h-[300px] overflow-auto bg-white py-[10px] rounded-[20px] 2xl:rounded-[25px] shadow-lg z-10">
                                    {getAllCategories()}
                                </div>)}
                        </div>
                        <AiOutlineTag className="text-[25px] 2xl:text-[30px] absolute top-[50%] translate-y-[-50%] left-0" color="#696969" />
                    </div>

                    <div onClick={() => showAllPaymentMethod()} className="relative w-full h-[50px] mb-[30px]">
                        <div className="w-full h-full text-[24px] font-normal pl-[40px] flex justify-between items-center relative">
                            <div className="cursor-pointer">
                                {getPaymentMethod(editedTransaction.payment_method)}
                            </div>
                            <BsChevronDown size={20} />
                            {paymentDropDown && (
                                <div className="flex flex-col absolute top-[100%] left-0 w-full max-h-[300px] overflow-auto bg-white py-[10px] rounded-[20px] 2xl:rounded-[25px] shadow-lg z-10">
                                    {getAllPaymentMethods()}
                                </div>)}
                        </div>
                        <AiOutlineTag className="text-[25px] 2xl:text-[30px] absolute top-[50%] translate-y-[-50%] left-0" color="#696969" />
                    </div>

                    <div className='w-full flex justify-end'>
                        <button className='uppercase text-black text-[14px] lg:text-[18px] font-medium py-[5px] px-[20px] 2xl:py-[10px] 2xl:px-[40px] bg-[#BFA2E5] rounded-[20px] 2xl:rounded-[40px]' onClick={() => handleSave()}>
                            save
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditModal;