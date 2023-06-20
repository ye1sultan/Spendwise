import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../assets/Logo.png';

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
            <div className="h-[31%] w-full bg-gradient-to-r from-purple-300 via-purple-300 to-pink-100 absolute top-0 z-0">
            </div>
            <div className="max-w-[425px] w-full w-min-[320px] py-[20px] px-[30px] mx-[10px] bg-white rounded-[24px] flex flex-col justify-start items-center z-10 shadow-xl">
                <div className='w-full flex justify-between items-center mb-[30px]'>
                    <div className='flex flex-col items-start'>
                        <div className='text-[32px] font-semibold'>
                            Forgot Password?
                        </div>
                        <div className='text-[16px] text-[#6A6A6A]'>
                            No worries!
                        </div>
                    </div>
                    <img className='h-16' src={Logo} alt='Logo' />
                </div>
                <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col w-full mb-[24px]'>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className='border-[1px] rounded-[8px] border-[#CED4DA] w-full h-[40px] text-[14px] py-[12px] pl-[12px] mb-[24px]'
                        type='email'
                        placeholder='Email'
                        required />
                    <div className="w-full text-[14px] font-semibold mb-[24px]">
                        Enter the email address you used to sign up to. <br></br>We will send you a link to reset your password.
                    </div>
                    <button className='cursor-pointer bg-[#343A40] text-white font-semibold text-[16px] w-full h-[40px] rounded-[8px]' type="submit" >
                        Send Link
                    </button>
                </form>
                <button data-route='/login' className='font-semibold text-[16px] underline' onClick={handleNavigation}>
                    Log In!
                </button>
            </div>
        </div>
    );
}

export default ForgotPassword;