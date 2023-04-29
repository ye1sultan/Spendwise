import { useNavigate } from 'react-router-dom';

import Google from './imgs/Google.png';
import Apple from './imgs/Apple.png';

const Signin = ({ handleSubmit, setEmail, setPassword }) => {
    const navigate = useNavigate();

    const handleNavigation = (e) => {
        const route = e.currentTarget.getAttribute('data-route');
        navigate(route);
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
                    <div className="w-[50px] h-[50px] p-[10px] border-[1px] rounded-[8px] border-[#CED4DA]">
                        <img src={Apple} alt="Google" />
                    </div>
                </div>
                <div className='font-semibold text-[12px] text-[#ADB5BD] mb-[32px]'>
                    or
                </div>
                <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col'>
                    <div className='flex flex-col justify-center items-center'>
                        <input className='border-[1px] rounded-[8px] border-[#CED4DA] mb-[24px] focus:outline-0 w-[382px] h-[40px] text-[12px] text-[#000000] py-[12px] pl-[12px]' onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' required />
                        <input className='border-[1px] rounded-[8px] border-[#CED4DA] mb-[24px] focus:outline-0 w-[382px] h-[40px] text-[12px] text-[#000000] py-[12px] pl-[12px]' onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' required />
                    </div>
                    <button data-route='/forgot-password' className='text-[12px] font-semibold text-[#758697] mb-[24px]' onClick={handleNavigation}>
                        Forgot Password?
                    </button>
                    <div className="mb-[24px] text-black font-semibold flex flex-row justify-start items-center w-[382px]">
                        <input
                            id="checkbox"
                            type="checkbox"
                            value=""
                            className="w-[18px] h-[18px] mr-[24px]"
                        />
                        <label htmlFor="checkbox" className="text-[12px]">
                            Remember me
                        </label>
                    </div>
                    <button className='bg-[#343A40] text-white font-semibold text-[12px] w-[382px] h-[40px] rounded-[8px] mb-[32px]' type='submit'>
                        Sign in
                    </button>
                </form>
                <div className='flex flex-row justif-center items-center'>
                    <div className='font-semibold text-[12px] mr-2'>
                        Don`t have an account yet?
                    </div>
                    <button data-route='/signup' className='font-bold text-[14px]' onClick={handleNavigation}>
                        Sign Up here!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signin;