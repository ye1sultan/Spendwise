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

        if ((password && newPassword) && (password === newPassword)) {
            console.log("Submitted!");
            console.log(password);
            console.log(newPassword);
        } else {
            console.log("Some error occured...");
        }
    }

    return (
        <div className="bg-white h-screen flex justify-center items-center relative font-sans w-full">
            <div className="h-[31%] w-full bg-gradient-to-r from-purple-300 via-purple-300 to-pink-100 absolute top-0 z-0"></div>
            <div className="max-w-[450px] w-full w-min-[320px] py-[20px] px-[30px] mx-[10px] bg-white rounded-[24px] flex flex-col justify-start items-center z-10 shadow-lg">
                <div className="text-[16px] font-bold mb-[20px]">
                    Restore Password
                </div>
                <div className="w-full text-[12px] font-normal mb-[24px] pl-2">
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
                <form onSubmit={handleSubmit} className="flex flex-col w-full mb-[24px]">
                    <div className='flex flex-col justify-center items-center'>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            className='border-[1px] rounded-[8px] border-[#CED4DA] mb-[20px] focus:outline-0 w-full h-[40px] text-[12px] text-[#000000] py-[12px] pl-[12px]'
                            type='password'
                            placeholder='New Password' required />
                        <input
                            onChange={(e) => setNewPassword(e.target.value)}
                            className='border-[1px] rounded-[8px] border-[#CED4DA] mb-[20px] focus:outline-0 w-full h-[40px] text-[12px] text-[#000000] py-[12px] pl-[12px]'
                            type='password'
                            placeholder='Confirm Password' required />
                    </div>
                    <button className='bg-[#343A40] text-white font-semibold text-[12px] w-full h-[40px] rounded-[8px] cursor-pointer' type="submit">
                        Confirm
                    </button>
                </form>
                <button data-route='/login' className='font-bold text-[14px] underline' onClick={handleNavigation}>
                    Sign In
                </button>
            </div>
        </div>
    );
}

export default RestorePassword;