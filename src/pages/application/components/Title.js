const Title = (props) => {
    let title = props.title;

    let mode = localStorage.getItem("mode");
    
    return (
        <div className="flex justify-between w-full mb-4 sm:mb-6 md:mb-8 lg:mb-12 xl:mb-[50px]">
            <div className={`${mode === "Light Mode" ? 'text-[#2c3e50]' : 'text-white'} text-2xl lg:text-3xl xl:text-[40px] 2xl:text-[48px] font-semibold capitalize`}>
                {title}
            </div>
        </div>
    );
}

export default Title;
