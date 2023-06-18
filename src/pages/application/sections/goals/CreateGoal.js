import { useState } from 'react';

import { TbCurrencyTenge, TbIcons } from 'react-icons/tb';
import { AiOutlineCar, AiOutlineGift, AiOutlineShoppingCart, AiOutlineCalendar, AiOutlineHeart, AiOutlineTrophy } from 'react-icons/ai';
import { IoBagHandle, IoCheckmarkDone, IoCloseOutline, IoEarthOutline, IoGameControllerOutline, IoLanguage } from 'react-icons/io5';
import { BsArrowDownShort, BsCheck2, BsCheckSquare, BsCoin, BsFillAirplaneFill, BsHouse, BsLaptop, BsPiggyBank, BsTruck } from 'react-icons/bs';
import { BiColorFill, BiDumbbell, BiPlanet, BiWine } from 'react-icons/bi';
import { FaMicrophone, FaMugHot, FaPray, FaRegHandPeace, FaTools } from 'react-icons/fa';
import { MdOutlineBrokenImage, MdPedalBike, MdStroller } from 'react-icons/md';
import { RiBookLine, RiMedal2Fill } from 'react-icons/ri';
import { format } from 'date-fns';

const CreateGoal = ({ onModalClose, addNewGoal }) => {
    const allIcons = [
        { name: 'earth', icon: <IoEarthOutline className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'cart', icon: <AiOutlineShoppingCart className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'coin', icon: <BsCoin className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'gift', icon: <AiOutlineGift className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'rest', icon: <FaPray className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'pic', icon: <MdOutlineBrokenImage className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'bag', icon: <IoBagHandle className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'set', icon: <FaTools className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'car', icon: <AiOutlineCar className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'tea', icon: <FaMugHot className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'plane', icon: <BsFillAirplaneFill className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'saturn', icon: <BiPlanet className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'laptop', icon: <BsLaptop className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'micro', icon: <FaMicrophone className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'buggy', icon: <MdStroller className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'medal', icon: <RiMedal2Fill className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'bike', icon: <MdPedalBike className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'contr', icon: <IoGameControllerOutline className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'wine', icon: <BiWine className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'heart', icon: <AiOutlineHeart className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'truck', icon: <BsTruck className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'book', icon: <RiBookLine className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'home', icon: <BsHouse className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'champ', icon: <AiOutlineTrophy className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'weight', icon: <BiDumbbell className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'pig', icon: <BsPiggyBank className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'lang', icon: <IoLanguage className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'peace', icon: <FaRegHandPeace className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'done', icon: <IoCheckmarkDone className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
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
        { name: 'car', icon: <AiOutlineCar className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'earth', icon: <IoEarthOutline className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'cart', icon: <AiOutlineShoppingCart className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
        { name: 'gift', icon: <AiOutlineGift className="text-[25px] md:text-[30px] lg:text-[35px]" /> },
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
                    className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full flex justify-center items-center mr-[10px] xl:mr-[20px] cursor-pointer bg-opacity-50"
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
                    className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full flex justify-center items-center mr-[10px] xl:mr-[20px] cursor-pointer'
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
                className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full cursor-pointer m-2 hover:scale-110'
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

    const saveGoal = () => {
        if (selectedName && formatDate(selectedDeadline) && selectedTotalAmount && (parseInt(selectedAmount) < parseInt(selectedTotalAmount)) && selectedColor && selectedIcon) {
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
        }
    }

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-start justify-center m-6 h-full z-20">
            <div className='bg-white shadow-md rounded-[30px] xl:rounded-[40px] mx-4 w-full max-w-[350px] xl:max-w-[400px] min-w-[280px] p-6 xl:p-8'>
                <div className='w-full flex justify-between items-center mb-[20px]'>
                    <div className="text-xl xl:text-[28px] 2xl:text-[32px] font-medium">
                        New Goal
                    </div>
                    <IoCloseOutline className='cursor-pointer text-[25px] md:text-[30px] lg:text-[35px]' onClick={() => onModalClose(false)} />
                </div>
                <div className="relative w-full h-[40px] md:h-[50px] mb-[10px] border-b-[1px] border-[#696969]">
                    <input
                        className="w-full h-full text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal pl-[40px] placeholder:text-[#6A6A6A]"
                        type="text"
                        placeholder="Goal name"
                        onChange={e => setSelectedName(e.target.value)} />
                    <BsCheckSquare className='absolute top-[50%] translate-y-[-50%] left-0 text-[20px] lg:text-[30px]' color="#696969" />
                </div>
                <div className="relative w-full h-[40px] md:h-[50px] mb-[10px] border-b-[1px] border-[#696969]">
                    <input
                        className="w-full h-full text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal pl-[40px] placeholder:text-[#6A6A6A]"
                        type="number"
                        placeholder="Your current balance"
                        onChange={e => setSelectedAmount(e.target.value)} />
                    <TbCurrencyTenge className='absolute top-[50%] translate-y-[-50%] left-0 text-[20px] lg:text-[30px]' color="#696969" />
                </div>
                <div className="relative w-full h-[40px] md:h-[50px] mb-[10px] border-b-[1px] border-[#696969]">
                    <input
                        className="w-full h-full text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal pl-[40px] placeholder:text-[#6A6A6A]"
                        type="number"
                        placeholder="Goal value"
                        onChange={e => setSelectedTotalAmount(e.target.value)} />
                    <TbCurrencyTenge className='absolute top-[50%] translate-y-[-50%] left-0 text-[20px] lg:text-[30px]' color="#696969" />
                </div>
                <div className="relative w-full h-[40px] md:h-[50px] mb-[10px] border-b-[1px] border-[#696969]">
                    <input
                        className="w-full min-w-[95%] h-full text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal pl-[40px] placeholder:text-[#6A6A6A]"
                        type="date"
                        min={format(new Date(), 'yyyy-MM-dd')}
                        placeholder="Deadline"
                        onChange={e => setSelectedDeadline(e.target.value)} />
                    <AiOutlineCalendar className='absolute top-[50%] translate-y-[-50%] left-0 text-[20px] lg:text-[30px] ' color="#696969" />
                </div>
                <div className='flex flex-col justify-center items-start mb-[10px]'>
                    <div className='flex justify-center items-center mb-[10px]'>
                        <TbIcons className='text-[20px] lg:text-[30px]' color="#696969" />
                        <div className='pl-4 text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal'>
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
                            <BsArrowDownShort className='text-[25px] md:text-[30px] lg:text-[35px]' />
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
                        <BiColorFill className='text-[20px] lg:text-[30px]' color="#696969" />
                        <div className='pl-4 text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal'>
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
                            <BsArrowDownShort className='text-[25px] md:text-[30px] lg:text-[35px]' />
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
                <div className='w-full flex justify-end'>
                    <button className='uppercase text-black text-[14px] lg:text-[18px] font-medium py-[5px] px-[20px] 2xl:py-[10px] 2xl:px-[40px] bg-[#BFA2E5] rounded-[20px] 2xl:rounded-[40px]' onClick={() => saveGoal()}>
                        save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateGoal;