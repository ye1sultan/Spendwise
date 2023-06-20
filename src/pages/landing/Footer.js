import FullLogo from "../assets/FullLogo.png";
import Logo from "../assets/Logo.png";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <div id="support" className="bg-[#ffffff] w-full h-screen 2xl:h-auto flex flex-col justify-start 2xl:justify-center items-center pt-[40px] pb-[20px] relative">
            <img className="w-[230px] mb-[50px]" src={FullLogo} alt="Logo" />
            <div className="font-montserrat italic text-[18px] text-center mb-[30px]">
                Follow us to get support and lots of great ideas on <br className="hidden 2xl:block"></br>budgeting.
            </div>
            <div className="w-full flex justify-center items-center">
                <a href="https://t.me/ye1ssss"><FaTelegramPlane className="text-[26px] mr-6" /></a>
                <a href="https://www.instagram.com/yels667/"><FaInstagram className="text-[26px]" /></a>
            </div>
            <div className="max-w-[580px] w-full h-[50px] bg-[#BFA2E5] bg-opacity-80 hidden 2xl:block absolute bottom-0 left-0 rounded-tr-full"></div>
            <div className="max-w-[580px] w-full h-[50px] bg-[#BFA2E5] bg-opacity-80 hidden 2xl:block absolute bottom-0 right-0 rounded-tl-full"></div>
        </div>
    );
}

export default Footer;