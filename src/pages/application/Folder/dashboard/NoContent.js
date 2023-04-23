import { BsFlag } from "react-icons/bs";
import { FiPieChart } from "react-icons/fi"
import { MdSignalCellularAlt } from "react-icons/md";

const NoContent = ({ is }) => {
    return (
        <>
            {is === 'goal' ? <BsFlag size={45} /> : (is === 'month' ? <MdSignalCellularAlt size={45} /> : <FiPieChart size={45} />)}
            <div className="text-center">
                <div className="text-[24px]">
                    Oops! You don't have any registered {is === 'month' ? 'transactions on your monthly balance yet.' : is + 's this month.'}
                </div>
                <div className="text-[20px] text-[#59595A]">
                    {is === 'goal' ? 'What about start registering the expenses and incomes made this month?' : (is === 'goal' ? 'Improve your finances now!' : 'Register the expenses made this month using the (+) button to check your charts.')}
                </div>
            </div>
            <button className={is === 'goal' ? "uppercase w-[269px] h-[52px] bg-[#9F75D6] bg-opacity-90 rounded-[30px] text-white text-[20px] mb-[60px]" : "text-[24px] text-[#590CC0] uppercase w-full h-[70px] border-t-[1px] border-t-black"}>
                {is === 'goal' ? 'set my goals' : 'see more'}
            </button>
        </>
    );
}

export default NoContent;