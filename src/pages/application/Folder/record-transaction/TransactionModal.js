import { useState } from 'react';

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

const TransactionModal = ({ transaction, transactionModal, setTransactionModal }) => {
    const [activeButton, setActiveButton] = useState('');

    const [selectedAmount, setSelectedAmount] = useState(0);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedDescription, setSelectedDescription] = useState('')
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);


    const handleClick = (type) => {
        if (type === 'today') {
            setSelectedDate(new Date());
            setActiveButton('today');
        } else if (type === 'yesterday') {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            setSelectedDate(yesterday);
            setActiveButton('yesterday');
        } else {
            setActiveButton('other');
        }
    };

    const handleDateChange = (date) => {
        if (isNaN(date.getTime())) {
            // If the input value is not a valid date, don't update the state
            return;
        }
        setSelectedDate(date);
        setActiveButton('other');
    };

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

    let categories;
    let color;
    if (transaction === 'income') {
        categories = incomeCategories;
        color = '#22A447';
    } else {
        categories = expenseCategories;
        color = '#E81E1E';
    }

    const handleSave = () => {
        if (selectedAmount && selectedDate && selectedCategory.name && selectedPaymentMethod) {
            let transaction = [
                {
                    date: selectedDate.toISOString().substr(0, 10),
                    category: selectedCategory,
                    description: selectedDescription,
                    payMethod: selectedPaymentMethod,
                    amount: selectedAmount
                }
            ]
        }
        // console.log(selectedAmount);
        // console.log(selectedDate);
        // console.log(selectedDescription);
        // console.log(selectedCategory.name);
        // console.log(selectedPaymentMethod);
    }

    return (
        <div className={`${transactionModal ? 'block' : 'hidden'} font-montserrat max-w-[1100px] fixed top-[5%] left-[50%] translate-x-[-50%] bg-white border-[1px] border-[#73737A] rounded-[40px] shadow-md px-[50px] py-[30px] z-20`}>
            <div className="flex justify-between items-center cursor-pointer mb-4">
                <div className="font-medium text-[32px] text-black">
                    New {transaction === 'income' ? 'Income' : 'Expense'}
                </div>
                <IoCloseOutline size={35} onClick={() => setTransactionModal(false)} />
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
                        onChange={(e) => handleDateChange(new Date(e.target.value))}
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
            <div className="w-full h-[60px] relative mb-4">
                <AiOutlineTag className="absolute top-[50%] translate-y-[-50%] left-4" size={45} />
                <div className="flex justify-between items-center w-full h-full pl-20 text-[32px] text-[#696969] font-normal border-b-[1px] border-[#696969] dropdown relative">
                    <label tabIndex={0} className="cursor-pointer">
                        {selectedCategory ? (
                            <div className='flex flex-row justify-center items-center w-full h-full'>
                                <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center mr-4" style={{ backgroundColor: selectedCategory.color }}>
                                    {selectedCategory.icon}
                                </div>
                                <div className='text-black' style={{ color: color }}>
                                    {selectedCategory.name}
                                </div>
                            </div>

                        ) : (
                            <span className="text-[#828282]">Choose Category</span>
                        )}
                    </label>
                    <BiChevronDown tabIndex={0} className="cursor-pointer" size={40} />
                    <ul tabIndex={0} className="absolute top-[100%] left-0 dropdown-content w-full max-h-[300px] overflow-auto bg-white py-[20px] px-[40px] border-[1px] border-[#696969] rounded-[50px] shadow z-10">
                        {
                            categories.map((category, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedCategory(category)}
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
                    </ul>
                </div>
            </div>
            <div className="w-full h-[60px] relative mb-12">
                <AiOutlineTag className="absolute top-[50%] translate-y-[-50%] left-4" size={45} />
                <div className="flex justify-between items-center w-full h-full pl-20 text-[32px] text-[#696969] font-normal border-b-[1px] border-[#696969] dropdown relative">
                    <label tabIndex={0} className="cursor-pointer flex justify-center items-center">
                        {selectedPaymentMethod ? (
                            selectedPaymentMethod === "Cash" ? (
                                <>
                                    <TbCoin className="mr-6" size={35} color='#000000' />
                                    <div className='text-[32px] text-black' style={{ color: color }}>Cash</div>
                                </>
                            ) : (
                                <>
                                    <AiOutlineCreditCard className="mr-6" size={35} color='#000000' />
                                    <div className='text-[32px] text-black' style={{ color: color }}>Cash</div>
                                </>
                            )
                        ) : (
                            <span className="text-[#828282]">Payment Method</span>
                        )}
                    </label>
                    <BiChevronDown tabIndex={0} className="cursor-pointer" size={40} />
                    <ul tabIndex={0} className="dropdown-content w-full bg-white py-[20px] px-[40px] border-[1px] border-[#696969] rounded-[50px] shadow absolute top-[100%] left-0 ">
                        <button onClick={() => setSelectedPaymentMethod("Cash")} className="w-full flex justify-start items-center text-[24px] font-medium text-black hover:bg-[#ecf0f1]">
                            <TbCoin className="mr-6" size={28} />
                            Cash
                        </button>
                        <div className="divider text-black text-[18px]">OR</div>
                        <button onClick={() => setSelectedPaymentMethod("Debit Card")} className="w-full flex justify-start items-center text-[24px] font-medium text-black hover:bg-[#ecf0f1]">
                            <AiOutlineCreditCard className="mr-6" size={28} />
                            Debit Card
                        </button>
                    </ul>
                </div>
            </div>
            <button onClick={handleSave} className='uppercase text-black text-[18px] font-medium py-[10px] px-[40px] bg-[#BFA2E5] rounded-[40px]'>
                save
            </button>
        </div>
    );
}

export default TransactionModal;