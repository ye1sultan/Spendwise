import { BsFlag } from "react-icons/bs";

const NoGoalsContent = () => {
    return (
        <>
            <BsFlag size={45} />
            <div className="text-center">
                <div className="text-[24px]">
                    Ops! You have no registered goals this month.
                </div>
                <div className="text-[20px] text-[#59595A]">
                    Improve your finances now!
                </div>
            </div>
            <button className="uppercase w-[269px] h-[52px] bg-[#9F75D6] bg-opacity-90 rounded-[30px] text-white text-[20px] mb-[60px]">
                SET MY GOALS
            </button>
        </>

    );
}

export default NoGoalsContent;