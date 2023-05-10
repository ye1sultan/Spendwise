const Header = () => {
    const name = JSON.parse(sessionStorage.getItem('userData')).name;
    const avt = false;

    return (
        <div className="w-full flex flex-row justify-between items-start">
            <div className="flex flex-col">
                <div className="text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] mb-[5px]">
                    The Complete Wallet
                </div>
                <div className="text-base md:text-lg lg:text-xl xl:text-[28px] 2xl:text-[36px] font-medium">
                    Manage Your <span className="font-bold">Finance</span>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center">
                <div className="flex flex-row ml-[20px]">
                    {avt ? <img className='rounded-full w-[30px] h-[30px] lg:w-[45px] lg:h-[45px]' src={''} alt='avatar' /> : <div className='rounded-full bg-blue-200 flex justify-center items-center w-[30px] h-[30px] lg:w-[45px] lg:h-[45px] lg:text-[25px] font-medium'>
                        {name.charAt(0) || ''}
                    </div>}
                    <div className="flex justify-center items-center text-base md:text-lg lg:text-xl font-semibold ml-[10px] lg:ml-[20px]">
                        {name || 'Not registered'}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;