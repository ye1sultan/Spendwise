const AboutUs = () => {
    return (
        <div id='about' className="bg-[#ffffff] py-[100px] sm:py-[150px] w-full relative">
            <div className="flex flex-col sm:justify-between sm:items-between max-w-[350px] sm:max-w-[1680px] h-full mx-auto z-10">
                <div className="flex flex-col justify-start items-start sm:items-center mb-[100px] sm:mb-0 relative">
                    <div className="font-inter text-[36px] sm:text-[75px] text-[#502167] font-bold mb-[30px] sm:mb-0 z-10">
                        What is Spendwise?
                    </div>
                    <div className="font-amiri text-[24px] sm:text-[48px] max-w-[844px] sm:text-center z-10">
                        Spendwise brings together everything from spending, balances, and budgets to your credit score and more. Access your financial life in one powerful site.
                    </div>
                    <div className="sm:hidden absolute top-32 left-12">
                        <svg width="307" height="157" viewBox="0 0 307 157" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M240.15 16.7471C338.968 34.1203 310.929 125.807 266.136 154.055C245.785 166.889 86.1095 133.618 41.8294 133.618C-56.4759 -15.9218 35.5036 0.535706 142.528 0.53552C351.961 57.7677 141.331 -0.626147 240.15 16.7471Z" fill="url(#paint0_diamond_1_1503)" />
                            <defs>
                                <radialGradient id="paint0_diamond_1_1503" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(148.854 30.257) rotate(67.7477) scale(161.627 138.691)">
                                    <stop offset="0.0347481" stop-color="#E178C3" stop-opacity="0.63" />
                                    <stop offset="1" stop-color="#E0BDF0" stop-opacity="0.8" />
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start sm:items-center self-end relative">
                    <div className="font-inter text-[36px] sm:text-[75px] text-[#502167] font-bold mb-[30px] sm:mb-0 z-10">
                        What is our goal ?
                    </div>
                    <div className="font-amiri text-[24px] sm:text-[48px] max-w-[844px] sm:text-center z-10">
                        Our goal is to help every person live in a financially independent reality.
                    </div>
                    <div className="sm:hidden absolute bottom-24 right-0">
                        <svg width="80" height="57" viewBox="0 0 80 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M80 24.6593C80 47.1645 71.0527 57 49.641 57C28.2294 57 0 37.4624 0 14.9573C0 -7.54787 28.2294 2.02095 49.641 2.02095C71.0527 2.02095 80 2.15415 80 24.6593Z" fill="url(#paint0_diamond_1_1502)" />
                            <defs>
                                <radialGradient id="paint0_diamond_1_1502" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(49.8461 10.4294) rotate(54.4277) scale(76.8706 75.7281)">
                                    <stop stop-color="#EA88CE" />
                                    <stop offset="0.770832" stop-color="#BFA2E5" stop-opacity="0.64" />
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="hidden sm:block absolute left-48 bottom-24 z-0">
                <svg width="196" height="133" viewBox="0 0 196 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M195.5 57.9998C195.5 110.191 173.691 133 121.5 133C69.3091 133 0.5 87.6911 0.5 35.5002C0.5 -16.6908 69.3091 5.49994 121.5 5.49994C173.691 5.49994 195.5 5.80885 195.5 57.9998Z" fill="url(#paint0_diamond_1_428)" />
                    <defs>
                        <radialGradient id="paint0_diamond_1_428" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(122 24.9998) rotate(53.0669) scale(181.4 181.4)">
                            <stop stop-color="#EA88CE" />
                            <stop offset="0.770832" stop-color="#BFA2E5" stop-opacity="0.64" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <div className="hidden sm:block absolute right-48 top-24 z-0">
                <svg width="196" height="133" viewBox="0 0 196 133" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(-180 0 0)">
                    <path d="M195.5 57.9998C195.5 110.191 173.691 133 121.5 133C69.3091 133 0.5 87.6911 0.5 35.5002C0.5 -16.6908 69.3091 5.49994 121.5 5.49994C173.691 5.49994 195.5 5.80885 195.5 57.9998Z" fill="url(#paint0_diamond_1_428)" />
                    <defs>
                        <radialGradient id="paint0_diamond_1_428" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(122 24.9998) rotate(53.0669) scale(181.4 181.4)">
                            <stop stop-color="#EA88CE" />
                            <stop offset="0.770832" stop-color="#BFA2E5" stop-opacity="0.64" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
}

export default AboutUs;