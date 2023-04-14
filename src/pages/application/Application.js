import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Header from "./components/Header";

import Dashboard from "./folder/Dashboard.js";
import Transactions from "./folder/Transactions.js";
import Goals from "./folder/Goals.js";
import Report from "./folder/Report";
import Notifications from "./folder/Notifications";
import Settings from "./folder/Settings";

const Application = () => {
    const navigate = useNavigate();

    const handleExit = () => {
        navigate('/signin');
    }

    const [dashboard, setDashboard] = useState(true);
    const [transactions, setTransactions] = useState(false);
    const [goals, setGoals] = useState(false);
    const [report, setReport] = useState(false);
    const [notifications, setNotifications] = useState(false);
    const [settings, setSettings] = useState(false);

    const handleDashboardClick = () => {
        setDashboard(true);
        setTransactions(false);
        setGoals(false);
        setReport(false);
        setNotifications(false);
        setSettings(false);
    }

    const handleTransactionsClick = () => {
        setTransactions(true);
        setDashboard(false);
        setGoals(false);
        setReport(false);
        setNotifications(false);
        setSettings(false);
    }

    const handleGoalsClick = () => {
        setGoals(true);
        setTransactions(false);
        setDashboard(false);
        setReport(false);
        setNotifications(false);
        setSettings(false);
    }

    const handleReportClick = () => {
        setReport(true);
        setTransactions(false);
        setGoals(false);
        setDashboard(false);
        setNotifications(false);
        setSettings(false);
    }

    const handleNotificationsClick = () => {
        setNotifications(true);
        setTransactions(false);
        setGoals(false);
        setReport(false);
        setDashboard(false);
        setSettings(false);
    }

    const handleSettingsClick = () => {
        setSettings(true);
        setTransactions(false);
        setGoals(false);
        setReport(false);
        setNotifications(false);
        setDashboard(false);
    }

    return (
        <div className="flex bg-[#B8C9F5] bg-opacity-20 font-montserrat">
            <div className="sticky left-0 top-0 bg-white flex flex-col justify-between items-center h-screen py-14 px-[30px] shadow-sm">
                <div className="flex flex-col justify-center items-start">
                    <div className='text-3xl w-[230px] font-semibold z-50 p-2 mb-4'>LOGO</div>

                    <button className={`flex flex-row justify-start items-center w-[210px] h-[50px] p-[10px] text-[#381C46CC] text-[15px] font-semibold mb-[15px] ${dashboard ? 'bg-[#BFA2E5] bg-opacity-40' : 'bg-transparent'}`} onClick={handleDashboardClick}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.66667 24C1.93333 24 1.30533 23.7391 0.782667 23.2173C0.260889 22.6947 0 22.0667 0 21.3333V2.66667C0 1.93333 0.260889 1.30533 0.782667 0.782667C1.30533 0.260889 1.93333 0 2.66667 0H8C8.73333 0 9.36133 0.260889 9.884 0.782667C10.4058 1.30533 10.6667 1.93333 10.6667 2.66667V21.3333C10.6667 22.0667 10.4058 22.6947 9.884 23.2173C9.36133 23.7391 8.73333 24 8 24H2.66667ZM16 9.33333C15.2667 9.33333 14.6391 9.072 14.1173 8.54933C13.5947 8.02756 13.3333 7.4 13.3333 6.66667V2.66667C13.3333 1.93333 13.5947 1.30533 14.1173 0.782667C14.6391 0.260889 15.2667 0 16 0H21.3333C22.0667 0 22.6947 0.260889 23.2173 0.782667C23.7391 1.30533 24 1.93333 24 2.66667V6.66667C24 7.4 23.7391 8.02756 23.2173 8.54933C22.6947 9.072 22.0667 9.33333 21.3333 9.33333H16ZM16 24C15.2667 24 14.6391 23.7391 14.1173 23.2173C13.5947 22.6947 13.3333 22.0667 13.3333 21.3333V14.6667C13.3333 13.9333 13.5947 13.3053 14.1173 12.7827C14.6391 12.2609 15.2667 12 16 12H21.3333C22.0667 12 22.6947 12.2609 23.2173 12.7827C23.7391 13.3053 24 13.9333 24 14.6667V21.3333C24 22.0667 23.7391 22.6947 23.2173 23.2173C22.6947 23.7391 22.0667 24 21.3333 24H16Z" fill="#381C46" fill-opacity="0.7" />
                        </svg>

                        <div className="flex-1">
                            Dashboard
                        </div>
                    </button>

                    <button className={`flex flex-row justify-start items-center w-[210px] h-[50px] p-[10px] text-[#381C46CC] text-[15px] font-semibold mb-[15px] ${transactions ? 'bg-[#BFA2E5] bg-opacity-40' : 'bg-transparent'}`} onClick={handleTransactionsClick}>
                        <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.38867 1H23.9998" stroke="#381C46" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.38867 7.78613H23.9998" stroke="#381C46" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.38867 14.5728H23.9998" stroke="#381C46" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1.00049 1H1.01162" stroke="#381C46" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1 7.78613H1.01114" stroke="#381C46" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1 14.5728H1.01114" stroke="#381C46" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <div className="flex-1">
                            Transactions
                        </div>
                    </button>

                    <button className={`flex flex-row justify-start items-center w-[210px] h-[50px] p-[10px] text-[#381C46CC] text-[15px] font-semibold mb-[15px] ${goals ? 'bg-[#BFA2E5] bg-opacity-40' : 'bg-transparent'}`} onClick={handleGoalsClick}>
                        <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5002 16.8593C18.3167 16.8593 21.4106 13.8721 21.4106 10.1872C21.4106 6.50234 18.3167 3.51514 14.5002 3.51514C10.6837 3.51514 7.58984 6.50234 7.58984 10.1872C7.58984 13.8721 10.6837 16.8593 14.5002 16.8593Z" stroke="#381C46" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.7585 16.5901L9.56396 25.2734L14.5 22.4139L19.4359 25.2734L18.2414 16.5806" stroke="#381C46" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <div className="flex-1">
                            Goals
                        </div>
                    </button>

                    <button className={`flex flex-row justify-start items-center w-[210px] h-[50px] p-[10px] text-[#381C46CC] text-[15px] font-semibold mb-[15px] ${report ? 'bg-[#BFA2E5] bg-opacity-40' : 'bg-transparent'}`} onClick={handleReportClick}>
                        <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8076 15V3.75" stroke="#381C46" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M26.0743 9.37451L5.53955 20.6245" stroke="#381C46" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.14985 17.0571C3.63654 14.4211 4.13041 11.6978 5.54278 9.37627C6.95516 7.05472 9.19349 5.28702 11.8558 4.39062V12.8354L4.14985 17.0571Z" stroke="#381C46" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.808 3.75C17.8852 3.75036 19.9258 4.26856 21.7255 5.2527C23.5252 6.23684 25.0208 7.65238 26.0626 9.35757C27.1044 11.0628 27.6558 12.9977 27.6616 14.9688C27.6673 16.9398 27.1273 18.8776 26.0955 20.5883C25.0637 22.2989 23.5764 23.7223 21.7824 24.7159C19.9885 25.7096 17.951 26.2385 15.8739 26.2498C13.7968 26.2611 11.753 25.7544 9.94716 24.7804C8.14134 23.8064 6.6369 22.3993 5.58447 20.7" stroke="#381C46" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <div className="flex-1">
                            Report
                        </div>
                    </button>

                    <button className={`flex flex-row justify-start items-center w-[210px] h-[50px] p-[10px] text-[#381C46CC] text-[15px] font-semibold mb-[15px] ${notifications ? 'bg-[#BFA2E5] bg-opacity-40' : 'bg-transparent'}`} onClick={handleNotificationsClick}>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9383 17C11.9385 17.5046 11.7479 17.9906 11.4048 18.3605C11.0617 18.7305 10.5915 18.9572 10.0883 18.995L9.93832 19H7.93832C7.43375 19.0002 6.94776 18.8096 6.57778 18.4665C6.2078 18.1234 5.98117 17.6532 5.94333 17.15L5.93832 17H11.9383ZM8.93832 9.54067e-10C10.7533 -2.9945e-05 12.4973 0.704894 13.8026 1.96607C15.1078 3.22726 15.8721 4.94609 15.9343 6.76L15.9383 7V10.764L17.7603 14.408C17.8398 14.567 17.8796 14.7429 17.8763 14.9206C17.873 15.0984 17.8266 15.2727 17.7412 15.4286C17.6558 15.5845 17.5338 15.7174 17.3858 15.8158C17.2378 15.9143 17.0681 15.9754 16.8913 15.994L16.7763 16H1.10033C0.922489 16.0001 0.747292 15.957 0.589746 15.8745C0.4322 15.792 0.297004 15.6725 0.195742 15.5264C0.0944803 15.3802 0.0301725 15.2116 0.00832937 15.0351C-0.0135138 14.8586 0.00775918 14.6795 0.0703251 14.513L0.116325 14.408L1.93833 10.764V7C1.93833 5.14348 2.67582 3.36301 3.98858 2.05025C5.30133 0.737498 7.08181 9.54069e-10 8.93832 9.54067e-10Z" fill="#381C46" fill-opacity="0.7" />
                        </svg>

                        <div className="flex-1">
                            Notifications
                        </div>
                    </button>

                    <button className={`flex flex-row justify-start items-center w-[210px] h-[50px] p-[10px] text-[#381C46CC] text-[15px] font-semibold mb-[15px] ${settings ? 'bg-[#BFA2E5] bg-opacity-40' : 'bg-transparent'}`} onClick={handleSettingsClick}>
                        <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0374 13.8318C13.6999 13.8318 15.0475 12.6007 15.0475 11.0821C15.0475 9.56356 13.6999 8.33252 12.0374 8.33252C10.375 8.33252 9.02734 9.56356 9.02734 11.0821C9.02734 12.6007 10.375 13.8318 12.0374 13.8318Z" stroke="#381C46" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19.4619 13.8315C19.3283 14.108 19.2885 14.4146 19.3475 14.712C19.4065 15.0093 19.5617 15.2836 19.793 15.4996L19.8532 15.5546C20.0398 15.7249 20.1878 15.927 20.2888 16.1496C20.3897 16.3721 20.4417 16.6106 20.4417 16.8515C20.4417 17.0924 20.3897 17.331 20.2888 17.5535C20.1878 17.776 20.0398 17.9782 19.8532 18.1484C19.6668 18.3189 19.4455 18.4541 19.2019 18.5463C18.9583 18.6386 18.6971 18.6861 18.4334 18.6861C18.1697 18.6861 17.9086 18.6386 17.665 18.5463C17.4213 18.4541 17.2 18.3189 17.0137 18.1484L16.9535 18.0934C16.717 17.8821 16.4166 17.7404 16.0912 17.6865C15.7657 17.6326 15.43 17.669 15.1273 17.791C14.8306 17.9072 14.5775 18.1001 14.3992 18.346C14.2209 18.5919 14.1253 18.88 14.124 19.175V19.3308C14.124 19.8169 13.9126 20.2832 13.5362 20.627C13.1599 20.9707 12.6495 21.1639 12.1173 21.1639C11.585 21.1639 11.0746 20.9707 10.6983 20.627C10.3219 20.2832 10.1105 19.8169 10.1105 19.3308V19.2483C10.1028 18.9449 9.99526 18.6507 9.802 18.4039C9.60875 18.1571 9.33868 17.9691 9.0269 17.8643C8.72427 17.7423 8.38856 17.7059 8.06308 17.7598C7.73759 17.8137 7.43725 17.9555 7.20078 18.1668L7.14058 18.2218C6.95421 18.3922 6.73289 18.5274 6.48927 18.6196C6.24566 18.7119 5.98453 18.7594 5.72082 18.7594C5.4571 18.7594 5.19598 18.7119 4.95236 18.6196C4.70875 18.5274 4.48743 18.3922 4.30106 18.2218C4.11448 18.0515 3.96647 17.8494 3.86548 17.6268C3.7645 17.4043 3.71252 17.1658 3.71252 16.9249C3.71252 16.684 3.7645 16.4454 3.86548 16.2229C3.96647 16.0004 4.11448 15.7982 4.30106 15.628L4.36126 15.573C4.59257 15.357 4.74774 15.0826 4.80676 14.7853C4.86578 14.488 4.82593 14.1813 4.69237 13.9049C4.56518 13.6338 4.35399 13.4026 4.0848 13.2397C3.81561 13.0769 3.50016 12.9895 3.1773 12.9883H3.00672C2.47451 12.9883 1.96409 12.7952 1.58776 12.4514C1.21142 12.1077 1 11.6414 1 11.1552C1 10.6691 1.21142 10.2028 1.58776 9.85907C1.96409 9.5153 2.47451 9.32217 3.00672 9.32217H3.09703C3.42913 9.31507 3.75122 9.21688 4.02142 9.04035C4.29162 8.86381 4.49743 8.61711 4.6121 8.33231C4.74567 8.05587 4.78551 7.74921 4.72649 7.45189C4.66747 7.15457 4.51231 6.88022 4.28099 6.66421L4.22079 6.60922C4.03421 6.43897 3.8862 6.23681 3.78521 6.01427C3.68423 5.79174 3.63225 5.55321 3.63225 5.31231C3.63225 5.07142 3.68423 4.83289 3.78521 4.61036C3.8862 4.38782 4.03421 4.18566 4.22079 4.01541C4.40716 3.84498 4.62848 3.70977 4.87209 3.61752C5.11571 3.52528 5.37683 3.47779 5.64055 3.47779C5.90426 3.47779 6.16539 3.52528 6.40901 3.61752C6.65262 3.70977 6.87394 3.84498 7.06031 4.01541L7.12051 4.0704C7.35698 4.2817 7.65732 4.42344 7.98281 4.47735C8.30829 4.53126 8.644 4.49487 8.94663 4.37286H9.0269C9.32366 4.25668 9.57676 4.06376 9.75503 3.81787C9.9333 3.57197 10.029 3.28382 10.0303 2.98889V2.83308C10.0303 2.34691 10.2417 1.88066 10.618 1.5369C10.9943 1.19313 11.5048 1 12.037 1C12.5692 1 13.0796 1.19313 13.456 1.5369C13.8323 1.88066 14.0437 2.34691 14.0437 2.83308V2.91557C14.045 3.2105 14.1407 3.49865 14.3189 3.74454C14.4972 3.99044 14.7503 4.18336 15.0471 4.29954C15.3497 4.42154 15.6854 4.45794 16.0109 4.40403C16.3364 4.35012 16.6367 4.20838 16.8732 3.99708L16.9334 3.94209C17.1198 3.77166 17.3411 3.63645 17.5847 3.5442C17.8283 3.45195 18.0894 3.40447 18.3531 3.40447C18.6169 3.40447 18.878 3.45195 19.1216 3.5442C19.3652 3.63645 19.5865 3.77166 19.7729 3.94209C19.9595 4.11233 20.1075 4.3145 20.2085 4.53703C20.3095 4.75956 20.3614 4.9981 20.3614 5.23899C20.3614 5.47989 20.3095 5.71842 20.2085 5.94095C20.1075 6.16348 19.9595 6.36565 19.7729 6.53589L19.7127 6.59089C19.4814 6.80689 19.3262 7.08125 19.2672 7.37857C19.2082 7.67589 19.248 7.98254 19.3816 8.25899V8.33231C19.5088 8.60339 19.72 8.83459 19.9892 8.99743C20.2584 9.16028 20.5738 9.24767 20.8967 9.24885H21.0672C21.5995 9.24885 22.1099 9.44198 22.4862 9.78574C22.8625 10.1295 23.074 10.5958 23.074 11.0819C23.074 11.5681 22.8625 12.0343 22.4862 12.3781C22.1099 12.7219 21.5995 12.915 21.0672 12.915H20.9769C20.6541 12.9162 20.3386 13.0036 20.0694 13.1664C19.8002 13.3293 19.5891 13.5605 19.4619 13.8315V13.8315Z" stroke="#381C46" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <div className="flex-1">
                            Settings
                        </div>
                    </button>
                </div>

                <button onClick={handleExit} className="font-semibold text-[15px] text-[#381C46] flex justify-start items-center w-[200px]">
                    <svg className="mr-4" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.24 21.27H14.11C9.66997 21.27 7.52997 19.52 7.15997 15.6C7.11997 15.19 7.41997 14.82 7.83997 14.78C8.23997 14.74 8.61997 15.05 8.65997 15.46C8.94997 18.6 10.43 19.77 14.12 19.77H14.25C18.32 19.77 19.76 18.33 19.76 14.26V7.73998C19.76 3.66998 18.32 2.22998 14.25 2.22998H14.12C10.41 2.22998 8.92997 3.41998 8.65997 6.61998C8.60997 7.02998 8.25997 7.33998 7.83997 7.29998C7.74141 7.29228 7.64534 7.2652 7.55727 7.22028C7.46921 7.17537 7.39087 7.11351 7.32677 7.03826C7.26266 6.96301 7.21404 6.87583 7.1837 6.78175C7.15336 6.68766 7.1419 6.58851 7.14997 6.48998C7.48997 2.50998 9.63997 0.72998 14.11 0.72998H14.24C19.15 0.72998 21.25 2.82998 21.25 7.73998V14.26C21.25 19.17 19.15 21.27 14.24 21.27Z" fill="#381C46" fill-opacity="0.7" />
                        <path d="M14.0001 11.75H2.62012C2.21012 11.75 1.87012 11.41 1.87012 11C1.87012 10.59 2.21012 10.25 2.62012 10.25H14.0001C14.4101 10.25 14.7501 10.59 14.7501 11C14.7501 11.41 14.4101 11.75 14.0001 11.75Z" fill="#381C46" fill-opacity="0.7" />
                        <path d="M4.85014 15.1001C4.66014 15.1001 4.47014 15.0301 4.32014 14.8801L0.970143 11.5301C0.830663 11.389 0.752441 11.1985 0.752441 11.0001C0.752441 10.8017 0.830663 10.6112 0.970143 10.4701L4.32014 7.12009C4.61014 6.83009 5.09014 6.83009 5.38014 7.12009C5.67014 7.41009 5.67014 7.89009 5.38014 8.18009L2.56014 11.0001L5.38014 13.8201C5.67014 14.1101 5.67014 14.5901 5.38014 14.8801C5.24014 15.0301 5.04014 15.1001 4.85014 15.1001Z" fill="#381C46" fill-opacity="0.7" />
                    </svg>

                    Log out
                </button>
            </div>
            <div className="w-full px-[60px] py-[50px]">
                <Header />
                <div className="flex flex-col justify-center items-center w-full pt-[30px]">
                    {
                        (() => {
                            if (dashboard) return <Dashboard />;
                            if (transactions) return <Transactions />;
                            if (goals) return <Goals />;
                            if (report) return <Report />;
                            if (notifications) return <Notifications />;
                            if (settings) return <Settings />
                        })()
                    }
                </div>
            </div>
        </div>
    );
}

export default Application;