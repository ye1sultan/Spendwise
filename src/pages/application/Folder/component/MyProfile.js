import { useState } from "react";

const MyProfile = () => {
    const User = {
        name: 'Zholshieva Arailym',
        email: 'azholshiyeva@gmail.com'
    };

    const [name, setName] = useState(User.name);
    const [email, setEmail] = useState(User.email);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="self-start w-[970px] h-[500px] bg-white rounded-[30px] border-[1px] border-[#AEAEAE] px-[45px] py-[25px] flex justify-center items-center">
            <div className="w-full">
                <div className="text-[40px] font-medium">
                    Account Details
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-start">
                    <label className="text-[24px] font-medium mb-[10px]">Name</label>
                    <input className="w-[490px] h-[50px] border-b-[1px] border-[#000] mb-[35px] text-[24px] font-medium" type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} required />
                    <label className="text-[24px] font-medium mb-[10px]">Email</label>
                    <input className="w-[490px] h-[50px] border-b-[1px] border-[#000] mb-[35px] text-[24px] font-medium" type="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} required />
                    <input className="w-[340px] h-[50px] rounded-[30px] bg-[#D9D9D9] bg-opacity-30 mt-[70px] cursor-pointer text-[16px] font-medium uppercase text-[#000] text-opacity-50" type="submit" value="Update your information" />
                </form>
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-[200px] h-[200px] relative">
                    <img className="w-[200px] h-[200px] rounded-[100%]" src="https://picsum.photos/200/200" alt="avatar" />
                    <button className="w-[60px] h-[60px] rounded-full bg-[#9F75D6] absolute right-0 bottom-0 flex justify-center items-center">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.7085 3.12491C17.9821 2.85132 18.3069 2.6343 18.6643 2.48623C19.0218 2.33817 19.4049 2.26196 19.7918 2.26196C20.1787 2.26196 20.5619 2.33817 20.9193 2.48623C21.2768 2.6343 21.6016 2.85132 21.8752 3.12491C22.1488 3.3985 22.3658 3.72329 22.5138 4.08075C22.6619 4.43821 22.7381 4.82133 22.7381 5.20824C22.7381 5.59515 22.6619 5.97827 22.5138 6.33573C22.3658 6.69319 22.1488 7.01799 21.8752 7.29158L7.81266 21.3541L2.0835 22.9166L3.646 17.1874L17.7085 3.12491Z" stroke="#381C46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <line x1="17.0201" y1="4.64645" x2="20.3534" y2="7.97978" stroke="#381C46" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;