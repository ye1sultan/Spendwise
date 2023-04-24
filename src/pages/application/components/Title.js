const Title = (props) => {
    let title = props.title;

    return (
        <div className="flex justify-between w-full mb-[50px]">
            <div className="text-[48px] text-[#2c3e50] font-semibold">
                {title}
            </div>
        </div>
    );
}

export default Title;