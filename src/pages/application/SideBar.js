import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { FiBell, FiPieChart, FiSettings } from 'react-icons/fi';
import { MdSpaceDashboard } from 'react-icons/md';
import { RiMedal2Fill } from 'react-icons/ri';

const SideBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const handleExit = () => {
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('userData');

        navigate('/login');
    }

    const initialActiveButton = location.pathname.split('/')[2] || 'dashboard';
    const [activeButton, setActiveButton] = useState(initialActiveButton);

    const buttons = [
        { view: 'dashboard', label: 'Dashboard', icon: <MdSpaceDashboard className="2xl:mr-6" size={35} /> },
        { view: 'transactions', label: 'Transactions', icon: <AiOutlineUnorderedList className="2xl:mr-6" size={35} /> },
        { view: 'goals', label: 'Goals', icon: <RiMedal2Fill className="2xl:mr-6" size={35} /> },
        { view: 'report', label: 'Report', icon: <FiPieChart className="2xl:mr-7" size={30} /> },
        { view: 'notifications', label: 'Notifications', icon: <FiBell className="2xl:mr-7" size={30} /> },
        { view: 'settings', label: 'Settings', icon: <FiSettings className="2xl:mr-7" size={30} /> },
    ];

    const handleButtonClick = (view) => {
        setActiveButton(view);
    };

    return (
        <div className="sticky left-0 top-0 bg-white flex flex-col justify-start 2xl:justify-between items-center h-screen py-6 2xl:py-14 2xl:px-[30px] shadow-sm">
            <div className="flex flex-col justify-center items-center 2xl:items-start mb-16 2xl:mb-0">
                <div className='hidden 2xl:flex text-3xl text-[#2c3e50] font-semibold z-50 p-2 mb-12'>LOGO</div>
                <div className='text-3xl 2xl:hidden text-[#2c3e50] font-semibold z-50 p-2 mb-12'>L</div>
                {
                    buttons.map((button, index) => (
                        <Link
                            key={index}
                            to={`/application/${button.view}`}
                            onClick={() => handleButtonClick(button.view)}
                            className={`flex items-center 2xl:w-[210px] h-[50px] p-[10px] text-[#2c3e50] text-[15px] font-semibold mb-[15px] ${activeButton === button.view ? 'bg-[#BFA2E5] bg-opacity-70' : 'bg-transparent'}`}>
                            {button.icon}
                            <div className="hidden 2xl:flex 2xl:flex-1">{button.label}</div>
                        </Link>
                    ))
                }
            </div>
            <button onClick={handleExit} className="font-semibold text-[15px] text-[#e74c3c] flex justify-start items-center 2xl:w-[200px]">
                <div className="2xl:mr-4">
                    <BiLogOut size={30} />
                </div>
                <span className='hidden 2xl:inline'>Log out</span>
            </button>
        </div>
    );
}

export default SideBar;