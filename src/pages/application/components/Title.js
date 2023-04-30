const Title = (props) => {
    let title = props.title;

    return (
        <div className="flex justify-between w-full mb-[20px] 2xl:mb-[50px]">
            <div className="text-[20px] 2xl:text-[48px] text-[#2c3e50] font-semibold">
                {title}
            </div>
        </div>
    );
}

export default Title;