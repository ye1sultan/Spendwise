import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const [password, setPassword] = useState(false);

    const navigate = useNavigate();

    const handleNavigation = (e) => {
        const route = e.currentTarget.getAttribute('data-route');
        navigate(route);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password) {
            console.log("Submitted!");
            console.log(password);

            navigate('/restore-password')
        } else {
            console.log("Some error occured...");
        }
    }

    return (
        <div className="bg-white h-screen flex justify-center items-center relative font-sans">
            <div className="h-[31%] w-full bg-gradient-to-r from-purple-300 via-purple-300 to-pink-100 absolute top-0 z-0"></div>

            <div className="w-[474px] h-[346px] bg-white rounded-[24px] flex flex-col justify-start items-center z-10 shadow-lg">
                <div className="mt-[32px] text-black text-[16px] font-bold mb-[32px]">
                    Forgot Password ?
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <div className='flex flex-col justify-center items-center'>
                        <input onChange={(e) => setPassword(e.target.value)} className='border-[1px] rounded-[8px] border-[#CED4DA] mb-[24px] focus:outline-0 w-[382px] h-[40px] text-[12px] text-[#ADB5BD] py-[12px] pl-[12px]' type='email' placeholder='Email' required/>
                    </div>
                    <div className="w-[382px] text-[12px] font-semibold mb-[24px]">
                        Enter the email address you used to sign up to.We will send you a link to reset your password.
                    </div>
                    <button className='bg-[#343A40] text-white font-semibold text-[12px] w-[382px] h-[40px] rounded-[8px] mb-[32px]' type="submit" >
                        Send Link
                    </button>
                </form>
                <div className='flex flex-row justif-center items-center'>
                    <div className='font-semibold text-[12px] mr-2'>
                        Back to
                    </div>
                    <button data-route='/login' className='font-bold text-[14px]' onClick={handleNavigation}>
                        Sign In.
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;