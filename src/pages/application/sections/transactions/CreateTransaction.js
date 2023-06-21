import { useState } from 'react';
import { format, parseISO } from 'date-fns';
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
import { useTranslation } from 'react-i18next';

const CreateTransaction = ({ transaction, onModalClose, addNewTransaction }) => {
    const { t, i18n } = useTranslation();
    //t(`dashboard.pie.category.${category}`)
    const [selectedAmount, setSelectedAmount] = useState(0);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedDescription, setSelectedDescription] = useState('')
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

    const [categoriesDropDown, setCategoriesDropDown] = useState(false);
    const [paymentDropDown, setPaymentDropDown] = useState(false);

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
        { name: "Cash", icon: <TbCoin className="text-[15px] 2xl:text-[25px]" /> },
        { name: "Debit Card", icon: <AiOutlineCreditCard className="text-[15px] 2xl:text-[25px]" /> },
    ];

    const handleDateChange = (date) => {
        if (isNaN(date.getTime())) {
            return;
        }

        setSelectedDate(date);
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
                    <div className='flex items-center text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal'>
                        {t(`dashboard.pie.category.${selectedCategory.name}`)}
                    </div>
                </div>
            ) : (
                <span className="flex items-center text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal">{t("trn.bar.category")}</span>
            )
        );
    }

    const getCategories = () => {
        return categories.map((category, index) => (
            <button
                key={index}
                onClick={() => handleCategoryClick(category)}
                className="w-full flex justify-start items-center mb-2 hover:bg-[#ecf0f1] pl-[30px]">
                <div className="w-[25px] h-[25px] 2xl:w-[40px] 2xl:h-[40px] rounded-full flex justify-center items-center mr-2 2xl:mr-4" style={{ backgroundColor: category.color }}>
                    {category.icon}
                </div>
                <div className='flex items-center text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal'>
                    {t(`dashboard.pie.category.${category.name}`)}
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
                    <div className='flex items-center text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal'>
                        {t(`trn.method.${selectedPaymentMethod.name}`)}
                    </div>
                </div>
            ) : (
                <span className="flex items-center text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal">{t("trn.bar.type")}</span>
            )
        );
    }

    const getPaymentMethods = () => {
        return paymentMethods.map((method, index) => (
            <button
                key={index}
                onClick={() => handlePaymentClick(method)}
                className="w-full flex justify-start items-center 2xl:text-[24px] mb-2 hover:bg-[#ecf0f1] pl-[30px]">
                <div className="w-[25px] h-[25px] 2xl:w-[40px] 2xl:h-[40px] rounded-full flex justify-center items-center mr-2 2xl:mr-4">
                    {method.icon}
                </div>
                <div className='flex items-center text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal'>
                    {t(`trn.method.${method.name}`)}
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
                date: format(selectedDate, 'yyyy-MM-dd'),
                transaction_type: transaction,
                description: selectedDescription ? selectedDescription : '...',
                payment_method: selectedPaymentMethod.name,
            };

            addNewTransaction(newTransaction);
            onModalClose(false);
        }
    }

    const showAllCategories = () => {
        if (!categoriesDropDown) {
            setCategoriesDropDown(true);
        } else {
            setCategoriesDropDown(false);
        }

        setPaymentDropDown(false);
    }

    const showAllPaymentMethod = () => {
        if (!paymentDropDown) {
            setPaymentDropDown(true);
        } else {
            setPaymentDropDown(false);
        }

        setCategoriesDropDown(false);
    }

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-start justify-center m-6 h-full z-20">
            <div className={`${localStorage.getItem("mode") === "Light Mode" ? 'bg-white' : 'bg-[#BCB8B8]'} ${localStorage.getItem("mode") === "Light Mode" ? 'text-[#2c3e50]' : 'text-white'}  shadow-md rounded-[30px] xl:rounded-[40px] mx-4 w-full max-w-[350px] xl:max-w-[400px] min-w-[280px] p-6 xl:p-8`}>
                <div className='w-full flex justify-between items-center mb-[20px]'>
                    <div className="text-xl xl:text-[28px] 2xl:text-[32px] font-medium capitalize">
                        {t("trn.new")} <span style={{ color: color }}>{transaction === 'income' ? t("trn.income") : t("trn.expense")}</span>
                    </div>
                    <IoCloseOutline className='cursor-pointer text-[25px] md:text-[30px] lg:text-[35px]' onClick={() => onModalClose(false)} />
                </div>
                <div className="relative w-full h-[40px] md:h-[50px] mb-[10px] border-b-[1px] border-[#696969]">
                    <input
                        className={`${localStorage.getItem("mode") === "Light Mode" ? 'bg-white' : 'bg-[#BCB8B8]'} w-full h-full text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal pl-[40px] ${localStorage.getItem("mode") === "Light Mode" ? 'placehodler:text-[#696969]' : 'placeholder:text-white'}`}
                        style={{ color: color, borderColor: color }}
                        type="number"
                        placeholder="0.00 ₸"
                        onChange={(e) => setSelectedAmount(e.target.value)}
                    />
                    <TbCurrencyTenge className="text-[25px] 2xl:text-[30px] absolute top-[50%] translate-y-[-50%] left-0" color="#696969" />
                </div>
                <div className="relative w-full h-[40px] md:h-[50px] mb-[10px] border-b-[1px] border-[#696969]">
                    <input
                        className={`${localStorage.getItem("mode") === "Light Mode" ? 'bg-white' : 'bg-[#BCB8B8]'} min-w-[95%] w-full h-full text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal pl-[40px] placeholder:text-[#6A6A6A]`}
                        type="date"
                        max={format(new Date(), 'yyyy-MM-dd')}
                        onChange={(e) => handleDateChange(parseISO(e.target.value))} />
                    <AiOutlineCalendar className="text-[25px] 2xl:text-[30px] absolute top-[50%] translate-y-[-50%] left-0" color="#696969" />
                </div>
                <div className="relative w-full h-[40px] md:h-[50px] mb-[10px] border-b-[1px] border-[#696969]">
                    <input
                        className={`${localStorage.getItem("mode") === "Light Mode" ? 'bg-white' : 'bg-[#BCB8B8]'} w-full h-full text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal pl-[40px] ${localStorage.getItem("mode") === "Light Mode" ? 'placehodler:text-[#696969]' : 'placeholder:text-white'}`}
                        type="text"
                        placeholder={t("trn.bar.description")}
                        value={selectedDescription}
                        onChange={(e) => setSelectedDescription(e.target.value)}
                    />
                    <BiFileBlank className="text-[25px] 2xl:text-[30px] absolute top-[50%] translate-y-[-50%] left-0" color="#696969" />
                </div>

                <div onClick={() => showAllCategories()} className="relative w-full h-[40px] md:h-[50px] mb-[10px]">
                    <div className="w-full h-full text-[24px] font-normal pl-[40px] border-b-[1px] border-[#696969] flex justify-between items-center relative">
                        <div className="cursor-pointer">
                            {getCategory()}
                        </div>
                        <BiChevronDown className={`cursor-pointer ${categoriesDropDown ? 'rotate-180' : 'rotate-0'} text-[25px] 2xl:text-[30px]`} />
                        {categoriesDropDown && (
                            <div className={`flex flex-col absolute top-[100%] left-0 w-full max-h-[300px] overflow-auto ${localStorage.getItem("mode") === "Light Mode" ? 'bg-white' : 'bg-[#BCB8B8]'} py-[10px] rounded-[20px] 2xl:rounded-[25px] shadow-lg z-10`}>
                                {getCategories()}
                            </div>)}
                    </div>
                    <AiOutlineTag className="text-[25px] 2xl:text-[30px] absolute top-[50%] translate-y-[-50%] left-0" color="#696969" />
                </div>

                <div onClick={() => showAllPaymentMethod()} className="relative w-full h-[40px] md:h-[50px] mb-[10px]">
                    <div className="w-full h-full text-[24px] font-normal pl-[40px] flex justify-between items-center relative">
                        <div className="cursor-pointer">
                            {getPaymentMethod()}
                        </div>
                        <BiChevronDown className={`cursor-pointer ${paymentDropDown ? 'rotate-180' : 'rotate-0'} text-[25px] 2xl:text-[30px]`} />
                        {paymentDropDown && (
                            <div className={`${localStorage.getItem("mode") === "Light Mode" ? 'bg-white' : 'bg-[#BCB8B8]'} flex flex-col absolute top-[100%] left-0 w-full max-h-[300px] overflow-auto py-[10px] rounded-[20px] 2xl:rounded-[25px] shadow-lg z-10`}>
                                {getPaymentMethods()}
                            </div>)}
                    </div>
                    <AiOutlineTag className="text-[25px] 2xl:text-[30px] absolute top-[50%] translate-y-[-50%] left-0" color="#696969" />
                </div>
                <div className='w-full flex justify-end'>
                    <button className='uppercase text-black text-[14px] lg:text-[18px] font-medium py-[5px] px-[20px] 2xl:py-[10px] 2xl:px-[40px] bg-[#BFA2E5] rounded-[20px] 2xl:rounded-[40px]' onClick={() => handleSave()}>
                        {t("trn.save")}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateTransaction;
