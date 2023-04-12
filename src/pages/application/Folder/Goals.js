import Title from "../components/Title";

import { BsChevronDown } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';

const Goals = () => {
    return (
        <>
            <Title title={'My Goals'} />
            <button className="w-[220px] h-[40px] bg-[#BFA2E5] rounded-[30px] text-black font-medium text-[22px] self-start flex justify-between items-center px-5 mb-[50px]">
                <BsChevronDown />
                Active Goals
            </button>
            <button className="w-[530px] h-[315px] bg-white rounded-[40px] border-[1px] border-[#CED4DA] self-start flex flex-col justify-center items-center">
                <AiOutlinePlus size={40} />
                <div className="text-[40px] font-medium">
                    New goal
                </div>
            </button>
        </>
    );
}

export default Goals;