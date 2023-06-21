import { useState } from "react";
import { updateUser } from "../../../../services/api";
import { useTranslation } from "react-i18next";

const MyProfile = () => {
    const { t, i18n } = useTranslation();
    //{t("notif.goal.text")}

    const data = JSON.parse(sessionStorage.getItem('userData'));
    const pwd = sessionStorage.getItem('pwd');
    const [editedName, setEditedName] = useState(data.name ?? '');
    const [buttonColor, setButtonColor] = useState("#AEAEAE");

    const handleClick = async () => {
        let obj = {
            name: editedName,
            email: data.email,
            password: pwd,
            goal_notifications_enabled: false,
            transaction_notifications_enabled: false,
            monthly_balance_notifications_enabled: false
        };

        try {
            const updatedUser = await updateUser(obj);
            setEditedName(updatedUser.name);

            let updatedData = { ...data, name: updatedUser.name };
            sessionStorage.setItem('userData', JSON.stringify(updatedData));

            setButtonColor("#AEAEAE");
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    const handleNameChange = (e) => {
        setEditedName(e.target.value);
        setButtonColor("#9F75D6");
    }

    return (
        <div className={`self-start max-w-[970px] w-full 
                ${localStorage.getItem("mode") === "Light Mode" ? 'bg-white' : 'bg-[#BCB8B8] bg-opacity-10'}
                ${localStorage.getItem("mode") === "Light Mode" ? 'text-[#2c3e50]' : 'text-white'}
                rounded-[10px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[40px] px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px] py-[20px] md:py-[30px] lg:py-[40px] flex flex-col sm:flex-row justify-between items-center`}>
            <div className="w-[100%] sm:w-[50%] flex flex-col items-start justify-center mb-12 sm:mb-0">
                <div className="text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-medium mb-4 sm:mb-8">
                    {t("settings.profile.details")}
                </div>
                <div className="w-full flex flex-col justify-center items-start">
                    <div className="max-w-[500px] w-full flex flex-col border-b-[1px] border-[#6A6A6A] mb-4 sm:mb-8">
                        <label className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-medium mb-[10px] capitalize">
                            {t("settings.profile.name")}
                        </label>
                        <input
                            className={`w-full h-[30px] sm:h-[40px] md:h-[50px] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-medium pl-2 ${localStorage.getItem("mode") === "Light Mode" ? 'bg-white' : 'bg-[#BCB8B8]'}`}
                            type="text"
                            placeholder={t("settings.profile.name")}
                            value={editedName}
                            onChange={(e) => handleNameChange(e)}
                            required />
                    </div>
                    <div className="max-w-[500px] w-full flex flex-col border-b-[1px] border-[#6A6A6A] mb-8 sm:mb-16">
                        <label className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-medium mb-[10px] capitalize">
                            {t("settings.profile.email")}
                        </label>
                        <input
                            className={`w-full h-[30px] sm:h-[40px] md:h-[50px] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-medium pl-2 ${localStorage.getItem("mode") === "Light Mode" ? 'bg-white' : 'bg-[#BCB8B8]'} pointer-events-none`}
                            type="email"
                            placeholder={t("settings.profile.email")}
                            value={data.email}
                            readOnly />
                    </div>
                    <input onClick={() => handleClick()}
                        className={`max-w-[100px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[140px] w-full h-[30px] sm:h-[40px] md:h-[50px] rounded-[30px]
                             ${buttonColor === "#9F75D6" ? "bg-[#BFA2E5] cursor-pointer" : "bg-[#6A6A6A] bg-opacity-30 cursor-not-allowed"} text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] font-medium uppercase`}
                        type="button"
                        value={t("trn.save")}
                    />
                </div>
            </div>
            <div className="w-[100%] sm:w-[50%] flex items-centet justify-center">
                <div className="w-full h-full flex justify-center items-center">
                    <div className="max-w-[50%] sm:max-w-[60%] max-h-full w-full h-full">
                        <img className='rounded-full w-full h-full'
                            src={'https://picsum.photos/200/200'}
                            alt='avatar'
                        />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default MyProfile;