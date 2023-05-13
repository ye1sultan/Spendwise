import { useEffect, useState } from "react";
import { BsFlag } from "react-icons/bs";
import { FiPieChart } from "react-icons/fi"
import { MdSignalCellularAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const NoContent = ({ is }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [iconSize, setIconSize] = useState(40);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth >= 1024) {
            setIconSize(45);
        } else if (windowWidth >= 768) {
            setIconSize(35);
        } else if (windowWidth >= 640) {
            setIconSize(30);
        } else {
            setIconSize(25);
        }
    }, [windowWidth]);

    const getNoContent = () => {
        if (is === 'expense') {
            return (
                <>
                    <div className="block my-4">
                        <FiPieChart size={iconSize} />
                    </div>
                    <div className="text-center mb-6">
                        <div className="lg:text-2xl md:text-xl sm:text-lg text-base px-4 mb-2">
                            Oops! You don't have any registered expenses this month.
                        </div>
                        <div className="lg:text-xl md:text-lg sm:text-base text-sm text-[#6A6A6A] px-4">
                            Register the expenses made this month using the (+) button in transactions to check your charts.
                        </div>
                    </div>
                    <Link
                        to="/application/report"
                        className="flex justify-center items-center lg:text-2xl md:text-xl sm:text-lg text-base text-purple-700 uppercase w-full lg:h-16 md:h-14 sm:h-12 h-10 border-t border-[#AEAEAE]">
                        see more
                    </Link>
                </>
            );
        }

        if (is === 'income') {
            return (
                <>
                    <div className="block my-4">
                        <FiPieChart size={iconSize} />
                    </div>
                    <div className="text-center mb-6">
                        <div className="lg:text-2xl md:text-xl sm:text-lg text-base px-4 mb-2">
                            Oops! You don't have any registered income this month.
                        </div>
                        <div className="lg:text-xl md:text-lg sm:text-base text-sm text-[#6A6A6A] px-4">
                            Register the incomes made this month using the (+) button in transactions to check your charts.
                        </div>
                    </div>
                    <Link
                        to="/application/report"
                        className="flex justify-center items-center lg:text-2xl md:text-xl sm:text-lg text-base text-purple-700 uppercase w-full lg:h-16 md:h-14 sm:h-12 h-10 border-t border-[#AEAEAE]">
                        see more
                    </Link>
                </>
            );
        }

        if (is === 'month') {
            return (
                <>
                    <div className="block my-4">
                        <MdSignalCellularAlt size={iconSize} />
                    </div>
                    <div className="text-center mb-6">
                        <div className="lg:text-2xl md:text-xl sm:text-lg text-base px-4 mb-2">
                            Oops! You don't have any registered transactions on your monthly balance yet.
                        </div>
                        <div className="lg:text-xl md:text-lg sm:text-base text-sm text-[#6A6A6A] px-4">
                            What about start registering the expenses and incomes made this month?
                        </div>
                    </div>
                    <Link
                        to="/application/report"
                        className="flex justify-center items-center lg:text-2xl md:text-xl sm:text-lg text-base text-purple-700 uppercase w-full lg:h-16 md:h-14 sm:h-12 h-10 border-t border-[#AEAEAE]">
                        see more
                    </Link>
                </>
            );
        }

        if (is === 'goal') {
            return (
                <div className="w-full h-full flex flex-col justify-evenly items-center">
                    <BsFlag size={iconSize} />
                    <div className="text-center">
                        <div className="lg:text-2xl md:text-xl sm:text-lg text-base px-4 pb-2">
                            Ops! You have no registered goals this month.
                        </div>
                        <div className="lg:text-xl md:text-lg sm:text-base text-sm text-[#6A6A6A]">
                            Improve your finances now!
                        </div>
                    </div>
                    <Link
                        to="/application/goals"
                        className="flex justify-center items-center uppercase md:max-w-[270px] max-w-[200px] w-full md:h-14 sm:h-12 h-10 bg-[#9F75D6] bg-opacity-90 rounded-[30px] text-white lg:text-xl md:text-lg sm:text-base text-sm  mx-[5px]">
                        Set my goals
                    </Link>
                </div>
            );
        }
    }

    return (
        <div className="w-full h-full flex flex-col justify-between items-center">
            {getNoContent()}
        </div>
    );
}

export default NoContent;