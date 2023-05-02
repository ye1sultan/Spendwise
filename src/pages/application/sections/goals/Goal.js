import { AiFillDelete, AiOutlineCar, AiOutlineGift, AiOutlineShoppingCart } from 'react-icons/ai';
import { IoEarthOutline } from 'react-icons/io5';
import { BsCheckAll, BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs';
import { MdModeEditOutline } from 'react-icons/md';

import { AiOutlineHeart, AiOutlineTrophy } from 'react-icons/ai';
import { IoBagHandle, IoCheckmarkDone, IoGameControllerOutline, IoLanguage } from 'react-icons/io5';
import { BsCoin, BsFillAirplaneFill, BsHouse, BsLaptop, BsPiggyBank, BsTruck } from 'react-icons/bs';
import { BiDumbbell, BiPlanet, BiWine } from 'react-icons/bi';
import { FaMicrophone, FaMugHot, FaPray, FaRegHandPeace, FaTools } from 'react-icons/fa';
import { MdOutlineBrokenImage, MdPedalBike, MdStroller } from 'react-icons/md';
import { RiBookLine, RiMedal2Fill } from 'react-icons/ri';

const Goal = ({ goal, name, icon, deadline, target_amount, initial_target_amount, color, id, status, onPauseGoal, onDeleteGoal, onReachGoal, onEditGoal }) => {
    let fixedAmount = status === 'reached' ? target_amount : initial_target_amount;

    const getPercent = (initial_target_amount, target_amount) => {
        let res = parseFloat(((initial_target_amount / target_amount) * 100).toFixed(2));
        return res;
    }

    let progress = getPercent(fixedAmount, target_amount);

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

    const getIconComponent = (iconPrompt) => {
        const foundIcon = allIcons.find((iconObj) => iconObj.name === iconPrompt);

        // Define your default icon component here
        const DefaultIconComponent = <AiOutlineCar size={35} />; // Replace "DefaultIcon" with your desired default icon component

        return foundIcon ? foundIcon.icon : DefaultIconComponent;
    };

    const iconComponent = getIconComponent(icon);

    return (
        <div className="w-[530px] h-[315px] bg-white rounded-[40px] border-[1px] border-[#CED4DA] m-[30px] p-[30px] flex flex-col justify-between items-start">
            <div className="flex justify-start items-center w-full">
                <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center mr-[20px]" style={{ backgroundColor: color }}>
                    {iconComponent}
                </div>
                <div className="text-[25px] font-medium text-[#4E4949]">
                    {name}
                </div>
            </div>
            <div className="w-full flex justify-between items-center">
                <div>
                    <div className="text-[20px] font-medium text-[#979393]">
                        Till
                    </div>
                    <div className="text-[25px] font-medium text-[#4E4949]">
                        {deadline}
                    </div>
                </div>
                <div className="text-[36px] font-medium">
                    {progress + " %"}
                </div>
            </div>
            <div className="w-full h-[20px] bg-[#EEECEC] rounded-[10px]">
                <div className="h-full rounded-[10px]" style={{ width: progress + "%", backgroundColor: color }}></div>
            </div>
            <div className="text-[16px] font-semibold text-[#696969]">
                {`₸ ${parseInt(fixedAmount)} / ₸ ${parseInt(target_amount)}`}
            </div>
            <div className="w-full flex justify-end items-center">
                <button className={`w-[35px] h-[35px] text-[#474448] ${status === 'reached' ? 'hidden' : 'block'}`} onClick={() => onPauseGoal(id)}>
                    {status === 'paused' ? <BsFillPlayFill size={30} /> : <BsFillPauseFill size={35} />}
                </button>
                <button className={`w-[35px] h-[35px] text-[#474448] ${status === 'reached' ? 'hidden' : 'block'}`} onClick={() => onEditGoal(goal)}>
                    <MdModeEditOutline size={30} />
                </button>
                <button className="w-[35px] h-[35px] text-[#474448]" onClick={() => onDeleteGoal(id)}>
                    <AiFillDelete size={30} />
                </button>
                <button className={`w-[35px] h-[35px] text-[#474448] ${status === 'reached' ? 'hidden' : 'block'}`} onClick={() => onReachGoal(id)}>
                    <BsCheckAll size={35} />
                </button>
            </div>
        </div>
    );
}

export default Goal;
