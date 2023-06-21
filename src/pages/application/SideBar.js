import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { FiBell, FiPieChart, FiSettings } from 'react-icons/fi';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { RiCheckboxMultipleLine, RiPlayListAddFill } from 'react-icons/ri';

import FullLogo from "../assets/FullLogo.png";
import Logo from "../assets/Logo.png";
import { useTranslation } from 'react-i18next';

const SideBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t, i18n } = useTranslation();

    const handleExit = () => {
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('userData');
        sessionStorage.removeItem('pwd');

        navigate('/login');
    }

    const initialActiveButton = location.pathname.split('/')[2] || 'dashboard';
    const [activeButton, setActiveButton] = useState(initialActiveButton);

    useEffect(() => {
        const currentView = location.pathname.split('/')[2] || 'dashboard';
        setActiveButton(currentView);
    }, [location.pathname]);

    const buttons = [
        { view: 'dashboard', label: t("sidebar.dashboard"), icon: <MdOutlineSpaceDashboard className="text-[25px] md:text-[30px] xl:mr-6" /> },
        { view: 'transactions', label: t("sidebar.transactions"), icon: <RiPlayListAddFill className="text-[25px] md:text-[30px] xl:mr-6" /> },
        { view: 'goals', label: t("sidebar.goals"), icon: <RiCheckboxMultipleLine className="text-[25px] md:text-[30px] xl:mr-6" /> },
        { view: 'report', label: t("sidebar.report"), icon: <FiPieChart className="text-[25px] md:text-[30px] xl:mr-6" /> },
        { view: 'notifications', label: t("sidebar.notifications"), icon: <FiBell className="text-[25px] md:text-[30px] xl:mr-6" /> },
        { view: 'settings', label: t("sidebar.settings"), icon: <FiSettings className="text-[25px] md:text-[30px] xl:mr-6" /> },
    ];

    const handleButtonClick = (view) => {
        setActiveButton(view);
    };
    
    let mode = localStorage.getItem("mode");
    //${localStorage.getItem("mode") === "Light Mode" ? 'bg-white' : 'bg-[#BCB8B8] bg-opacity-10'}  
    //${localStorage.getItem("mode") === "Light Mode" ? 'text-[#2c3e50]' : 'text-white'}
    //${localStorage.getItem("mode") === "Light Mode" ? 'placehodler:text-[#696969]' : 'placeholder:text-white'}
    
    return (
        <div className={`${mode === "Light Mode" ? 'bg-white' : 'bg-[#BCB8B8] bg-opacity-10'} sticky left-0 top-0 xl:max-w-[300px] xl:w-full flex flex-col justify-start xl:justify-between items-center h-screen py-6 xl:py-14 xl:px-[30px] shadow-sm`}>
            <div className="flex flex-col justify-center items-center xl:items-start mb-16 xl:mb-0 w-full">
                <div className='w-[210px] h-full hidden xl:block mb-12 z-50'>
                    <img src={FullLogo} alt="Logo" />
                </div>
                <img className='block xl:hidden h-[40px] z-50 mb-6' src={Logo} alt="Logo" />
                {
                    buttons.map((button, index) => (
                        <Link
                            key={index}
                            to={`/application/${button.view}`}
                            onClick={() => handleButtonClick(button.view)}
                            className={`flex items-center w-full h-[50px] p-[10px] ${mode === "Light Mode" ? 'text-[#2c3e50]' : 'text-[#ffffff]'} text-[15px] font-semibold mb-[15px] ${activeButton === button.view ? 'bg-[#BFA2E5] bg-opacity-70' : 'bg-transparent'}`}>
                            {button.icon}
                            <div className="hidden xl:flex xl:flex-1 capitalize">{button.label}</div>
                        </Link>
                    ))
                }
            </div>
            <button onClick={() => handleExit()} className="font-semibold text-[15px] text-[#e74c3c] flex justify-start items-center xl:w-[200px]">
                <div className="xl:mr-4">
                    <BiLogOut size={30} />
                </div>
                <span className='hidden xl:inline capitalize'>
                    {t("sidebar.exit")}
                </span>
            </button>
        </div>
    );
}

export default SideBar;