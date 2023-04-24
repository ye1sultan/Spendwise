import { useState } from 'react';
import { addDays, parseISO } from 'date-fns';

import { v4 as uuid } from 'uuid';

import { AiOutlineCalendar, AiOutlineCar, AiOutlineCreditCard, AiOutlineHeart, AiOutlineHome, AiOutlineShop, AiOutlineShoppingCart, AiOutlineTag } from 'react-icons/ai';
import { BiBookAlt, BiChevronDown, BiFileBlank } from 'react-icons/bi';
import { BsAirplaneEngines, BsLaptop, BsThreeDots } from 'react-icons/bs';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { RiRestaurant2Line } from 'react-icons/ri';
import { IoCloseOutline, IoWalletSharp } from 'react-icons/io5';
import { AiOutlineGift, AiOutlineStar } from 'react-icons/ai';
import { BsCoin } from 'react-icons/bs';
import { FaPray } from 'react-icons/fa';
import { TbCoin, TbCurrencyTenge, TbHealthRecognition } from 'react-icons/tb';

const CreateTransaction = ({ transaction, onModalClose, addNewTransaction }) => {
    const [activeButton, setActiveButton] = useState('');

    const [selectedAmount, setSelectedAmount] = useState(0);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedDescription, setSelectedDescription] = useState('')
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

    const [categoriesDropDown, setCategoriesDropDown] = useState(false);
    const [paymentDropDown, setPaymentDropDown] = useState(false);

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
    ];

    const paymentMethods = [
        { name: "Cash", icon: <TbCoin size={25} /> },
        { name: "Debit Card", icon: <AiOutlineCreditCard size={25} /> },
    ];

    const handleClick = (type) => {
        if (type === 'today') {
            setSelectedDate(new Date());
            setActiveButton('today');
        } else if (type === 'yesterday') {
            const yesterday = addDays(new Date(), -1);

            setSelectedDate(yesterday);
            setActiveButton('yesterday');
        } else {
            setActiveButton('other');
        }
    };

    const handleDateChange = (date) => {
        if (isNaN(date.getTime())) {
            return;
        }

        setSelectedDate(date);
        setActiveButton('other');
    };

    let categories = transaction === 'income' ? incomeCategories : expenseCategories;
    let color = transaction === 'income' ? '#22A447' : '#E81E1E';

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setCategoriesDropDown(false);
    }

    const handlePaymentClick = (payment) => {
        setSelectedPaymentMethod(payment);
        setPaymentDropDown(false);
    }

    const getCategory = () => {
        return (
            selectedCategory ? (
                <div className='flex flex-row justify-center items-center w-full h-full'>
                    <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center mr-4" style={{ backgroundColor: selectedCategory.color }}>
                        {selectedCategory.icon}
                    </div>
                    <div className='text-black'>
                        {selectedCategory.name}
                    </div>
                </div>
            ) : (
                <span className="text-[#828282]">Choose Category</span>
            )
        );
    }

    const getCategories = () => {
        return categories.map((category, index) => (
            <button
                key={index}
                onClick={() => handleCategoryClick(category)}
                className="w-full flex justify-start items-center text-[24px] font-medium text-black mb-2 hover:bg-[#ecf0f1]">
                <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center mr-4" style={{ backgroundColor: category.color }}>
                    {category.icon}
                </div>
                <div>
                    {category.name}
                </div>
            </button>
        ))
    }

    const getPaymentMethod = () => {
        return (
            selectedPaymentMethod ? (
                <div className='flex flex-row justify-center items-center w-full h-full'>
                    <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center mr-4">
                        {selectedPaymentMethod.icon}
                    </div>
                    <div className='text-black'>
                        {selectedPaymentMethod.name}
                    </div>
                </div>
            ) : (
                <span className="text-[#828282]">Choose Payment Method</span>
            )
        );
    }

    const getPaymentMethods = () => {
        return paymentMethods.map((method, index) => (
            <button
                key={index}
                onClick={() => handlePaymentClick(method)}
                className="w-full flex justify-start items-center text-[24px] font-medium text-black mb-2 hover:bg-[#ecf0f1]">
                <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center mr-4">
                    {method.icon}
                </div>
                <div>
                    {method.name}
                </div>
            </button>
        ))
    }

    const handleSave = () => {
        if (selectedAmount && selectedDate && selectedCategory.name && selectedPaymentMethod) {
            const newTransaction = {
                date: selectedDate.toISOString().substr(0, 10),
                category: selectedCategory.name,
                description: selectedDescription,
                payMethod: selectedPaymentMethod.name,
                amount: selectedAmount,
                type: transaction,
                id: uuid(),
            };

            // Add the new transaction to the transactions state
            addNewTransaction(newTransaction);

            console.log(newTransaction);

            onModalClose(false);
        }
    }


    return (
        <div className={"block font-montserrat max-w-[1100px] fixed top-[5%] left-[50%] translate-x-[-50%] bg-white border-[1px] border-[#73737A] rounded-[40px] shadow-md px-[50px] py-[30px] z-20"}>
            <div className="flex justify-between items-center cursor-pointer mb-4">
                <div className="font-medium text-[32px] text-black">
                    New {transaction === 'income' ? 'Income' : 'Expense'}
                </div>
                <IoCloseOutline size={35} onClick={() => onModalClose(false)} />
            </div>
            <div className="w-full h-[60px] relative mb-4">
                <TbCurrencyTenge className="absolute top-[50%] translate-y-[-50%] left-4" size={45} />
                <input
                    className="w-full h-full pl-20 text-[32px] font-normal border-b-[1px] "
                    style={{
                        color: color,
                        borderColor: color
                    }}
                    type="number"
                    placeholder="0.00 ₸"
                    value={selectedAmount}
                    onChange={(e) => setSelectedAmount(e.target.value)}
                />
            </div>

            <div className="w-full h-[60px] relative mb-4">
                <AiOutlineCalendar className="absolute top-[50%] translate-y-[-50%] left-4" size={45} />
                <div className="w-full h-full pl-20 border-b-[1px] border-[#696969] flex justify-start items-center">
                    <button
                        onClick={() => handleClick('today')}
                        className={`text-black py-[10px] px-[35px] text-[16px] font-medium rounded-[30px] mr-4 ${activeButton === 'today' ? 'text-white bg-[' + color + ']' : 'bg-[#D9D9D9] text-black'} `}>
                        {activeButton === 'today' ? selectedDate.toISOString().substr(0, 10) : 'Today'}
                    </button>
                    <button
                        onClick={() => handleClick('yesterday')}
                        className={`text-black py-[10px] px-[35px] text-[16px] font-medium rounded-[30px] mr-4 ${activeButton === 'yesterday' ? 'text-white bg-[' + color + ']' : 'bg-[#D9D9D9] text-black'} `}>
                        {activeButton === 'yesterday' ? selectedDate.toISOString().substr(0, 10) : 'Yesterday'}
                    </button>
                    <input
                        type="date"
                        value={selectedDate.toISOString().substr(0, 10)}
                        onChange={(e) => handleDateChange(parseISO(e.target.value))}
                        className={`cursor-pointer text-black py-[10px] px-[35px] text-[16px] font-medium rounded-[30px] ${activeButton === 'other' ? 'text-white bg-[' + color + ']' : 'bg-[#D9D9D9] text-black'} `}
                    />
                </div>
            </div>
            <div className="w-full h-[60px] relative mb-4">
                <BiFileBlank className="absolute top-[50%] translate-y-[-50%] left-4" size={45} />
                <input
                    className="w-full h-full pl-20 text-[32px] text-[#000000] font-normal border-b-[1px] border-[#696969]"
                    type="text"
                    placeholder="Description"
                    value={selectedDescription}
                    onChange={(e) => setSelectedDescription(e.target.value)}
                />
            </div>
            <div
                onMouseEnter={() => setCategoriesDropDown(true)}
                onMouseLeave={() => setCategoriesDropDown(false)}
                className="w-full h-[60px] relative mb-4">
                <AiOutlineTag className="absolute top-[50%] translate-y-[-50%] left-4" size={45} />
                <div className="flex justify-between items-center w-full h-full pl-20 text-[32px] text-[#696969] font-normal border-b-[1px] border-[#696969] relative">
                    <div className="cursor-pointer">
                        {getCategory()}
                    </div>
                    <BiChevronDown className="cursor-pointer" size={40} />
                    <div className={`${categoriesDropDown ? 'flex' : 'hidden'} flex-col absolute top-[100%] left-0 w-full max-h-[300px] overflow-auto bg-white py-[20px] px-[40px] border-[1px] border-[#696969] rounded-[50px] shadow z-10`}>
                        {getCategories()}
                    </div>
                </div>
            </div>
            <div
                onMouseEnter={() => setPaymentDropDown(true)}
                onMouseLeave={() => setPaymentDropDown(false)}
                className="w-full h-[60px] relative mb-4">
                <AiOutlineTag className="absolute top-[50%] translate-y-[-50%] left-4" size={45} />
                <div className="flex justify-between items-center w-full h-full pl-20 text-[32px] text-[#696969] font-normal border-b-[1px] border-[#696969] relative">
                    <div className="cursor-pointer">
                        {getPaymentMethod()}
                    </div>
                    <BiChevronDown className="cursor-pointer" size={40} />
                    <div className={`${paymentDropDown ? 'flex' : 'hidden'} flex-col absolute top-[100%] left-0 w-full max-h-[300px] overflow-auto bg-white py-[20px] px-[40px] border-[1px] border-[#696969] rounded-[50px] shadow z-10`}>
                        {getPaymentMethods()}
                    </div>
                </div>
            </div>
            <button onClick={handleSave} className='uppercase text-black text-[18px] font-medium py-[10px] px-[40px] bg-[#BFA2E5] rounded-[40px]'>
                save
            </button>
        </div>
    );
}

export default CreateTransaction;