import { useState } from 'react';

import { TbCurrencyTenge } from 'react-icons/tb';
import { AiOutlineClose, AiOutlineCar, AiOutlineGift, AiOutlineShoppingCart, AiOutlineCalendar, AiOutlineHeart, AiOutlineTrophy } from 'react-icons/ai';
import { IoBagHandle, IoCheckmarkDone, IoEarthOutline, IoGameControllerOutline, IoLanguage } from 'react-icons/io5';
import { BsArrowRightShort, BsBookmarks, BsCheck2, BsCheckSquare, BsCoin, BsFileEarmarkText, BsFillAirplaneFill, BsHouse, BsLaptop, BsPiggyBank, BsTruck } from 'react-icons/bs';
import { BiColorFill, BiDumbbell, BiPlanet, BiWine } from 'react-icons/bi';
import { FaMicrophone, FaMugHot, FaPray, FaRegHandPeace, FaTools } from 'react-icons/fa';
import { MdOutlineBrokenImage, MdPedalBike, MdStroller } from 'react-icons/md';
import { RiBookLine, RiMedal2Fill } from 'react-icons/ri';

const CreateGoal = ({ onModalClose, addNewGoal }) => {
    const allIcons = [
        { name: 'earth', icon: <IoEarthOutline size={35} /> },
        { name: 'cart', icon: <AiOutlineShoppingCart size={35} /> },
        { name: 'coin', icon: <BsCoin size={35} /> },
        { name: 'gift', icon: <AiOutlineGift size={35} /> },
        { name: 'rest', icon: <FaPray size={35} /> },
        { name: 'pic', icon: <MdOutlineBrokenImage size={35} /> },
        { name: 'bag', icon: <IoBagHandle size={35} /> },
        { name: 'set', icon: <FaTools size={35} /> },
        { name: 'car', icon: <AiOutlineCar size={35} /> },
        { name: 'tea', icon: <FaMugHot size={35} /> },
        { name: 'plane', icon: <BsFillAirplaneFill size={35} /> },
        { name: 'saturn', icon: <BiPlanet size={35} /> },
        { name: 'laptop', icon: <BsLaptop size={35} /> },
        { name: 'micro', icon: <FaMicrophone size={35} /> },
        { name: 'buggy', icon: <MdStroller size={35} /> },
        { name: 'medal', icon: <RiMedal2Fill size={35} /> },
        { name: 'bike', icon: <MdPedalBike size={35} /> },
        { name: 'contr', icon: <IoGameControllerOutline size={35} /> },
        { name: 'wine', icon: <BiWine size={35} /> },
        { name: 'heart', icon: <AiOutlineHeart size={35} /> },
        { name: 'truck', icon: <BsTruck size={35} /> },
        { name: 'book', icon: <RiBookLine size={35} /> },
        { name: 'home', icon: <BsHouse size={35} /> },
        { name: 'champ', icon: <AiOutlineTrophy size={35} /> },
        { name: 'weight', icon: <BiDumbbell size={35} /> },
        { name: 'pig', icon: <BsPiggyBank size={35} /> },
        { name: 'lang', icon: <IoLanguage size={35} /> },
        { name: 'peace', icon: <FaRegHandPeace size={35} /> },
        { name: 'done', icon: <IoCheckmarkDone size={35} /> },
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
        { name: '#D6B3F2' },
        { name: '#F67730' },
        { name: '#ACACB1' },
        { name: '#9B5BDB' },
        { name: '#19AD50' },
    ];

    const startIcons = [
        { name: 'car', icon: <AiOutlineCar size={35} /> },
        { name: 'earth', icon: <IoEarthOutline size={35} /> },
        { name: 'cart', icon: <AiOutlineShoppingCart size={35} /> },
        { name: 'gift', icon: <AiOutlineGift size={35} /> },
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
    const [selectedDescription, setSelectedDescription] = useState('');

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
                    className="w-[50px] h-[50px] rounded-full flex justify-center items-center mr-[20px] cursor-pointer bg-opacity-50"
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
                    className='w-[50px] h-[50px] rounded-full flex justify-center items-center mr-[20px] cursor-pointer'
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
                className='p-2'>
                {icon.icon}
            </button>
        ));
    };

    const getAllColors = () => {
        return allColors.map((color, index) => (
            <div
                key={index}
                className='m-2 w-[50px] h-[50px] rounded-full cursor-pointer'
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

    let inputStyle = 'w-full h-full text-[24px] font-normal pl-[40px] border-b-[1px] border-[#696969]';

    const [iconsDropDown, setIconsDropDown] = useState(false);
    const [colorsDropDown, setColorsDropDown] = useState(false);

    const showAllColors = () => {
        setColorsDropDown(true);
        setIconsDropDown(false);
    }

    const showAllIcons = () => {
        setIconsDropDown(true);
        setColorsDropDown(false);
    }

    const saveGoal = () => {
        if (selectedName && selectedAmount && selectedTotalAmount && (selectedAmount <= selectedTotalAmount)) {
            let status = selectedAmount === selectedTotalAmount ? 'reached' : 'active';

            let newGoal = {
                user_id: JSON.parse(localStorage.getItem('userData')).id,
                name: selectedName,
                deadline: formatDate(selectedDeadline),
                initial_target_amount: selectedAmount,
                target_amount: selectedTotalAmount,
                color: selectedColor,
                icon: selectedIcon,
                description: selectedDescription,
                status: status,
            };

            addNewGoal(newGoal);
            onModalClose(false);
        }
    }

    return (
        <div className="fixed top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-20 bg-white min-w-[500px] py-[20px] px-[30px] flex flex-col justify-center border-[1px] border-[#73737A] shadow-md rounded-[40px]">
            <div className='w-full flex justify-between items-center mb-[10px]'>
                <div className="text-[32px] font-medium">
                    New Goal
                </div>
                <button
                    onClick={() => onModalClose(false)}>
                    <AiOutlineClose size={30} />
                </button>
            </div>
            <div className="relative w-full h-[50px] mb-[10px]">
                <input className={inputStyle} type="text" placeholder="Goal name" onChange={e => setSelectedName(e.target.value)} />
                <div className="absolute top-[50%] translate-y-[-50%] left-0">
                    <BsCheckSquare size={30} color="#696969" />
                </div>
            </div>
            <div className="relative w-full h-[50px] mb-[10px]">
                <input className={inputStyle} type="number" placeholder="Your current balance" onChange={e => setSelectedAmount(e.target.value)} />
                <div className="absolute top-[50%] translate-y-[-50%] left-0">
                    <TbCurrencyTenge size={30} color="#696969" />
                </div>
            </div>
            <div className="relative w-full h-[50px] mb-[10px]">
                <input className={inputStyle} type="date" placeholder="Deadline" onChange={e => setSelectedDeadline(e.target.value)} />
                <div className="absolute top-[50%] translate-y-[-50%] left-0">
                    <AiOutlineCalendar size={30} color="#696969" />
                </div>
            </div>
            <div className="relative w-full h-[50px] mb-[10px]">
                <input className={inputStyle} type="number" placeholder="Goal value" onChange={e => setSelectedTotalAmount(e.target.value)} />
                <div className="absolute top-[50%] translate-y-[-50%] left-0">
                    <TbCurrencyTenge size={30} color="#696969" />
                </div>
            </div>
            <div className='flex flex-col justify-center items-start'>
                <div className='flex justify-center items-center mb-[10px]'>
                    <BsBookmarks size={30} color="#696969" />
                    <div className='pl-4 text-[24px] font-normal'>
                        Icon
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center relative'>
                    {getIcons()}
                    <div
                        onClick={showAllIcons}
                        className="w-[50px] h-[50px] rounded-full flex justify-center items-center mr-[20px] cursor-pointer bg-[#D9D9D9] bg-opacity-50">
                        <BsArrowRightShort size={35} />
                    </div>
                    {iconsDropDown && (
                        <div className='z-20 w-full absolute left-[100%] bg-white border-[1px] border-[#AEAEAE] rounded-[30px] p-[20px]'>
                            <div className='text-[24px] font-medium'>Colors</div>
                            <div className='flex flex-wrap justify-center items-center'>
                                {getAllIcons()}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className='flex flex-col justify-center items-start mb-[10px]'>
                <div className='flex justify-center items-center mb-[10px]'>
                    <BiColorFill size={30} color="#696969" />
                    <div className='pl-4 text-[24px] font-normal'>
                        Color
                    </div>
                </div>
                <div className='flex justify-between items-center relative'>
                    {getColors()}
                    <div
                        onClick={() => showAllColors()}
                        className="w-[50px] h-[50px] rounded-full flex justify-center items-center mr-[20px] cursor-pointer bg-[#D9D9D9] bg-opacity-50">
                        <BsArrowRightShort size={35} />
                    </div>
                    {colorsDropDown && (
                        <div className='z-20 w-full absolute left-[100%] bg-white border-[1px] border-[#AEAEAE] rounded-[30px] p-[20px]'>
                            <div className='text-[24px] font-medium'>Icons</div>
                            <div className='flex flex-wrap justify-center items-center'>
                                {getAllColors()}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="relative h-[50px] mb-[10px]">
                <input className="w-full h-full text-[24px] font-normal text-[#696969] pl-[40px] border-b-[1px] border-[#696969]" type="text" placeholder="Description" onChange={e => setSelectedDescription(e.target.value)} />
                <div className="absolute top-[50%] translate-y-[-50%] left-0">
                    <BsFileEarmarkText size={30} color="#696969" />
                </div>
            </div>
            <button className='bg-[#BFA2E5] rounded-[40px] text-[24px] font-medium uppercase self-end px-4 py-1' onClick={() => saveGoal()}>
                save
            </button>
        </div>
    );
}

export default CreateGoal;