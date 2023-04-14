import { useState } from "react";

import Title from "../components/Title";
import MyProfile from "./component/MyProfile";
import Preferences from "./component/Preferences";
import Security from "./component/Security";

const Settings = () => {
    const [profile, setProfile] = useState(true);
    const [prefer, setPrefer] = useState(false);
    const [secur, setSecur] = useState(false);

    const handleProfileClick = () => {
        setProfile(true);
        setPrefer(false);
        setSecur(false);
    }

    const handlePreferClick = () => {
        setProfile(false);
        setPrefer(true);
        setSecur(false);
    }

    const handleSecurClick = () => {
        setProfile(false);
        setPrefer(false);
        setSecur(true);
    }

    return (
        <>
            <Title title={'Settings'} />
            <div className="w-[555px] h-[50px] bg-[#381C46] bg-opacity-10 rounded-[30px] flex justify-center items-center self-start relative mb-[90px]">
                <button className={`w-[33.33%] h-full rounded-[30px] text-[22px] font-medium `} onClick={handleProfileClick}>
                    My Profile
                </button>
                <button className={`w-[33.33%] h-full rounded-[30px] text-[22px] font-medium `} onClick={handlePreferClick}>
                    Preferences
                </button>
                <button className={`w-[33.33%] h-full rounded-[30px] text-[22px] font-medium `} onClick={handleSecurClick}>
                    Security
                </button>
                <span
                    className={`
                        w-[33.33%] h-full bg-[#9F75D6] bg-opacity-80 rounded-[30px] transition-all 
                        ease-in-out duration-300
                        absolute -z-10 top-0 
                        left-0
                        ${profile ? 'left-0' : 'left-0'}

                        ${prefer ? 'left-[33.33%]' : 'left-0'}

                        ${secur ? 'left-[66.66%]' : 'left-0'}
                        `} >
                </span>
            </div>
            {
                (() => {
                    if (profile) return <MyProfile />;
                    if (prefer) return <Preferences />
                    if (secur) return <Security />;
                })()
            }
        </>
    );
}

export default Settings;