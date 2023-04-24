import { AiOutlineClose } from 'react-icons/ai';

const EmailModal = (props) => {
    let modal = props.modal;
    let setModal = props.setModal;

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className={`fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[400px] rounded-[40px] bg-white border-[1px] border-[#696969] ${modal ? 'flex' : 'hidden'} flex-col justify-between items-start py-[20px] px-[30px]`} >
            <div className="flex justify-between items-center w-full mb-6">
                <div className="text-[22px] font-medium">
                    Change E-mail
                </div>
                <button onClick={() => setModal(false)}>
                    <AiOutlineClose size={25} />
                </button>
            </div>
            <form className="flex flex-col justify-between items-center w-full" onSubmit={handleSubmit}>
                <input className="w-full border-b-[1px] border-[#696969] pb-2 text-[20px] text-[#696969] mb-6" type="email" placeholder="New Email" required />
                <input className="w-full border-b-[1px] border-[#696969] pb-2 text-[20px] text-[#696969] mb-10" type="email" placeholder="Confirm Email" required />
                <input className="uppercase w-[210px] h-[40px] bg-[#9F75D6] bg-opacity-90 rounded-[50px] text-white text-[16px] " type="submit" value="save" />
            </form>
        </div>
    );
}

export default EmailModal;