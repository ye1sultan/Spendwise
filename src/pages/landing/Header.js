import Button from "../components/Button";
import { AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
    const handleClickScroll = (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const handleClick = () => {

    }

    return (
        <div id='header' className='flex justify-center 2xl:justify-between items-center w-full 2xl:max-w-[1690px] 2xl:mx-auto h-16 2xl:h-40 px-4 bg-white 2xl:bg-transparent relative'>
            <div className='text-4xl w-full font-semibold'>LOGO</div>
            <div className='hidden 2xl:flex flex-row justify-between items-center w-full'>
                <div className="flex flex-row justify-between ml-[-100px]">
                    <button data-id='about' className="text-[24px] font-light mr-[50px]" onClick={handleClickScroll}>About Us</button>
                    <button data-id='tracking' className="text-[24px] font-light mr-[50px]" onClick={handleClickScroll}>Tracking</button>
                    <button data-id='report' className="text-[24px] font-light mr-[50px]" onClick={handleClickScroll}>Report</button>
                    <button data-id='support' className="text-[24px] font-light mr-[50px]" onClick={handleClickScroll}>Support</button>
                </div>
                <div className="flex flex-row border-l-[1px] border-black pl-8 gap-6">
                    <Button route='/signin' text='Sign In' width='2xl:w-[110px]' height='2xl:h-[48px]' size='text-[24px]' color='text-black' bold='font-light' font='font-inter' display='hidden 2xl:block' />
                    <Button route='/signup' text='Sign Up' width='2xl:w-[110px]' height='2xl:h-[48px]' bg='bg-[#EFCA47CC]' rounded='rounded-[8px]' size='2xl:text-[24px]' color='text-black' bold='font-light' font='font-inter' display='hidden 2xl:block' />
                </div>
            </div>

            <div className="flex 2xl:hidden flex-col justify-center items-center absolute left-0 top-0 pt-3 pl-4 bg-white h-screen w-[100%] z-50">
                <div className='text-4xl w-full font-semibold'>LOGO</div>
                <div className='flex flex-col justify-between items-center'>
                    <div className="flex flex-col justify-between h-[200px]">
                        <button data-id='about' className="text-[24px] font-light mr-[50px]" onClick={handleClickScroll}>About Us</button>
                        <button data-id='tracking' className="text-[24px] font-light mr-[50px]" onClick={handleClickScroll}>Tracking</button>
                        <button data-id='report' className="text-[24px] font-light mr-[50px]" onClick={handleClickScroll}>Report</button>
                        <button data-id='support' className="text-[24px] font-light mr-[50px]" onClick={handleClickScroll}>Support</button>
                    </div>
                    <div className="flex flex-col pt-5">
                        <Button route='/signin' text='Sign In' width='w-[110px]' height='h-[48px]' size='text-[24px]' color='text-black' bold='font-light' font='font-inter' display='block' />
                        <Button route='/signup' text='Sign Up' width='w-[110px]' height='h-[48px]' bg='bg-[#EFCA47CC]' rounded='rounded-[8px]' size='text-[24px]' color='text-black' bold='font-light' font='font-inter' display='block' />
                    </div>
                </div>
            </div>

            <button onClick={handleClick}>
                <AiOutlineMenu size={40} className="flex 2xl:hidden" />
            </button>
        </div>
    );
}

export default Header;