import { TbCurrencyTenge } from 'react-icons/tb';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const GoalCreator = (props) => {

    let modal = props.modal;
    let setModal = props.setModal;
    let goals = props.goals;

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [deadline, setDeadline] = useState('');
    const [totalAmount, setTotalAmount] = useState('');


    const [icon, setIcon] = useState('');
    const [color, setColor] = useState('');

    const [description, setDescription] = useState('');

    const saveGoal = () => {
        if (name) {
            let obj = {
                name: name,
                deadline: deadline,
                amount: amount,
                totalAmount: totalAmount,
                color: color
            }

            goals.push(obj);
            setModal(false);
        }
    }

    return (
        <div className={`fixed top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] ${modal ? 'block' : 'hidden'}`}>
            <div className="w-[1200px] h-[900px] bg-white p-[50px] flex flex-col justify-between items-start  border-[1px] border-[#73737A] rounded-[60px]">
                <div className='w-full flex justify-between items-center'>
                    <div className="text-[48px] font-medium">
                        New Goal
                    </div>
                    <button onClick={() => setModal(false)}>
                        <AiOutlineClose size={40} />
                    </button>
                </div>
                <div className="w-full flex flex-wrap justify-between items-center">
                    <div className="relative w-[500px] h-[70px]">
                        <input className="w-full h-full text-[32px] font-normal text-[#696969] pl-[60px] border-b-[1px] border-[#696969]" type="text" placeholder="Goal name" onChange={e => setName(e.target.value)} />
                        <div className="absolute top-[50%] translate-y-[-50%] left-0">
                            <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_206_5707)">
                                    <path d="M9.45312 30.7813V11.1719C9.45312 10.716 9.63421 10.2789 9.95653 9.95654C10.2789 9.63421 10.716 9.45312 11.1719 9.45312H43.8281C44.284 9.45312 44.7211 9.63421 45.0435 9.95654C45.3658 10.2789 45.5469 10.716 45.5469 11.1719V43.8281C45.5469 44.284 45.3658 44.7211 45.0435 45.0435C44.7211 45.3658 44.284 45.5469 43.8281 45.5469H29.1405" stroke="#343434" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M27.5 32.6562L13.75 46.4062L6.875 39.5312" stroke="#343434" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_206_5707">
                                        <rect width="55" height="55" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className="relative w-[500px] h-[70px]">
                        <input className="w-full h-full text-[32px] font-normal text-[#696969] pl-[60px] border-b-[1px] border-[#696969]" type="number" placeholder="Goal value" onChange={e => setAmount(e.target.value)} />
                        <div className="absolute top-[50%] translate-y-[-50%] left-0">
                            <TbCurrencyTenge size={45} color="#696969" />
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-wrap justify-between items-center">
                    <div className="relative w-[500px] h-[70px]">
                        <input className="w-full h-full text-[32px] font-normal text-[#696969] pl-[60px] border-b-[1px] border-[#696969]" type="date" placeholder="Deadline" onChange={e => setDeadline(e.target.value)} />
                        <div className="absolute top-[50%] translate-y-[-50%] left-0">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.35707 2.14282C4.40986 2.14282 3.50147 2.51911 2.83169 3.18886C2.16192 3.85864 1.78564 4.76704 1.78564 5.71425V39.6428C1.78564 40.59 2.16192 41.4985 2.83169 42.1682C3.50147 42.8378 4.40986 43.2142 5.35707 43.2142H44.6428C45.5899 43.2142 46.4985 42.8378 47.1681 42.1682C47.8378 41.4985 48.2142 40.59 48.2142 39.6428V5.71425C48.2142 4.76704 47.8378 3.85864 47.1681 3.18886C46.4985 2.51911 45.5899 2.14282 44.6428 2.14282H37.4999" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M1.78564 19.6428H48.2142" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.5 1.78577V12.5001" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M37.5 1.78577V12.5001" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.5 7.14282H30.3571" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="relative w-[500px] h-[70px]">
                        <input className="w-full h-full text-[32px] font-normal text-[#696969] pl-[60px] border-b-[1px] border-[#696969]" type="number" placeholder="Initial goal value" onChange={e => setTotalAmount(e.target.value)} />
                        <div className="absolute top-[50%] translate-y-[-50%] left-0">
                            <TbCurrencyTenge size={45} color="#696969" />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex flex-col justify-center items-start'>
                        <div className='flex justify-center items-center mb-[50px]'>
                            <svg className='mr-[30px]' width="40" height="52" viewBox="0 0 40 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.7144 51.0714L14.2144 39.5L0.714355 51.0714V16.3571C0.714355 15.3342 1.12073 14.3531 1.84409 13.6297C2.56744 12.9064 3.54852 12.5 4.5715 12.5H23.8572C24.8802 12.5 25.8613 12.9064 26.5846 13.6297C27.308 14.3531 27.7144 15.3342 27.7144 16.3571V51.0714Z" stroke="#000001" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.2856 0.928589H35.4285C36.4515 0.928589 37.4326 1.33497 38.1559 2.05832C38.8793 2.78167 39.2856 3.76275 39.2856 4.78573V39.5" stroke="#000001" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div className='text-[32px] font-normal text-[#696969]'>
                                Icon
                            </div>
                        </div>
                        <div className='flex justify-between items-center mb-[45px]'>
                            <div className='w-[80px] h-[80px] bg-[#19AD50] bg-opacity-50 rounded-full flex justify-center items-center mr-[20px]'>
                                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.7212 13.353H26.2767" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8.77734 21.5882H10.7218" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M26.2764 21.5882H28.2208" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M1 29.8235V16.2569C1 15.6994 1.10698 15.1474 1.31444 14.635L5.82319 3.49562C6.43601 1.98163 7.84199 1 9.39765 1H27.6023C29.1581 1 30.5639 1.98163 31.1768 3.49562L35.6856 14.635C35.8931 15.1474 36 15.6994 36 16.2569V29.8235M1 29.8235V34.7647C1 35.447 1.52234 36 2.16667 36H7.61111C8.25544 36 8.77778 35.447 8.77778 34.7647V29.8235M1 29.8235H8.77778M36 29.8235V34.7647C36 35.447 35.4777 36 34.8333 36H29.3889C28.7445 36 28.2222 35.447 28.2222 34.7647V29.8235M36 29.8235H28.2222M8.77778 29.8235H28.2222" stroke="black" stroke-width="2" />
                                </svg>
                            </div>
                            <div className='w-[80px] h-[80px] bg-[#D9D9D9] bg-opacity-50 rounded-full flex justify-center items-center mr-[20px]'>
                                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.5 36C28.1649 36 36 28.1649 36 18.5C36 8.83501 28.1649 1 18.5 1C8.83501 1 1 8.83501 1 18.5C1 28.1649 8.83501 36 18.5 36Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M1.875 19.375L11.5 22.875L9.75 29L11.5 34.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M27.25 33.375L26.375 29L22 27.25V21.125L27.25 19.375L35.125 20.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M30.75 7.125L29.875 9.75L23.75 10.625V15.875L28.125 14.125H31.625L35.125 15.875" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M1.875 15.875L6.25 12.375L10.625 11.5L14.125 6.25L12.375 2.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='w-[80px] h-[80px] bg-[#D9D9D9] bg-opacity-50 rounded-full flex justify-center items-center mr-[20px]'>
                                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M31.625 36C33.0747 36 34.25 34.8247 34.25 33.375C34.25 31.9253 33.0747 30.75 31.625 30.75C30.1753 30.75 29 31.9253 29 33.375C29 34.8247 30.1753 36 31.625 36Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M14.125 36C15.5747 36 16.75 34.8247 16.75 33.375C16.75 31.9253 15.5747 30.75 14.125 30.75C12.6752 30.75 11.5 31.9253 11.5 33.375C11.5 34.8247 12.6752 36 14.125 36Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.25 4.5H36L32.5 23.75H9.75L6.25 4.5ZM6.25 4.5C5.95833 3.33333 4.5 1 1 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M32.5 23.75H9.75H6.65385C3.53131 23.75 1.875 25.1171 1.875 27.25C1.875 29.3829 3.53131 30.75 6.65385 30.75H31.625" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='w-[80px] h-[80px] bg-[#D9D9D9] bg-opacity-50 rounded-full flex justify-center items-center mr-[20px]'>
                                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32.5 18.5V34.95C32.5 35.5299 32.0299 36 31.45 36H5.55C4.9701 36 4.5 35.5299 4.5 34.95V18.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M34.95 9.75H2.05C1.4701 9.75 1 10.2201 1 10.8V17.45C1 18.0299 1.4701 18.5 2.05 18.5H34.95C35.5299 18.5 36 18.0299 36 17.45V10.8C36 10.2201 35.5299 9.75 34.95 9.75Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M18.5 36V9.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M18.5 9.75H10.625C9.46468 9.75 8.35187 9.28907 7.5314 8.4686C6.71093 7.64813 6.25 6.53532 6.25 5.375C6.25 4.21468 6.71093 3.10187 7.5314 2.2814C8.35187 1.46093 9.46468 1 10.625 1C16.75 1 18.5 9.75 18.5 9.75Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M18.5 9.75H26.375C27.5352 9.75 28.6481 9.28907 29.4686 8.4686C30.289 7.64813 30.75 6.53532 30.75 5.375C30.75 4.21468 30.289 3.10187 29.4686 2.2814C28.6481 1.46093 27.5352 1 26.375 1C20.25 1 18.5 9.75 18.5 9.75Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <button className='w-[180px] h-[50px] bg-[#D9D9D9] rounded-[40px] uppercase text-black text-opacity-60 text-[24px] font-medium'>
                            See more
                        </button>
                    </div>
                    <div className='flex flex-col justify-center items-start'>
                        <div className='flex justify-center items-center mb-[50px]'>
                            <svg className='mr-[30px]' width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_224_1457)">
                                    <path d="M16.0312 23.625C20.2252 23.625 23.625 20.2252 23.625 16.0312C23.625 11.8373 20.2252 8.4375 16.0312 8.4375C11.8373 8.4375 8.4375 11.8373 8.4375 16.0312C8.4375 20.2252 11.8373 23.625 16.0312 23.625Z" stroke="#4D4C4C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M37.9688 23.625C42.1627 23.625 45.5625 20.2252 45.5625 16.0312C45.5625 11.8373 42.1627 8.4375 37.9688 8.4375C33.7748 8.4375 30.375 11.8373 30.375 16.0312C30.375 20.2252 33.7748 23.625 37.9688 23.625Z" stroke="#4D4C4C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.0312 45.5625C20.2252 45.5625 23.625 42.1627 23.625 37.9688C23.625 33.7748 20.2252 30.375 16.0312 30.375C11.8373 30.375 8.4375 33.7748 8.4375 37.9688C8.4375 42.1627 11.8373 45.5625 16.0312 45.5625Z" stroke="#4D4C4C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M37.9688 32.0625V43.875" stroke="#4D4C4C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M43.875 37.9688H32.0625" stroke="#4D4C4C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_224_1457">
                                        <rect width="54" height="54" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <div className='text-[32px] font-normal text-[#696969]'>
                                Color
                            </div>
                        </div>
                        <div className='flex justify-between items-center mb-[45px]'>
                            <div className='w-[80px] h-[80px] bg-[#19AD50] bg-opacity-50 rounded-full flex justify-center items-center mr-[20px]'>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M41.6663 12.5L18.7497 35.4167L8.33301 25" stroke="#381C46" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className='w-[80px] h-[80px] bg-[#E487D3] rounded-full flex justify-center items-center mr-[20px]'></div>
                            <div className='w-[80px] h-[80px] bg-[#EDA2A7] rounded-full flex justify-center items-center mr-[20px]'></div>
                            <div className='w-[80px] h-[80px] bg-[#F4C4A0] rounded-full flex justify-center items-center mr-[20px]'></div>
                        </div>
                        <button className='w-[180px] h-[50px] bg-[#D9D9D9] rounded-[40px] uppercase text-black text-opacity-60 text-[24px] font-medium'>
                            See more
                        </button>
                    </div>
                </div>
                <div className="relative w-[500px] h-[70px]">
                    <input className="w-full h-full text-[32px] font-normal text-[#696969] pl-[60px] border-b-[1px] border-[#696969]" type="text" placeholder="Description" onChange={e => setDescription(e.target.value)} />
                    <div className="absolute top-[50%] translate-y-[-50%] left-0">
                        <svg width="44" height="52" viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M43.2142 47.2143C43.2142 48.2373 42.8078 49.2184 42.0845 49.9417C41.3611 50.6651 40.38 51.0714 39.3571 51.0714H4.64279C3.61981 51.0714 2.63873 50.6651 1.91538 49.9417C1.19202 49.2184 0.785645 48.2373 0.785645 47.2143V4.78573C0.785645 3.76275 1.19202 2.78167 1.91538 2.05832C2.63873 1.33497 3.61981 0.928589 4.64279 0.928589H23.9285L43.2142 20.2143V47.2143Z" stroke="#000001" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M23.9287 0.928589V20.2143H43.2144" stroke="#000001" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <button className='w-[220px] h-[65px] bg-[#BFA2E5] rounded-[40px] text-[32px] font-medium text-[#381C46] uppercase self-end' onClick={saveGoal}>
                    save
                </button>
            </div>
        </div>
    );
}

export default GoalCreator;