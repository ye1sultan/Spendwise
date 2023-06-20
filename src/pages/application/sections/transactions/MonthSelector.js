import { useTranslation } from 'react-i18next';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const MonthSelector = ({ currentMonth, setCurrentMonth }) => {
    const { t, i18n } = useTranslation();

    const monthNames = [
        t("trn.month.january"),
        t("trn.month.february"), 
        t("trn.month.march"), 
        t("trn.month.april"), 
        t("trn.month.may"), 
        t("trn.month.june"), 
        t("trn.month.july"), 
        t("trn.month.august"), 
        t("trn.month.september"), 
        t("trn.month.october"), 
        t("trn.month.november"), 
        t("trn.month.december"), 
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
        <div className="flex justify-center items-center w-full my-[20px] md:my-[25px] lg:my-[30px] xl:my-[40px]">
            <button className='2xl:px-6' onClick={handlePreviousMonth}>
                <BsChevronLeft className='text-[20px] lg:text-[25px]' color="#9F75D6" />
            </button>
            <div className="capitalize mx-[20px] 2xl:mx-[35px] h-[30px] lg:h-[40px] 2xl:h-[55px] rounded-[20px] 2xl:rounded-[30px] border-[2px] border-[#9F75D6] text-[16px] lg:text-[20px] 2xl:text-[24px] font-medium text-[#9F75D6] flex justify-center items-center px-6">
                <span className="font-bold mr-2">{monthNames[currentMonth.month]}</span>{currentMonth.year}
            </div>
            <button className='2xl:px-6' onClick={handleNextMonth}>
                <BsChevronRight className='text-[20px] lg:text-[25px]' color="#9F75D6" />
            </button>
        </div>
    );
};

export default MonthSelector;