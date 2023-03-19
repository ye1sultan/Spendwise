import Button from '../components/Button';

const Try = () => {
    return (
        <div id='try' className="py-[70px] w-full h-full font-andada bg-gradient-to-r from-purple-300 via-purple-200 to-pink-200 transform -skew-x-10">
            <div className="flex flex-col justify-center items-center">
                <div className="text-[75px] font-bold mb-[25px] relative">
                    Love How You Spend Your Money.
                    <div className="absolute bottom-[-10px] left-0">
                        <svg width="199" height="30" viewBox="0 0 199 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.26545 8.07344C4.75897 8.89767 2.0743 9.63939 1.64283 10.4636C0.58812 12.2769 2.69747 13.1839 9.36131 13.2663C9.40925 13.2663 182.429 6.50749 182.477 6.50749C190.292 5.93053 190.915 5.18888 190.915 3.78769C190.915 1.97439 188.806 0.737725 184.299 0.160765C178.354 -0.745887 42.5846 2.22142 9.26545 8.07344ZM185.402 12.1946C183.292 12.3594 45.9885 17.7993 42.5368 18.2938C0.252559 23.6513 -3.00745 24.4758 1.54697 28.4321C3.75227 30.3278 7.92316 30.3275 25.997 28.1845C69.5757 23.1567 193.648 22.5801 198.01 19.8602C200.024 18.5414 200.312 11.2879 185.402 12.1946Z" fill="#E868C4" />
                        </svg>
                    </div>
                </div>
                <div className="text-[32px] mb-[55px]">
                    Start saving and spending with confidence and clarity.
                </div>
                <div className="flex flex-col gap-4">
                    <Button route='/signup' text='Try Free' width='420px' height='64px' bg='#19AD50CC' rounded='10px' size='25px' color='white' bold='semibold' font='inter' />
                    <Button route='/signup' text='See Site Features' width='420px' height='64px' bg='#ffffff' rounded='10px' size='25px' color='black' bold='semibold' font='inter' />
                </div>
            </div>
        </div>
    );
}

export default Try;