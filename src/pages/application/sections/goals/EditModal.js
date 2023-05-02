import { updateGoal } from "../../../../services/api";

import { AiOutlineCar, AiOutlineGift, AiOutlineShoppingCart } from 'react-icons/ai';
import { IoEarthOutline } from 'react-icons/io5';
import { BsChevronDown } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineTrophy } from 'react-icons/ai';
import { IoBagHandle, IoCheckmarkDone, IoGameControllerOutline, IoLanguage } from 'react-icons/io5';
import { BsCoin, BsFillAirplaneFill, BsHouse, BsLaptop, BsPiggyBank, BsTruck } from 'react-icons/bs';
import { BiDumbbell, BiPlanet, BiWine } from 'react-icons/bi';
import { FaMicrophone, FaMugHot, FaPray, FaRegHandPeace, FaTools } from 'react-icons/fa';
import { MdOutlineBrokenImage, MdPedalBike, MdStroller } from 'react-icons/md';
import { RiBookLine, RiMedal2Fill } from 'react-icons/ri';
import { useState } from 'react';

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
        { name: '#D6B3F2' },
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
                className="p-2">
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
                className='m-2 w-[35px] h-[35px] rounded-full cursor-pointer'
                onClick={() => handleColorClick(color)}
                style={{ backgroundColor: color.name }}>
            </button>
        ));
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditedGoal({ ...editedGoal, [name]: value });
    };

    const handleSave = async () => {
        try {
            const updatedGoal = await updateGoal(goal.id, removeKeys(editedGoal, ['created_at', 'updated_at', 'id']));
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

    return (
        <div className="fixed top-[10%] left-[50%] translate-x-[-50%] bg-white border-[1px] border-[#AEAEAE] w-[600px] p-4 rounded-[40px] shadow-md">
            <h3 className="text-[26px] text-[#000000] font-semibold mb-4">Edit Goal</h3>
            <div className="block">
                <span className="text-[18px] font-medium">Name</span>
                <input
                    className="px-4 block w-full h-[50px] border-b-[1px] border-[#000000] text-[18px]"
                    type="text"
                    name="name"
                    value={editedGoal.name}
                    onChange={handleChange}
                />
            </div>
            <div className="block mt-4">
                <span className="text-[18px] font-medium">Deadline</span>
                <input
                    className="px-4 block w-full h-[50px] border-b-[1px] border-[#000000] text-[18px]"
                    type="date"
                    name="date"
                    value={editedGoal.deadline}
                    onChange={handleChange}
                />
            </div>
            <div className="block mt-4">
                <span className="text-[18px] font-medium">Amount</span>
                <input
                    className="px-4 block w-full h-[50px] border-b-[1px] border-[#000000] text-[18px]"
                    type="number"
                    name="amount"
                    value={parseInt(editedGoal.initial_target_amount)}
                    onChange={handleChange}
                />
            </div>
            <div className="block mt-4">
                <span className="text-[18px] font-medium">Total Amount</span>
                <input
                    className="px-4 block w-full h-[50px] border-b-[1px] border-[#000000] text-[18px]"
                    type="number"
                    name="totalAmount"
                    value={parseInt(editedGoal.target_amount)}
                    onChange={handleChange}
                />
            </div>
            <div className='w-full flex justify-between items-center'>
                <div
                    onMouseEnter={() => setIconDropDown(true)}
                    onMouseLeave={() => setIconDropDown(false)}
                    className="block mt-4 relative w-[49%]">
                    <span className="text-[18px] font-medium">Icons</span>
                    <div className="px-4 flex justify-start items-center w-full h-[50px] border-b-[1px] border-[#000000] text-[18px] cursor-pointer">
                        {getIcon(editedGoal.icon)}
                        <BsChevronDown size={20} />
                    </div>
                    <div
                        className={`z-20 absolute top-[100%] left-0 max-h-[300px] overflow-auto ${iconDropDown ? 'flex' : 'hidden'} flex-wrap bg-white py-4 pl-2 pr-10 shadow rounded-[20px]`}>
                        {getAllIcons()}
                    </div>
                </div>
                <div
                    onMouseEnter={() => setColorDropDown(true)}
                    onMouseLeave={() => setColorDropDown(false)}
                    className="block mt-4 relative w-[49%]">
                    <span className="text-[18px] font-medium">Colors</span>
                    <div className="px-4 flex justify-start items-center w-full h-[50px] border-b-[1px] border-[#000000] text-[18px] cursor-pointer">
                        {getColor(editedGoal.color)}
                        <BsChevronDown size={20} />
                    </div>
                    <div
                        className={`z-20 absolute top-[100%] left-0 max-h-[300px] overflow-auto ${colorDropDown ? 'flex' : 'hidden'} flex-wrap bg-white py-4 pl-2 pr-10 shadow rounded-[20px]`}>
                        {getAllColors()}
                    </div>
                </div>
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
}

export default EditModal;