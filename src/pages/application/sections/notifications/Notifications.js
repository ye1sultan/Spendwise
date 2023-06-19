import { useState } from "react";
import Title from "../../components/Title";
import Switch from "./components/Switch";

const Notifications = () => {
    const [notifValue, setNotifValue] = useState(false);

    const [newsValue, setNewsValue] = useState(false);
    const [goalValue, setGoalValue] = useState(false);
    const [debtValue, setDebtValue] = useState(false);

    const onChange = (name) => {
        if (name === 'notif') {
            setNotifValue(!notifValue);

            if (!notifValue) {
                setNewsValue(false);
                setGoalValue(false);
                setDebtValue(false);
            }
        }
        if (name === 'news') {
            setNewsValue(!newsValue);
        }
        if (name === 'goal') {
            setGoalValue(!goalValue);
        }
        if (name === 'debt') {
            setDebtValue(!debtValue);
        }
    }

    return (
        <>
            <Title title={'Notifications'} />

            <div className="w-full h-full bg-white rounded-[10px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[40px] px-[20px] sm:px-[30px] md:px-[40px] lg:px-[50px] py-[20px] md:py-[30px] lg:py-[40px] relative">
                <div className="text-lg lg:text-xl xl:text-[28px] 2xl:text-[32px] font-medium lg:mb-[20px]">
                    Email
                </div>
                <div className="max-w-[400px] lg:max-w-[600px] w-full flex justify-between items-center mb-6">
                    <div className="text-lg lg:text-xl xl:text-[28px] 2xl:text-[32px] font-medium">
                        Receive notifications
                    </div>
                    <Switch onChange={onChange} checked={notifValue} name="notif" notif={notifValue} />
                </div>
                <hr className="h-[2px] bg-black" />

                <div className="w-full flex flex-row justify-between items-center flex-wrap gap-[50px] md:gap-[100px] mt-[20px] md:mt-[40px]">
                    <div className="max-w-[400px] lg:max-w-[600px] w-full">
                        <div className="text-lg lg:text-xl xl:text-[28px] 2xl:text-[32px] font-medium lg:mb-[10px]">
                            News
                        </div>
                        <div className="w-full flex justify-between items-center">
                            <div className="text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-medium text-[#696969]">
                                Miscellaneous financial news.
                            </div>
                            <Switch onChange={onChange} checked={newsValue && notifValue} name={"news"} />
                        </div>
                    </div>
                    <div className="max-w-[400px] lg:max-w-[600px] w-full">
                        <div className="text-lg lg:text-xl xl:text-[28px] 2xl:text-[32px] font-medium lg:mb-[10px]">
                            Goal status
                        </div>
                        <div className="w-full flex justify-between items-center">
                            <div className="text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-medium text-[#696969]">
                                You can find out if you are close to the goal or vice versa.
                            </div>
                            <Switch onChange={onChange} checked={goalValue && notifValue} name={"goal"} />
                        </div>
                    </div>
                    <div className="max-w-[400px] lg:max-w-[600px] w-full">
                        <div className="text-lg lg:text-xl xl:text-[28px] 2xl:text-[32px] font-medium lg:mb-[10px]">
                            Delinquency and debt
                        </div>
                        <div className="w-full flex justify-between items-center">
                            <div className="text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-medium text-[#696969]">
                                It's better to run from debt, isn't it?
                            </div>
                            <Switch onChange={onChange} checked={debtValue && notifValue} name={"debt"} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Notifications;
