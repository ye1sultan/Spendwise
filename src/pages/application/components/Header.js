import { BsBell } from 'react-icons/bs';
import { IoSearchOutline } from 'react-icons/io5';

const Header = () => {
    return (
        <div className="w-full flex flex-row justify-between items-start text-[#2c3e50]">
            <div className="flex flex-col">
                <div className="text-[24px]">
                    The Complete Wallet
                </div>
                <div className="text-[36px] font-medium">
                    Manage Your <span className="font-bold">Finance</span>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center">
                <div className="relative">
                    <input className="pl-[60px] pr-[20px] w-[400px] h-[40px] rounded-full text-[16px] text-left" type="text" placeholder="Search a transaction and Documents" />
                    <IoSearchOutline className='absolute top-[50%] left-4 translate-y-[-50%]' size={30} />
                </div>
                <div className="indicator ml-[20px]">
                    <span className='indicator-item bg-red-600 border-0 rounded-full w-[10px] h-[10px] mt-[2px] mr-[5px]'></span>
                    <BsBell size={35} />
                </div>
                <div className="flex flex-row ml-[20px]">
                    <div className="avatar">
                        <div className='rounded-full w-[45px]'>
                            <img src='https://picsum.photos/200/200' alt='avatar' />
                        </div>
                    </div>
                    <div className="flex justify-center items-center text-[16px] font-semibold ml-[20px]">
                        Arailym Zholshieva
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;