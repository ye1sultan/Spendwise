import { BsFlag } from "react-icons/bs";
import { FiPieChart } from "react-icons/fi"
import { MdSignalCellularAlt } from "react-icons/md";

const NoContent = ({ is }) => {
    return (
        <>
            <div className="mb-[10px] 2xl:mb-0 mt-[10px] 2xl:mt-0">
                {
                    is === 'goal' ? (
                        <>
                            <div className="hidden 2xl:block">
                                <BsFlag size={45} />
                            </div>
                            <div className="block 2xl:hidden">
                                <BsFlag size={25} />
                            </div>
                        </>
                    ) : (is === 'month' ? (
                        <>
                            <div className="hidden 2xl:block">
                                <MdSignalCellularAlt size={45} />
                            </div>
                            <div className="block 2xl:hidden">
                                <MdSignalCellularAlt size={25} />
                            </div>
                        </>
                    ) : <>
                        <div className="hidden 2xl:block">
                            <FiPieChart size={45} />
                        </div>
                        <div className="block 2xl:hidden">
                            <FiPieChart size={25} />
                        </div>
                    </>
                    )
                }
            </div>
            <div className="text-center mb-[10px] 2xl:mb-0">
                <div className="text-[11px] 2xl:text-[24px] px-[16px] 2xl:px-0 mb-[10px] 2xl:mb-0">
                    Oops! You don't have any registered {is === 'month' ? 'transactions on your monthly balance yet.' : is + 's this month.'}
                </div>
                <div className="text-[9px] 2xl:text-[20px] text-[#59595A] px-[16px] 2xl:px-0">
                    {is === 'month' ? 'What about start registering the expenses and incomes made this month?' : (is === 'goal' ? 'Improve your finances now!' : 'Register the ' + is + 's made this month using the (+) button to check your charts.')}
                </div>
            </div>
            <button
                className={is === 'goal' ? "uppercase 2xl:w-[269px] 2xl:h-[52px] bg-[#9F75D6] bg-opacity-90 2xl:rounded-[30px] text-white text-[10px] 2xl:text-[20px] 2xl:mb-[60px]" : "text-[10px] 2xl:text-[24px] text-[#590CC0] uppercase w-full h-[30px] 2xl:h-[70px] border-t-[1px] border-t-black"}>
                {is === 'goal' ? 'set my goals' : 'see more'}
            </button>
        </>
    );
}

export default NoContent;