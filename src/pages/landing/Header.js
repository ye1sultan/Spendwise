import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Header = () => {
    const navigate = useNavigate();

    const handleNavigation = (e) => {
        const route = e.currentTarget.getAttribute('data-route');
        navigate(route);
    }

    const handleClickScroll = (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div id='header' className='flex justify-between items-center max-w-[1690px] mx-auto h-40 px-4'>
            <div className='text-4xl w-full font-semibold'>LOGO</div>
            <div className='flex flex-row justify-between items-center w-full'>
                <div className="flex flex-row justify-between ml-[-100px]">
                    <button data-id='about' className="text-[24px] font-light mr-[50px]" onClick={handleClickScroll}>About Us</button>
                    <button data-id='tracking' className="text-[24px] font-light mr-[50px]" onClick={handleClickScroll}>Tracking</button>
                    <button data-id='report' className="text-[24px] font-light mr-[50px]" onClick={handleClickScroll}>Report</button>
                    <button data-id='support' className="text-[24px] font-light mr-[50px]" onClick={handleClickScroll}>Support</button>
                </div>
                <div className="flex flex-row border-l-[1px] border-black pl-8 gap-6">
                    {/* <button data-route='/signin' className="w-[110px] h-[48px] text-[24px] font-light" onClick={handleNavigation}>
                        Sign In
                    </button>
                    <button data-route='/signup' className="w-[110px] h-[48px] rounded-[8px] text-[24px] font-light bg-[#efcc4cbb]" onClick={handleNavigation}>
                        Sign Up
                    </button> */}

                    <Button route='/signin' text='Sign In' width='110px' height='48px' size='24px' color='black' bold='light' font='inter' />
                    <Button route='/signup' text='Sign Up' width='110px' height='48px' bg='#efcc4cbb' rounded='8px' size='24px' color='black' bold='light' font='inter' />
                </div>
            </div>
        </div>
    );
}

export default Header;