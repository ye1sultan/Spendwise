import { useState } from "react";
import Title from "../../components/Title";

import { BsChevronDown } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';

import GoalCreator from "./CreateGoal";
import Goal from "./Goal";
import EditModal from "./EditModal";

const Goals = ({ addNewGoal, updateGoals, deleteGoals, pauseGoal, reachGoal, goalsWithIdState, showDropDown, setShowDropDown, showEditModal, setShowEditModal }) => {
    const [goalModal, setGoalModal] = useState(false);
    const [goalFilter, setGoalFilter] = useState('active');

    const createGoal = () => {
        setShowDropDown(false);
        setGoalModal(true);
    }

    const [goalOnEdit, setGoalOnEdit] = useState(null);

    const editGoal = (goal) => {
        setGoalOnEdit(goal);
        setShowEditModal(true);
    }

    const NewGoalButton = ({ onClick }) => {
        return (
            <div className="w-[530px] h-[315px] bg-white rounded-[40px] border-[1px] border-[#CED4DA] self-start flex flex-col justify-center items-center m-[30px] cursor-pointer" onClick={onClick}>
                <AiOutlinePlus size={40} />
                <div className="text-[40px] font-medium">New goal</div>
            </div>
        );
    }

    const GoalsDropDown = ({ onSelect }) => {
        return (
            <div
                onMouseEnter={() => setShowDropDown(showDropDown)}
                onMouseLeave={() => setShowDropDown(!showDropDown)}
                className="absolute top-full mt-2 w-[220px] bg-white border-[1px] border-[#CED4DA] rounded-xl shadow-lg overflow-hidden">
                <button className="w-full px-4 py-2 text-left text-[22px] font-medium text-black hover:bg-gray-100 focus:outline-none" onClick={() => onSelect('active')}>
                    Active Goals
                </button>
                <button className="w-full px-4 py-2 text-left text-[22px] font-medium text-black hover:bg-gray-100 focus:outline-none" onClick={() => onSelect('paused')}>
                    Paused Goals
                </button>
                <button className="w-full px-4 py-2 text-left text-[22px] font-medium text-black hover:bg-gray-100 focus:outline-none" onClick={() => onSelect('reached')}>
                    Reached Goals
                </button>
            </div>
        );
    }

    const handleFilterSelect = (filter) => {
        setGoalFilter(filter);
        setShowDropDown(false);
    }

    const filterGoals = (goals, filter) => {
        return goals.filter((goal) => goal.status === filter);
    };

    const filteredGoals = filterGoals(goalsWithIdState, goalFilter);

    return (
        <div className="w-full h-full flex flex-col items-center">
            {showEditModal && setGoalOnEdit && (
                <EditModal
                    goal={goalOnEdit}
                    onSave={updateGoals}
                    onCancel={() => setShowEditModal(false)}
                />
            )}

            {goalModal && (
                <GoalCreator
                    onModalClose={setGoalModal}
                    addNewGoal={addNewGoal} />
            )}

            <Title title={'My Goals'} />
            <div
                onMouseEnter={() => setShowDropDown(!showDropDown)}
                className="relative self-start z-10">
                <button className="w-[220px] h-[40px] bg-[#BFA2E5] rounded-[30px] text-black font-medium text-[20px] flex justify-between items-center px-5 z-10"
                >
                    <BsChevronDown />
                    {goalFilter.charAt(0).toUpperCase() + goalFilter.slice(1)} Goals
                </button>
                {showDropDown && <GoalsDropDown onSelect={handleFilterSelect} />}
            </div>
            <div className="self-start flex flex-wrap">
                <NewGoalButton onClick={createGoal} />
                {filteredGoals.map((goal, index) => (
                    <Goal
                        key={index}
                        goal={goal}
                        id={goal.id}
                        name={goal.name}
                        deadline={goal.deadline}
                        amount={goal.amount}
                        totalAmount={goal.totalAmount}
                        color={goal.color}
                        icon={goal.icon}
                        status={goalFilter}
                        onDeleteGoal={deleteGoals}
                        onPauseGoal={pauseGoal}
                        onReachGoal={reachGoal}
                        onEditGoal={editGoal}
                    />
                ))}
            </div>
            {/* <div className={`z-50 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[850px] h-[400px] rounded-[50px] bg-white px-[65px] py-[40px] ${deleteGoalModal ? 'flex' : 'hidden'} flex-col justify-between items-center border-[1px] border-[#AEAEAE]`}>
                <div className="text-[45px] font-medium">
                    Delete goal
                </div>
                <div className="text-[32px] font-medium text-[#696969]">
                    Do you really want to delete this goal?
                </div>
                <div className="flex justify-between w-full">
                    <button className="uppercase w-[220px] h-[50px] rounded-[50px] text-[22px] font-medium" onClick={() => setDeleteGoalModal(false)}>
                        cancel
                    </button>
                    <button className="uppercase w-[220px] h-[50px] rounded-[50px] bg-[#BFA2E5] text-[22px] font-medium" onClick={() => deleteGoal(goalToDelete)}>
                        confirm
                    </button>
                </div>
            </div>
            <div className={`z-50 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[850px] h-[400px] rounded-[50px] bg-white px-[65px] py-[40px] ${completeGoalModal ? 'flex' : 'hidden'} flex-col justify-between items-center border-[1px] border-[#AEAEAE]`}>
                <div className="text-[45px] font-medium">
                    Complete goal
                </div>
                <div className="text-[32px] font-medium text-[#696969]">
                    Do you really want to complete this goal?
                </div>
                <div className="flex justify-between w-full">
                    <button className="uppercase w-[220px] h-[50px] rounded-[50px] text-[22px] font-medium" onClick={() => setCompleteGoalModal(false)}>
                        cancel
                    </button>
                    <button className="uppercase w-[220px] h-[50px] rounded-[50px] bg-[#BFA2E5] text-[22px] font-medium" onClick={() => completeGoal(goalToComplete)}>
                        confirm
                    </button>
                </div>
            </div> */}
        </div>
    );
}

export default Goals;