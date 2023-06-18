import { updateGoal } from "../../../../services/api";

import { AiOutlineCalendar, AiOutlineCar, AiOutlineGift, AiOutlineShoppingCart } from 'react-icons/ai';
import { IoCloseOutline, IoEarthOutline } from 'react-icons/io5';
import { BsCheckSquare, BsChevronDown } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineTrophy } from 'react-icons/ai';
import { IoBagHandle, IoCheckmarkDone, IoGameControllerOutline, IoLanguage } from 'react-icons/io5';
import { BsCoin, BsFillAirplaneFill, BsHouse, BsLaptop, BsPiggyBank, BsTruck } from 'react-icons/bs';
import { BiColorFill, BiDumbbell, BiPlanet, BiWine } from 'react-icons/bi';
import { FaMicrophone, FaMugHot, FaPray, FaRegHandPeace, FaTools } from 'react-icons/fa';
import { MdOutlineBrokenImage, MdPedalBike, MdStroller } from 'react-icons/md';
import { RiBookLine, RiMedal2Fill } from 'react-icons/ri';
import { useState } from 'react';
import { format } from "date-fns";
import { TbCurrencyTenge, TbIcons } from "react-icons/tb";

const EditModal = ({ goal, onSave, onCancel }) => {
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

    const [colorsDropDown, setColorsDropDown] = useState(null);
    const [iconsDropDown, setIconsDropDown] = useState(null);

    const handleIconClick = (icon) => {
        setEditedGoal({ ...editedGoal, icon: icon.name });
        setIconsDropDown(false);
    }

    const handleColorClick = (color) => {
        setEditedGoal({ ...editedGoal, color: color.name });
        setColorsDropDown(false);
    }

    const [editedGoal, setEditedGoal] = useState(goal);

    const getIcon = (name) => {
        const icon = allIcons.find((icon) => icon.name === name);

        return (
            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full bg-[#D9D9D9] bg-opacity-50 flex justify-center items-center mr-2">
                {icon ? icon.icon : <AiOutlineCar className="text-[25px] md:text-[30px] lg:text-[35px]" />}
            </div>
        );
    };

    const getAllIcons = () => {
        return allIcons.map((icon, index) => (
            <button
                key={index}
                onClick={() => handleIconClick(icon)}
                className="p-2 hover:scale-110">
                {icon.icon}
            </button>
        ));
    }

    const getColor = (name) => {
        const color = allColors.find((color) => color.name === name);

        return (
            <div
                className="w-[40px] h-[40px] md:w-[45px] md:h-[45px] flex justify-start items-center rounded-full cursor-pointer mr-2"
                style={{ backgroundColor: color ? color.name : goal.color }}></div>
        );
    };


    const getAllColors = () => {
        return allColors.map((color, index) => (
            <button
                key={index}
                className='m-2 w-[35px] h-[35px] rounded-full cursor-pointer hover:scale-110'
                onClick={() => handleColorClick(color)}
                style={{ backgroundColor: color.name }}>
            </button>
        ));
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        let updatedGoal = { ...editedGoal, [name]: value };

        if (name === "initial_target_amount" || name === "target_amount") {
            if (parseInt(updatedGoal.initial_target_amount) >= parseInt(updatedGoal.target_amount)) {
                updatedGoal = { ...updatedGoal, status: "reached" };
            } else {
                updatedGoal = { ...updatedGoal, status: updatedGoal.status };
            }
        }

        setEditedGoal(updatedGoal);
    };

    const handleSave = async () => {
        if (goal === editedGoal) {
            onCancel();
        } else {
            try {
                const updatedGoalData = removeKeys(editedGoal, ['created_at', 'updated_at', 'id']);
                if (parseInt(updatedGoalData.initial_target_amount) >= parseInt(updatedGoalData.target_amount)) {
                    updatedGoalData.status = 'reached';
                }
                const updatedGoal = await updateGoal(goal.id, updatedGoalData);
                onSave(updatedGoal);
                console.log("GOAL UPDATED!");
            } catch (error) {
                console.error("Error updating goals:", error);
            }
        }
    };

    const removeKeys = (obj, keysToRemove) => {
        const newObj = { ...obj };
        keysToRemove.forEach((key) => {
            delete newObj[key];
        });

        return newObj;
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const showAllIcons = () => {
        if (!iconsDropDown) {
            setIconsDropDown(true);
        } else {
            setIconsDropDown(false);
        }

        setColorsDropDown(false);
    }

    const showAllColors = () => {
        if (!colorsDropDown) {
            setColorsDropDown(true);
        } else {
            setColorsDropDown(false);
        }

        setIconsDropDown(false);
    }

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-start justify-center m-6 h-full z-20">
            <div className='bg-white shadow-md rounded-[30px] xl:rounded-[40px] mx-4 w-full max-w-[350px] xl:max-w-[400px] min-w-[280px] p-6 xl:p-8'>
                <div className='w-full flex justify-between items-center mb-[20px]'>
                    <div className="text-xl xl:text-[28px] 2xl:text-[32px] font-medium">
                        Edit Goal
                    </div>
                    <IoCloseOutline className='cursor-pointer text-[25px] md:text-[30px] lg:text-[35px]' onClick={() => onCancel()} />
                </div>
                <div className="relative w-full h-[40px] md:h-[50px] mb-[10px] border-b-[1px] border-[#696969]">
                    <input
                        className="w-full h-full text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal pl-[40px]"
                        type="text"
                        name="name"
                        value={editedGoal.name}
                        onChange={handleChange}
                    />
                    <BsCheckSquare className="absolute top-[50%] translate-y-[-50%] left-0 text-[20px] lg:text-[30px]" color="#696969" />
                </div>
                <div className="relative w-full h-[40px] md:h-[50px] mb-[10px] border-b-[1px] border-[#696969]">
                    <input
                        className="w-full h-full text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal pl-[40px]"
                        type="number"
                        name="initial_target_amount"
                        value={parseInt(editedGoal.initial_target_amount)}
                        onChange={handleChange}
                    />
                    <TbCurrencyTenge className="absolute top-[50%] translate-y-[-50%] left-0 text-[20px] lg:text-[30px]" color="#696969" />
                </div>
                <div className="relative w-full h-[40px] md:h-[50px] mb-[10px] border-b-[1px] border-[#696969]">
                    <input
                        className="w-full h-full text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal pl-[40px]"
                        type="number"
                        name="target_amount"
                        value={parseInt(editedGoal.target_amount)}
                        onChange={handleChange}
                    />
                    <TbCurrencyTenge className="absolute top-[50%] translate-y-[-50%] left-0 text-[20px] lg:text-[30px]" color="#696969" />
                </div>
                <div className="relative w-full h-[40px] md:h-[50px] mb-[20px] border-b-[1px] border-[#696969]">
                    <input
                        className="w-full min-w-[95%] h-full text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal pl-[40px]"
                        type="date"
                        name="deadline"
                        min={format(new Date(), 'yyyy-MM-dd')}
                        value={formatDate(editedGoal.deadline)}
                        onChange={handleChange}
                    />
                    <AiOutlineCalendar className="absolute top-[50%] translate-y-[-50%] left-0 text-[20px] lg:text-[30px]" color="#696969" />
                </div>
                <div className="relative w-full flex justify-between items-center h-[50px] mb-[30px]">
                    <div
                        onClick={() => showAllIcons()}
                        className="flex justify-start items-center">
                        <TbIcons className="text-[20px] lg:text-[30px]" color="#696969" />
                        <div className="flex justify-start items-center w-full h-[50px] text-[18px] cursor-pointer pl-[20px]">
                            {getIcon(editedGoal.icon)}
                            <BsChevronDown size={20} />
                        </div>
                        {iconsDropDown && (
                            <div className='z-20 w-full absolute left-0 top-[120%] bg-white rounded-[30px] p-[20px] shadow-lg'>
                                <div className='flex flex-wrap justify-center items-center'>
                                    {getAllIcons()}
                                </div>
                            </div>
                        )}
                    </div>
                    <div
                        onClick={() => showAllColors()}
                        className="flex justify-start items-center">
                        <BiColorFill className="text-[20px] lg:text-[30px]" color="#696969" />
                        <div className="flex justify-start items-center w-full h-[50px] text-[18px] cursor-pointer pl-[20px]">
                            {getColor(editedGoal.color)}
                            <BsChevronDown size={20} />
                        </div>
                        {colorsDropDown && (
                            <div className='z-20 w-full absolute left-0 top-[120%] bg-white rounded-[30px] p-[20px] shadow-lg'>
                                <div className='flex flex-wrap justify-center items-center'>
                                    {getAllColors()}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='w-full flex justify-end'>
                    <button className='uppercase text-black text-[14px] lg:text-[18px] font-medium py-[5px] px-[20px] 2xl:py-[10px] 2xl:px-[40px] bg-[#BFA2E5] rounded-[20px] 2xl:rounded-[40px]' onClick={() => handleSave()}>
                        save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditModal;