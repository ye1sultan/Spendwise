import Header from "../components/Header";


import { BsChevronDown } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';

const Goals = () => {
    return (
        <div className="w-full px-[60px] pt-[50px]">
            <Header />
            <div className="flex flex-col justify-center items-start w-full pt-[30px]">
                <div className="text-[48px] font-semibold mb-[50px]">
                    Goals
                </div>
                <button className="w-[220px] h-[40px] bg-[#BFA2E5] rounded-[30px] text-black font-medium text-[22px] flex justify-between items-center px-5 mb-[50px]">
                    <BsChevronDown />
                    Active Goals
                </button>
                <button className="w-[530px] h-[315px] bg-white rounded-[40px] border-[1px] border-[#CED4DA] flex flex-col justify-center items-center">
                    <AiOutlinePlus size={40} />
                    <div className="text-[40px] font-medium">
                        New goal
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Goals;