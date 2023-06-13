import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { login } from '../../services/api';

import { AiFillGoogleCircle } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import Logo from '../assets/Logo.png';

const Login = () => {
    const navigate = useNavigate();

    const handleNavigation = (e) => {
        e.preventDefault();

        const route = e.currentTarget.getAttribute('data-route');
        navigate(route);
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { user, token } = await login(email, password);
            console.log(user);
            sessionStorage.setItem('userData', JSON.stringify(user));
            sessionStorage.setItem('authToken', token);
            sessionStorage.setItem('pwd', password);

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

    const [transparentPassword, setTransparentPassword] = useState(false);

    return (
        <div className="bg-white h-screen flex justify-center items-center relative font-sans">
            <div className="h-[31%] w-full bg-gradient-to-r from-purple-300 via-purple-300 to-pink-100 absolute top-0 z-0">
            </div>
            <div className="max-w-[425px] w-full w-min-[320px] py-[20px] px-[30px] mx-[10px] bg-white rounded-[24px] flex flex-col justify-start items-center z-10 shadow-xl">
                <div className='w-full flex justify-between items-center mb-[30px]'>
                    <div className='flex flex-col items-start'>
                        <div className='text-[32px] font-semibold'>
                            Log in
                        </div>
                        <div className='text-[16px] text-[#6A6A6A]'>
                            Welcome back!
                        </div>
                    </div>
                    <img className='h-16' src={Logo} alt='Logo' />
                </div>
                <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col w-full mb-[24px]'>
                    <div className='flex flex-col justify-center items-center w-full'>
                        <input
                            className="border-[1px] rounded-[8px] border-[#CED4DA] w-full h-[40px] text-[14px] py-[12px] pl-[12px] mb-[24px]"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            placeholder="Email"
                            required
                        />
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            className='border-[1px] rounded-[8px] border-[#CED4DA] w-full h-[40px] text-[14px] py-[12px] pl-[12px] mb-[24px]'
                            type={transparentPassword ? 'text' : 'password'}
                            placeholder='Password'
                            required />
                    </div>
                    <div className="mb-[24px] text-black font-semibold flex flex-row justify-start items-center w-full ml-1">
                        <input
                            id="checkbox"
                            type="checkbox"
                            value="true"
                            className="w-[20px] h-[20px] mr-[24px] cursor-pointer"
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="checkbox" className="text-[14px] cursor-pointer">
                            Remember me
                        </label>
                    </div>
                    <input className='cursor-pointer bg-[#343A40] text-white font-semibold text-[16px] w-full h-[40px] rounded-[8px]' type='submit' value='Log In' />
                </form>
                <div className='flex flex-row justify-center items-center'>
                    <button data-route='/signup' className='font-semibold text-[16px] underline text-black' onClick={handleNavigation}>
                        Sign up!
                    </button>
                    <BsDot size={30} />
                    <button data-route='/forgot-password' className='font-semibold text-[16px] underline' onClick={handleNavigation}>
                        Forgot Password?
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;