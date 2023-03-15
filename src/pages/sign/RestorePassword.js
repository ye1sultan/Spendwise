import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RestorePassword = () => {
    const [password, setPassword] = useState(false);
    const [newPassword, setNewPassword] = useState(false);

    const navigate = useNavigate();

    const handleNavigation = (e) => {
        const route = e.currentTarget.getAttribute('data-route');
        navigate(route);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Submitted!");

        if ((password && newPassword) && (password === newPassword) ) {
            console.log("Submitted!");
            console.log(password);
            console.log(newPassword);
        } else {
            console.log("Some error occured...");
        }
    }

    return (
        <div className="bg-white h-screen flex justify-center items-center relative font-sans">
            <div className="h-[31%] w-full bg-gradient-to-r from-purple-300 via-purple-300 to-pink-100 absolute top-0 z-0"></div>

            <div className="w-[474px] h-[458px] bg-white rounded-[24px] flex flex-col justify-start items-center z-10 shadow-lg">
                <div className="mt-[32px] text-black text-[16px] font-bold mb-[32px]">
                    Restore Password
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
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <div className='flex flex-col justify-center items-center'>
                        <input onChange={(e) => setPassword(e.target.value)} className='border-[1px] rounded-[8px] border-[#CED4DA] mb-[24px] focus:outline-0 w-[382px] h-[40px] text-[12px] text-[#ADB5BD] py-[12px] pl-[12px]' type='password' placeholder='New Password' required/>
                        <input onChange={(e) => setNewPassword(e.target.value)} className='border-[1px] rounded-[8px] border-[#CED4DA] mb-[24px] focus:outline-0 w-[382px] h-[40px] text-[12px] text-[#ADB5BD] py-[12px] pl-[12px]' type='password' placeholder='Confirm Password' required/>
                    </div>
                    <button className='bg-[#343A40] text-white font-semibold text-[12px] w-[382px] h-[40px] rounded-[8px] mb-[32px]' type="submit">
                        Confirm New Password
                    </button>
                </form>
                <div className='flex flex-row justif-center items-center'>
                    <div className='font-semibold text-[12px] mr-2'>
                        Back to
                    </div>
                    <button data-route='/signin' className='font-bold text-[14px]' onClick={handleNavigation}>
                        Sign In.
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RestorePassword;