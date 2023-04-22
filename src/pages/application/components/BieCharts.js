import Goal from "../folder/goals/Goal.js";
import NoBieChartContent from "./NoBieChartContent.js";
import NoGoalsContent from "./NoGoalsContent.js";

const BieCharts = ({content, title, onClick}) => {

    return (
        <div className="flex flex-col mb-[60px]">
            <div className="text-[32px] text-[#696969] font-medium">
                {title}
            </div>
            <div className="flex flex-col justify-between items-center w-[723px] h-[328px] rounded-[30px] border-[#AEAEAE] border-[1px] bg-white pt-[25px] px-[15px]">
                {
                    (() => {
                        if (title !== "Goals") {
                            if (!content) {
                                return <NoBieChartContent onClick={onClick} />;
                            } else {
                                return <NoBieChartContent onClick={onClick} />;
                            }
                        } else {
                            if (!content) {
                                return <NoGoalsContent />;
                            } else {
                                return <Goal name={content[0].name} deadline={content[0].deadline} amount={content[0].amount} totalAmount={content[0].totalAmount} color={content[0].color} icon={content[0].icon} />;
                            }
                        }
                    })()
                }
            </div>
        </div>
    );
}

export default BieCharts;