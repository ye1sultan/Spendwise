const Title = (props) => {
    let title = props.title;

    return (
        <div className="flex justify-between w-full">
            <div className="text-xl md:text-2xl lg:text-3xl xl:text-[40px] 2xl:text-[48px] font-semibold">
                {title}
            </div>
        </div>
    );
}

export default Title;
