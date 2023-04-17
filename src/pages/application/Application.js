import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Header from "./components/Header";

import Dashboard from "./folder/Dashboard";
import Transactions from "./folder/Transactions";
import Goals from "./folder/goals/Goals";
import Report from "./folder/report/Report";
import Notifications from "./folder/Notifications";
import Settings from "./folder/Settings";

import { MdSpaceDashboard } from 'react-icons/md';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { RiMedal2Fill } from 'react-icons/ri';
import { FiPieChart, FiBell, FiSettings } from 'react-icons/fi';
import { BiLogOut } from "react-icons/bi";

const Application = () => {
    const navigate = useNavigate();

    const handleExit = () => {
        navigate('/signin');
    }

    const [activeView, setActiveView] = useState('dashboard');

    const views = {
        dashboard: <Dashboard />,
        transactions: <Transactions />,
        goals: <Goals />,
        report: <Report />,
        notifications: <Notifications />,
        settings: <Settings />,
    };

    const buttons = [
        { view: 'dashboard', label: 'Dashboard', icon: <MdSpaceDashboard size={35} /> },
        { view: 'transactions', label: 'Transactions', icon: <AiOutlineUnorderedList size={35} /> },
        { view: 'goals', label: 'Goals', icon: <RiMedal2Fill size={35} /> },
        { view: 'report', label: 'Report', icon: <FiPieChart size={30} /> },
        { view: 'notifications', label: 'Notifications', icon: <FiBell size={30} /> },
        { view: 'settings', label: 'Settings', icon: <FiSettings size={30} /> },
    ];

    return (
        <div className="flex bg-[#B8C9F5] bg-opacity-20 font-montserrat h-full">
            <div className="sticky left-0 top-0 bg-white flex flex-col justify-between items-center h-screen py-14 px-[30px] shadow-sm">
                <div className="flex flex-col justify-center items-start">
                    <div className='text-3xl w-[230px] font-semibold z-50 p-2 mb-4'>LOGO</div>
                    {
                        buttons.map((button, index) => (
                            <button key={index} className={`flex flex-row justify-start items-center w-[210px] h-[50px] p-[10px] text-[#381C46CC] text-[15px] font-semibold mb-[15px] ${activeView === button.view ? 'bg-[#BFA2E5] bg-opacity-40' : 'bg-transparent'}`} onClick={() => setActiveView(button.view)}>
                                {button.icon}
                                <div className="flex-1">{button.label}</div>
                            </button>
                        ))
                    }
                </div>

                <button onClick={handleExit} className="font-semibold text-[15px] text-[#bf3030] flex justify-start items-center w-[200px]">
                    <div className="mr-4">
                        <BiLogOut size={30} />
                    </div>

                    Log out
                </button>
            </div>
            <div className="w-full px-[60px] py-[50px] h-full">
                <Header />
                <div className="flex flex-col justify-center items-center w-full pt-[30px] h-full">
                    {views[activeView]}
                </div>
            </div>
        </div>
    );
}

export default Application;