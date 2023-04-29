import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const MonthSelector = ({ currentMonth, setCurrentMonth }) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const handlePreviousMonth = () => {
    setCurrentMonth((prevState) => {
      const newMonth = prevState.month - 1;
      const newYear = newMonth === -1 ? prevState.year - 1 : prevState.year;
      return { month: (newMonth + 12) % 12, year: newYear };
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevState) => {
      const newMonth = prevState.month + 1;
      const newYear = newMonth === 12 ? prevState.year + 1 : prevState.year;
      return { month: newMonth % 12, year: newYear };
    });
  };

  return (
    <div className="flex justify-center items-center w-full mb-[40px]">
      <button onClick={handlePreviousMonth}>
        <BsChevronLeft size={25} color="#9F75D6" />
      </button>
      <div className="mx-[35px] h-[55px] rounded-[30px] border-[2px] border-[#9F75D6] text-[24px] font-medium text-[#9F75D6] flex justify-center items-center px-6">
        <span className="font-bold mr-2">{monthNames[currentMonth.month]}</span>
        {currentMonth.year}
      </div>
      <button onClick={handleNextMonth}>
        <BsChevronRight size={25} color="#9F75D6" />
      </button>
    </div>
  );
};

export default MonthSelector;
