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
        { name: '#F67730' },
        { name: '#ACACB1' },
        { name: '#9B5BDB' },
        { name: '#19AD50' },
    ];

    const handleIconClick = (icon) => {
        setEditedGoal({ ...editedGoal, icon: icon.name });
        setIconDropDown(false);
    }


    const handleColorClick = (color) => {
        setEditedGoal({ ...editedGoal, color: color.name });
        setColorDropDown(false);
    }

    const [colorDropDown, setColorDropDown] = useState(null);
    const [iconDropDown, setIconDropDown] = useState(null);
    const [editedGoal, setEditedGoal] = useState(goal);

    const getIcon = (name) => {
        const icon = allIcons.find((icon) => icon.name === name);

        return (
            <div className="flex justify-start items-center pr-2">
                {icon ? icon.icon : <AiOutlineCar size={35} />}
            </div>
        );
    };

    const getAllIcons = () => {
        return allIcons.map((icon, index) => (
            <button
                key={index}
                onClick={() => handleIconClick(icon)}
                className="p-2 hover:bg-[#ecf0f1]">
                {icon.icon}
            </button>
        ));
    }

    const getColor = (name) => {
        const color = allColors.find((color) => color.name === name);

        return (
            <div
                className="flex justify-start items-center mr-2 w-[40px] h-[40px] rounded-full cursor-pointer"
                style={{ backgroundColor: color ? color.name : goal.color }}></div>
        );
    };


    const getAllColors = () => {
        return allColors.map((color, index) => (
            <button
                key={index}
                className='m-2 w-[35px] h-[35px] rounded-full cursor-pointer hover:translate-x-[5%] hover:translate-y-[-5%]'
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
        try {
            const updatedGoalData = removeKeys(editedGoal, ['created_at', 'updated_at', 'id']);
            if (parseInt(updatedGoalData.initial_target_amount) >= parseInt(updatedGoalData.target_amount)) {
                updatedGoalData.status = 'reached';
            }
            const updatedGoal = await updateGoal(goal.id, updatedGoalData);
            onSave(updatedGoal);
        } catch (error) {
            console.error("Error updating goals:", error);
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

    let inputStyle = 'w-full h-full text-[24px] font-normal pl-[40px] border-b-[1px] border-[#696969]';

    return (
        <div className="fixed top-[5%] left-[50%] translate-x-[-50%] z-20 bg-white py-[20px] px-[30px] flex flex-col justify-center shadow-md rounded-[40px]">
            <div className='w-full flex justify-between items-center mb-[10px]'>
                <div className="text-[32px] font-medium">
                    Edit Goal
                </div>
                <IoCloseOutline className='cursor-pointer' size={35} onClick={onCancel} />
            </div>
            <div className="relative w-full h-[50px] mb-[10px]">
                <input
                    className={inputStyle}
                    type="text"
                    name="name"
                    value={editedGoal.name}
                    onChange={handleChange}
                />
                <div className="absolute top-[50%] translate-y-[-50%] left-0">
                    <BsCheckSquare size={30} color="#696969" />
                </div>
            </div>
            <div className="relative w-full h-[50px] mb-[10px]">
                <input
                    className={inputStyle}
                    type="number"
                    name="initial_target_amount"
                    value={parseInt(editedGoal.initial_target_amount)}
                    onChange={handleChange}
                />
                <div className="absolute top-[50%] translate-y-[-50%] left-0">
                    <TbCurrencyTenge size={30} color="#696969" />
                </div>
            </div>
            <div className="relative w-full h-[50px] mb-[10px]">
                <input
                    className={inputStyle}
                    type="date"
                    name="deadline"
                    min={format(new Date(), 'yyyy-MM-dd')}
                    value={formatDate(editedGoal.deadline)}
                    onChange={handleChange}
                />
                <div className="absolute top-[50%] translate-y-[-50%] left-0">
                    <AiOutlineCalendar size={30} color="#696969" />
                </div>
            </div>
            <div className="relative w-full h-[50px] mb-[10px]">
                <input
                    className={inputStyle}
                    type="number"
                    name="target_amount"
                    value={parseInt(editedGoal.target_amount)}
                    onChange={handleChange}
                />
                <div className="absolute top-[50%] translate-y-[-50%] left-0">
                    <TbCurrencyTenge size={30} color="#696969" />
                </div>
            </div>
            <div
                onMouseEnter={() => setIconDropDown(true)}
                onMouseLeave={() => setIconDropDown(false)}
                className="relative w-full flex justify-start items-center h-[50px] border-b-[1px] border-[#696969] mb-[10px]">
                <TbIcons size={30} color="#696969" />
                <div className="flex justify-start items-center w-full h-[50px] text-[18px] cursor-pointer pl-[20px]">
                    {getIcon(editedGoal.icon)}
                    <BsChevronDown size={20} />
                </div>
                <div
                    className={`z-20 absolute top-[100%] left-0 max-h-[300px] overflow-auto ${iconDropDown ? 'flex' : 'hidden'} flex-wrap bg-white py-4 pl-2 pr-10 shadow rounded-[25px] border-[1px] border-black`}>
                    {getAllIcons()}
                </div>
            </div>
            <div
                onMouseEnter={() => setColorDropDown(true)}
                onMouseLeave={() => setColorDropDown(false)}
                className="relative w-full flex justify-start items-center h-[50px] mb-[30px]">
                <BiColorFill size={30} color="#696969" />
                <div className="flex justify-start items-center w-full h-[50px] text-[18px] cursor-pointer pl-[20px]">
                    {getColor(editedGoal.color)}
                    <BsChevronDown size={20} />
                </div>
                <div
                    className={`z-20 absolute top-[100%] left-0 max-h-[300px] overflow-auto ${colorDropDown ? 'flex' : 'hidden'} flex-wrap bg-white py-4 pl-2 pr-10 shadow rounded-[25px] border-[1px] border-black`}>
                    {getAllColors()}
                </div>
            </div>
            <button className="uppercase text-black text-[14px] 2xl:text-[18px] font-medium py-[5px] px-[20px] 2xl:py-[10px] 2xl:px-[40px] bg-[#BFA2E5] rounded-[20px] 2xl:rounded-[40px]" onClick={handleSave}>
                Save
            </button>
        </div>
    );
}

export default EditModal;