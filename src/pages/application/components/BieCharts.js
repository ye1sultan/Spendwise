import Goal from "../folder/goals-folder/Goal.js";
import NoBieChartContent from "./NoBieChartContent.js";
import NoGoalsContent from "./NoGoalsContent.js";

const BieCharts = (props) => {
    let content = props.goals;
    let title = props.title;

    const recentGoal = content && content.length > 0 ? content[content.length - 1] : null;

    return (
        <div className="flex flex-col mb-[60px]">
            <div className="text-[32px] text-[#696969] font-medium">
                {title}
            </div>
            <div className="flex flex-col justify-between items-center w-[723px] h-[328px] rounded-[30px] border-[#AEAEAE] border-[1px] bg-white pt-[25px] px-[15px]">
                {
                    (() => {
                        if (title !== "Goals") {
                            if (!recentGoal) {
                                return <NoBieChartContent />;
                            } else {
                                return <NoBieChartContent />;
                            }
                        } else {
                            if (!recentGoal) {
                                return <NoGoalsContent />;
                            } else {
                                return <Goal goal={recentGoal} />;
                            }
                        }
                    })()
                }
            </div>
        </div>
    );
}

export default BieCharts;