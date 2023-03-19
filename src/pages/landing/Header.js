import Button from "../components/Button";
import {AiOutlineMenu} from 'react-icons/ai'

const Header = () => {
    const handleClickScroll = (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div id='header' className='flex justify-center sm:justify-between items-center w-full sm:max-w-[1690px] sm:mx-auto h-16 sm:h-40 px-4 bg-white sm:bg-transparent'>
            <div className='text-4xl w-full font-semibold'>LOGO</div>
            <div className='hidden sm:flex flex-row justify-between items-center w-full'>
                <div className="flex flex-row justify-between ml-[-100px]">
                    <button data-id='about' className="text-[24px] font-light mr-[50px]" onClick={handleClickScroll}>About Us</button>
                    <button data-id='tracking' className="text-[24px] font-light mr-[50px]" onClick={handleClickScroll}>Tracking</button>
                    <button data-id='report' className="text-[24px] font-light mr-[50px]" onClick={handleClickScroll}>Report</button>
                    <button data-id='support' className="text-[24px] font-light mr-[50px]" onClick={handleClickScroll}>Support</button>
                </div>
                <div className="flex flex-row border-l-[1px] border-black pl-8 gap-6">
                    <Button route='/signin' text='Sign In' width='110px' height='48px' size='24px' color='black' bold='light' font='inter' />
                    <Button route='/signup' text='Sign Up' width='110px' height='48px' bg='#000000' rounded='8px' size='24px' color='black' bold='light' font='inter' />
                </div>
            </div>
            <AiOutlineMenu size={40} className="flex sm:hidden"/>
        </div>
    );
}

export default Header;