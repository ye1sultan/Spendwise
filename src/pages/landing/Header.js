import { useState } from "react";

import Button from "./components/Button";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import FullLogo from "../assets/FullLogo.png";
import Logo from "../assets/Logo.png";

const Header = () => {
    const [menu, setMenu] = useState(false);

    const handleClickScroll = (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const handleClick = () => {
        menu === true ? setMenu(false) : setMenu(true);
    }

    return (
        <div id='header' className='flex justify-between items-center w-full 2xl:max-w-[1690px] 2xl:mx-auto 2xl:h-40 px-4 bg-transparent relative z-50'>
            <img className="h-[50px] block 2xl:hidden z-50" src={Logo} alt="Logo" />
            <img className="h-[60px] hidden 2xl:block" src={FullLogo} alt="Logo" />
            <div className='hidden 2xl:flex flex-row justify-between items-center'>
                <div className="flex flex-row justify-between">
                    <button data-id='about' className="text-[24px] font-light mr-[50px]" onClick={handleClickScroll}>About Us</button>
                    <button data-id='tracking' className="text-[24px] font-light mr-[50px]" onClick={handleClickScroll}>Tracking</button>
                    <button data-id='report' className="text-[24px] font-light mr-[50px]" onClick={handleClickScroll}>Report</button>
                    <button data-id='support' className="text-[24px] font-light mr-[50px]" onClick={handleClickScroll}>Support</button>
                </div>
                <div className="flex flex-row border-l-[1px] border-black pl-8 gap-6">
                    <Button route='/login' text='Log In' width='2xl:w-[110px]' height='2xl:h-[48px]' size='text-[24px]' color='text-black' bold='font-light' font='font-inter' display='hidden 2xl:block' />
                    <Button route='/signup' text='Sign Up' width='2xl:w-[110px]' height='2xl:h-[48px]' bg='bg-[#EFCA47CC]' rounded='rounded-[8px]' size='2xl:text-[24px]' color='text-black' bold='font-light' font='font-inter' display='hidden 2xl:block' />
                </div>
            </div>

            <div className={`flex 2xl:hidden flex-col justify-center items-center absolute left-0 top-0 pt-3 bg-white h-screen w-[100%] z-40 ${menu === true ? 'translate-x-0' : 'translate-x-[-100%]'} transition-transform ease-in-out duration-500`}>
                <div className='flex flex-col justify-center items-center w-full'>
                    <div className="flex flex-col justify-between items-center h-[200px]">
                        <button data-id='about' className="text-[24px] font-light" onClick={handleClickScroll}>About Us</button>
                        <button data-id='tracking' className="text-[24px] font-light" onClick={handleClickScroll}>Tracking</button>
                        <button data-id='report' className="text-[24px] font-light" onClick={handleClickScroll}>Report</button>
                        <button data-id='support' className="text-[24px] font-light" onClick={handleClickScroll}>Support</button>
                    </div>
                    <div className="flex flex-col pt-6 justify-center items-center w-full gap-2">
                        <Button route='/login' text='Log In' width='w-[110px]' height='h-[48px]' size='text-[24px]' color='text-black' bold='font-light' font='font-inter' display='block' />
                        <Button route='/signup' text='Sign Up' width='w-[110px]' height='h-[48px]' bg='bg-[#EFCA47CC]' rounded='rounded-[8px]' size='text-[24px]' color='text-black' bold='font-light' font='font-inter' display='block' />
                    </div>
                </div>
            </div>
            <button className="flex 2xl:hidden z-50" onClick={handleClick}>
                <AiOutlineMenu size={30} className={`${menu === true ? 'hidden' : 'flex'}`} />
                <AiOutlineClose size={30} className={`${menu === true ? 'flex' : 'hidden'}`} />
            </button>
        </div>
    );
}

export default Header;