import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { register } from '../../services/api';

import { BsDot } from 'react-icons/bs';
import Logo from '../assets/Logo.png';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleNavigation = (e) => {
        const route = e.currentTarget.getAttribute('data-route');
        navigate(route);
    }

    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleCheckboxChange = (e) => {
        setAgreeTerms(e.target.checked);
    }

    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!agreeTerms) {
            toast.error("Please accept terms of use.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        if (!validateName(name)) {
            toast.error("Please enter a valid name.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        if (!validatePassword(password)) {
            toast.error("Password must be at least 8 characters long, contain at least one letter and one number.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        if (!validateEmail(email)) {
            toast.error("Please enter a valid email address.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        if (!passwordsMatch) {
            toast.error("Passwords do not match.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        try {
            await register(name, email, password, passwordConfirmation);
            toast.success("Success!", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                navigate('/login');
            }, 1000);

        } catch (error) {
            toast.error(error.message, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    const validateName = (name) => {
        const nameRegex = /^[a-zA-Z ]{2,30}$/;
        const isValid = nameRegex.test(name);
        return isValid;
    };

    const validateEmail = (email) => {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        const isValid = emailRegex.test(email);
        return isValid;
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const isValid = passwordRegex.test(password);
        return isValid;
    };

    const checkPasswordsMatch = (password, passwordConfirmation) => {
        setPasswordsMatch(password === passwordConfirmation);
    };

    return (
        <div className="bg-white h-screen flex justify-center items-center relative font-sans">
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                icon={false}
                limit={3}
            />
            <div className="h-[31%] w-full bg-gradient-to-r from-purple-300 via-purple-300 to-pink-100 absolute top-0 z-0">
            </div>
            <div className="max-w-[425px] w-full w-min-[320px] py-[20px] px-[30px] mx-[10px] bg-white rounded-[24px] flex flex-col justify-start items-center z-10 shadow-xl">
                <div className='w-full flex justify-between items-center mb-[30px]'>
                    <div className='flex flex-col items-start'>
                        <div className='text-[32px] font-semibold'>
                            Sign up
                        </div>
                        <div className='text-[16px] text-[#6A6A6A]'>
                            to calculate your budget!
                        </div>
                    </div>
                    <img className='h-16' src={Logo} alt='Logo' />
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col w-full mb-[20px]'>
                    <div className='flex flex-col justify-center items-center w-full'>
                        <input
                            onChange={(e) => {
                                setName(e.target.value);
                                validateName(e.target.value);
                            }}
                            className={`
                                border-[1px] rounded-[8px] border-[#CED4DA] w-full 
                                h-[40px] text-[14px] py-[12px] pl-[12px] mb-[24px]`}
                            type='text'
                            placeholder='Name' />
                        <input
                            onChange={(e) => {
                                setEmail(e.target.value);
                                validateEmail(e.target.value);
                            }}
                            className={`
                                border-[1px] rounded-[8px] border-[#CED4DA] w-full 
                                h-[40px] text-[14px] py-[12px] pl-[12px] mb-[24px]`}
                            type='email'
                            placeholder='Email' />
                        <input
                            onChange={(e) => {
                                setPassword(e.target.value);
                                validatePassword(e.target.value);
                            }}
                            className={`
                                border-[1px] rounded-[8px] border-[#CED4DA] w-full 
                                h-[40px] text-[14px] py-[12px] pl-[12px] mb-[24px]`}
                            type='password'
                            placeholder='Password' />
                        <input
                            onChange={(e) => {
                                setPasswordConfirmation(e.target.value);
                                checkPasswordsMatch(password, e.target.value);
                            }}
                            className={`
                                border-[1px] rounded-[8px] border-[#CED4DA] w-full 
                                h-[40px] text-[14px] py-[12px] pl-[12px] mb-[24px]`}
                            type='password'
                            placeholder='Confirm Password' />
                    </div>
                    <div className='mb-[24px] font-semibold flex flex-col justify-start items-start w-full'>
                        <div className='flex flex-row justify-start items-center w-full ml-1'>
                            <input
                                id='checkbox'
                                type='checkbox'
                                value=''
                                className='w-[18px] h-[18px] mr-[24px]'
                                onChange={handleCheckboxChange} />
                            <label htmlFor='checkbox' className='text-[14px]'>
                                I agree to the Terms of Use
                            </label>
                        </div>
                    </div>
                    <input className='cursor-pointer bg-[#343A40] text-white font-semibold text-[16px] w-full h-[40px] rounded-[8px]' value='Create Account' type='submit' />
                </form>
                <div className='flex flex-row justify-center items-center'>
                    <button data-route='/login' className='font-semibold text-[16px] underline text-black' onClick={handleNavigation}>
                        Log In
                    </button>
                    <BsDot size={30} />
                    <button data-route='/terms-of-use' className='font-semibold text-[16px] underline' onClick={handleNavigation}>
                        Terms of Use
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signup;