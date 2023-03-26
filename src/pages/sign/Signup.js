import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Google from './imgs/Google.png';
import Facebook from './imgs/Facebook.png';
import Apple from './imgs/Apple.png';

const Signup = () => {
    const [name, setName] = useState(false);
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);

    const navigate = useNavigate();

    const handleNavigation = (e) => {
        const route = e.currentTarget.getAttribute('data-route');
        navigate(route);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Submitted!");

        if (name && email && password) {
            console.log("Submitted!");
            console.log(name);
            console.log(email);
            console.log(password);
        } else {
            console.log("Some error occured...");
        }
    }

    return (
        <div className="bg-white h-screen flex justify-center items-center relative font-sans">
            <div className="h-[31%] w-full bg-gradient-to-r from-purple-300 via-purple-300 to-pink-100 absolute top-0 z-0"></div>

            <div className="w-[474px] h-[576px] bg-white rounded-[24px] flex flex-col justify-start items-center z-10 shadow-lg">
                <div className="mt-[32px] text-[#344767] font-semibold mb-[32px] text-[12px]">
                    Continue with
                </div>
                <div className="flex flex-row justify-center items-center w-[176px] mb-[32px]">
                    <div className="w-[50px] h-[50px] p-[10px] border-[1px] rounded-[8px] border-[#CED4DA] mr-[12px]">
                        <img src={Google} alt="Google" />
                    </div>
                    <div className="w-[50px] h-[50px] p-[10px] border-[1px] rounded-[8px] border-[#CED4DA] mr-[12px]">
                        <img src={Facebook} alt="Google" />
                    </div>
                    <div className="w-[50px] h-[50px] p-[10px] border-[1px] rounded-[8px] border-[#CED4DA]">
                        <img src={Apple} alt="Google" />
                    </div>
                </div>
                <div className='font-semibold text-[12px] text-[#ADB5BD] mb-[32px]'>
                    or
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <div className='flex flex-col justify-center items-center'>
                        <input onChange={(e) => setName(e.target.value)} className='border-[1px] rounded-[8px] border-[#CED4DA] mb-[24px] focus:outline-0 w-[382px] h-[40px] text-[12px] text-[#ADB5BD] py-[12px] pl-[12px]' type='text' placeholder='Name' required />
                        <input onChange={(e) => setEmail(e.target.value)} className='border-[1px] rounded-[8px] border-[#CED4DA] mb-[24px] focus:outline-0 w-[382px] h-[40px] text-[12px] text-[#ADB5BD] py-[12px] pl-[12px]' type='email' placeholder='Email' required />
                        <input onChange={(e) => setPassword(e.target.value)} className='border-[1px] rounded-[8px] border-[#CED4DA] mb-[24px] focus:outline-0 w-[382px] h-[40px] text-[12px] text-[#ADB5BD] py-[12px] pl-[12px]' type='password' placeholder='Password' required />
                    </div>
                    <div className='mb-[24px] text-black font-semibold flex flex-row justify-start items-center w-[382px]'>
                        <input id='checkbox' type='checkbox' value='' className='w-[18px] h-[18px] mr-[24px]' />
                        <label for='checkbox' className='text-[12px]'>I agree to the Terms of Use</label>
                    </div>
                    <button className='bg-[#343A40] text-white font-semibold text-[12px] w-[382px] h-[40px] rounded-[8px] mb-[32px]' type='submit'>
                        Create Account
                    </button>
                </form>
                <div className='flex flex-row justif-center items-center'>
                    <div className='font-semibold text-[12px] mr-2'>
                        Already have an account?
                    </div>
                    <button data-route='/signin' className='font-bold text-[14px]' onClick={handleNavigation}>
                        Sign In here!.
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signup;