import { useState } from 'react';

import EmailModal from "./EmailModal";
import PasswordModal from './PasswordModal';

const Security = () => {
    const [emailModal, setEmailModal] = useState(false);
    const [passwordModal, setPasswordModal] = useState(false);

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
            <EmailModal modal={emailModal} setModal={setEmailModal} />
            <PasswordModal modal={passwordModal} setModal={setPasswordModal} />
        </>
    );
}

export default Security;