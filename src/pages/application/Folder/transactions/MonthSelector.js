import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const MonthSelector = ({ currentMonth, currentYear, setCurrentMonth, setCurrentYear }) => {
    const navigate = useNavigate();
    const { month, year } = useParams();

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    useEffect(() => {
        if (month && year) {
            const monthIndex = monthNames.findIndex(m => m.toLowerCase() === month.toLowerCase());
            if (monthIndex !== -1) {
                setCurrentMonth(monthIndex);
            }
            setCurrentYear(parseInt(year, 10));
        }
    }, [month, year]);

    useEffect(() => {
        navigate(`/application/transactions/${monthNames[currentMonth].toLowerCase()}-${currentYear}`, { replace: true });
    }, [currentMonth, currentYear]);


    const handlePreviousMonth = () => {
        setCurrentMonth((prevMonth) => prevMonth === 0 ? 11 : prevMonth - 1);
        if (currentMonth === 0) {
            setCurrentYear((prevYear) => prevYear - 1);
        }

        navigate(`/application/transactions/${monthNames[currentMonth].toLowerCase()}-${currentYear}`);
    };

    const handleNextMonth = () => {
        setCurrentMonth((prevMonth) => prevMonth === 11 ? 0 : prevMonth + 1);
        if (currentMonth === 11) {
            setCurrentYear((prevYear) => prevYear + 1);
        }

        navigate(`/application/transactions/${monthNames[currentMonth].toLowerCase()}-${currentYear}`)
    };

    return (
        <div className="flex justify-center items-center w-full mb-[40px]">
            <button className='px-6' onClick={handlePreviousMonth}>
                <BsChevronLeft size={25} color="#9F75D6" />
            </button>
            <div className="mx-[35px] h-[55px] rounded-[30px] border-[2px] border-[#9F75D6] text-[24px] font-medium text-[#9F75D6] flex justify-center items-center px-6">
                <span className="font-bold mr-2">{monthNames[currentMonth]}</span>{currentYear}
            </div>
            <button className='px-6' onClick={handleNextMonth}>
                <BsChevronRight size={25} color="#9F75D6" />
            </button>
        </div>
    );
};

export default MonthSelector;