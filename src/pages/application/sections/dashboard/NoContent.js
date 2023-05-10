import { BsFlag } from "react-icons/bs";
import { FiPieChart } from "react-icons/fi"
import { MdSignalCellularAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const NoContent = ({ is }) => {
    const getNoContent = () => {
        if (is === 'expense') {
            return (
                <>
                    <div className="block mb-4">
                        <FiPieChart size={45} />
                    </div>
                    <div className="text-center mb-6">
                        <div className="text-[24px] px-[16px] mb-[10px]">
                            Oops! You don't have any registered expenses this month.
                        </div>
                        <div className="text-[20px] text-[#59595A] px-[16px]">
                            Register the expenses made this month using the (+) button in transactions to check your charts.
                        </div>
                    </div>
                    <Link
                        to="/application/report"
                        className="flex justify-center items-center text-[24px] text-[#590CC0] uppercase w-full h-[70px] border-t-[1px] border-t-black">
                        see more
                    </Link>
                </>
            );
        }

        if (is === 'income') {
            return (
                <>
                    <div className="block mb-4">
                        <FiPieChart size={45} />
                    </div>
                    <div className="text-center mb-6">
                        <div className="text-[24px] px-[16px] mb-[10px]">
                            Oops! You don't have any registered income this month.
                        </div>
                        <div className="text-[20px] text-[#59595A] px-[16px]">
                            Register the incomes made this month using the (+) button in transactions to check your charts.
                        </div>
                    </div>
                    <Link
                        to="/application/report"
                        className="flex justify-center items-center text-[24px] text-[#590CC0] uppercase w-full h-[70px] border-t-[1px] border-t-black">
                        see more
                    </Link>
                </>
            );
        }

        if (is === 'month') {
            return (
                <>
                    <div className="block mb-4">
                        <MdSignalCellularAlt size={45} />
                    </div>
                    <div className="text-center mb-6">
                        <div className="text-[24px] px-[16px] mb-[10px]">
                            Oops! You don't have any registered transactions on your monthly balance yet.
                        </div>
                        <div className="text-[20px] text-[#59595A] px-[16px]">
                            What about start registering the expenses and incomes made this month?
                        </div>
                    </div>
                    <Link
                        to="/application/report"
                        className="flex justify-center items-center text-[24px] text-[#590CC0] uppercase w-full h-[70px] border-t-[1px] border-t-black">
                        see more
                    </Link>
                </>
            );
        }

        if (is === 'goal') {
            return (
                <>
                    <div className="block mb-4">
                        <BsFlag size={45} />
                    </div>
                    <div className="text-center mb-6">
                        <div className="text-[24px] px-[16px] mb-[10px]">
                            Ops! You have no registered goals this month.
                        </div>
                        <div className="text-[20px] text-[#59595A] px-[16px]">
                            Improve your finances now!
                        </div>
                    </div>
                    <Link
                        to="/application/goals"
                        className="flex justify-center items-center uppercase w-[269px] h-[52px] bg-[#9F75D6] bg-opacity-90 rounded-[30px] text-white text-[20px] mb-[20px]">
                        see more
                    </Link>
                </>
            );
        }
    }

    return (
        <div className="w-full flex flex-col justify-between items-center pt-4">
            {getNoContent()}
        </div>
    );
}

export default NoContent;