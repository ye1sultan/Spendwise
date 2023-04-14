const Preferences = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="self-start w-[80%] h-[485px] bg-white rounded-[30px] border-[1px] border-[#AEAEAE] py-[65px] px-[55px]">
            <form className="flex flex-col h-full w-full justify-center items-center" onSubmit={handleSubmit}>
                <div className="w-full h-full flex justify-between items-start">
                    <div className="flex flex-col justify-center items-center w-[475px]">
                        <label className="self-start text-[24px] text-[#696969] font-medium mb-2">Language</label>
                        <select className="w-full text-[24px] font-medium border-b-[1px] border-[#000] py-2">
                            <option>English</option>
                            <option>Russian</option>
                            <option>Kazakh</option>
                        </select>
                    </div>
                    <div className="flex flex-col justify-center items-center w-[475px]">
                        <label className="self-start text-[24px] text-[#696969] font-medium mb-2">Appearence</label>
                        <select className="w-full text-[24px] font-medium border-b-[1px] border-[#000] py-2">
                            <option>Light Mode</option>
                            <option>Dark Mode</option>
                        </select>
                    </div>
                </div>
                <input className="uppercase w-[220px] h-[45px] rounded-[30px] text-white text-[18px] font-medium bg-[#9F75D6] bg-opacity-90" type="submit" value="Save changes"/>
            </form>
        </div>
    );
}

export default Preferences;