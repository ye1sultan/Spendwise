import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const MonthSelector = ({ currentMonth, currentYear, setCurrentMonth, setCurrentYear }) => {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const handlePreviousMonth = () => {
        setCurrentMonth((prevMonth) => prevMonth === 0 ? 11 : prevMonth - 1);
        if (currentMonth === 0) {
            setCurrentYear((prevYear) => prevYear - 1);
        }
    };

    const handleNextMonth = () => {
        setCurrentMonth((prevMonth) => prevMonth === 11 ? 0 : prevMonth + 1);
        if (currentMonth === 11) {
            setCurrentYear((prevYear) => prevYear + 1);
        }
    };

    return (
        <div className="flex justify-center items-center w-full mb-[40px]">
            <button onClick={handlePreviousMonth}>
                <BsChevronLeft size={25} color="#9F75D6" />
            </button>
            <div className="mx-[35px] h-[55px] rounded-[30px] border-[2px] border-[#9F75D6] text-[24px] font-medium text-[#9F75D6] flex justify-center items-center px-6">
                <span className="font-bold mr-2">{monthNames[currentMonth]}</span>{currentYear}
            </div>
            <button onClick={handleNextMonth}>
                <BsChevronRight size={25} color="#9F75D6" />
            </button>
        </div>
    );
};

export default MonthSelector;