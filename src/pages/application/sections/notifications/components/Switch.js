const Switch = ({ onChange, checked, name, notif }) => {
    return (
        <>
            <div onClick={() => onChange(name)} className={`flex-shrink-0 w-[40px] lg:w-[60px] h-[20px] lg:h-[30px] ${checked ? 'bg-[#BFA2E5]' : 'bg-[#d0c6dd]'} rounded-full relative cursor-pointer`}>
                <div className={`absolute top-[50%] translate-y-[-50%] ${checked ? 'left-[100%] translate-x-[-100%]' : 'left-0'} w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] ${checked ? 'bg-[#8161a4]' : 'bg-[#bd9ae6]'} rounded-full transition-all ease-in`}></div>
            </div>
        </>
    );
}

export default Switch;