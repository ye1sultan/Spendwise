import Header from "./components/Header";
import Bie from "./components/Bie";
import BieCharts from "./components/BieCharts";

import {BsChevronDown} from 'react-icons/bs';

const Dashboard = () => {
    return (
        <div className="w-full px-[60px] pt-[50px]">
            <Header />
            <div className="flex flex-col justify-center items-center w-full pt-[30px]">
                <div className="flex justify-between w-full">
                    <div className="text-[48px] font-semibold">
                        Dashboard
                    </div>
                    <button className="flex justify-around items-center w-[180px] h-[40px] bg-[#B8C9F5] bg-opacity-20 border-[1px] border-[#AEAEAE] border-opacity-40 rounded-full text-[23px] font-medium">
                        March
                        <BsChevronDown />
                    </button>
                </div>
                <div className="flex justify-between items-center flex-wrap w-full pt-[50px]">
                    <Bie />
                    <Bie />
                    <Bie />
                    <Bie />
                </div>
                <div className="flex flex-wrap justify-between pt-[45px] w-full">
                    <BieCharts />
                    <BieCharts />
                    <BieCharts />
                    <BieCharts />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;