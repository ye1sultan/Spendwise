import moment from 'moment';
import 'moment/locale/kk';
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
import { useTranslation } from 'react-i18next';
const Goal = ({ goal, name, icon, deadline, target_amount, initial_target_amount, color, id, status, onPauseGoal, onDeleteGoal, onReachGoal, onEditGoal }) => {
    const { t, i18n } = useTranslation();

    let fixedAmount = status === 'reached' ? target_amount : initial_target_amount;

    const getPercent = (initial_target_amount, target_amount) => {
        let res = parseFloat(((initial_target_amount / target_amount) * 100).toFixed(2));
        return res;
    }
    let progress = getPercent(fixedAmount, target_amount);

    function formatDate(dateString) {
        let date = new Date(dateString);
        const options = { day: 'numeric', month: 'long' };

        if (localStorage.getItem("i18nextLng") === "en") {
            return date.toLocaleDateString('en-GB', options);
        }

        if (localStorage.getItem("i18nextLng") === "ru") {
            return date.toLocaleDateString('ru-RU', options);
        }

        if (localStorage.getItem("i18nextLng") === "kz") {
            const date = moment(dateString);
            date.locale('kk');

            return date.format('D MMMM');
        }

        return date.toLocaleDateString('en-GB', options);;
    }

    const allIcons = [
        { name: 'earth', icon: <IoEarthOutline className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
        { name: 'cart', icon: <AiOutlineShoppingCart className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
        { name: 'coin', icon: <BsCoin className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
        { name: 'gift', icon: <AiOutlineGift className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
        { name: 'rest', icon: <FaPray className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
        { name: 'pic', icon: <MdOutlineBrokenImage className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
        { name: 'bag', icon: <IoBagHandle className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
        { name: 'set', icon: <FaTools className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
        { name: 'car', icon: <AiOutlineCar className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
        { name: 'tea', icon: <FaMugHot className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
        { name: 'plane', icon: <BsFillAirplaneFill className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
        { name: 'saturn', icon: <BiPlanet className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
        { name: 'laptop', icon: <BsLaptop className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
        { name: 'micro', icon: <FaMicrophone className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
        { name: 'buggy', icon: <MdStroller className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
        { name: 'medal', icon: <RiMedal2Fill className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
        { name: 'bike', icon: <MdPedalBike className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
        { name: 'contr', icon: <IoGameControllerOutline className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
        { name: 'wine', icon: <BiWine className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
        { name: 'heart', icon: <AiOutlineHeart className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
        { name: 'truck', icon: <BsTruck className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
        { name: 'book', icon: <RiBookLine className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
        { name: 'home', icon: <BsHouse className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
        { name: 'champ', icon: <AiOutlineTrophy className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
        { name: 'weight', icon: <BiDumbbell className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
        { name: 'pig', icon: <BsPiggyBank className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
        { name: 'lang', icon: <IoLanguage className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
        { name: 'peace', icon: <FaRegHandPeace className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
        { name: 'done', icon: <IoCheckmarkDone className="text-[20px] sm:text-[25px] lg:text-[35px]" /> },
    ];

    const getIconComponent = (iconPrompt) => {
        const foundIcon = allIcons.find((iconObj) => iconObj.name === iconPrompt);
        const DefaultIconComponent = <AiOutlineCar className="text-[20px] sm:text-[25px] lg:text-[35px]" />;

        return foundIcon ? foundIcon.icon : DefaultIconComponent;
    };

    const iconComponent = getIconComponent(icon);

    return (
        <div
            className={`w-[300px] md:w-[400px] lg:w-[500px] xl:w-[500px] 
            h-[200px] md:h-[250px] lg:h-[315px] xl:h-[315px] 
            min-w-[220px] min-h-[150px]
            ${localStorage.getItem("mode") === "Light Mode" ? 'bg-white' : 'bg-[#BCB8B8] bg-opacity-10'}  
            ${localStorage.getItem("mode") === "Light Mode" ? 'text-[#2c3e50]' : 'text-white'}
            rounded-[15px] md:rounded-[20px] lg:rounded-[30px] 
            p-[15px] md:p-[20px] lg:p-[25px] xl:p-[30px]
            flex flex-col justify-between items-start`}>
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
                    <div className={`text-[14px] md:text-[16px] lg:text-[20px] font-medium  ${localStorage.getItem("mode") === "Light Mode" ? 'text-[#696969]' : 'text-white'} capitalize`}>
                        {t("dashboard.goal.till")}
                    </div>
                    <div className="text-[16px] md:text-[20px] lg:text-[24px] font-medium capitalize">
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
            <div className={`text-[12px] md:text-[14px] lg:text-[16px] font-semibold ${localStorage.getItem("mode") === "Light Mode" ? 'text-[#696969]' : 'text-white'}`}>
                {`₸ ${parseInt(fixedAmount)} / ₸ ${parseInt(target_amount)}`}
            </div>
            <div className="w-full flex gap-x-1 justify-end items-center">
                <button className={`${status === 'reached' ? 'hidden' : 'block'}`} onClick={() => onEditGoal(goal)}>
                    <MdModeEditOutline className="text-[20px] md:text-[25px]" />
                </button>
                <button className={`${status === 'reached' ? 'hidden' : 'block'}`} onClick={() => onPauseGoal(id)}>
                    {status === 'paused' ? <BsFillPlayFill className="text-[25px] md:text-[30px]" /> : <BsFillPauseFill className="text-[30px] md:text-[35px]" />}
                </button>
                <button className={` ${status === 'reached' ? 'hidden' : 'block'}`} onClick={() => onReachGoal(id)}>
                    <BsCheckAll className="text-[30px] md:text-[35px]" />
                </button>
                <button onClick={() => onDeleteGoal(id)}>
                    <AiFillDelete className="text-[25px] md:text-[30px]" />
                </button>
            </div>
        </div>
    );
}

export default Goal;
