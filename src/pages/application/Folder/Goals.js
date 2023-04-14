import { useState } from "react";
import Title from "../components/Title";

import { BsChevronDown } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import GoalCreator from "./component/GoalCreator";

const Goals = () => {
    const [goalModal, setGoalModal] = useState(false);

    let goals = [];

    const createGoal = () => {
        setGoalModal(true);
    }

    return (
        <>
            <Title title={'My Goals'} />
            <button className="w-[220px] h-[40px] bg-[#BFA2E5] rounded-[30px] text-black font-medium text-[22px] self-start flex justify-between items-center px-5">
                <BsChevronDown />
                Active Goals
            </button>
            <div className="self-start flex flex-wrap">
                <div className="w-[530px] h-[315px] bg-white rounded-[40px] border-[1px] border-[#CED4DA] self-start flex flex-col justify-center items-center m-[30px] cursor-pointer" onClick={createGoal}>
                    <AiOutlinePlus size={40} />
                    <div className="text-[40px] font-medium">
                        New goal
                    </div>
                </div>
                {goals}
            </div>
            <GoalCreator modal={goalModal} setModal={setGoalModal} goals={goals}/>
        </>
    );
}

export default Goals;