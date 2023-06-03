import { useState } from "react";
import { BiPencil } from "react-icons/bi";
import { updateUser } from "../../../../services/api";

const MyProfile = () => {
    const data = JSON.parse(sessionStorage.getItem('userData'));

    const [editedName, setEditedName] = useState(data.name ?? '');
    const [editedAvatar, setEditedAvatar] = useState(data.avatar ?? '');
    const [buttonColor, setButtonColor] = useState("#AEAEAE");

    const avt = false;

    const handleClick = async () => {
        let obj = {
            name: editedName,
            email: data.email,
            password: sessionStorage.getItem("pwd"),
            avatar: data.avatar,
        };

        try {
            const updatedUser = await updateUser(data.id, obj);
            setEditedName(updatedUser.name);
            setEditedAvatar(updatedUser.avatar);

            let updatedData = { ...data, name: updatedUser.name };
            sessionStorage.setItem('userData', JSON.stringify(updatedData));

            setButtonColor("#AEAEAE");
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    const handleAvatarChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setEditedAvatar(e.target.result);
                setButtonColor("#9F75D6");
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleNameChange = (e) => {
        setEditedName(e.target.value);
        setButtonColor("#9F75D6");
    }

    return (
        <div className="self-start w-[970px] bg-white rounded-[30px] px-[45px] py-[25px] flex justify-center items-center">
            <div className="w-full">
                <div className="text-[40px] font-medium mb-8">
                    Account Details
                </div>
                <div className="flex flex-row justify-center items-start">
                    <div className="flex flex-col justify-center items-start">
                        <label className="text-[24px] font-medium mb-[10px]">Name</label>
                        <input
                            className="w-[490px] h-[50px] border-b-[1px] border-[#000] mb-[35px] text-[24px] font-medium"
                            type="text"
                            placeholder="Your name"
                            value={editedName}
                            onChange={(e) => handleNameChange(e)}
                            required />
                        <label className="text-[24px] font-medium mb-[10px]">Email</label>
                        <input
                            className="w-[490px] h-[50px] border-b-[1px] border-[#000] mb-[35px] text-[24px] text-[#a0a0a0] font-medium cursor-not-allowed"
                            type="email"
                            placeholder="Your email"
                            value={data.email}
                            readOnly />
                        <input
                            onClick={() => handleClick()}
                            className={`w-[340px] h-[50px] rounded-[30px]
                             ${buttonColor === "#9F75D6" ? "bg-[#9F75D6] cursor-pointer text-white" : "bg-[#aeaeae] text-black bg-opacity-30 cursor-not-allowed"}
                             mt-[70px] text-[16px] font-medium uppercase`}
                            type="button"
                            value="Update your information"
                        />
                    </div>
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="w-[200px] h-[200px] relative">
                            {
                                avt
                                    ?
                                    <img className="w-[200px] h-[200px] rounded-full" src={editedAvatar} alt="avatar" />
                                    :
                                    <div className='rounded-full bg-blue-200 flex justify-center items-center w-[30px] h-[30px] 2xl:w-full 2xl:h-full text-[64px] font-medium'>
                                        {(editedName.charAt(0)) || ''}
                                    </div>
                            }
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
                </div>
            </div>
        </div >
    );
}

export default MyProfile;