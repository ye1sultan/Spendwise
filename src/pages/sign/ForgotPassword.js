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
        <div className="bg-white h-screen flex justify-center items-center relative font-sans w-full">
            <div className="h-[31%] w-full bg-gradient-to-r from-purple-300 via-purple-300 to-pink-100 absolute top-0 z-0"></div>
            <div className="max-w-[450px] w-full w-min-[320px] py-[20px] px-[30px] mx-[10px] bg-white rounded-[24px] flex flex-col justify-start items-center z-10 shadow-lg">
                <div className="text-[16px] font-bold mb-[20px]">
                    Forgot Password ?
                </div>
                <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col w-full mb-[24px]'>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className='border-[1px] rounded-[8px] border-[#CED4DA] mb-[20px] focus:outline-0 w-full h-[40px] text-[12px] text-[#000000] py-[12px] pl-[12px]'
                        type='email'
                        placeholder='Email'
                        required />
                    <div className="w-full text-[12px] font-semibold mb-[24px]">
                        Enter the email address you used to sign up to.We will send you a link to reset your password.
                    </div>
                    <button className='bg-[#343A40] text-white font-semibold text-[12px] w-full h-[40px] rounded-[8px] cursor-pointer' type="submit" >
                        Send Link
                    </button>
                </form>
                <button data-route='/login' className='font-bold text-[14px] underline' onClick={handleNavigation}>
                    Log In!
                </button>
            </div>
        </div>
    );
}

export default ForgotPassword;