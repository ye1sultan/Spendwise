import { BsBell, BsChevronDown } from 'react-icons/bs';

const Header = () => {
    return (
        <div className="w-full flex flex-row justify-between items-start">
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
                    <input className="w-[350px] h-[40px] rounded-full text-[13px] text-center" type="text" placeholder="Search a transaction and Documents" />
                    <svg className="absolute top-[50%] left-4 translate-y-[-50%]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="#A5B3CD" />
                        <path d="M22.0001 22.7499C21.8101 22.7499 21.6201 22.6799 21.4701 22.5299L19.4701 20.5299C19.3307 20.3888 19.2524 20.1984 19.2524 19.9999C19.2524 19.8015 19.3307 19.6111 19.4701 19.4699C19.7601 19.1799 20.2401 19.1799 20.5301 19.4699L22.5301 21.4699C22.8201 21.7599 22.8201 22.2399 22.5301 22.5299C22.3801 22.6799 22.1901 22.7499 22.0001 22.7499V22.7499Z" fill="#A5B3CD" />
                    </svg>
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