const Header = () => {
    return (
        <div className='flex justify-between items-center max-w-[1690px] mx-auto h-40 px-4'>
            <div className='text-4xl w-full font-semibold'>LOGO</div>
            <div className='flex flex-row justify-between items-center w-full'>
                <ul className="list-none flex flex-row justify-between ml-[-100px]">
                    <li className="text-[24px] font-light mr-[50px]">Tracking</li>
                    <li className="text-[24px] font-light mr-[50px]">Report</li>
                    <li className="text-[24px] font-light mr-[50px]">About</li>
                    <li className="text-[24px] font-light mr-[50px]">Support</li>
                </ul>
                <div className="flex flex-row border-l-[1px] border-black gap-10">
                    <button className="w-[110px] h-[48px] text-[24px] font-light">
                        Sign In
                    </button>
                    <button className="w-[110px] h-[48px] rounded-[8px] text-[24px] font-light bg-[#efcc4cbb]">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;