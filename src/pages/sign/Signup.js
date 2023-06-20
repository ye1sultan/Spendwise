import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { register } from '../../services/api';

import { BsDot } from 'react-icons/bs';
import Logo from '../assets/Logo.png';

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

        if (!agreeTerms) {
            // setPopup(false);
        }
    }

    const [submitted, setSubmitted] = useState(false);

    const [nameEdited, setNameEdited] = useState(false);

    const [emailEdited, setEmailEdited] = useState(false);

    const [passwordEdited, setPasswordEdited] = useState(false);

    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);
        setNameEdited(false);
        setPasswordEdited(false);
        setEmailEdited(false);

        if (!agreeTerms) {
            // setPopup(true);
            // setMessage('Please accept terms of use.');
            return;
        }

        if (!validateName(name)) {
            // setPopup(true);
            // setMessage('Please enter valid name.');
            return;
        }

        if (!validatePassword(password)) {
            // setPopup(true);
            // setMessage('Password must be at least 8 characters long, contain at least one letter and one number.');
            return;
        }

        if (!validateEmail(email)) {
            // setPopup(true);
            // setMessage('Please enter a valid email address.');
            return;
        }

        if (!passwordsMatch) {
            // setPopup(true);
            // setMessage('Passwords do not match.');
            return;
        }

        try {
            await register(name, email, password, passwordConfirmation);
            setTimeout(() => {
                navigate('/login');
            }, 1000);

        } catch (error) {
            // setPopup(true);
            // setMessage(error.message);
        }
    };

    const validateName = (name) => {
        const nameRegex = /^[a-zA-Z ]{2,30}$/;
        const isValid = nameRegex.test(name);
        if (submitted && nameEdited) {
            // setPopup(!isValid);
        }
        return isValid;
    };

    const validateEmail = (email) => {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        const isValid = emailRegex.test(email);
        if (submitted && emailEdited) {
            // setPopup(!isValid);
        }
        return isValid;
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const isValid = passwordRegex.test(password);
        if (submitted && passwordEdited) {
            // setPopup(!isValid);
        }
        return isValid;
    };

    const checkPasswordsMatch = (password, passwordConfirmation) => {
        setPasswordsMatch(password === passwordConfirmation);
    };

    return (
        <div className="bg-white h-screen flex justify-center items-center relative font-sans">

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
                                setNameEdited(true);
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
                                setEmailEdited(true);
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
                                setPasswordEdited(true);
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