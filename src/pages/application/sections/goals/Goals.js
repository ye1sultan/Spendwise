import { useState, useEffect } from "react";
import { getAllGoals, addNewGoal as addNewGoalAPI, deleteGoal, updateGoal } from '../../../../services/api';

import Title from "../../components/Title";

import { BsChevronDown } from 'react-icons/bs';
import { AiOutlineCheckCircle, AiOutlineClockCircle, AiOutlinePlus } from 'react-icons/ai';

import GoalCreator from "./CreateGoal";
import Goal from "./Goal";
import EditModal from "./EditModal";
import ContentLoader from "react-content-loader";
import { MdMotionPhotosPaused } from "react-icons/md";

const Goals = () => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [goals, setGoals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllGoals();
                setGoals(data);
                setIsLoading(false);
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const addNewGoal = async (goal) => {
        try {
            const newGoal = await addNewGoalAPI(goal);
            setGoals((prevGoals) => [...prevGoals, newGoal]);
            setShowDropDown(false);
        } catch (error) {
            console.error('Error adding new goal:', error);
        }
    };

    const updateGoals = (updatedGoal) => {
        setGoals((prevGoals) =>
            prevGoals.map((goal) => goal.id === updatedGoal.id ? updatedGoal : goal)
        );

        setShowEditModal(false);
    }

    const deleteGoals = async (id) => {
        try {
            await deleteGoal(id);
            setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
        } catch (error) {
            console.error('Error deleting goal:', error);
        }
    };

    const pauseGoal = async (id) => {
        const goalToPause = goals.find((goal) => goal.id === id);

        if (goalToPause) {
            const updatedGoal = {
                ...goalToPause,
                status: goalToPause.status === 'active' ? 'paused' : 'active',
            };

            try {
                const updatedData = await updateGoal(id, removeKeys(updatedGoal, ['created_at', 'id', 'progress', 'updated_at', 'user_id']));
                updateGoals(updatedData);
            } catch (error) {
                console.error('Error updating goal status:', error);
            }
        }
    };

    const reachGoal = async (id) => {
        const goalToReach = goals.find((goal) => goal.id === id);

        if (goalToReach) {
            const updatedGoal = {
                ...goalToReach,
                status: 'reached',
            };

            try {
                const updatedData = await updateGoal(id, removeKeys(updatedGoal, ['created_at', 'id', 'progress', 'updated_at', 'user_id']));
                updateGoals(updatedData);
            } catch (error) {
                console.error('Error updating goal status:', error);
            }
        }
    };

    const removeKeys = (obj, keysToRemove) => {
        const newObj = { ...obj };
        keysToRemove.forEach((key) => {
            delete newObj[key];
        });

        return newObj;
    }

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
                className="absolute top-full mt-2 bg-white rounded-xl shadow-md overflow-hidden">
                <button className="w-full flex justify-start items-center px-4 py-2 text-left text-[22px] font-medium text-black hover:bg-gray-100 focus:outline-none" onClick={() => onSelect('active')}>
                    <AiOutlineClockCircle size={28} className="mr-2" /> Active Goals
                </button>
                <button className="w-full flex justify-start items-center px-4 py-2 text-left text-[22px] font-medium text-black hover:bg-gray-100 focus:outline-none" onClick={() => onSelect('paused')}>
                    <MdMotionPhotosPaused size={28} className="mr-2" /> Paused Goals
                </button>
                <button className="w-full flex justify-start items-center px-4 py-2 text-left text-[22px] font-medium text-black hover:bg-gray-100 focus:outline-none" onClick={() => onSelect('reached')}>
                    <AiOutlineCheckCircle size={28} className="mr-2" /> Reached Goals
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

    const filteredGoals = filterGoals(goals, goalFilter);

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
            <div className="relative self-start z-10 w-full">
                <button
                    onMouseEnter={() => setShowDropDown(!showDropDown)}
                    className="h-[40px] bg-[#BFA2E5] rounded-[30px] text-black font-medium text-[20px] flex justify-between items-center px-5 z-10"
                >
                    <BsChevronDown className="mr-2" />
                    {goalFilter.charAt(0).toUpperCase() + goalFilter.slice(1)} Goals
                </button>
                {showDropDown && <GoalsDropDown onSelect={handleFilterSelect} />}
            </div>
            <div className="self-start flex flex-wrap">
                <NewGoalButton onClick={createGoal} />
                {isLoading ? (
                    <div className="w-[530px] h-[315px] bg-white rounded-[40px] border-[1px] border-[#CED4DA] m-[30px] p-[30px]">
                        <ContentLoader
                            speed={2}
                            width={530}
                            height={315}
                            viewBox="0 0 530 315"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb">
                            <circle cx="30" cy="30" r="30" />
                            <rect x="80" y="15" rx="8" ry="8" width="200" height="35" />
                            <rect x="10" y="80" rx="8" ry="8" width="100" height="20" />
                            <rect x="10" y="110" rx="8" ry="8" width="150" height="35" />
                            <rect x="340" y="110" rx="8" ry="8" width="120" height="35" />
                            <rect x="10" y="170" rx="8" ry="8" width="450" height="20" />
                            <rect x="10" y="200" rx="8" ry="8" width="150" height="15" />
                        </ContentLoader>
                    </div>
                ) : (
                    filteredGoals.map((goal, index) => (
                        <Goal
                            key={index}
                            goal={goal}
                            id={goal.id}
                            name={goal.name}
                            deadline={goal.deadline}
                            target_amount={goal.target_amount}
                            initial_target_amount={goal.initial_target_amount}
                            color={goal.color}
                            icon={goal.icon}
                            status={goal.status}
                            onDeleteGoal={deleteGoals}
                            onPauseGoal={pauseGoal}
                            onReachGoal={reachGoal}
                            onEditGoal={editGoal}
                        />
                    ))
                )}
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