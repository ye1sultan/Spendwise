import {React} from 'react';

const Home = () => {
    return (
        <div className='flex flex-col items-center bg-gradient-to-r from-purple-300 via-purple-300 to-pink-100 w-full h-screen font-inter'>
            <div className='w-[1400px] h-full'>
                <Header />
                <Center />
            </div>
        </div>
    );
}

const Header = () => (
    <div className='flex flex-row justify-between h-40 items-center'>
        <div className='text-3xl'>LOGO</div>
        <div className='flex flex-row justify-between items-center'>
            <List />
            <div className="flex flex-row border-l-[1px] border-black gap-10">
                <SignInButton />
                <SignUpButton />
            </div>
        </div>
    </div>
)

const List = () => (
    <ul className="list-none flex flex-row justify-between w-[485px] mr-36">
        <li className="text-xl font-light leading-5 mr-4">Tracking</li>
        <li className="text-xl font-light leading-5 mr-4">Report</li>
        <li className="text-xl font-light leading-5 mr-4">About</li>
        <li className="text-xl font-light leading-5">Support</li>
    </ul>
);

const SignInButton = () => (
    <button className="w-28 h-12 text-xl font-light leading-5">
        Sign In
    </button>
);
  
const SignUpButton = () => (
    <button className="w-28 h-12 rounded-[8px] text-xl font-light leading-5 bg-[#efcc4cbb]">
        Sign Up
    </button>
);

const Center = () => (
    <div className='justify-center self-start font-andada w-[600px]'>
        <div className='text-8xl font-bold mb-8 text-[#240150]'>
            Personal Finance Made Easy.
        </div>
        <div className='text-3xl font-medium mb-8'>
            Become financially independent today. 
        </div>
        <GetStartedButton />
    </div>
);

const GetStartedButton = () => (
    <button className="w-64 h-20 rounded-[20px] text-3xl text-white font-bold leading-5 bg-[#19AD50CC] font-inter">
        Get Started
    </button>
)
  

export default Home;