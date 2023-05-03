import { AiOutlineCar, AiOutlineGift, AiOutlineShoppingCart, AiOutlineHeart, AiOutlineTrophy } from 'react-icons/ai';
import { IoEarthOutline, IoBagHandle, IoCheckmarkDone, IoGameControllerOutline, IoLanguage } from 'react-icons/io5';
import { BsArrowRightShort, BsCoin, BsFillAirplaneFill, BsHouse, BsLaptop, BsPiggyBank, BsTruck } from 'react-icons/bs';
import { BiDumbbell, BiPlanet, BiWine } from 'react-icons/bi';
import { FaMicrophone, FaMugHot, FaPray, FaRegHandPeace, FaTools } from 'react-icons/fa';
import { MdOutlineBrokenImage, MdPedalBike, MdStroller } from 'react-icons/md';
import { RiBookLine, RiMedal2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Goal = ({ name, icon, deadline, totalAmount, amount, color }) => {
    const getPercent = (amount, totalAmount) => {
        let res = parseFloat(((amount / totalAmount) * 100).toFixed(2));
        return (res);
    }

    let progress = getPercent(amount, totalAmount);

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
        const DefaultIconComponent = <AiOutlineCar size={35} />;

        return foundIcon ? foundIcon.icon : DefaultIconComponent;
    };

    const iconComponent = getIconComponent(icon);

    return (
        <>
            <div
                className="overflow-hidden w-full h-full bg-white rounded-[40px] py-[10px] px-[15px] 2xl:p-[30px] flex flex-col justify-between items-start">
                <div className="flex justify-between items-center w-full">
                    <div className='flex justify-center items-center' >
                        <div className="w-[30px] h-[30px] 2xl:w-[50px] 2xl:h-[50px] bg-opacity-50 rounded-full flex justify-center items-center mr-[20px]" style={{ backgroundColor: color }}>
                            {iconComponent}
                        </div>
                        <div className="text-[16px] 2xl:text-[24px] font-medium text-[#4E4949]">
                            {name}
                        </div>

                    </div>
                    <Link to='/application/goals' className='cursor-pointer'>
                        <BsArrowRightShort size={45} />
                    </Link>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div>
                        <div className="2xl:text-[20px] font-medium text-[#979393]">
                            Till
                        </div>
                        <div className="2xl:text-[25px] font-medium text-[#4E4949]">
                            {deadline}
                        </div>
                    </div>
                    <div className="text-[18px] 2xl:text-[36px] font-medium">
                        {progress + " %"}
                    </div>
                </div>
                <div className="w-full h-[12px] 2xl:h-[20px] bg-[#EEECEC] rounded-[10px]">
                    <div className="h-full rounded-[10px]" style={{ width: progress + "%", backgroundColor: color }}></div>
                </div>
                <div className="text-[10px] 2xl:text-[16px] font-semibold text-[#696969]">
                    {`₸ ${amount} / ₸ ${totalAmount}`}
                </div>
            </div>
        </>
    );
}

export default Goal;