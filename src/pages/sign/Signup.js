import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../services/api';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const navigate = useNavigate();

    const handleNavigation = (e) => {
        const route = e.currentTarget.getAttribute('data-route');
        navigate(route);
    }

    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleCheckboxChange = (e) => {
        setAgreeTerms(e.target.checked);

        if (!agreeTerms) {
            setTermsText(false);
        }
    }

    const [submitted, setSubmitted] = useState(false);

    const [termsText, setTermsText] = useState(false);

    const [nameText, setNameText] = useState(false);
    const [nameEdited, setNameEdited] = useState(false);

    const [emailText, setEmailText] = useState(false);
    const [emailEdited, setEmailEdited] = useState(false);

    const [passwordText, setPasswordText] = useState(false);
    const [passwordEdited, setPasswordEdited] = useState(false);

    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);
        setNameEdited(false);
        setPasswordEdited(false);
        setEmailEdited(false);

        if (!agreeTerms) {
            setTermsText(true);
            return;
        }

        if (!validateName(name)) {
            setNameText(true);
            return;
        }

        if (!validatePassword(password)) {
            setPasswordText(true);
            return;
        }

        if (!validateEmail(email)) {
            setEmailText(true);
            return;
        }

        if (!passwordsMatch) {
            return;
        }

        try {
            const data = await register(name, email, password, passwordConfirmation);
            console.log("Registered successful:", data);
            navigate("/login");
        } catch (error) {
            console.error(error.message);
            alert(error.message);
        }
    };

    const validateName = (name) => {
        const nameRegex = /^[a-zA-Z ]{2,30}$/;
        const isValid = nameRegex.test(name);
        if (submitted && nameEdited) {
            setNameText(!isValid);
        }
        return isValid;
    };

    const validateEmail = (email) => {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        const isValid = emailRegex.test(email);
        if (submitted && emailEdited) {
            setEmailText(!isValid);
        }
        return isValid;
    };


    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const isValid = passwordRegex.test(password);
        if (submitted && passwordEdited) {
            setPasswordText(!isValid);
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
            <div className="max-w-[450px] w-full w-min-[320px] py-[20px] px-[30px] mx-[10px] bg-white rounded-[24px] flex flex-col justify-start items-center z-10 shadow-lg">
                <div className="text-[#344767] font-semibold mb-[20px] text-[12px]">
                    Continue with
                </div>
                <div className="flex flex-row justify-center items-center w-full mb-[20px]">
                    <AiFillGoogleCircle size={45} color='#4285F4' />
                </div>
                <div className='font-semibold text-[12px] text-[#ADB5BD] mb-[20px]'>
                    or
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col w-full mb-[20px]'>
                    <div className='flex flex-col justify-center items-center w-full'>
                        <input onChange={(e) => { setName(e.target.value); setNameEdited(true); validateName(e.target.value); }} className={`border-[1px] rounded-[8px] border-[#CED4DA] w-full h-[40px] text-[12px] py-[12px] pl-[12px] ${submitted && nameText ? 'mb-[12px]' : 'mb-[24px]'}`} type='text' placeholder='Name' />
                        {nameText && <div className='text-[12px] text-red-600 mb-[12px]'>Please enter valid name.</div>}

                        <input onChange={(e) => { setEmail(e.target.value); setEmailEdited(true); validateEmail(e.target.value); }} className={`border-[1px] rounded-[8px] border-[#CED4DA] w-full h-[40px] text-[12px] py-[12px] pl-[12px] ${submitted && emailText ? 'mb-[12px]' : 'mb-[24px]'}`} type='email' placeholder='Email' />
                        {submitted && emailText && <div className='text-[12px] text-red-600 mb-[12px]'>Please enter a valid email address.</div>}

                        <input onChange={(e) => { setPassword(e.target.value); setPasswordEdited(true); validatePassword(e.target.value); }} className={`border-[1px] rounded-[8px] border-[#CED4DA] w-full h-[40px] text-[12px] py-[12px] pl-[12px] ${submitted && passwordText ? 'mb-[12px]' : 'mb-[24px]'}`} type='password' placeholder='Password' />
                        {submitted && passwordText && <div className='text-[12px] text-red-600 mb-[12px]'>Password must be at least 8 characters long, contain at least one letter and one number.</div>}

                        <input onChange={(e) => { setPasswordConfirmation(e.target.value); checkPasswordsMatch(password, e.target.value); }} className={`border-[1px] rounded-[8px] border-[#CED4DA] w-full h-[40px] text-[12px] py-[12px] pl-[12px] ${submitted && !passwordsMatch ? 'mb-[12px]' : 'mb-[24px]'}`} type='password' placeholder='Confirm Password' />
                        {submitted && !passwordsMatch && <div className='text-[12px] text-red-600 mb-[12px]'>Passwords do not match.</div>}
                    </div>
                    <div className='mb-[24px] font-semibold flex flex-col justify-start items-start w-full'>
                        <div className='flex flex-row justify-start items-center w-full'>
                            <input id='checkbox' type='checkbox' value='' className='w-[18px] h-[18px] mr-[16px]' onChange={handleCheckboxChange} />
                            <label htmlFor='checkbox' className='text-[12px]'>I agree to the Terms of Use </label>
                        </div>
                        {termsText && <div className='text-[12px] text-red-600'>Please accept terms of use</div>}
                    </div>
                    <input className='cursor-pointer bg-[#343A40] text-white font-semibold text-[14px] w-full h-[40px] rounded-[8px]' value='Sign Up' type='submit' />
                </form>
                <div className='flex flex-row justify-center items-center'>
                    <button data-route='/login' className='font-semibold text-[14px] underline text-black' onClick={handleNavigation}>
                        Log In!
                    </button>
                    <BsDot size={30} />
                    <button data-route='/terms-of-use' className='font-semibold text-[14px] underline' onClick={handleNavigation}>
                        Terms of Use
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signup;