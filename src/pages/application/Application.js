import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Header from "./components/Header";

import Dashboard from "./folder/Dashboard";
import Transactions from "./folder/transactions/Transactions";
import Goals from "./folder/goals/Goals";
import Report from "./folder/report/Report";
import Notifications from "./folder/Notifications";
import Settings from "./folder/settings/Settings";

import TransactionModal from "./folder/record-transaction/TransactionModal";

import { AiOutlineUnorderedList, AiOutlinePlus } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs';
import { FiBell, FiPieChart, FiSettings } from 'react-icons/fi';
import { MdSpaceDashboard } from 'react-icons/md';
import { RiMedal2Fill } from 'react-icons/ri';

const Application = () => {
    const navigate = useNavigate();
    const handleExit = () => {
        navigate('/signin');
    }

    const [transactions, setTransactions] = useState([]);
    const updateTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
        console.log(transactions.length);
    };

    const [activeView, setActiveView] = useState('dashboard');

    const handeClick = () => {
        console.log(setActiveView('transactions'));
    }

    const views = {
        dashboard: <Dashboard onClick={handeClick} />,
        transactions: <Transactions transactions={transactions} setTransactions={setTransactions} />,
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

    const [transaction, setTransaction] = useState('income');
    const [transactionModal, setTransactionModal] = useState(false);

    const handleIncomeClick = () => {
        setTransaction('income');
        setTransactionModal(true);
    }

    const handleExpenseClick = () => {
        setTransaction('expense');
        setTransactionModal(true);
    }

    return (
        <>
            <TransactionModal transaction={transaction} transactionModal={transactionModal} setTransactionModal={setTransactionModal} updateTransaction={updateTransaction} />

            <div className="flex bg-[#B8C9F5] bg-opacity-20 font-montserrat h-full">
                <div className="sticky left-0 top-0 bg-white flex flex-col justify-between items-center h-screen py-14 px-[30px] shadow-sm">
                    <div className="flex flex-col justify-center items-start">
                        <div className='text-3xl w-[230px] font-semibold z-50 p-2 mb-4'>LOGO</div>
                        <div className="dropdown mb-[35px] ">
                            <label tabIndex={0} className="flex flex-row justify-center items-center h-[45px] w-[140px] cursor-pointer uppercase font-medium text-[16px] bg-[#9F75D6] bg-opacity-90 text-white rounded-[30px]">
                                <AiOutlinePlus className="mr-[10px]" size={25} />
                                new
                            </label>
                            <ul tabIndex={0} className="mt-[10px] dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="font-normal" onClick={handleIncomeClick}>
                                        <BsArrowUpRight size={16} color="#2ecc71" />
                                        Income
                                    </button>
                                </li>
                                <li>
                                    <button className="font-normal" onClick={handleExpenseClick}>
                                        <BsArrowDownRight size={16} color="#e74c3c" />
                                        Expense
                                    </button>
                                </li>
                            </ul>
                        </div>
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
        </>
    );
}

export default Application;