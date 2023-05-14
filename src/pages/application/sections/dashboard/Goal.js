import { AiOutlineCar, AiOutlineGift, AiOutlineShoppingCart, AiOutlineHeart, AiOutlineTrophy } from 'react-icons/ai';
import { IoEarthOutline, IoBagHandle, IoCheckmarkDone, IoGameControllerOutline, IoLanguage } from 'react-icons/io5';
import { BsArrowRightShort, BsCoin, BsFillAirplaneFill, BsHouse, BsLaptop, BsPiggyBank, BsTruck } from 'react-icons/bs';
import { BiDumbbell, BiPlanet, BiWine } from 'react-icons/bi';
import { FaMicrophone, FaMugHot, FaPray, FaRegHandPeace, FaTools } from 'react-icons/fa';
import { MdOutlineBrokenImage, MdPedalBike, MdStroller } from 'react-icons/md';
import { RiBookLine, RiMedal2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Goal = ({ name, icon, deadline, totalAmount, amount, color }) => {
    const getPercent = (amount, totalAmount) => {
        let res = parseFloat(((amount / totalAmount) * 100).toFixed(2));
        return (res);
    }

    let progress = getPercent(amount, totalAmount);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [iconSize, setIconSize] = useState(35);

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
            setIconSize(30);
        } else {
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

    const getIconComponent = (iconPrompt) => {
        const foundIcon = allIcons.find((iconObj) => iconObj.name === iconPrompt);
        const DefaultIconComponent = <AiOutlineCar size={iconSize} />;

        return foundIcon ? foundIcon.icon : DefaultIconComponent;
    };

    const iconComponent = getIconComponent(icon);

    return (
        <div className="overflow-hidden w-full h-full lg:p-[30px] p-[15px] flex flex-col justify-between items-start">
            <div className="flex justify-between items-center w-full">
                <div className='flex justify-center items-center' >
                    <div className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px] bg-opacity-50 rounded-full flex justify-center items-center mr-[20px]" style={{ backgroundColor: color }}>
                        {iconComponent}
                    </div>
                    <div className="text-base sm:text-xl lg:text-2xl font-medium">
                        {name}
                    </div>
                </div>
                <Link to='/application/goals' className='cursor-pointer'>
                    <BsArrowRightShort size={iconSize + 5} />
                </Link>
            </div>
            <div className="w-full flex justify-between items-center">
                <div>
                    <div className="text-sm sm:text-lg lg:text-xl font-medium text-[#6A6A6A]">
                        Till
                    </div>
                    <div className="text-base sm:text-xl lg:text-2xl font-medium">
                        {deadline}
                    </div>
                </div>
                <div className="text-lg sm:text-2xl lg:text-3xl font-medium">
                    {progress + " %"}
                </div>
            </div>
            <div className="w-full md:h-[20px] h-[10px] bg-[#EEECEC] rounded-[10px]">
                <div className="h-full rounded-[10px]" style={{ width: progress + "%", backgroundColor: color }}></div>
            </div>
            <div className="text-sm sm:text-base lg:text-lg font-semibold text-[#6A6A6A]">
                {`₸ ${amount} / ₸ ${totalAmount}`}
            </div>
        </div>
    );
}

export default Goal;