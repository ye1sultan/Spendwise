import { useState } from "react";
import Title from "../components/Title";

import { BsChevronDown } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import GoalCreator from "./component/GoalCreator";
import Goal from "./component/goals/Goal";

const Goals = () => {
    const [goalModal, setGoalModal] = useState(false);

    let goals = [];

    let obj2 = {
        name: 'Bugatti',
        deadline: '01-01-2024',
        amount: 800000,
        totalAmount: 1000000
    }

    let obj1 = {
        name: 'Villa',
        deadline: '01-01-2025',
        amount: 600,
        totalAmount: 800
    }

    goals.push(obj1);
    goals.push(obj2);

    const createGoal = () => {
        setGoalModal(true);
    }

    return (
        <>
            <GoalCreator modal={goalModal} setModal={setGoalModal} goals={goals} />
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
                {goals.map((goal, index) => (
                    <Goal key={index} name={goal.name} deadline={goal.deadline} amount={goal.amount} totalAmount={goal.totalAmount} />
                ))}
            </div>
        </>
    );
}

export default Goals;