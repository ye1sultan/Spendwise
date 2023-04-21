import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const MonthSelector = () => {
    return (
        <div className="flex justify-center items-center w-full mb-[40px]">
            <button>
                <BsChevronLeft size={25} color="#9F75D6" />
            </button>
            <div className="mx-[35px] w-[170px] h-[55px] rounded-[30px] border-[2px] border-[#9F75D6] text-[24px] font-medium text-[#9F75D6] flex justify-center items-center">
                <span className="font-bold mr-2">March</span>2023
            </div>
            <button>
                <BsChevronRight size={25} color="#9F75D6" />
            </button>
        </div>
    );
};


export default MonthSelector;