import Title from "../components/Title";
import Bie from "../components/Bie";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import { ReactComponent as NoResultTr } from '../components/svgs/NoResultTr.svg';

const Transactions = () => {
    const initialBalance = {
        monthlyBalance: '210020',
        incomes: '165000',
        expenses: '110030'
    };

    return (
        <>
            <Title title={'Transaction'} />
            <div className="flex justify-between items-center flex-wrap w-full">
                <Bie title="Current balance" amount={initialBalance.incomes - initialBalance.expenses} svg="current" />
                <Bie title="Incomes" amount={initialBalance.incomes} svg="incomes" />
                <Bie title="Expenses" amount={initialBalance.expenses} svg="expenses" />
                <Bie title="Monthly balance" amount={initialBalance.monthlyBalance} svg="monthly" />
            </div>
            <TransactionTable />
        </>
    );
};

const TransactionTable = () => {
    return (
        <div className="w-full h-[550px] bg-white rounded-[40px] mt-[40px] border-[1px] border-[#AEAEAE] pt-[35px]">
            <MonthSelector />
            <HeaderRow />
            <div className="w-full flex justify-center items-center mb-8">
                <NoResultTr />
            </div>
            <NoResults />
        </div>
    );
};

const MonthSelector = () => {
    return (
        <div className="flex justify-center items-center w-full mb-[40px]">
            <button>
                <BsChevronLeft size={25} color="#9F75D6" />
            </button>
            <div className="mx-[35px] w-[170px] h-[55px] rounded-[30px] border-[2px] border-[#9F75D6] text-[24px] font-medium text-[#9F75D6] flex justify-center items-center">
                <span className="font-bold mr-2">March</span>2023
            </div>
            <button>
                <BsChevronRight size={25} color="#9F75D6" />
            </button>
        </div>
    );
};

const HeaderRow = () => {
    return (
        <div className="w-full h-[60px] bg-[#E3E3E3] bg-opacity-80 flex justify-around items-center mb-[35px]">
            {['Status', 'Date', 'Description', 'Category', 'Type', 'Amount', 'Action'].map((text, index) => (
                <div key={index} className="text-[22px] text-[#6A6A6A] font-medium">
                    {text}
                </div>
            ))}
        </div>
    );
};

const NoResults = () => {
    return (
        <div className="font-medium text-[24px] text-[#696969] w-full flex justify-center items-center">
            No results
        </div>
    );
};

export default Transactions;