import { BsChevronDown } from 'react-icons/bs';

const Title = (props) => {
    let title = props.title;

    return (
        <div className="flex justify-between w-full mb-[50px]">
            <div className="text-[48px] font-semibold">
                {title}
            </div>
            <button className={`${title === 'Dashboard' ? 'flex' : 'hidden'} justify-around items-center w-[180px] h-[40px] bg-[#B8C9F5] bg-opacity-20 border-[1px] border-[#AEAEAE] border-opacity-40 rounded-full text-[23px] font-medium`}>
                March
                <BsChevronDown />
            </button>
        </div>
    );
}

export default Title;