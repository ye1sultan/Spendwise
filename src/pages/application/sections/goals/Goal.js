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
import { useEffect } from 'react';
import { useState } from 'react';

const Goal = ({ goal, name, icon, deadline, target_amount, initial_target_amount, color, id, status, onPauseGoal, onDeleteGoal, onReachGoal, onEditGoal }) => {
    let fixedAmount = status === 'reached' ? target_amount : initial_target_amount;

    const getPercent = (initial_target_amount, target_amount) => {
        let res = parseFloat(((initial_target_amount / target_amount) * 100).toFixed(2));
        return res;
    }

    let progress = getPercent(fixedAmount, target_amount);

    function formatDate(dateString) {
        // Create a new Date object from the input string
        var date = new Date(dateString);

        // Define options for toLocaleDateString
        var options = { day: 'numeric', month: 'long' };

        // Return the formatted date
        return date.toLocaleDateString('en-GB', options);
    }

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [iconSize, setIconSize] = useState(35);

    const [editSize, setEditSize] = useState(25);
    const [pauseSize, setPauseSize] = useState(35);
    const [playSize, setPlaySize] = useState(30);
    const [reachSize, setReachSize] = useState(35);
    const [deleteSize, setDeleteSize] = useState(30);

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
        } else if (windowWidth >= 768) {
            setEditSize(25);
            setPauseSize(35);
            setPlaySize(30);
            setReachSize(35);
            setDeleteSize(30);
            setIconSize(30);
        } else if (windowWidth >= 640) {
            setIconSize(25);
        } else {
            setEditSize(20);
            setPauseSize(30);
            setPlaySize(25);
            setReachSize(30);
            setDeleteSize(25);
            setIconSize(20);
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

    const getIconComponent = (iconPrompt) => {
        const foundIcon = allIcons.find((iconObj) => iconObj.name === iconPrompt);
        const DefaultIconComponent = <AiOutlineCar size={iconSize} />;

        return foundIcon ? foundIcon.icon : DefaultIconComponent;
    };

    const iconComponent = getIconComponent(icon);

    return (
        <div
            className="
                w-[300px] md:w-[400px] lg:w-[500px] xl:w-[500px] 
                h-[200px] md:h-[250px] lg:h-[315px] xl:h-[315px] 
                min-w-[220px] min-h-[150px]
                bg-white
                rounded-[15px] md:rounded-[20px] lg:rounded-[30px] 
                p-[15px] md:p-[20px] lg:p-[25px] xl:p-[30px]
                flex flex-col justify-between items-start">
            <div className="flex justify-start items-center w-full">
                <div
                    className="
                        w-[30px] h-[30px]
                        sm:w-[35px] sm:h-[35px]
                        md:w-[40px] md:h-[40px]
                        lg:w-[50px] lg:h-[50px] 
                        rounded-full flex justify-center items-center mr-[20px]"
                    style={{ backgroundColor: color }}>
                    {iconComponent}
                </div>
                <div className="text-[16px] md:text-[20px] lg:text-[24px] font-medium">
                    {name}
                </div>
            </div>
            <div className="w-full flex justify-between items-center">
                <div>
                    <div className="text-[14px] md:text-[16px] lg:text-[20px] font-medium text-[#6A6A6A]">
                        Till
                    </div>
                    <div className="text-[16px] md:text-[20px] lg:text-[24px] font-medium">
                        {formatDate(deadline)}
                    </div>
                </div>
                <div className="text-[18px] md:text-[26px] lg:text-[36px] font-medium">
                    {progress + " %"}
                </div>
            </div>
            <div className="w-full h-[10px] md:h-[20px] bg-[#EEECEC] rounded-[10px]">
                <div className="h-full rounded-[10px]" style={{ width: progress + "%", backgroundColor: color }}></div>
            </div>
            <div className="text-[12px] md:text-[14px] lg:text-[16px] font-semibold text-[#6A6A6A]">
                {`₸ ${parseInt(fixedAmount)} / ₸ ${parseInt(target_amount)}`}
            </div>
            <div className="w-full flex gap-x-1 justify-end items-center">
                <button className={`${status === 'reached' ? 'hidden' : 'block'}`} onClick={() => onEditGoal(goal)}>
                    <MdModeEditOutline size={editSize} />
                </button>
                <button className={`${status === 'reached' ? 'hidden' : 'block'}`} onClick={() => onPauseGoal(id)}>
                    {status === 'paused' ? <BsFillPlayFill size={playSize} /> : <BsFillPauseFill size={pauseSize} />}
                </button>
                <button className={` ${status === 'reached' ? 'hidden' : 'block'}`} onClick={() => onReachGoal(id)}>
                    <BsCheckAll size={reachSize} />
                </button>
                <button onClick={() => onDeleteGoal(id)}>
                    <AiFillDelete size={deleteSize} />
                </button>
            </div>
        </div>
    );
}

export default Goal;
