import { BsFlag } from "react-icons/bs";
import { FiPieChart } from "react-icons/fi"
import { MdSignalCellularAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const NoContent = ({ is }) => {
    const getNoContent = () => {
        if (is === 'expense') {
            return (
                <>
                    <div className="block my-4">
                        <FiPieChart className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[45px]" />
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
                        <FiPieChart className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[45px]" />
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
                        <MdSignalCellularAlt className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[45px]" />
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
                    <BsFlag className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[45px]" />
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