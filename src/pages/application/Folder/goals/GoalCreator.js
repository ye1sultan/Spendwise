import { useState } from 'react';

import { TbCurrencyTenge } from 'react-icons/tb';
import { AiOutlineClose, AiOutlineCar, AiOutlineGift, AiOutlineShoppingCart, AiOutlineCalendar } from 'react-icons/ai';
import { IoEarthOutline } from 'react-icons/io5';
import { BsBookmarks, BsCheck2, BsCheckSquare, BsFileEarmarkText } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';

const GoalCreator = (props) => {

    let modal = props.modal;
    let setModal = props.setModal;
    let goals = props.goals;
    let setGoals = props.setGoals;

    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [deadline, setDeadline] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);

    const [icon, setIcon] = useState('car');
    const [color, setColor] = useState('#19AD50');

    const [description, setDescription] = useState('');

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        const year = date.getFullYear();

        return `${month} ${day}, ${year}`;
    }

    const resetState = () => {
        setName('');
        setAmount(0);
        setTotalAmount(0);
        setDeadline('0');
        setIcon('car');
        setColor('#19AD50');
        setDescription('');
    }

    const saveGoal = () => {
        if (name && amount && totalAmount) {
            let obj = {
                name: name,
                deadline: formatDate(deadline),
                amount: amount,
                totalAmount: totalAmount,
                color: color,
                icon: icon,
                description: description,
            };

            if (amount <= totalAmount) {
                setGoals([...goals, obj]);
                setModal(false);
                resetState();
            }
        }
    }

    let inputStyle = 'w-full h-full text-[32px] font-normal text-[#696969] pl-[60px] border-b-[1px] border-[#696969]';

    return (
        <div className={`fixed top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-20 ${modal ? 'block' : 'hidden'}`}>
            <div className="w-[1200px] h-[900px] bg-white p-[50px] flex flex-col justify-between items-start  border-[1px] border-[#73737A] rounded-[60px]">
                <div className='w-full flex justify-between items-center'>
                    <div className="text-[48px] font-medium">
                        New Goal
                    </div>
                    <button onClick={
                        () => {
                            setModal(false)
                            resetState();
                        }
                    }>
                        <AiOutlineClose size={45} />
                    </button>
                </div>
                <div className="w-full flex flex-wrap justify-between items-center">
                    <div className="relative w-[500px] h-[70px]">
                        <input className={inputStyle} type="text" placeholder="Goal name" onChange={e => setName(e.target.value)} value={name}/>
                        <div className="absolute top-[50%] translate-y-[-50%] left-0">
                            <BsCheckSquare size={45} color="#696969" />
                        </div>
                    </div>
                    <div className="relative w-[500px] h-[70px]">
                        <input className={inputStyle} type="number" placeholder="Your current balance" onChange={e => setAmount(e.target.value)} value={amount} />
                        <div className="absolute top-[50%] translate-y-[-50%] left-0">
                            <TbCurrencyTenge size={45} color="#696969" />
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-wrap justify-between items-center">
                    <div className="relative w-[500px] h-[70px]">
                        <input className={inputStyle} type="date" placeholder="Deadline" onChange={e => setDeadline(e.target.value)} value={deadline}/>
                        <div className="absolute top-[50%] translate-y-[-50%] left-0">
                            <AiOutlineCalendar size={45} color="#696969" />
                        </div>
                    </div>
                    <div className="relative w-[500px] h-[70px]">
                        <input className={inputStyle} type="number" placeholder="Goal value" onChange={e => setTotalAmount(e.target.value)} value={totalAmount}/>
                        <div className="absolute top-[50%] translate-y-[-50%] left-0">
                            <TbCurrencyTenge size={45} color="#696969" />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex flex-col justify-center items-start w-[500px]'>
                        <div className='flex justify-center items-center mb-[50px]'>
                            <BsBookmarks size={45} color="#696969" />
                            <div className='ml-4 text-[32px] font-normal text-[#696969]'>
                                Icon
                            </div>
                        </div>
                        <div className='flex justify-between items-center mb-[45px]'>
                            <div className={`w-[80px] h-[80px] rounded-full flex justify-center items-center mr-[20px] cursor-pointer ${icon === 'car' ? 'bg-[#19AD50] bg-opacity-50' : 'bg-[#D9D9D9] bg-opacity-50'}`} onClick={() => setIcon('car')}>
                                <AiOutlineCar size={45} />
                            </div>
                            <div className={`w-[80px] h-[80px] rounded-full flex justify-center items-center mr-[20px] cursor-pointer ${icon === 'earth' ? 'bg-[#19AD50] bg-opacity-50' : 'bg-[#D9D9D9] bg-opacity-50'}`} onClick={() => setIcon('earth')}>
                                <IoEarthOutline size={45} />
                            </div>
                            <div className={`w-[80px] h-[80px] rounded-full flex justify-center items-center mr-[20px] cursor-pointer ${icon === 'cart' ? 'bg-[#19AD50] bg-opacity-50' : 'bg-[#D9D9D9] bg-opacity-50'}`} onClick={() => setIcon('cart')}>
                                <AiOutlineShoppingCart size={45} />
                            </div>
                            <div className={`w-[80px] h-[80px] rounded-full flex justify-center items-center mr-[20px] cursor-pointer ${icon === 'gift' ? 'bg-[#19AD50] bg-opacity-50' : 'bg-[#D9D9D9] bg-opacity-50'}`} onClick={() => setIcon('gift')}>
                                <AiOutlineGift size={45} />
                            </div>
                        </div>
                        <button className='w-[180px] h-[50px] bg-[#D9D9D9] rounded-[40px] uppercase text-black text-opacity-60 text-[24px] font-medium'>
                            See more
                        </button>
                    </div>
                    <div className='flex flex-col justify-center items-start w-[500px]'>
                        <div className='flex justify-center items-center mb-[50px]'>
                            <BiColorFill size={45} color="#696969" />
                            <div className='text-[32px] font-normal text-[#696969]'>
                                Color
                            </div>
                        </div>
                        <div className='flex justify-between items-center mb-[45px]'>
                            <div className='w-[80px] h-[80px] bg-[#19AD50] bg-opacity-50 rounded-full flex justify-center items-center mr-[20px] cursor-pointer' onClick={() => setColor('#19AD50')}> {color === '#19AD50' && <BsCheck2 size={45} color='#696969' />}
                            </div>
                            <div className='w-[80px] h-[80px] bg-[#E487D3] rounded-full flex justify-center items-center mr-[20px] cursor-pointer' onClick={() => setColor('#E487D3')}> {color === '#E487D3' && <BsCheck2 size={45} color='#696969' />}
                            </div>
                            <div className='w-[80px] h-[80px] bg-[#EDA2A7] rounded-full flex justify-center items-center mr-[20px] cursor-pointer' onClick={() => setColor('#EDA2A7')}> {color === '#EDA2A7' && <BsCheck2 size={45} color='#696969' />}
                            </div>
                            <div className='w-[80px] h-[80px] bg-[#F4C4A0] rounded-full flex justify-center items-center mr-[20px] cursor-pointer' onClick={() => setColor('#F4C4A0')}> {color === '#F4C4A0' && <BsCheck2 size={45} color='#696969' />}
                            </div>
                        </div>
                        <button className='w-[180px] h-[50px] bg-[#D9D9D9] rounded-[40px] uppercase text-black text-opacity-60 text-[24px] font-medium'>
                            See more
                        </button>
                    </div>
                </div>
                <div className="relative w-[500px] h-[70px]">
                    <input className="w-full h-full text-[32px] font-normal text-[#696969] pl-[60px] border-b-[1px] border-[#696969]" type="text" placeholder="Description" onChange={e => setDescription(e.target.value)} />
                    <div className="absolute top-[50%] translate-y-[-50%] left-0">
                        <BsFileEarmarkText size={45} color="#696969" />
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