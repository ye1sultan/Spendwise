import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { updateUser } from '../../../../services/api';
import { FiEye, FiEyeOff } from 'react-icons/fi';

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
        if (email !== confirmEmail) {
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

    const [transparentPassword, setTransparentPassword] = useState(false);

    return (
        <>
            <div className="self-start w-[85%]">
                <div className="w-full h-[280px] bg-white mb-[55px] rounded-[30px] flex flex-col justify-between items-start py-[30px] px-[55px]">
                    <div className="text-[36px] font-medium ">
                        Change my email
                    </div>
                    <div className="text-[20px] font-medium text-[#696969]">
                        After requesting the change, we will send a confirmation to the new registered email. Until confirmation, your Mobills account will remain linked to your current email.
                    </div>
                    <button className="uppercase text-white text-[16px] w-[270px] h-[45px] bg-[#9F75D6] bg-opacity-90 rounded-[30px]"
                        onClick={() => {
                            setPasswordModal(false);
                            setEmailModal(true);
                        }}>
                        change e-mail
                    </button>
                </div>
                <div className="w-full h-[280px] bg-white mb-[55px] rounded-[30px] flex flex-col justify-between items-start py-[30px] px-[55px]">
                    <div className="text-[36px] font-medium ">
                        Change my password
                    </div>
                    <div className="text-[20px] font-medium text-[#696969]">
                        Tip: If possible, use a password that contains numbers, uppercase, lowercase, and special characters.
                    </div>
                    <button className="uppercase text-white text-[16px] w-[270px] h-[45px] bg-[#9F75D6] bg-opacity-90 rounded-[30px]" onClick={() => {
                        setEmailModal(false);
                        setPasswordModal(true);
                    }}>
                        CHANGE PASSWORD
                    </button>
                </div>
            </div>
            <div className={`${emailModal ? 'flex' : 'hidden'} fixed top-[5%] left-[50%] translate-x-[-50%] z-20 bg-white py-[20px] px-[30px] flex-col justify-center shadow-md rounded-[40px] max-w-[350px] w-full`} >
                <div className="flex justify-between items-center w-full mb-6">
                    <div className="text-[22px] font-medium">
                        Change E-mail
                    </div>
                    <button onClick={() => setEmailModal(false)}>
                        <AiOutlineClose size={25} />
                    </button>
                </div>
                <div className="flex flex-col justify-between items-center w-full">
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border-b-[1px] border-[#696969] text-[20px] px-4 py-2 mb-6"
                        type="email"
                        placeholder="New Email"
                        required />
                    <input
                        onChange={(e) => setConfirmEmail(e.target.value)}
                        className="w-full border-b-[1px] border-[#696969] text-[20px] px-4 py-2"
                        type="email"
                        placeholder="Confirm Email"
                        style={{ marginBottom: emailError ? '12px' : '30px' }}
                        required />
                    {emailError && (
                        <div
                            className='text-center mb-3 text-[16px]'
                            style={{ color: success ? '#000000' : '#EA1A1A' }}>
                            {success ? 'Your email has been successfully updated!' : emailErrorMsg}
                        </div>
                    )}
                    <button
                        onClick={() => handleEmailSubmit()}
                        className="uppercase w-full h-[40px] bg-[#9F75D6] bg-opacity-90 rounded-[50px] text-white text-[16px]"
                        type="button">
                        save
                    </button>
                </div>
            </div>
            <div className={`${passwordModal ? 'flex' : 'hidden'} fixed top-[5%] left-[50%] translate-x-[-50%] z-20 bg-white py-[20px] px-[30px] flex-col justify-center shadow-md rounded-[40px] max-w-[350px] w-full`} >
                <div className="flex justify-between items-center w-full mb-6">
                    <div className="text-[22px] font-medium">
                        Change E-mail
                    </div>
                    <button onClick={() => setPasswordModal(false)}>
                        <AiOutlineClose size={25} />
                    </button>
                </div>
                <div className="flex flex-col justify-between items-center w-full">
                    <div className='w-full h-full relative'>
                        <input
                            onChange={(e) => setOldPwd(e.target.value)}
                            className="w-full h-full border-b-[1px] border-[#696969] text-[20px] px-4 py-2 mb-6"
                            type={transparentPassword ? 'text' : 'password'}
                            placeholder="Old Password"
                            required />
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setTransparentPassword(!transparentPassword);
                            }}
                            className='absolute top-[50%] right-2 translate-y-[-100%]'>
                            {transparentPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                        </button>
                    </div>
                    <input
                        onChange={(e) => setNewPwd(e.target.value)}
                        className="w-full h-full border-b-[1px] border-[#696969] text-[20px] px-4 py-2 mb-6"
                        type={transparentPassword ? 'text' : 'password'}
                        placeholder="New Password"
                        required />
                    <input
                        onChange={(e) => setConfirmPwd(e.target.value)}
                        className="w-full h-full border-b-[1px] border-[#696969] text-[20px] px-4 py-2"
                        type={transparentPassword ? 'text' : 'password'}
                        placeholder="Confirm Password"
                        style={{ marginBottom: pwdError ? '12px' : '30px' }}
                        required />
                    {pwdError && (
                        <div
                            className='text-center mb-3 text-[16px]'
                            style={{ color: success ? '#000000' : '#EA1A1A' }}>
                            {success ? 'Your password has been successfully updated!' : pwdErrorMsg}
                        </div>
                    )}
                    <button
                        onClick={() => handlePwdSubmit()}
                        className="uppercase w-full h-[40px] bg-[#9F75D6] bg-opacity-90 rounded-[50px] text-white text-[16px]"
                        type="button">
                        save
                    </button>
                </div>
            </div>
        </>
    );
}

export default Security;