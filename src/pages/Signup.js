import Google from '../imgs/Google.png';
import Facebook from '../imgs/Facebook.png';
import Apple from '../imgs/Apple.png';

const Signup = () => {
    return (
        <div className="bg-white h-screen flex justify-center items-start relative font-sans pt-[252px]">
            <div className="h-[31%] w-full bg-gradient-to-r from-purple-300 via-purple-300 to-pink-100 absolute top-0 z-0"></div>

            <div className="w-[474px] h-[576px] bg-white rounded-[24px] flex flex-col justify-start items-center z-10">
                <div className="mt-[32px] text-[#344767] font-semibold mb-[32px] text-[12px]">
                    Continue with
                </div>
                <div className="flex flex-row justify-center items-center w-[176px] mb-[32px]">
                    <div className="w-[50px] h-[50px] p-[10px] border-[1px] rounded-[8px] border-[#CED4DA] mr-[12px]">
                        <img src={Google} alt="Google" />
                    </div>
                    <div className="w-[50px] h-[50px] p-[10px] border-[1px] rounded-[8px] border-[#CED4DA] mr-[12px]">
                        <img src={Facebook} alt="Google" />
                    </div>
                    <div className="w-[50px] h-[50px] p-[10px] border-[1px] rounded-[8px] border-[#CED4DA]">
                        <img src={Apple} alt="Google" />
                    </div>
                </div>
                <div className='font-semibold text-[12px] text-[#ADB5BD] mb-[32px]'>
                    or
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <input className='border-[1px] rounded-[8px] border-[#CED4DA] mb-[24px] focus:outline-0 w-[382px] h-[40px] text-[12px] text-[#ADB5BD] py-[12px] pl-[12px]' placeholder='Name' />
                    <input className='border-[1px] rounded-[8px] border-[#CED4DA] mb-[24px] focus:outline-0 w-[382px] h-[40px] text-[12px] text-[#ADB5BD] py-[12px] pl-[12px]' placeholder='Email' />
                    <input className='border-[1px] rounded-[8px] border-[#CED4DA] mb-[24px] focus:outline-0 w-[382px] h-[40px] text-[12px] text-[#ADB5BD] py-[12px] pl-[12px]' placeholder='Password' />
                </div>
                <div className='mb-[24px] text-black font-semibold flex flex-row justify-start items-center w-[382px]'>
                    <input id='checkbox' type='checkbox' value='' className='w-[18px] h-[18px] mr-[24px]' />
                    <label for='checkbox' className='text-[12px]'>I agree to the Terms of Use</label>
                </div>
                <button className='bg-[#343A40] text-white font-semibold text-[12px] w-[382px] h-[40px] rounded-[8px] mb-[32px]'>
                    Create Account
                </button>
                <div className='flex flex-row justif-center items-center'>
                    <div className='font-semibold text-[12px] mr-2'>
                        Already have an account? 
                    </div>
                    <button className='font-bold text-[14px]'>
                        Sing In.
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signup;