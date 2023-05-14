import Title from "../components/Title";
import Switch from "react-switch";
import { useEffect, useState } from "react";

const Notifications = () => {
    const [notifValue, setNotifValue] = useState(false);

    const [newsValue, setNewsValue] = useState(false);
    const [goalValue, setGoalValue] = useState(false);
    const [debtValue, setDebtValue] = useState(false);

    useEffect(() => {
        if (notifValue) {
            setNewsValue(true);
            setGoalValue(true);
            setDebtValue(true);
        } else {
            setNewsValue(false);
            setGoalValue(false);
            setDebtValue(false);
        }
    }, [notifValue]);

    return (
        <>
            <Title title={'Notifications'} />
            <div className="w-full h-full bg-white rounded-[40px] px-[55px] py-[45px] relative overflow-hidden">
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full bg-[rgba(174, 174, 174, 0.6)] backdrop-filter backdrop-blur-sm">
                </div>
                <div className="w-full h-full flex justify-center items-center text-[36px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    In Progress...
                </div>
                <div className="w-full pointer-events-none">
                    <div className="text-[36px] font-medium text-[#696969]">
                        Email
                    </div>
                    <div className="w-[630px] flex justify-between items-center mb-6">
                        <div className="text-[36px] font-medium">
                            Receive notifications
                        </div>
                        <Switch
                            onChange={setNotifValue}
                            checked={notifValue}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            offColor="#ccc"
                            onColor="#BFA2E5"
                            offHandleColor="#dacce2"
                            onHandleColor="#5C2F73"
                            handleDiameter={40}
                            height={27}
                            width={74}
                        />
                    </div>
                    <hr className="h-[2px] bg-black" />
                </div>
                <div className="w-full flex justify-between items-center flex-wrap">
                    <div className="py-[50px]">
                        <div className="text-[36px] font-medium">
                            News
                        </div>
                        <div className="w-[630px] flex justify-between items-center mb-6">
                            <div className="text-[30px] font-medium text-[#696969]">
                                Miscellaneous financial news.
                            </div>
                            <Switch
                                onChange={setNewsValue}
                                checked={newsValue}
                                disabled={!notifValue}
                                checkedIcon={false}
                                uncheckedIcon={false}
                                offColor="#ccc"
                                onColor="#BFA2E5"
                                offHandleColor="#dacce2"
                                onHandleColor="#5C2F73"
                                handleDiameter={40}
                                height={27}
                                width={74}
                            />
                        </div>
                    </div>
                    <div className="py-[50px]">
                        <div className="text-[36px] font-medium">
                            Goal status
                        </div>
                        <div className="w-[630px] flex justify-between items-center mb-6">
                            <div className="text-[30px] font-medium text-[#696969]">
                                You can find out if you are close to the goal or vice versa.
                            </div>
                            <Switch
                                onChange={setGoalValue}
                                checked={goalValue}
                                disabled={!notifValue}
                                checkedIcon={false}
                                uncheckedIcon={false}
                                offColor="#ccc"
                                onColor="#BFA2E5"
                                offHandleColor="#dacce2"
                                onHandleColor="#5C2F73"
                                handleDiameter={40}
                                height={27}
                                width={74}
                            />
                        </div>
                    </div>
                    <div className="py-[50px]">
                        <div className="text-[36px] font-medium">
                            Delinquency and debt
                        </div>
                        <div className="w-[630px] flex justify-between items-center mb-6">
                            <div className="text-[30px] font-medium text-[#696969]">
                                It's better to run from debt, isn't it?
                            </div>
                            <Switch
                                onChange={setDebtValue}
                                checked={debtValue}
                                disabled={!notifValue}
                                checkedIcon={false}
                                uncheckedIcon={false}
                                offColor="#ccc"
                                onColor="#BFA2E5"
                                offHandleColor="#dacce2"
                                onHandleColor="#5C2F73"
                                handleDiameter={40}
                                height={27}
                                width={74}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Notifications;
