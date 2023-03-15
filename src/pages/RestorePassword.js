const RestorePassword = () => {
    return (
        <div className="bg-white h-screen flex justify-center items-start relative font-sans pt-[252px]">
            <div className="h-[31%] w-full bg-gradient-to-r from-purple-300 via-purple-300 to-pink-100 absolute top-0 z-0"></div>

            <div className="w-[474px] h-[458px] bg-white rounded-[24px] flex flex-col justify-start items-center z-10">
                <div className="mt-[32px] text-black text-[16px] font-bold mb-[32px]">
                    Restore Password ?
                </div>
                <div className="w-[382px] font-inter text-[13px] text-[#343A40] text-opacity-90 py-[8px] pl-[8px] mb-[24px]">
                    <div>
                        1.Password must be at least 8 characters long.
                    </div>
                    <div>
                        2.Password must contain at least one upper case.
                    </div>
                    <div>
                        3.Password must contain at least one number or special character
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <input className='border-[1px] rounded-[8px] border-[#CED4DA] mb-[24px] focus:outline-0 w-[382px] h-[40px] text-[12px] text-[#ADB5BD] py-[12px] pl-[12px]' placeholder='New Password' />
                    <input className='border-[1px] rounded-[8px] border-[#CED4DA] mb-[24px] focus:outline-0 w-[382px] h-[40px] text-[12px] text-[#ADB5BD] py-[12px] pl-[12px]' placeholder='Confirm Password' />
                </div>
                <button className='bg-[#343A40] text-white font-semibold text-[12px] w-[382px] h-[40px] rounded-[8px] mb-[32px]'>
                    Create New Password
                </button>
                <div className='flex flex-row justif-center items-center'>
                    <div className='font-semibold text-[12px] mr-2'>
                        Back to
                    </div>
                    <button className='font-bold text-[14px]'>
                        Sign In.
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RestorePassword;