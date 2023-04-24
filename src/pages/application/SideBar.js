import { Link, useNavigate } from 'react-router-dom';

import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { FiBell, FiPieChart, FiSettings } from 'react-icons/fi';
import { MdSpaceDashboard } from 'react-icons/md';
import { RiMedal2Fill } from 'react-icons/ri';

const SideBar = () => {
    const navigate = useNavigate();
    const handleExit = () => {
        navigate('/signin');
    }

    const buttons = [
        { view: 'dashboard', label: 'Dashboard', icon: <MdSpaceDashboard className="mr-6" size={35} /> },
        { view: 'transactions', label: 'Transactions', icon: <AiOutlineUnorderedList className="mr-6" size={35} /> },
        { view: 'goals', label: 'Goals', icon: <RiMedal2Fill className="mr-6" size={35} /> },
        { view: 'report', label: 'Report', icon: <FiPieChart className="mr-7" size={30} /> },
        { view: 'notifications', label: 'Notifications', icon: <FiBell className="mr-7" size={30} /> },
        { view: 'settings', label: 'Settings', icon: <FiSettings className="mr-7" size={30} /> },
    ];

    return (
        <div className="sticky left-0 top-0 bg-white flex flex-col justify-between items-center h-screen py-14 px-[30px] shadow-sm">
            <div className="flex flex-col justify-center items-start">
                <div className='text-3xl text-[#2c3e50] w-[230px] font-semibold z-50 p-2 mb-12'>LOGO</div>
                {
                    buttons.map((button, index) => (
                        <Link
                            key={index}
                            to={`/application/${button.view}`}
                            className="flex items-center w-[210px] h-[50px] p-[10px] text-[#2c3e50] text-[15px] font-semibold mb-[15px] bg-[#ffffff]">
                            {button.icon}
                            <div className="flex-1">{button.label}</div>
                        </Link>
                    ))
                }
            </div>
            <button onClick={handleExit} className="font-semibold text-[15px] text-[#e74c3c] flex justify-start items-center w-[200px]">
                <div className="mr-4">
                    <BiLogOut size={30} />
                </div>
                Log out
            </button>
        </div>
    );
}

export default SideBar;