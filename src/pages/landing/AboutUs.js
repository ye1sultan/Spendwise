const AboutUs = () => {
    return (
        <div id='about' className="bg-[#ffffff] py-[150px] w-full relative">
            <div className="flex flex-col justify-center items-center max-w-[1680px] h-full mx-auto z-10">
                <div className="flex flex-col items-center self-start">
                    <div className="font-inter text-[75px] text-[#502167] font-bold">
                        What is Spendwise?
                    </div>
                    <div className="font-amiri text-[48px] max-w-[844px] text-center">
                        Spendwise brings together everything from spending, balances, and budgets to your credit score and more.
                    </div>
                </div>
                <div className="flex flex-col items-center self-end">
                    <div className="font-inter text-[75px] text-[#502167] font-bold">
                        What is our goal ?
                    </div>
                    <div className="font-amiri text-[48px] max-w-[844px] text-center">
                        Our goal is to help every person live in a financially independent reality.
                    </div>
                </div>
            </div>
            <div className="absolute left-48 bottom-24 z-0">
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
            <div className="absolute right-48 top-24 z-0">
                <svg width="196" height="133" viewBox="0 0 196 133" fill="none" xmlns="http://www.w3.org/2000/svg" transform ="rotate(-180 0 0)">
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