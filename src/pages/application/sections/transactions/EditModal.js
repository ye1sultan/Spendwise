import { useState } from "react";

import { AiOutlineCar, AiOutlineCreditCard, AiOutlineHeart, AiOutlineHome, AiOutlineShop, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiBookAlt } from 'react-icons/bi';
import { BsAirplaneEngines, BsChevronDown, BsLaptop, BsThreeDots } from 'react-icons/bs';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { RiRestaurant2Line } from 'react-icons/ri';
import { IoWalletSharp } from 'react-icons/io5';
import { AiOutlineGift, AiOutlineStar } from 'react-icons/ai';
import { BsCoin } from 'react-icons/bs';
import { FaPray } from 'react-icons/fa';
import { TbCoin, TbHealthRecognition } from 'react-icons/tb';

const EditModal = ({ transaction, onSave, onCancel }) => {
    const expenseCategories = [
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
    ];

    const incomeCategories = [
        { name: "Salary", icon: <IoWalletSharp size={25} color="#ffffff" />, color: "#6681DF" },
        { name: "Gift", icon: <AiOutlineGift size={25} color="#ffffff" />, color: "#B6415D" },
        { name: "Investment", icon: <AiOutlineStar size={25} color="#ffffff" />, color: "#2DB252" },
        { name: "Rewards", icon: <BsCoin size={25} color="#ffffff" />, color: "#EDBC3E" },
        { name: "Other", icon: <BsThreeDots size={25} color="#ffffff" />, color: "#AEAEAE" },
    ]

    const handleCategoryClick = (category) => {
        setEditedTransaction({ ...editedTransaction, category: category.name });
        setCategoryDropDown(false);
    }


    const handlePaymentMethodClick = (paymentMethod) => {
        setEditedTransaction({ ...editedTransaction, payMethod: paymentMethod.name });
        setPaymentDropDown(false);
    }

    const getCategory = (name) => {
        const category = transaction.type === 'income' ? incomeCategories.find((category) => category.name === name) : expenseCategories.find((category) => category.name === name);

        return (
            <div className="flex justify-start items-center pr-2">
                <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center mr-4" style={{ backgroundColor: category.color }}>
                    {category.icon}
                </div>
                {category.name}
            </div>
        );
    };

    const [categoryDropDown, setCategoryDropDown] = useState(null);

    const getAllCategories = () => {
        const ctg = transaction.type === 'income' ? incomeCategories : expenseCategories;

        return ctg.map((category, index) => (
            <button
                key={index}
                onClick={() => handleCategoryClick(category)}
                className="flex justify-start items-center py-2">
                <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center mr-4" style={{ backgroundColor: category.color }}>
                    {category.icon}
                </div>
                {category.name}
            </button>
        ));
    }

    const paymentMethods = [
        { name: "Cash", icon: <TbCoin size={25} /> },
        { name: "Debit Card", icon: <AiOutlineCreditCard size={25} /> },
    ];

    const getPaymentMethod = (name) => {
        const paymentMethod = paymentMethods.find((paymentMethod) => paymentMethod.name === name);

        return (
            <div className="flex justify-start items-center pr-2">
                <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center mr-4">
                    {paymentMethod.icon}
                </div>
                {paymentMethod.name}
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
                <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center mr-4" >
                    {paymentMethod.icon}
                </div>
                {paymentMethod.name}
            </button>
        ));
    }

    const [editedTransaction, setEditedTransaction] = useState(transaction);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditedTransaction({ ...editedTransaction, [name]: value });
    };

    const handleSave = () => {
        onSave(editedTransaction);
    };

    return (
        <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white border-[1px] border-[#AEAEAE] w-[600px] p-4 rounded-[40px] shadow-md">
            <h3 className="text-[26px] text-[#000000] font-semibold mb-4">Edit Transaction</h3>
            <div className="block">
                <span className="text-[18px] font-medium">Date</span>
                <input
                    className="px-4 block w-full h-[50px] border-b-[1px] border-[#000000] text-[18px]"
                    type="date"
                    name="date"
                    value={editedTransaction.date}
                    onChange={handleChange}
                />
            </div>
            <div
                onMouseEnter={() => setCategoryDropDown(true)}
                onMouseLeave={() => setCategoryDropDown(false)}
                className="block mt-4 relative">
                <span className="text-[18px] font-medium">Category</span>
                <div className="px-4 flex justify-start items-center w-full h-[50px] border-b-[1px] border-[#000000] text-[18px] cursor-pointer">
                    {getCategory(editedTransaction.category)}
                    <BsChevronDown size={20} />
                </div>
                <div
                    className={`z-20 absolute top-[100%] left-0 max-h-[300px] overflow-auto ${categoryDropDown ? 'flex' : 'hidden'} flex-col bg-white py-4 pl-2 pr-10 shadow rounded-[20px]`}>
                    {getAllCategories()}
                </div>
            </div>
            <div className="block mt-4">
                <span className="text-[18px] font-medium">Description</span>
                <input
                    className="px-4 block w-full h-[50px] border-b-[1px] border-[#000000] text-[18px]"
                    type="text"
                    name="description"
                    value={editedTransaction.description}
                    onChange={handleChange}
                />
            </div>
            <div
                onMouseEnter={() => setPaymentDropDown(true)}
                onMouseLeave={() => setPaymentDropDown(false)}
                className="block mt-4 relative">
                <span className="text-[18px] font-medium">Payment Method</span>
                <div className="px-4 flex justify-start items-center w-full h-[50px] border-b-[1px] border-[#000000] text-[18px] cursor-pointer">
                    {getPaymentMethod(editedTransaction.payMethod)}
                    <BsChevronDown size={20} />
                </div>
                <div
                    className={`absolute top-[100%] left-0 max-h-[300px] overflow-auto ${paymentDropDown ? 'flex' : 'hidden'} flex-col bg-white py-4 pl-2 pr-10 shadow rounded-[20px]`}>
                    {getAllPaymentMethods()}
                </div>
            </div>
            <div className="block mt-4">
                <span className="text-[18px] font-medium">Amount</span>
                <input
                    className="px-4 block w-full h-[50px] border-b-[1px] border-[#000000] text-[18px]"
                    type="number"
                    name="amount"
                    value={editedTransaction.amount}
                    onChange={handleChange}
                />
            </div>
            <div className="mt-4 flex justify-end">
                <button className="uppercase px-4 py-2 bg-[#BFA2E5]  text-[#000000] rounded-[15px] text-[18px] mr-4" onClick={handleSave}>
                    Save
                </button>
                <button className="uppercase px-4 py-2 bg-[#E3E3E3] text-[#000000] rounded-[15px] text-[18px]" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default EditModal;