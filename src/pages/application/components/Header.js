import { BsBell } from 'react-icons/bs';
import { IoSearchOutline } from 'react-icons/io5';

const Header = () => {
    const name = JSON.parse(sessionStorage.getItem('userData')).name;
    const avt = false;

    return (
        <div className="w-full flex flex-row justify-between items-start text-[#2c3e50]">
            <div className="flex flex-col">
                <div className="text-[14px] 2xl:text-[24px]">
                    The Complete Wallet
                </div>
                <div className="text-[18px] 2xl:text-[36px] font-medium">
                    Manage Your <span className="font-bold">Finance</span>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center">
                <div className="relative hidden 2xl:block">
                    <input className="pl-[60px] pr-[20px] w-[400px] h-[40px] rounded-full text-[16px] text-left" type="text" placeholder="Search a transaction and Documents" />
                    <IoSearchOutline className='absolute top-[50%] left-4 translate-y-[-50%]' size={30} />
                </div>
                <div className='block 2xl:hidden'>
                    <IoSearchOutline className='' size={30} />
                </div>
                <BsBell className='ml-4 hidden 2xl:block' size={35} />
                <div className="flex flex-row ml-[20px]">
                    {avt ? <img className='rounded-full w-[30px] h-[30px] 2xl:w-[45px] 2xl:h-[45px]' src={''} alt='avatar' /> : <div className='rounded-full bg-blue-200 flex justify-center items-center w-[30px] h-[30px] 2xl:w-[45px] 2xl:h-[45px] text-[25px] font-medium'>
                        {name.charAt(0) || ''}
                    </div>}
                    <div className="hidden 2xl:flex justify-center items-center text-[20px] font-semibold ml-[20px]">
                        {name || 'Not registered'}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;