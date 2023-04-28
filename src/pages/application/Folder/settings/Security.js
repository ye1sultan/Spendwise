import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Security = () => {
    const [emailModal, setEmailModal] = useState(false);
    const [passwordModal, setPasswordModal] = useState(false);

    const security = {
        email: 'niyaztaye@gmail.com',
        password: '123',
    }

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


    const handleEmailSubmit = () => {
        if (email !== confirmEmail) {
            setEmailError(true);
            setEmailErrorMsg('The email and confirm email fields value must be matched.');
            return;
        } else if (email === security.email) {
            setEmailError(true);
            setEmailErrorMsg('The new email you are trying to set is identical to the old one.');
            return;
        } else if ((email !== security.email) && (email === confirmEmail)) {
            setEmailError(true);
            setSuccess(true);

            setTimeout(() => setEmailModal(false), 1500);
        }
    }

    const handlePwdSubmit = () => {
        if (oldPwd !== security.password) {
            setPwdError(true);
            setPwdErrorMsg('The old password you typed is not identical to your current password.');
        } else if (newPwd !== confirmPwd) {
            setPwdError(true);
            setPwdErrorMsg('The new password and confirm password fields value must be matched');
            return;
        } else if (newPwd === security.password) {
            setPwdError(true);
            setPwdErrorMsg('The new password you are trying to set is identical to the old one.');
            return;
        } else if ((newPwd !== security.password) && (newPwd === confirmPwd)) {
            setPwdError(true);
            setSuccess(true);

            setTimeout(() => setPasswordModal(false), 1500);
        }
    }

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
            <div className={`fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[400px] rounded-[40px] bg-white border-[1px] border-[#696969] ${emailModal ? 'flex' : 'hidden'} flex-col justify-between items-start py-[20px] px-[30px]`} >
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
                        className="w-full border-b-[1px] border-[#696969] pb-2 text-[20px] text-[#696969] mb-6"
                        type="email"
                        placeholder="New Email"
                        required />
                    <input
                        onChange={(e) => setConfirmEmail(e.target.value)}
                        className="w-full border-b-[1px] border-[#696969] pb-2 text-[20px] text-[#696969]"
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
                        className="uppercase w-[210px] h-[40px] bg-[#9F75D6] bg-opacity-90 rounded-[50px] text-white text-[16px]"
                        type="button">
                        save
                    </button>
                </div>
            </div>
            <div className={`fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[400px] rounded-[40px] bg-white border-[1px] border-[#696969] ${passwordModal ? 'flex' : 'hidden'} flex-col justify-between items-start py-[20px] px-[30px]`} >
                <div className="flex justify-between items-center w-full mb-6">
                    <div className="text-[22px] font-medium">
                        Change E-mail
                    </div>
                    <button onClick={() => setPasswordModal(false)}>
                        <AiOutlineClose size={25} />
                    </button>
                </div>
                <div className="flex flex-col justify-between items-center w-full">
                    <input
                        onChange={(e) => setOldPwd(e.target.value)}
                        className="w-full border-b-[1px] border-[#696969] pb-2 text-[20px] text-[#696969] mb-6"
                        type="password"
                        placeholder="Old Password"
                        required />
                    <input
                        onChange={(e) => setNewPwd(e.target.value)}
                        className="w-full border-b-[1px] border-[#696969] pb-2 text-[20px] text-[#696969] mb-6"
                        type="password"
                        placeholder="New Password"
                        required />
                    <input
                        onChange={(e) => setConfirmPwd(e.target.value)}
                        className="w-full border-b-[1px] border-[#696969] pb-2 text-[20px] text-[#696969]"
                        type="password"
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
                        className="uppercase w-[210px] h-[40px] bg-[#9F75D6] bg-opacity-90 rounded-[50px] text-white text-[16px]"
                        type="button">
                        save
                    </button>
                </div>
            </div>
        </>
    );
}

export default Security;