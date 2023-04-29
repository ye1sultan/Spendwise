import SideBar from "./SideBar";
import Header from "./components/Header";
import { Outlet } from 'react-router-dom';

const Application = ({ name }) => {
    return (
        <div className="flex bg-[#B8C9F5] text-[#2c3e50] bg-opacity-20 font-montserrat h-full">
            <SideBar />
            <div className="w-full px-[60px] py-[50px] h-full">
                <Header name={name} />
                <div className="flex flex-col justify-center items-center w-full pt-[30px] h-full">
                    <Outlet />
                </div>
            </div>
        </div >
    );
}

export default Application;