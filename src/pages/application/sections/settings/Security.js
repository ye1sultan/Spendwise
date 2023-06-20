import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { updateUser } from '../../../../services/api';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';

const Security = () => {
    const data = JSON.parse(sessionStorage.getItem('userData'));
    const pwd = sessionStorage.getItem('pwd');

    const [emailModal, setEmailModal] = useState(false);
    const [passwordModal, setPasswordModal] = useState(false);

    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');

    const [emailError, setEmailError] = useState(false);
    const [emailErrorMsg, setEmailErrorMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [oldPwd, setOldPwd] = useState('');
    const [newPwd, setNewPwd] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');

    const [pwdError, setPwdError] = useState(false);
    const [pwdErrorMsg, setPwdErrorMsg] = useState('');

    const handleEmailSubmit = async () => {
        if (confirmEmail === '' && email === '') {
            setEmailError(true);
            setEmailErrorMsg('The email and confirm email fields are empty.');
            return;
        } else if (email !== confirmEmail) {
            setEmailError(true);
            setEmailErrorMsg('The email and confirm email fields value must be matched.');
            return;
        } else if (email === data.email) {
            setEmailError(true);
            setEmailErrorMsg('The new email you are trying to set is identical to the old one.');
            return;
        } else if ((email !== data.email) && (email === confirmEmail)) {
            let obj = {
                name: data.name,
                email: email,
                password: sessionStorage.getItem("pwd"),
                avatar: data.avatar,
            };

            try {
                const updatedUser = await updateUser(data.id, obj);

                let updatedData = { ...data, email: updatedUser.email };
                sessionStorage.setItem('userData', JSON.stringify(updatedData));

                setEmailError(true);
                setSuccess(true);
                setTimeout(() => setEmailModal(false), 1500);
            } catch (error) {
                console.error("Error updating user:", error);
            }
        }
    }

    const handlePwdSubmit = async () => {
        if (oldPwd !== pwd) {
            setPwdError(true);
            setPwdErrorMsg('The old password you typed is not identical to your current password.');
        } else if (newPwd !== confirmPwd) {
            setPwdError(true);
            setPwdErrorMsg('The new password and confirm password fields value must be matched');
            return;
        } else if (newPwd === pwd) {
            setPwdError(true);
            setPwdErrorMsg('The new password you are trying to set is identical to the old one.');
            return;
        } else if ((newPwd !== pwd) && (newPwd === confirmPwd)) {
            let obj = {
                name: data.name,
                email: data.email,
                password: newPwd,
                avatar: data.avatar,
            };

            try {
                const updatedUser = await updateUser(data.id, obj);

                sessionStorage.setItem('pwd', newPwd);

                setPwdError(true);
                setSuccess(true);

                setTimeout(() => setPasswordModal(false), 1500);
            } catch (error) {
                console.error("Error updating user:", error);
            }
        }
    }

    return (
        <>
            <div className="self-start max-w-[970px] w-full bg-white mb-[55px] rounded-[10px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[40px] flex flex-col justify-between items-start px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px] py-[20px] md:py-[30px] lg:py-[40px]">
                <div className="text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-medium mb-4 sm:mb-8">
                    Change my email
                </div>
                <div className="text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-medium text-[#696969] mb-4 sm:mb-8">
                    After requesting the change, we will send a confirmation to the new registered email. Until confirmation, your Spendwise account will remain linked to your current email.
                </div>
                <button className="self-start px-4 h-[30px] sm:h-[40px] md:h-[50px] rounded-[30px] text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] font-medium uppercase bg-[#BFA2E5] cursor-pointer"
                    onClick={() => {
                        setPasswordModal(false);
                        setEmailModal(true);
                    }}>
                    change e-mail
                </button>
            </div>

            <div className="self-start max-w-[970px] w-full bg-white mb-[55px] rounded-[10px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[40px] flex flex-col justify-between items-start px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px] py-[20px] md:py-[30px] lg:py-[40px]">
                <div className="text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-medium mb-4 sm:mb-8">
                    Change my password
                </div>
                <div className="text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-medium text-[#696969] mb-4 sm:mb-8">
                    Tip: If possible, use a password that contains numbers, uppercase, lowercase, and special characters.
                </div>
                <button className="self-start px-4 h-[30px] sm:h-[40px] md:h-[50px] rounded-[30px] text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] font-medium uppercase bg-[#BFA2E5] cursor-pointer" onClick={() => {
                    setEmailModal(false);
                    setPasswordModal(true);
                }}>
                    CHANGE PASSWORD
                </button>
            </div>

            {emailModal && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-start justify-center m-6 h-full z-20">
                    <div className='bg-white shadow-md rounded-[30px] xl:rounded-[40px] mx-4 w-full max-w-[350px] xl:max-w-[400px] min-w-[280px] p-6 xl:p-8'>
                        <div className='w-full flex justify-between items-center mb-[20px]'>
                            <div className="text-xl xl:text-[28px] 2xl:text-[32px] font-medium">
                                Change E-mail
                            </div>
                            <IoCloseOutline className='cursor-pointer text-[25px] md:text-[30px] lg:text-[35px]' onClick={() => setEmailModal(false)} />
                        </div>
                        <div className="flex flex-col justify-between items-center w-full">
                            <div className='w-full h-[40px] md:h-[50px] mb-[20px] border-b-[1px] border-[#696969] '>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full h-full text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal pl-4 placeholder:text-[#6A6A6A]"
                                    type="email"
                                    placeholder="New Email"
                                    required />
                            </div>

                            <div className='w-full h-[40px] md:h-[50px] mb-[40px] border-b-[1px] border-[#696969] '>
                                <input
                                    onChange={(e) => setConfirmEmail(e.target.value)}
                                    className="w-full h-full text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal pl-4 placeholder:text-[#6A6A6A]"
                                    type="email"
                                    placeholder="Confirm Email"
                                    style={{ marginBottom: emailError ? '12px' : '30px' }}
                                    required />
                            </div>
                            {emailError && (
                                <div
                                    className='text-center mb-3 text-[16px]'
                                    style={{ color: success ? '#000000' : '#EA1A1A' }}>
                                    {success ? 'Your email has been successfully updated!' : emailErrorMsg}
                                </div>
                            )}
                            <div className='w-full flex justify-end'>
                                <button className='uppercase text-black text-[14px] lg:text-[18px] font-medium py-[5px] px-[20px] 2xl:py-[10px] 2xl:px-[40px] bg-[#BFA2E5] rounded-[20px] 2xl:rounded-[40px]' onClick={() => handleEmailSubmit()}>
                                    save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>)}

            {passwordModal && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-start justify-center m-6 h-full z-20">
                    <div className='bg-white shadow-md rounded-[30px] xl:rounded-[40px] mx-4 w-full max-w-[350px] xl:max-w-[400px] min-w-[280px] p-6 xl:p-8'>
                        <div className='w-full flex justify-between items-center mb-[20px]'>
                            <div className="text-xl xl:text-[28px] 2xl:text-[32px] font-medium">
                                Change E-mail
                            </div>
                            <IoCloseOutline className='cursor-pointer text-[25px] md:text-[30px] lg:text-[35px]' onClick={() => setPasswordModal(false)} />
                        </div>
                        <div className="flex flex-col justify-between items-center w-full">
                            <div className='w-full h-[40px] md:h-[50px] mb-[40px] border-b-[1px] border-[#696969] '>
                                <input
                                    onChange={(e) => setOldPwd(e.target.value)}
                                    className="w-full h-full text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal pl-4 placeholder:text-[#6A6A6A]"
                                    type='password'
                                    placeholder="Old Password"
                                    required />
                            </div>

                            <div className='w-full h-[40px] md:h-[50px] mb-[40px] border-b-[1px] border-[#696969] '>
                                <input
                                    onChange={(e) => setNewPwd(e.target.value)}
                                    className="w-full h-full text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal pl-4 placeholder:text-[#6A6A6A]"
                                    type='password'
                                    placeholder="New Password"
                                    required />
                            </div>

                            <div className='w-full h-[40px] md:h-[50px] mb-[40px] border-b-[1px] border-[#696969] '>
                                <input
                                    onChange={(e) => setConfirmPwd(e.target.value)}
                                    className="w-full h-full text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-normal pl-4 placeholder:text-[#6A6A6A]"
                                    type='password'
                                    placeholder="Confirm Password"
                                    style={{ marginBottom: pwdError ? '12px' : '30px' }}
                                    required />
                            </div>

                            {pwdError && (
                                <div
                                    className='text-center mb-3 text-[16px]'
                                    style={{ color: success ? '#000000' : '#EA1A1A' }}>
                                    {success ? 'Your password has been successfully updated!' : pwdErrorMsg}
                                </div>
                            )}

                            <div className='w-full flex justify-end'>
                                <button className='uppercase text-black text-[14px] lg:text-[18px] font-medium py-[5px] px-[20px] 2xl:py-[10px] 2xl:px-[40px] bg-[#BFA2E5] rounded-[20px] 2xl:rounded-[40px]' onClick={() => handlePwdSubmit()}>
                                    save
                                </button>
                            </div>
                        </div>
                    </div>
                </div >)
            }
        </>
    );
}

export default Security;