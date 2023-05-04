import { useNavigate } from 'react-router-dom';
import GoogleLogin from './GoogleLogin';

import { useEffect, useState } from 'react';
import { login } from '../../services/api';

const Login = ({ setUserData }) => {
    const navigate = useNavigate();

    const handleNavigation = (e) => {
        e.preventDefault();

        const route = e.currentTarget.getAttribute('data-route');
        navigate(route);
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [user, setUser] = useState(null);
    const [token, setToken] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, token);
        try {
            const { user, token } = await login(email, password);
            setUser(user);
            setUserData(user);
            setToken(token);

            localStorage.setItem('userData', JSON.stringify(user));
            localStorage.setItem('authToken', token);

            if (rememberMe) {
                localStorage.setItem('rememberedEmail', email);
            } else {
                localStorage.removeItem('rememberedEmail');
            }

            navigate("/application");
        } catch (error) {
            console.error(error.message);
            alert(error.message);
        }
    };

    useEffect(() => {
        const rememberedEmail = localStorage.getItem('rememberedEmail');
        if (rememberedEmail) {
            setEmail(rememberedEmail);
        }
    }, []);


    return (
        <div className="bg-white h-screen flex justify-center items-center relative font-sans w-full">
            <div className="h-[31%] w-full bg-gradient-to-r from-purple-300 via-purple-300 to-pink-100 absolute top-0 z-0"></div>
            <div className="max-w-[450px] w-full w-min-[320px] py-[20px] px-[30px] mx-[10px] bg-white rounded-[24px] flex flex-col justify-start items-center z-10 shadow-lg">
                <div className=" text-[#344767] font-semibold mb-[20px] text-[12px]">
                    Continue with
                </div>
                <div className="flex flex-row justify-center items-center w-full mb-[20px]">
                    <GoogleLogin />
                </div>
                <div className='font-semibold text-[12px] text-[#ADB5BD] mb-[20px]'>
                    or
                </div>
                <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col w-full'>
                    <div className='flex flex-col justify-center items-center w-full'>
                        <input
                            className="border-[1px] rounded-[8px] border-[#CED4DA] mb-[24px] focus:outline-0 w-full h-[40px] text-[12px] text-[#000000] py-[12px] pl-[12px]"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            placeholder="Email"
                            required
                        />
                        <input className='border-[1px] rounded-[8px] border-[#CED4DA] mb-[24px] focus:outline-0 w-full h-[40px] text-[12px] text-[#000000] py-[12px] pl-[12px]' onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' required />
                    </div>
                    <button data-route='/forgot-password' className='text-[12px] font-semibold text-[#758697] mb-[24px] underline' onClick={handleNavigation}>
                        Forgot Password?
                    </button>
                    <div className="mb-[24px] text-black font-semibold flex flex-row justify-start items-center w-full">
                        <input
                            id="checkbox"
                            type="checkbox"
                            value=""
                            className="w-[18px] h-[18px] mr-[24px]"
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="checkbox" className="text-[12px]">
                            Remember me
                        </label>
                    </div>
                    <input className='bg-[#343A40] text-white font-semibold text-[12px] w-full h-[40px] rounded-[8px] mb-[32px]' type='submit' value='Log In' />
                </form>
                <div className='flex flex-row justif-center items-center'>
                    <div className='font-semibold text-[14px] mr-2'>
                        Don`t have an account yet?
                    </div>
                    <button data-route='/signup' className='font-bold text-[14px] underline' onClick={handleNavigation}>
                        Sign Up here!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;