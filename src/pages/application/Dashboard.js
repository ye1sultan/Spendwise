const Dashboard = () => {
    return (
        <div className="w-full pl-[35px] pr-[70px] pt-[50px] flex flex-row justify-between items-start">
            <div className="flex flex-col">
                <div className="text-[24px]">
                    The Complete Wallet
                </div>
                <div className="text-[36px] font-medium">
                    Manage Your <span className="font-bold">Finance</span>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="relative">
                    <input className="w-[350px] h-[40px] rounded-full text-[13px] text-center" type="text" placeholder="Search a transaction and Documents" />
                    <svg className="absolute top-[50%] left-4 translate-y-[-50%]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="#A5B3CD" />
                        <path d="M22.0001 22.7499C21.8101 22.7499 21.6201 22.6799 21.4701 22.5299L19.4701 20.5299C19.3307 20.3888 19.2524 20.1984 19.2524 19.9999C19.2524 19.8015 19.3307 19.6111 19.4701 19.4699C19.7601 19.1799 20.2401 19.1799 20.5301 19.4699L22.5301 21.4699C22.8201 21.7599 22.8201 22.2399 22.5301 22.5299C22.3801 22.6799 22.1901 22.7499 22.0001 22.7499V22.7499Z" fill="#A5B3CD" />
                    </svg>
                </div>
                <div className="">
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.629 14.1359C30.629 11.3076 29.5599 8.59508 27.6569 6.59515C25.7539 4.59523 23.1729 3.47168 20.4817 3.47168C17.7905 3.47168 15.2095 4.59523 13.3065 6.59515C11.4035 8.59508 10.3344 11.3076 10.3344 14.1359C10.3344 26.5775 5.26074 30.1322 5.26074 30.1322H35.7026C35.7026 30.1322 30.629 26.5775 30.629 14.1359Z" fill="white" />
                        <path d="M24.1336 34.1313C23.8552 34.6112 23.4557 35.0095 22.975 35.2864C22.4942 35.5633 21.9492 35.7091 21.3944 35.7091C20.8397 35.7091 20.2946 35.5633 19.8139 35.2864C19.3332 35.0095 18.9336 34.6112 18.6553 34.1313" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <circle cx="28.5" cy="7.5" r="4.5" fill="#BB4430" />
                    </svg>
                </div>
                <div className="flex flex-row">
                    <div className="">
                        <svg width="45" height="43" viewBox="0 0 45 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="22.5" cy="21.5" rx="22.5" ry="21.5" fill="#FFC145" fill-opacity="0.7" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.05469 35.0489C5.76491 29.6596 10.3766 25.5 15.9598 25.5H29.1776C34.7608 25.5 39.3725 29.6596 40.0827 35.0489C35.8344 39.9193 29.5635 42.9998 22.5687 42.9998C15.5738 42.9998 9.30297 39.9193 5.05469 35.0489Z" fill="#197BBD" />
                            <ellipse cx="22.5686" cy="15.3684" rx="7.41426" ry="7.3684" fill="white" />
                        </svg>



                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;