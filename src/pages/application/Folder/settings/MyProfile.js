import { useState } from "react";
import { BiPencil } from "react-icons/bi";

const MyProfile = () => {
    const User = {
        name: 'Zholshieva Arailym',
        email: 'azholshiyeva@gmail.com',
        avatar: "https://picsum.photos/200/200",
    };

    const [name, setName] = useState(User.name);
    const [email, setEmail] = useState(User.email);
    const [avatar, setAvatar] = useState(User.avatar);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleAvatarChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setAvatar(event.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <div className="self-start w-[970px] bg-white rounded-[30px] border-[1px] border-[#AEAEAE] px-[45px] py-[25px] flex justify-center items-center">
            <div className="w-full">
                <div className="text-[40px] font-medium mb-8">
                    Account Details
                </div>
                <form onSubmit={handleSubmit} className="flex flex-row justify-center items-start">
                    <div className="flex flex-col justify-center items-start">
                        <label className="text-[24px] font-medium mb-[10px]">Name</label>
                        <input className="w-[490px] h-[50px] border-b-[1px] border-[#000] mb-[35px] text-[24px] font-medium" type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} required />
                        <label className="text-[24px] font-medium mb-[10px]">Email</label>
                        <input className="w-[490px] h-[50px] border-b-[1px] border-[#000] mb-[35px] text-[24px] text-[#a0a0a0] font-medium" type="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)} readOnly />
                        <input className="w-[340px] h-[50px] rounded-[30px] bg-[#D9D9D9] bg-opacity-30 mt-[70px] cursor-pointer text-[16px] font-medium uppercase text-[#000] text-opacity-50" type="submit" value="Update your information" />
                    </div>
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="w-[200px] h-[200px] relative">
                            <img className="w-[200px] h-[200px] rounded-[100%]" src={avatar} alt="avatar" />
                            <label htmlFor="avatarInput" className="cursor-pointer">
                                <div className="w-[60px] h-[60px] rounded-full bg-[#9F75D6] absolute right-0 bottom-0 flex justify-center items-center">
                                    <BiPencil size={35} />
                                </div>
                            </label>
                            <input
                                id="avatarInput"
                                className="hidden"
                                type="file"
                                accept="image/*"
                                onChange={handleAvatarChange}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );
}

export default MyProfile;