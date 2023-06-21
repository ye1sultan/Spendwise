import { AiOutlineCar, AiOutlineGift, AiOutlineShoppingCart, AiOutlineHeart, AiOutlineTrophy } from 'react-icons/ai';
import { IoEarthOutline, IoBagHandle, IoCheckmarkDone, IoGameControllerOutline, IoLanguage } from 'react-icons/io5';
import { BsArrowRightShort, BsCoin, BsFillAirplaneFill, BsHouse, BsLaptop, BsPiggyBank, BsTruck } from 'react-icons/bs';
import { BiDumbbell, BiPlanet, BiWine } from 'react-icons/bi';
import { FaMicrophone, FaMugHot, FaPray, FaRegHandPeace, FaTools } from 'react-icons/fa';
import { MdOutlineBrokenImage, MdPedalBike, MdStroller } from 'react-icons/md';
import { RiBookLine, RiMedal2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Goal = ({ name, icon, deadline, totalAmount, amount, color }) => {
    const getPercent = (amount, totalAmount) => {
        let res = parseFloat(((amount / totalAmount) * 100).toFixed(2));
        return (res);
    }
    let progress = getPercent(amount, totalAmount);

    const { t, i18n } = useTranslation();

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

    const getIconComponent = (iconPrompt) => {
        const foundIcon = allIcons.find((iconObj) => iconObj.name === iconPrompt);
        const DefaultIconComponent = <AiOutlineCar className="text-[25px] md:text-[30px] lg:text-[35px]" />;

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
                    <BsArrowRightShort className="text-[30px] md:text-[35px] lg:text-[40px]" />
                </Link>
            </div>
            <div className="w-full flex justify-between items-center">
                <div>
                    <div className={`text-sm sm:text-lg lg:text-xl font-medium capitalize ${localStorage.getItem("mode") === "Light Mode" ? 'text-[#6A6A6A]' : 'text-white'}`}>
                        {t("dashboard.goal.till")}
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
            <div className={`text-sm sm:text-base lg:text-lg font-semibold ${localStorage.getItem("mode") === "Light Mode" ? 'text-[#6A6A6A]' : 'text-white'}`}>
                {`₸ ${amount} / ₸ ${totalAmount}`}
            </div>
        </div>
    );
}

export default Goal;