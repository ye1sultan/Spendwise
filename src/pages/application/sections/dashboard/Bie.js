import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineClockCircle } from "react-icons/ai";
import { BsFillCalendar2CheckFill } from "react-icons/bs";

const Bie = (props) => {

    let title = props.title;
    let amount = props.amount;
    let svg = props.svg;

    const formatNumber = (num) => {
        if (num === undefined) {
            return "0";
        }
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    return (
        <div className="flex flex-col justify-between items-start w-[297px] h-[138px] rounded-[30px] bg-white border-[1px] border-[#AEAEAE] relative p-[25px]">
            <div className="text-[24px] font-medium">
                {title}
            </div>
            <div className="absolute right-4 top-[50%] translate-y-[-50%]" >
                {
                    (() => {
                        switch (svg) {
                            case 'current': return (
                                <div className="rounded-full bg-[#85B0E2] w-[55px] h-[55px] flex justify-center items-center">
                                    <AiOutlineClockCircle size={40} color="#ffffff" />
                                </div>
                            );
                            case 'incomes': return (
                                <div className="rounded-full bg-[#1EBF4C] w-[55px] h-[55px] flex justify-center items-center">
                                    <AiOutlineArrowDown size={40} color="#ffffff" />
                                </div>
                            );
                            case 'expenses': return (
                                <div className="rounded-full bg-[#C51F1F] w-[55px] h-[55px] flex justify-center items-center">
                                    <AiOutlineArrowUp size={40} color="#ffffff" />
                                </div>
                            );
                            case 'monthly': return (
                                <div className="rounded-full bg-[#86B88A] w-[55px] h-[55px] flex justify-center items-center">
                                    <BsFillCalendar2CheckFill size={30} color="#ffffff" />
                                </div>
                            );
                            default: return null;
                        }
                    })()
                }
            </div>
            <div className="text-[24px] font-medium">
                {formatNumber(amount) + " ₸"}
            </div>
        </div>
    );
}

export default Bie;