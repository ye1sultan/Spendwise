import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const Footer = () => {

    const [isLegalOpen, setIsLegalOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isSupportOpen, setIsSupportOpen] = useState(false);

    const handleClick = (num) => {
        if (num === 1) {
            isLegalOpen === true ? setIsLegalOpen(false) : setIsLegalOpen(true);
        }
        if (num === 2) {
            isAboutOpen === true ? setIsAboutOpen(false) : setIsAboutOpen(true);
        }
        if (num === 3) {
            isSupportOpen === true ? setIsSupportOpen(false) : setIsSupportOpen(true);
        }
    }

    return (
        <div id="support" className="bg-[#ffffff] py-[60px] 2xl:py-[40px] flex justify-center items-center w-full">
            <div className="flex flex-col-reverse 2xl:flex-row justify-around items-center w-[350px] 2xl:w-fit bg-white">
                <div className="flex flex-col 2xl:pr-12 w-[350px] 2xl:w-fit">
                    <div className='text-[24px] 2xl:text-4xl 2xl:w-full mb-[15px] 2xl:mb-[50px] 2xl:font-semibold'>LOGO</div>
                    <div className="text-[15px] 2xl:text-[24px] 2xl:w-[450px] mb-[15px] 2xl:mb-[50px] font-semibold 2xl:font-light font-andada">
                        Follow Spendwise to get support and lots of great ideas on budgeting.
                    </div>
                    <div className="flex flex-row">
                        <button className="mr-[15px]">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.125 18.7113C9.20039 17.4185 10.7098 16.4951 12.3135 15.5716C16.0869 13.54 19.766 11.5085 23.4451 9.29218C24.8602 8.46108 25.2375 8.64575 25.2375 10.308C25.1432 11.5084 24.9545 12.6166 24.7658 13.8171C24.1998 17.2338 23.5395 20.6506 22.9735 24.0673C22.7848 25.0831 22.4074 25.3602 21.4641 24.8061C20.9924 24.5291 20.5207 24.4367 20.049 24.252C17.5963 23.2362 17.3133 23.2362 15.5209 25.1755C15.1436 25.5448 15.0492 26.0989 14.2945 26.1913C14.0115 24.4367 13.6342 22.8669 14.9549 21.297C16.2756 19.6348 17.502 18.0649 18.917 16.4027C19.2944 15.941 19.5774 15.4793 19.766 14.9252C17.5963 16.3104 15.4266 17.7879 13.6342 19.6348C12.9738 20.3735 12.4078 20.4659 11.4645 20.0965C10.2381 19.6348 8.91738 19.2654 7.125 18.7113Z" fill="black" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 33.7718C27.1127 33.7718 34.5 26.5404 34.5 17.6201C34.5 8.69971 27.1127 1.46834 18 1.46834C8.8873 1.46834 1.5 8.69971 1.5 17.6201C1.5 26.5404 8.8873 33.7718 18 33.7718ZM18 35.2401C27.9411 35.2401 36 27.3513 36 17.6201C36 7.88877 27.9411 0 18 0C8.05887 0 0 7.88877 0 17.6201C0 27.3513 8.05887 35.2401 18 35.2401Z" fill="black" />
                            </svg>
                        </button>
                        <button className="mr-[15px]">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 33.7718C27.1127 33.7718 34.5 26.5404 34.5 17.6201C34.5 8.69971 27.1127 1.46834 18 1.46834C8.8873 1.46834 1.5 8.69971 1.5 17.6201C1.5 26.5404 8.8873 33.7718 18 33.7718ZM18 35.2401C27.9411 35.2401 36 27.3513 36 17.6201C36 7.88877 27.9411 0 18 0C8.05887 0 0 7.88877 0 17.6201C0 27.3513 8.05887 35.2401 18 35.2401Z" fill="black" />
                                <path d="M11.8832 19.4393C11.3287 18.8965 10.7743 18.3538 10.3307 17.811C9.77625 17.0511 8.66733 16.2913 10.2198 15.3143C10.6634 14.9887 10.3307 14.3374 10.2198 13.9031C9.88714 12.9262 9.77625 11.9492 9.77625 10.4295C11.2178 12.492 12.6594 13.6861 14.7664 14.2288C15.4317 14.4459 16.0971 14.4459 16.8733 14.5545C18.204 14.663 18.7585 14.0117 18.8694 12.7091C19.2021 9.34398 21.0872 8.25847 24.0813 9.99529C25.1902 10.6466 25.6338 9.66964 26.5209 9.56109C26.8536 10.4295 27.4081 11.2979 26.5209 12.2749C26.0774 12.7091 26.1883 13.3604 26.1883 14.0117C26.0774 19.1136 22.8615 23.3471 17.8714 24.8668C16.3189 25.4096 14.6555 25.7352 12.8812 25.7352C11.4396 25.6267 10.1089 25.4096 9 23.9984C10.4416 23.7813 12.105 24.5412 13.103 22.9129C12.4377 21.936 10.6634 21.6103 10.5525 19.982C10.7743 19.4393 11.5505 19.982 11.8832 19.4393Z" fill="black" />
                            </svg>
                        </button>
                        <button className="mr-[15px]">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 33.7718C27.1127 33.7718 34.5 26.5404 34.5 17.6201C34.5 8.69971 27.1127 1.46834 18 1.46834C8.8873 1.46834 1.5 8.69971 1.5 17.6201C1.5 26.5404 8.8873 33.7718 18 33.7718ZM18 35.2401C27.9411 35.2401 36 27.3513 36 17.6201C36 7.88877 27.9411 0 18 0C8.05887 0 0 7.88877 0 17.6201C0 27.3513 8.05887 35.2401 18 35.2401Z" fill="black" />
                                <path d="M18.7075 23.7278C16.2188 24.0416 14.2486 23.7278 12.2784 23.5186C10.3083 23.3094 9.68609 22.6819 9.58239 20.59C9.4787 18.7074 9.375 16.7201 9.375 14.8375C9.375 12.4318 10.2046 11.5951 12.5895 11.2813C16.5299 10.7584 20.4703 11.0721 24.4107 11.5951C25.5513 11.6997 26.2772 12.2227 26.4846 13.3732C27.1067 15.8834 27.1067 18.4982 26.7957 21.113C26.5883 22.5773 25.4476 23.3094 23.9959 23.5186C22.2331 23.8324 20.2629 23.8324 18.7075 23.7278ZM16.2188 20.7992C18.189 20.2763 19.8481 19.2303 21.4036 17.7661C19.7444 16.5109 18.0853 15.6742 16.0114 14.7329C16.0114 16.9293 15.8041 18.812 16.2188 20.7992Z" fill="black" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col 2xl:flex-row w-full">
                    <div className="flex flex-col justify-between 2xl:items-center 2xl:h-[220px] mb-8 2xl:mb-0 2xl:px-[160px] border-b-2 2xl:border-b-0 2xl:border-l border-black">
                        <div className="font-semibold text-[24px] flex justify-between items-center">
                            Legal
                            <button className={`${isLegalOpen === true ? 'rotate-45' : 'rotate-0'} block 2xl:hidden transition ease-in-out duration-300`} onClick={() => handleClick(1)}>
                                <AiOutlinePlus size={30} />
                            </button>
                        </div>
                        <div className={`${isLegalOpen === true ? 'flex' : 'hidden'} flex-col justify-evenly items-center h-40 transition ease-in-out duration-300`}>
                            <button className="text-[20px] font-semibold border-b-2 border-black">
                                Term
                            </button>
                            <button className="text-[20px] font-semibold border-b-2 border-black">
                                Privacy
                            </button>
                            <button className="text-[20px] font-semibold border-b-2 border-black">
                                Security
                            </button>
                        </div>
                        <div className="hidden 2xl:flex flex-col justify-evenly items-center w-full h-full">
                            <div className="text-[16px]">
                                Term
                            </div>
                            <div className="text-[16px]">
                                Privacy
                            </div>
                            <div className="text-[16px]">
                                Security
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between 2xl:items-center 2xl:h-[220px] mb-8 2xl:mb-0 2xl:px-[160px] border-b-2 2xl:border-b-0 2xl:border-l border-black">
                        <div className="font-semibold text-[24px] flex justify-between items-center">
                            About Us
                            <button className={`${isAboutOpen === true ? 'rotate-45' : 'rotate-0'} block 2xl:hidden transition ease-in-out duration-300`} onClick={() => handleClick(2)}>
                                <AiOutlinePlus size={30} />
                            </button>
                        </div>
                        <div className={`${isAboutOpen === true ? 'flex' : 'hidden'} flex-col justify-evenly items-center h-40 transition ease-in-out duration-300`}>
                            <button className="text-[20px] font-semibold border-b-2 border-black">
                                Overview
                            </button>
                            <button className="text-[20px] font-semibold border-b-2 border-black">
                                Careers
                            </button>
                            <button className="text-[20px] font-semibold border-b-2 border-black">
                                Team
                            </button>
                        </div>
                        <div className="hidden 2xl:flex flex-col justify-evenly items-center w-full h-full">
                            <div className="text-[16px]">
                                Overview
                            </div>
                            <div className="text-[16px]">
                                Careers
                            </div>
                            <div className="text-[16px]">
                                Team
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between 2xl:items-center 2xl:h-[220px] mb-8 2xl:mb-0 2xl:px-[160px] border-b-2 2xl:border-b-0 2xl:border-l border-black">
                        <div className="font-semibold text-[24px] flex justify-between items-center">
                            Support
                            <button className={`${isSupportOpen === true ? 'rotate-45' : 'rotate-0'} block 2xl:hidden transition ease-in-out duration-300`} onClick={() => handleClick(3)}>
                                <AiOutlinePlus size={30} />
                            </button>
                        </div>
                        <div className={`${isSupportOpen === true ? 'flex' : 'hidden'} flex-col justify-evenly items-center h-40 transition ease-in-out duration-300`}>
                            <button className="text-[20px] font-semibold border-b-2 border-black">
                                Help Center
                            </button>
                            <button className="text-[20px] font-semibold border-b-2 border-black">
                                Contact Us
                            </button>
                            <button className="text-[20px] font-semibold border-b-2 border-black">
                                Live Support
                            </button>
                        </div>
                        <div className="hidden 2xl:flex flex-col justify-evenly items-center w-full h-full">
                            <div className="text-[16px]">
                                Help Center
                            </div>
                            <div className="text-[16px]">
                                Contact Us
                            </div>
                            <div className="text-[16px]">
                                Live Support
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;