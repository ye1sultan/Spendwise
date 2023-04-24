import { AiFillDelete, AiOutlineCar, AiOutlineGift, AiOutlineShoppingCart } from 'react-icons/ai';
import { IoEarthOutline } from 'react-icons/io5';
import { BsCheckAll, BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs';

const Goal = ({ name, icon, deadline, totalAmount, amount, color, index, onDelete, onPause, onComplete, status }) => {
    const getPercent = (amount, totalAmount) => {
        let res = parseFloat(((amount / totalAmount) * 100).toFixed(2));
        return (res);
    }

    let progress = getPercent(amount, totalAmount);

    const getIconComponent = (iconName) => {
        switch (iconName) {
            case "car":
                return <AiOutlineCar size={30} />;
            case "earth":
                return <IoEarthOutline size={30} />;
            case "cart":
                return <AiOutlineShoppingCart size={30} />;
            case "gift":
                return <AiOutlineGift size={30} />;
            default:
                return null;
        }
    }

    const iconComponent = getIconComponent(icon);


    const handleDelete = () => {
        onDelete(index);
    }

    const handlePause = () => {
        onPause(index);
    }

    const handleComplete = () => {
        onComplete(index);
    }

    return (
        <div className="w-[530px] h-[315px] bg-white rounded-[40px] border-[1px] border-[#CED4DA] m-[30px] p-[30px] flex flex-col justify-between items-start">
            <div className="flex justify-start items-center w-full">
                <div className="w-[50px] h-[50px] bg-opacity-50 rounded-full flex justify-center items-center mr-[20px]" style={{ backgroundColor: color }}>
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
                {`₸ ${amount} / ₸ ${totalAmount}`}
            </div>
            <div className="w-full flex justify-end items-center">
                <button className={`w-[35px] h-[35px] text-[#474448] ${status === 'reached' ? 'hidden' : 'block'}`} onClick={handlePause}>
                    {status === 'paused' ? <BsFillPlayFill size={30} /> : <BsFillPauseFill size={30} />}
                </button>
                <button className="w-[35px] h-[35px] text-[#474448]" onClick={handleDelete}>
                    <AiFillDelete size={30} />
                </button>
                <button className={`w-[35px] h-[35px] text-[#474448] ${status === 'reached' ? 'hidden' : 'block'}`} onClick={handleComplete}>
                    <BsCheckAll size={35} />
                </button>
            </div>
        </div>
    );
}

export default Goal;
