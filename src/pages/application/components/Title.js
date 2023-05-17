const Title = (props) => {
    let title = props.title;

    return (
        <div className="flex justify-between w-full mb-4 sm:mb-6 md:mb-8 lg:mb-12 xl:mb-[50px]">
            <div className="text-2xl lg:text-3xl xl:text-[40px] 2xl:text-[48px] font-semibold">
                {title}
            </div>
        </div>
    );
}

export default Title;
