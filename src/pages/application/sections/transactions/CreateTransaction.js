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
    const [iconWidth, setIconWidth] = useState(window.innerWidth < 1536 ? 15 : 25);
    const [iconMWidth, setIconMWidth] = useState(window.innerWidth < 1536 ? 25 : 45);

    const [activeButton, setActiveButton] = useState('');

    const [selectedAmount, setSelectedAmount] = useState(0);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedDescription, setSelectedDescription] = useState('')
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

    const [categoriesDropDown, setCategoriesDropDown] = useState(false);
    const [paymentDropDown, setPaymentDropDown] = useState(false);

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
    ];

    const paymentMethods = [
        { name: "Cash", icon: <TbCoin size={iconWidth} /> },
        { name: "Debit Card", icon: <AiOutlineCreditCard size={iconWidth} /> },
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
                    <div className="w-[25px] h-[25px] 2xl:w-[40px] 2xl:h-[40px] rounded-full flex justify-center items-center mr-2 2xl:mr-4" style={{ backgroundColor: selectedCategory.color }}>
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
                className="w-full flex justify-start items-center text-[16px] 2xl:text-[24px] font-medium text-black mb-2 hover:bg-[#ecf0f1]">
                <div className="w-[25px] h-[25px] 2xl:w-[40px] 2xl:h-[40px] rounded-full flex justify-center items-center mr-2 2xl:mr-4" style={{ backgroundColor: category.color }}>
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
                    <div className="w-[25px] h-[25px] 2xl:w-[40px] 2xl:h-[40px] rounded-full flex justify-center items-center mr-2 2xl:mr-4">
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
                className="w-full flex justify-start items-center 2xl:text-[24px] font-medium text-black mb-2 hover:bg-[#ecf0f1]">
                <div className="w-[25px] h-[25px] 2xl:w-[40px] 2xl:h-[40px] rounded-full flex justify-center items-center mr-2 2xl:mr-4">
                    {method.icon}
                </div>
                <div>
                    {method.name}
                </div>
            </button>
        ))
    }

    const correctAmount = (number) => {
        return transaction === 'income' ? Math.abs(number) : -Math.abs(number);
    }

    const handleSave = () => {
        if (selectedAmount && selectedDate && selectedCategory && selectedCategory.name && selectedPaymentMethod) {
            const newTransaction = {
                account_id: 1,
                category: selectedCategory.name,
                amount: correctAmount(selectedAmount),
                date: selectedDate.toISOString().substr(0, 10),
                transaction_type: transaction,
                description: selectedDescription,
                payment_method: selectedPaymentMethod.name,
            };

            addNewTransaction(newTransaction);
            console.log(newTransaction);
            onModalClose(false);
        }
    }

    return (
        <div className={"block font-montserrat min-w-[300px] 2xl:min-w-0 max-w-[350px] 2xl:max-w-[1100px] fixed top-[5%] left-[50%] translate-x-[-50%] bg-white border-[1px] border-[#73737A] rounded-[20px] 2xl:rounded-[40px] shadow-md px-[5px] py-[10px] 2xl:px-[50px] 2xl:py-[30px] z-20"}>
            <div className="flex justify-between items-center cursor-pointer mb-2 2xl:mb-4">
                <div className="font-medium text-[18px] 2xl:text-[32px]">
                    New {transaction === 'income' ? 'Income' : 'Expense'}
                </div>
                <IoCloseOutline size={35} onClick={() => onModalClose(false)} />
            </div>
            <div className="w-full h-[30px] 2xl:h-[60px] relative mb-4">
                <TbCurrencyTenge className="absolute top-[50%] translate-y-[-50%] left-2 2xl:left-4" size={iconMWidth} />
                <input
                    className="w-full h-full pl-10 2xl:pl-20 text-[18px] 2xl:text-[32px] font-normal rounded-none border-b-[1px] "
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
            <div className="w-full 2xl:h-[60px] relative 2xl:mb-4">
                <AiOutlineCalendar className="absolute top-[50%] translate-y-[-50%] left-2 2xl:left-4" size={iconMWidth} />
                <div className="w-full h-full pb-1 2xl:pb-0 pl-10 2xl:pl-20 border-b-[1px] border-[#696969] flex flex-wrap gap-2 2xl:gap-0 justify-center items-center">
                    <button
                        onClick={() => handleClick('today')}
                        className={`text-black py-[5px] px-[15px] 2xl:py-[10px] 2xl:px-[35px] text-[12px] 2xl:text-[16px] font-medium rounded-[30px] mr-4 ${activeButton === 'today' ? 'text-white bg-[' + color + ']' : 'bg-[#D9D9D9] text-black'} `}>
                        {activeButton === 'today' ? selectedDate.toISOString().substr(0, 10) : 'Today'}
                    </button>
                    <button
                        onClick={() => handleClick('yesterday')}
                        className={`hidden 2xl:block text-black py-[5px] px-[15px] 2xl:py-[10px] 2xl:px-[35px] text-[12px] 2xl:text-[16px] font-medium rounded-[30px] mr-4 ${activeButton === 'yesterday' ? 'text-white bg-[' + color + ']' : 'bg-[#D9D9D9] text-black'} `}>
                        {activeButton === 'yesterday' ? selectedDate.toISOString().substr(0, 10) : 'Yesterday'}
                    </button>
                    <input
                        type="date"
                        value={selectedDate.toISOString().substr(0, 10)}
                        onChange={(e) => handleDateChange(parseISO(e.target.value))}
                        className={`cursor-pointer text-black py-[5px] px-[15px] 2xl:py-[10px] 2xl:px-[35px] text-[12px] 2xl:text-[16px] font-medium rounded-[30px] ${activeButton === 'other' ? 'text-white bg-[' + color + ']' : 'bg-[#D9D9D9] text-black'} `}
                    />
                </div>
            </div>
            <div className="w-full h-[40px] 2xl:h-[60px] relative mb-2 2xl:mb-4">
                <BiFileBlank className="absolute top-[50%] translate-y-[-50%] left-2 2xl:left-4" size={iconMWidth} />
                <input
                    className="w-full h-full pl-10 2xl:pl-20 text-[18px] 2xl:text-[32px] text-[#000000] font-normal border-b-[1px] border-[#696969] rounded-none"
                    type="text"
                    placeholder="Description"
                    value={selectedDescription}
                    onChange={(e) => setSelectedDescription(e.target.value)}
                />
            </div>
            <div
                onMouseEnter={() => setCategoriesDropDown(true)}
                onMouseLeave={() => setCategoriesDropDown(false)}
                className="w-full h-[40px] 2xl:h-[60px] relative mb-2 2xl:mb-4">
                <AiOutlineTag className="absolute top-[50%] translate-y-[-50%] left-2 2xl:left-4" size={iconMWidth} />
                <div className="flex justify-between items-center w-full h-full pl-10 2xl:pl-20 text-[16px] 2xl:text-[32px] text-[#696969] font-normal border-b-[1px] border-[#696969] relative">
                    <div className="cursor-pointer">
                        {getCategory()}
                    </div>
                    <BiChevronDown className="cursor-pointer" size={iconMWidth} />
                    <div className={`${categoriesDropDown ? 'flex' : 'hidden'} flex-col absolute top-[100%] left-0 w-full max-h-[300px] overflow-auto bg-white py-[10px] 2xl:py-[20px] px-[40px] border-[1px] border-[#696969] rounded-[20px] 2xl:rounded-[50px] shadow z-10`}>
                        {getCategories()}
                    </div>
                </div>
            </div>
            <div
                onMouseEnter={() => setPaymentDropDown(true)}
                onMouseLeave={() => setPaymentDropDown(false)}
                className="w-full h-[40px] 2xl:h-[60px] relative mb-2 2xl:mb-4">
                <AiOutlineTag className="absolute top-[50%] translate-y-[-50%] left-2 2xl:left-4" size={iconMWidth} />
                <div className="flex justify-between items-center w-full h-full pl-10 2xl:pl-20 text-[16px] 2xl:text-[32px] text-[#696969] font-normal border-b-[1px] border-[#696969] relative">
                    <div className="cursor-pointer">
                        {getPaymentMethod()}
                    </div>
                    <BiChevronDown className="cursor-pointer" size={iconMWidth} />
                    <div className={`${paymentDropDown ? 'flex' : 'hidden'} flex-col absolute top-[100%] left-0 w-full max-h-[300px] overflow-auto bg-white py-[10px] 2xl:py-[20px] border-[1px] border-[#696969] rounded-[20px] 2xl:rounded-[50px] shadow z-10`}>
                        {getPaymentMethods()}
                    </div>
                </div>
            </div>
            <button onClick={handleSave} className='uppercase text-black text-[14px] 2xl:text-[18px] font-medium py-[5px] px-[20px] 2xl:py-[10px] 2xl:px-[40px] bg-[#BFA2E5] rounded-[20px] 2xl:rounded-[40px]'>
                save
            </button>
        </div>
    );
}

export default CreateTransaction;