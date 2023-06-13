import { useState } from 'react';

import { TbCurrencyTenge, TbIcons } from 'react-icons/tb';
import { AiOutlineClose, AiOutlineCar, AiOutlineGift, AiOutlineShoppingCart, AiOutlineCalendar, AiOutlineHeart, AiOutlineTrophy } from 'react-icons/ai';
import { IoBagHandle, IoCheckmarkDone, IoCloseOutline, IoEarthOutline, IoGameControllerOutline, IoLanguage } from 'react-icons/io5';
import { BsArrowDownShort, BsArrowRightShort, BsBookmarks, BsCheck2, BsCheckSquare, BsCoin, BsFileEarmarkText, BsFillAirplaneFill, BsHouse, BsLaptop, BsPiggyBank, BsTruck } from 'react-icons/bs';
import { BiColorFill, BiDumbbell, BiPlanet, BiWine } from 'react-icons/bi';
import { FaMicrophone, FaMugHot, FaPray, FaRegHandPeace, FaTools } from 'react-icons/fa';
import { MdOutlineBrokenImage, MdPedalBike, MdStroller } from 'react-icons/md';
import { RiBookLine, RiMedal2Fill } from 'react-icons/ri';
import { format, setDate } from 'date-fns';
import { useEffect } from 'react';

const CreateGoal = ({ onModalClose, addNewGoal }) => {
    const [iconSize, setIconSize] = useState(35);
    const [inputIconSize, setInputIconSize] = useState(30);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth >= 1024) {
            setIconSize(35);
            setInputIconSize(30);
        } else if (windowWidth >= 768) {
            setIconSize(30);
        } else {
            setInputIconSize(20);
            setIconSize(25);
        }
    }, [windowWidth]);

    const allIcons = [
        { name: 'earth', icon: <IoEarthOutline size={iconSize} /> },
        { name: 'cart', icon: <AiOutlineShoppingCart size={iconSize} /> },
        { name: 'coin', icon: <BsCoin size={iconSize} /> },
        { name: 'gift', icon: <AiOutlineGift size={iconSize} /> },
        { name: 'rest', icon: <FaPray size={iconSize} /> },
        { name: 'pic', icon: <MdOutlineBrokenImage size={iconSize} /> },
        { name: 'bag', icon: <IoBagHandle size={iconSize} /> },
        { name: 'set', icon: <FaTools size={iconSize} /> },
        { name: 'car', icon: <AiOutlineCar size={iconSize} /> },
        { name: 'tea', icon: <FaMugHot size={iconSize} /> },
        { name: 'plane', icon: <BsFillAirplaneFill size={iconSize} /> },
        { name: 'saturn', icon: <BiPlanet size={iconSize} /> },
        { name: 'laptop', icon: <BsLaptop size={iconSize} /> },
        { name: 'micro', icon: <FaMicrophone size={iconSize} /> },
        { name: 'buggy', icon: <MdStroller size={iconSize} /> },
        { name: 'medal', icon: <RiMedal2Fill size={iconSize} /> },
        { name: 'bike', icon: <MdPedalBike size={iconSize} /> },
        { name: 'contr', icon: <IoGameControllerOutline size={iconSize} /> },
        { name: 'wine', icon: <BiWine size={iconSize} /> },
        { name: 'heart', icon: <AiOutlineHeart size={iconSize} /> },
        { name: 'truck', icon: <BsTruck size={iconSize} /> },
        { name: 'book', icon: <RiBookLine size={iconSize} /> },
        { name: 'home', icon: <BsHouse size={iconSize} /> },
        { name: 'champ', icon: <AiOutlineTrophy size={iconSize} /> },
        { name: 'weight', icon: <BiDumbbell size={iconSize} /> },
        { name: 'pig', icon: <BsPiggyBank size={iconSize} /> },
        { name: 'lang', icon: <IoLanguage size={iconSize} /> },
        { name: 'peace', icon: <FaRegHandPeace size={iconSize} /> },
        { name: 'done', icon: <IoCheckmarkDone size={iconSize} /> },
    ];

    const allColors = [
        { name: 'rgba(25, 173, 80, 0.5)' },
        { name: '#E487D3' },
        { name: '#EDA2A7' },
        { name: '#F4C4A0' },
        { name: '#E61919' },
        { name: '#2B8EEA' },
        { name: '#CC6DED' },
        { name: '#568DF8' },
        { name: '#F1BF5B' },
        { name: '#EC4E4E' },
        { name: '#A3D1FB' },
        { name: '#F67730' },
        { name: '#ACACB1' },
        { name: '#9B5BDB' },
        { name: '#19AD50' },
    ];

    const startIcons = [
        { name: 'car', icon: <AiOutlineCar size={iconSize} /> },
        { name: 'earth', icon: <IoEarthOutline size={iconSize} /> },
        { name: 'cart', icon: <AiOutlineShoppingCart size={iconSize} /> },
        { name: 'gift', icon: <AiOutlineGift size={iconSize} /> },
    ];

    const startColors = [
        { name: '#19AD50' },
        { name: '#E487D3' },
        { name: '#EDA2A7' },
        { name: '#F4C4A0' },
    ];

    const [selectedName, setSelectedName] = useState('');
    const [selectedAmount, setSelectedAmount] = useState(0);
    const [selectedDeadline, setSelectedDeadline] = useState('');
    const [selectedTotalAmount, setSelectedTotalAmount] = useState(0);
    const [selectedIcon, setSelectedIcon] = useState('car');
    const [selectedColor, setSelectedColor] = useState('#A3D1FB');

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        const year = date.getFullYear();

        return `${month} ${day}, ${year}`;
    }

    const getIcons = () => {
        return startIcons.map((icon, index) => {
            const iconToDisplay = index === 0 ? allIcons.find(icon => icon.name === selectedIcon) : icon;
            const colorToDisplay = index === 0 ? 'rgba(25, 173, 80, 0.5)' : '#D9D9D9';

            return (
                <div
                    key={index}
                    className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full flex justify-center items-center mr-[10px] md:mr-[20px] cursor-pointer bg-opacity-50"
                    onClick={() => handleIconClick(icon.name)}
                    style={{
                        backgroundColor: colorToDisplay,
                    }}>
                    {iconToDisplay.icon}
                </div>
            );
        });
    }


    const getColors = () => {
        return startColors.map((color, index) => {
            const iconToDisplay = index === 0 ? <BsCheck2 size={30} /> : '';
            const colorToDisplay = index === 0 ? allColors.find(color => color.name === selectedColor) : color;

            return (
                <div
                    key={index}
                    className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full flex justify-center items-center mr-[10px] md:mr-[20px] cursor-pointer'
                    onClick={() => handleColorClick(color.name)}
                    style={{ backgroundColor: colorToDisplay.name }}>
                    {iconToDisplay}
                </div>
            );
        });
    }

    const getAllIcons = () => {
        return allIcons.map((icon, index) => (
            <button
                key={index}
                onClick={() => handleIconClick(icon.name)}
                className='p-2 hover:scale-110'>
                {icon.icon}
            </button>
        ));
    };

    const getAllColors = () => {
        return allColors.map((color, index) => (
            <div
                key={index}
                className='m-2 w-[40px] h-[40px] rounded-full cursor-pointer hover:scale-110'
                onClick={() => handleColorClick(color.name)}
                style={{ backgroundColor: color.name }}>
            </div>
        ));
    }

    const handleIconClick = (name) => {
        setSelectedIcon(name);
        setIconsDropDown(false);
    }

    const handleColorClick = (name) => {
        setSelectedColor(name);
        setColorsDropDown(false);
    }

    const [iconsDropDown, setIconsDropDown] = useState(false);
    const [colorsDropDown, setColorsDropDown] = useState(false);

    const showAllColors = () => {
        if (!colorsDropDown) {
            setColorsDropDown(true);
        } else {
            setColorsDropDown(false);
        }

        setIconsDropDown(false);
    }

    const showAllIcons = () => {
        if (!iconsDropDown) {
            setIconsDropDown(true);
        } else {
            setIconsDropDown(false);
        }

        setColorsDropDown(false);
    }

    const [nameInput, setNameInput] = useState("#696969");
    const [amountInput, setAmountInput] = useState("#696969");
    const [dateInput, setDateInput] = useState("#696969");
    const [totalInput, setTotalInput] = useState("#696969");

    const saveGoal = () => {
        if (selectedName && formatDate(selectedDeadline) && selectedTotalAmount && (selectedAmount < selectedTotalAmount) && selectedColor && selectedIcon) {
            let status = selectedAmount === selectedTotalAmount ? 'reached' : 'active';

            let newGoal = {
                name: selectedName,
                deadline: formatDate(selectedDeadline),
                initial_target_amount: selectedAmount ? selectedAmount : 0,
                target_amount: selectedTotalAmount,
                color: selectedColor,
                icon: selectedIcon,
                description: '...',
                status: status,
            };

            addNewGoal(newGoal);
            onModalClose(false);
        } else {
            if (!selectedAmount || !selectedDeadline || !selectedName || !selectedTotalAmount) {
                if (!selectedName) {
                    setNameInput("#EA1A1A")
                    setTimeout(() => setNameInput("#696969"), 2000);
                }
                if (!selectedAmount) {
                    setAmountInput("#EA1A1A")
                    setTimeout(() => setAmountInput("#696969"), 2000);
                }
                if (!selectedDeadline) {
                    setDateInput("#EA1A1A")
                    setTimeout(() => setDateInput("#696969"), 2000);
                }
                if (!selectedTotalAmount) {
                    setTotalInput("#EA1A1A")
                    setTimeout(() => setTotalInput("#696969"), 2000);
                }
            } else if (selectedTotalAmount <= selectedAmount) {
                setTotalInput("#EA1A1A")
                setTimeout(() => setTotalInput("#696969"), 2000);
                setAmountInput("#EA1A1A")
                setTimeout(() => setAmountInput("#696969"), 2000);
            }
        }
    }

    //text-lg lg:text-xl xl:text-[28px] 2xl:text-[32px] 32px
    //text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] 24px
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-start justify-center m-4 h-full z-20">
            <div className='bg-white shadow-md rounded-lg mx-4 w-full max-w-[450px] min-w-[280px] p-4'>
                <div className='w-full flex justify-between items-center mb-[10px]'>
                    <div className="text-lg lg:text-xl xl:text-[28px] 2xl:text-[32px] font-medium">
                        New Goal
                    </div>
                    <IoCloseOutline className='cursor-pointer' size={iconSize} onClick={() => onModalClose(false)} />
                </div>
                <div className="relative w-full h-[40px] md:h-[50px] mb-[10px]">
                    <input className="w-full h-full text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal pl-[40px]" type="text" placeholder="Goal name" onChange={e => setSelectedName(e.target.value)} style={{ borderBottom: `1px solid ${nameInput}` }} />
                    <div className="absolute top-[50%] translate-y-[-50%] left-0">
                        <BsCheckSquare size={inputIconSize} color="#696969" />
                    </div>
                </div>
                <div className="relative w-full h-[40px] md:h-[50px] mb-[10px]">
                    <input className="w-full h-full text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal pl-[40px]" type="number" placeholder="Your current balance" onChange={e => setSelectedAmount(e.target.value)} style={{ borderBottom: `1px solid ${amountInput}` }} />
                    <div className="absolute top-[50%] translate-y-[-50%] left-0">
                        <TbCurrencyTenge size={inputIconSize} color="#696969" />
                    </div>
                </div>
                <div className="relative w-full h-[40px] md:h-[50px] mb-[10px]">
                    <input className="w-full h-full text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal pl-[40px]" type="number" placeholder="Goal value" onChange={e => setSelectedTotalAmount(e.target.value)} style={{ borderBottom: `1px solid ${totalInput}` }} />
                    <div className="absolute top-[50%] translate-y-[-50%] left-0">
                        <TbCurrencyTenge size={inputIconSize} color="#696969" />
                    </div>
                </div>
                <div className="relative w-full h-[40px] md:h-[50px] mb-[10px]">
                    <input className="w-full min-w-[280px] h-full text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal pl-[40px] overflow-hidden" type="date" min={format(new Date(), 'yyyy-MM-dd')} placeholder="Deadline" onChange={e => setSelectedDeadline(e.target.value)} style={{ borderBottom: `1px solid ${dateInput}` }} />
                    <div className="absolute top-[50%] translate-y-[-50%] left-0">
                        <AiOutlineCalendar size={inputIconSize} color="#696969" />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-start mb-[10px]'>
                    <div className='flex justify-center items-center mb-[10px]'>
                        <TbIcons size={inputIconSize} color="#696969" />
                        <div className='pl-4 text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal'>
                            Icon
                        </div>
                    </div>
                    <div className='w-full flex flex-row justify-between items-center relative'>
                        <div className='flex'>
                            {getIcons()}
                        </div>
                        <div
                            onClick={() => showAllIcons()}
                            className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full flex justify-center items-center cursor-pointer bg-[#D9D9D9] bg-opacity-50">
                            <BsArrowDownShort size={iconSize} />
                        </div>
                        {iconsDropDown && (
                            <div className='z-20 w-full absolute top-[120%] bg-white rounded-[30px] p-[20px] shadow-lg'>
                                <div className='flex flex-wrap justify-center items-center'>
                                    {getAllIcons()}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='flex flex-col justify-center items-start mb-[30px]'>
                    <div className='flex justify-center items-center mb-[10px]'>
                        <BiColorFill size={inputIconSize} color="#696969" />
                        <div className='pl-4 text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal'>
                            Color
                        </div>
                    </div>
                    <div className='w-full flex justify-between items-center relative'>
                        <div className='flex'>
                            {getColors()}
                        </div>
                        <div
                            onClick={() => showAllColors()}
                            className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full flex justify-center items-center cursor-pointer bg-[#D9D9D9] bg-opacity-50">
                            <BsArrowDownShort size={iconSize} />
                        </div>
                        {colorsDropDown && (
                            <div className='z-20 w-full absolute top-[120%] bg-white rounded-[30px] p-[20px] shadow-lg'>
                                <div className='flex flex-wrap justify-center items-center'>
                                    {getAllColors()}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <button className='uppercase text-black text-[14px] 2xl:text-[18px] font-medium py-[5px] px-[20px] 2xl:py-[10px] 2xl:px-[40px] bg-[#BFA2E5] rounded-[20px] 2xl:rounded-[40px]' onClick={() => saveGoal()}>
                    save
                </button>
            </div>
        </div>
        // <div className="max-w-[300px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[450px] xl:max-w-[450px] 2xl:max-w-[450px] w-full fixed top-[5%] left-[50%] translate-x-[-50%] z-20 bg-white py-[20px] px-[30px] flex flex-col justify-center shadow-md rounded-[40px]">
        //     <div className='w-full flex justify-between items-center mb-[10px]'>
        //         <div className="text-lg lg:text-xl xl:text-[28px] 2xl:text-[32px] font-medium">
        //             New Goal
        //         </div>
        //         <IoCloseOutline className='cursor-pointer' size={iconSize} onClick={() => onModalClose(false)} />
        //     </div>
        //     <div className="relative w-full h-[50px] mb-[10px]">
        //         <input className="w-full h-full text-[24px] font-normal pl-[40px]" type="text" placeholder="Goal name" onChange={e => setSelectedName(e.target.value)} style={{ borderBottom: `1px solid ${nameInput}` }} />
        //         <div className="absolute top-[50%] translate-y-[-50%] left-0">
        //             <BsCheckSquare size={inputIconSize} color="#696969" />
        //         </div>
        //     </div>
        //     <div className="relative w-full h-[50px] mb-[10px]">
        //         <input className="w-full h-full text-[24px] font-normal pl-[40px]" type="number" placeholder="Your current balance" onChange={e => setSelectedAmount(e.target.value)} style={{ borderBottom: `1px solid ${amountInput}` }} />
        //         <div className="absolute top-[50%] translate-y-[-50%] left-0">
        //             <TbCurrencyTenge size={inputIconSize} color="#696969" />
        //         </div>
        //     </div>
        //     <div className="relative w-full h-[50px] mb-[10px]">
        //         <input className="w-full h-full text-[24px] font-normal pl-[40px]" type="number" placeholder="Goal value" onChange={e => setSelectedTotalAmount(e.target.value)} style={{ borderBottom: `1px solid ${totalInput}` }} />
        //         <div className="absolute top-[50%] translate-y-[-50%] left-0">
        //             <TbCurrencyTenge size={inputIconSize} color="#696969" />
        //         </div>
        //     </div>
        //     <div className="relative w-full h-[50px] mb-[10px]">
        //         <input className="w-full h-full text-[24px] font-normal pl-[40px]" type="date" min={format(new Date(), 'yyyy-MM-dd')} placeholder="Deadline" onChange={e => setSelectedDeadline(e.target.value)} style={{ borderBottom: `1px solid ${dateInput}` }} />
        //         <div className="absolute top-[50%] translate-y-[-50%] left-0">
        //             <AiOutlineCalendar size={inputIconSize} color="#696969" />
        //         </div>
        //     </div>
        //     <div className='flex flex-col justify-center items-start mb-[10px]'>
        //         <div className='flex justify-center items-center mb-[10px]'>
        //             <TbIcons size={inputIconSize} color="#696969" />
        //             <div className='pl-4 text-[24px] font-normal'>
        //                 Icon
        //             </div>
        //         </div>
        //         <div className='w-full flex flex-row justify-between items-center relative'>
        //             <div className='flex'>
        //                 {getIcons()}
        //             </div>
        //             <div
        //                 onClick={() => showAllIcons()}
        //                 className="w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer bg-[#D9D9D9] bg-opacity-50">
        //                 <BsArrowDownShort size={iconSize} />
        //             </div>
        //             {iconsDropDown && (
        //                 <div className='z-20 w-full absolute top-[120%] bg-white rounded-[30px] p-[20px] shadow-lg'>
        //                     <div className='flex flex-wrap justify-center items-center'>
        //                         {getAllIcons()}
        //                     </div>
        //                 </div>
        //             )}
        //         </div>
        //     </div>
        //     <div className='flex flex-col justify-center items-start mb-[30px]'>
        //         <div className='flex justify-center items-center mb-[10px]'>
        //             <BiColorFill size={inputIconSize} color="#696969" />
        //             <div className='pl-4 text-[24px] font-normal'>
        //                 Color
        //             </div>
        //         </div>
        //         <div className='w-full flex justify-between items-center relative'>
        //             <div className='flex'>
        //                 {getColors()}
        //             </div>
        //             <div
        //                 onClick={() => showAllColors()}
        //                 className="w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer bg-[#D9D9D9] bg-opacity-50">
        //                 <BsArrowDownShort size={iconSize} />
        //             </div>
        //             {colorsDropDown && (
        //                 <div className='z-20 w-full absolute top-[120%] bg-white rounded-[30px] p-[20px] shadow-lg'>
        //                     <div className='flex flex-wrap justify-center items-center'>
        //                         {getAllColors()}
        //                     </div>
        //                 </div>
        //             )}
        //         </div>
        //     </div>
        //     <button className='uppercase text-black text-[14px] 2xl:text-[18px] font-medium py-[5px] px-[20px] 2xl:py-[10px] 2xl:px-[40px] bg-[#BFA2E5] rounded-[20px] 2xl:rounded-[40px]' onClick={() => saveGoal()}>
        //         save
        //     </button>
        // </div>
    );
}

export default CreateGoal;