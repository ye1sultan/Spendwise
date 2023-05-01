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
        <div className="flex flex-col justify-between items-start w-[135px] 2xl:w-[297px] h-[70px] 2xl:h-[138px] rounded-[15px] 2xl:rounded-[30px] bg-white border-[1px] border-[#AEAEAE] relative p-[7px] 2xl:p-[25px] mb-[20px] 2xl:mb-0">
            <div className="text-[14px] 2xl:text-[24px] font-medium">
                {title}
            </div>
            <div className="absolute right-2 2xl:right-4 top-[70%] 2xl:top-[50%] translate-y-[-50%]" >
                {
                    (() => {
                        switch (svg) {
                            case 'current': return (
                                <div className="rounded-full bg-[#85B0E2] w-[25px] 2xl:w-[55px] h-[25px] 2xl:h-[55px] flex justify-center items-center">
                                    <div className="block 2xl:hidden">
                                        <AiOutlineClockCircle size={20} color="#ffffff" />
                                    </div>
                                    <div className="hidden 2xl:block">
                                        <AiOutlineClockCircle size={40} color="#ffffff" />
                                    </div>
                                </div>
                            );
                            case 'incomes': return (
                                <div className="rounded-full bg-[#1EBF4C] w-[25px] 2xl:w-[55px] h-[25px] 2xl:h-[55px] flex justify-center items-center">
                                    <div className="block 2xl:hidden">
                                        <AiOutlineArrowDown size={20} color="#ffffff" />
                                    </div>
                                    <div className="hidden 2xl:block">
                                        <AiOutlineArrowDown size={40} color="#ffffff" />
                                    </div>
                                </div>
                            );
                            case 'expenses': return (
                                <div className="rounded-full bg-[#C51F1F] w-[25px] 2xl:w-[55px] h-[25px] 2xl:h-[55px] flex justify-center items-center">
                                    <div className="block 2xl:hidden">
                                        <AiOutlineArrowUp size={20} color="#ffffff" />
                                    </div>
                                    <div className="hidden 2xl:block">
                                        <AiOutlineArrowUp size={40} color="#ffffff" />
                                    </div>
                                </div>
                            );
                            case 'monthly': return (
                                <div className="rounded-full bg-[#86B88A] w-[25px] 2xl:w-[55px] h-[25px] 2xl:h-[55px] flex justify-center items-center">
                                    <div className="block 2xl:hidden">
                                        <BsFillCalendar2CheckFill size={15} color="#ffffff" />
                                    </div>
                                    <div className="hidden 2xl:block">
                                        <BsFillCalendar2CheckFill size={35} color="#ffffff" />
                                    </div>
                                </div>
                            );
                            default: return null;
                        }
                    })()
                }
            </div>
            <div className="text-[16px] 2xl:text-[24px] font-medium">
                {formatNumber(amount) + " ₸"}
            </div>
        </div>
    );
}

export default Bie;