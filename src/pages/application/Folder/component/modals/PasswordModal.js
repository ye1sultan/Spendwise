import { AiOutlineClose } from 'react-icons/ai';

const PasswordModal = (props) => {
    let modal = props.modal;
    let setModal = props.setModal;

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className={`fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[400px] h-[400px] rounded-[40px] bg-white border-[1px] border-[#696969] ${modal ? 'flex' : 'hidden'} flex-col justify-between items-start py-[20px] px-[30px]`} >
            <div className="flex justify-between items-center w-full">
                <div className="text-[22px] font-medium">
                    Change Password
                </div>
                <button onClick={() => setModal(false)}>
                    <AiOutlineClose size={25} />
                </button>
            </div>
            <form className="flex flex-col justify-evenly items-center w-full h-full" onSubmit={handleSubmit}>
                <input className="w-full border-b-[1px] border-[#696969] pb-2 text-[20px] text-[#696969]" type="password" placeholder="Current Password" required />
                <input className="w-full border-b-[1px] border-[#696969] pb-2 text-[20px] text-[#696969]" type="password" placeholder="New Password" required />
                <input className="w-full border-b-[1px] border-[#696969] pb-2 text-[20px] text-[#696969]" type="password" placeholder="Confirm Password" required />
                <input className="uppercase w-[210px] h-[40px] bg-[#9F75D6] bg-opacity-90 rounded-[50px] text-white text-[16px] " type="submit" value="save" />
            </form>
        </div>
    );
}

export default PasswordModal;