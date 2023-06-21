import SideBar from "./SideBar";
import Header from "./components/Header";
import { Outlet } from 'react-router-dom';

const Application = ({ userData }) => {
    let mode = localStorage.getItem("mode");

    return (
        <div className={`flex ${mode === 'Light Mode' ? 'bg-[#B8C9F5] bg-opacity-20' : 'bg-[#232323]'} text-[#2c3e50] font-montserrat h-full`}>
            <SideBar />
            <div className="w-full px-[10px] xl:px-[40px] py-8 xl:py-[50px] h-full">
                <Header userData={userData} />
                <div className="flex flex-col justify-center items-center w-full xl:pt-[30px] h-full">
                    <Outlet />
                </div>
            </div>
        </div >
    );
}

export default Application;