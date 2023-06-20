import { useState, useEffect } from "react";
import { getAllGoals, addNewGoal as addNewGoalAPI, deleteGoal, updateGoal } from '../../../../services/api';

import { BsChevronDown } from 'react-icons/bs';
import { AiOutlineCheckCircle, AiOutlineClockCircle, AiOutlinePlus } from 'react-icons/ai';
import { MdMotionPhotosPaused } from "react-icons/md";

import Title from "../../components/Title";
import GoalCreator from "./CreateGoal";
import Goal from "./Goal";
import EditModal from "./EditModal";
import { useTranslation } from "react-i18next";

const Goals = () => {
    const { t, i18n } = useTranslation();

    const [showDropDown, setShowDropDown] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [goals, setGoals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                const data = await getAllGoals();
                setGoals(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        return () => {
            controller.abort();
        };
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
            <div
                className="
                    w-[300px] md:w-[400px] lg:w-[500px] xl:w-[500px] 
                    h-[200px] md:h-[250px] lg:h-[315px] xl:h-[315px] 
                    min-w-[220px] min-h-[150px] 
                    bg-white 
                    rounded-[15px] md:rounded-[20px] lg:rounded-[30px] 
                    flex flex-col justify-center items-center cursor-pointer shadow-md" onClick={onClick}>
                <AiOutlinePlus className="text-[30px] md:text-[35px] lg:text-[40px]" />
                <div className="text-2xl lg:text-3xl xl:text-[40px] font-medium">{t("goals.goal")}</div>
            </div>
        );
    }

    const GoalsDropDown = ({ onSelect }) => {
        return (
            <div className="absolute top-full mt-2 bg-white rounded-xl shadow-md overflow-hidden">
                <button className="w-full flex justify-start items-center px-4 py-2 text-left text-[16px] lg:text-[20px] font-medium capitalize text-black hover:bg-gray-100 focus:outline-none" onClick={() => onSelect('active')}>
                    <AiOutlineClockCircle className="mr-2 text-[20px] lg:text-[25px]" />
                    {t("goals.active")} {t("sidebar.goals")}
                </button>
                <button className="w-full flex justify-start items-center px-4 py-2 text-left text-[16px] lg:text-[20px] font-medium capitalize text-black hover:bg-gray-100 focus:outline-none" onClick={() => onSelect('paused')}>
                    <MdMotionPhotosPaused className="mr-2 text-[20px] lg:text-[25px]" />
                    {t("goals.paused")} {t("sidebar.goals")}
                </button>
                <button className="w-full flex justify-start items-center px-4 py-2 text-left text-[16px] lg:text-[20px] font-medium capitalize text-black hover:bg-gray-100 focus:outline-none" onClick={() => onSelect('reached')}>
                    <AiOutlineCheckCircle className="mr-2 text-[20px] lg:text-[25px]" />
                    {t("goals.reached")} {t("sidebar.goals")}
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

            <Title title={t("sidebar.goals")} />
            <div className="relative self-start z-10 w-full mb-[30px]">
                <button onClick={() => setShowDropDown(!showDropDown)} className="capitalize h-[35px] md:h-[40px] bg-[#BFA2E5] rounded-[30px] text-black font-medium text-[16px] lg:text-[20px] flex justify-between items-center px-5 z-10">
                    <BsChevronDown className="mr-2" />
                    {t(`goals.${goalFilter.charAt(0).toLowerCase() + goalFilter.slice(1)}`)} {t("sidebar.goals")}
                </button>
                {showDropDown && <GoalsDropDown onSelect={handleFilterSelect} />}
            </div>
            <div className="self-start flex fleg-grow flex-wrap gap-6 w-full h-full">
                <NewGoalButton onClick={createGoal} />
                {isLoading ? (
                    <div className="
                        w-[300px] md:w-[400px] lg:w-[500px] xl:w-[500px] 
                        h-[200px] md:h-[250px] lg:h-[315px] xl:h-[315px] 
                        min-w-[220px] min-h-[150px]
                        bg-white
                        rounded-[15px] md:rounded-[20px] lg:rounded-[30px] p-[30px]">
                        Loading...
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
        </div>
    );
}

export default Goals;