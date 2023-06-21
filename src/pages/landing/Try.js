import { useTranslation } from 'react-i18next';
import Button from './components/Button';

const Try = () => {
    const { t, i18n } = useTranslation();

    return (
        <div id='try' className="py-[60px] 2xl:py-[70px] w-full h-full font-andada bg-gradient-to-r from-purple-300 via-purple-200 to-pink-200 transform -skew-x-10 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center w-[250px] 2xl:w-fit text-center">
                <div className="text-[40px] 2xl:text-[75px] font-bold mb-[25px] relative">
                    {t("landing.love.under")}{t("landing.love.title")}
                    <div className="hidden 2xl:block absolute bottom-[-10px] left-0">
                        <svg width="199" height="30" viewBox="0 0 199 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.26545 8.07344C4.75897 8.89767 2.0743 9.63939 1.64283 10.4636C0.58812 12.2769 2.69747 13.1839 9.36131 13.2663C9.40925 13.2663 182.429 6.50749 182.477 6.50749C190.292 5.93053 190.915 5.18888 190.915 3.78769C190.915 1.97439 188.806 0.737725 184.299 0.160765C178.354 -0.745887 42.5846 2.22142 9.26545 8.07344ZM185.402 12.1946C183.292 12.3594 45.9885 17.7993 42.5368 18.2938C0.252559 23.6513 -3.00745 24.4758 1.54697 28.4321C3.75227 30.3278 7.92316 30.3275 25.997 28.1845C69.5757 23.1567 193.648 22.5801 198.01 19.8602C200.024 18.5414 200.312 11.2879 185.402 12.1946Z" fill="#E868C4" />
                        </svg>
                    </div>
                    <div className='block 2xl:hidden absolute top-12 left-6'>
                        <svg width="112" height="13" viewBox="0 0 112 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.21472 3.51911C2.67841 3.87838 1.16744 4.20169 0.924607 4.56096C0.331002 5.35135 1.51817 5.74669 5.26867 5.78262C5.29566 5.78262 102.674 2.83653 102.701 2.83653C107.099 2.58504 107.45 2.26177 107.45 1.65101C107.45 0.860611 106.262 0.321565 103.726 0.0700753C100.38 -0.325122 23.9672 0.968287 5.21472 3.51911ZM104.347 5.31546C103.16 5.38731 25.883 7.75847 23.9403 7.97403C0.142144 10.3093 -1.69264 10.6687 0.870656 12.3932C2.11183 13.2195 4.45927 13.2194 14.6315 12.2853C39.1582 10.0937 108.988 9.84238 111.443 8.65678C112.576 8.08195 112.738 4.92026 104.347 5.31546Z" fill="#E868C4" />
                        </svg>
                    </div>
                </div>
                <div className="text-[16px] 2xl:text-[32px] mb-[40px] 2xl:mb-[55px]">
                    {t("landing.love.text")}
                </div>
                <div className="flex flex-col gap-4">
                    <Button route='/signup' text={t("landing.love.btnf")} width='w-[240px] 2xl:w-[420px]' height='h-[44px] 2xl:h-[64px]' bg='bg-[#19AD50CC]' rounded='rounded-[10px]' size='text-[16px] 2xl:text-[25px]' color='text-white' bold='font-semibold 2xl:font-bold' font='font-inter' />
                </div>
            </div>
        </div>
    );
}

export default Try;