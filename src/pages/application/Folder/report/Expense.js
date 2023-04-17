
import { AiOutlineCar, AiOutlineGift, AiOutlineShoppingCart } from 'react-icons/ai';
import { IoEarthOutline } from 'react-icons/io5';

const Expense = (props) => {

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

    return (
        <div className="w-[560px] flex flex-col justify-center items-center mb-6">
            <div className="w-full flex justify-between items-center ">
                <div className="flex justify-center items-center">
                    <div className="w-[50px] h-[50px] rounded-full mr-4 flex justify-center items-center" style={{ backgroundColor: props.color }} >
                        {getIconComponent(props.icon)}
                    </div>
                    <div className="flex flex-col">
                        <div className="text-[20px] font-semibold">
                            {props.name}
                        </div>
                        <div className="text-[18px] text-[#443A3A]">
                            Percentage
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-end">
                    <div className="text-[#EA1A1A] font-medium text-[22px]">
                        {'- ' + props.value}
                    </div>
                    <div className="text-[20px] text-[#443A3A]">
                        {props.percentage}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expense;