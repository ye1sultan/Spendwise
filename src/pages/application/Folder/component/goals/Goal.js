import React from 'react';
import { AiFillDelete, AiOutlineCar, AiOutlineGift, AiOutlineShoppingCart } from 'react-icons/ai';
import { IoEarthOutline } from 'react-icons/io5';
import { BsCheckAll, BsFillPauseFill } from 'react-icons/bs';

const Goal = ({ name, icon, deadline, totalAmount, amount, color, index, onDelete, onPause, onReach }) => {
    const getPercent = (amount, totalAmount) => {
        let res = parseFloat(((amount / totalAmount) * 100).toFixed(2));
        return (res);
    }

    let progress = getPercent(amount, totalAmount);

    const getIconComponent = (iconName) => {
        switch (iconName) {
            case "car":
                return <AiOutlineCar size={30} />;
            case "earth":
                return <IoEarthOutline size={30} />;
            case "cart":
                return <AiOutlineShoppingCart size={30} />;
            case "gift":
                return <AiOutlineGift size={30} />;
            default:
                return null;
        }
    }

    const handleDelete = () => {
        onDelete(index);
    }

    const handlePause = () => {
        onPause(index);
    }

    const handleReach = () => {
        onReach(index);
    }

    const classNames = {
        goalWrapper: 'w-[530px] h-[315px] bg-white rounded-[40px] border-[1px] border-[#CED4DA] m-[30px] p-[30px] flex flex-col justify-between items-start',
        iconContainer: 'w-[50px] h-[50px] bg-opacity-50 rounded-full flex justify-center items-center mr-[20px]',
        titleText: 'text-[25px] font-medium text-[#4E4949]',
        dateWrapper: 'w-full flex justify-between items-center',
        labelText: 'text-[20px] font-medium text-[#979393]',
        deadlineText: 'text-[25px] font-medium text-[#4E4949]',
        progressText: 'text-[36px] font-medium',
        progressBarContainer: 'w-full h-[20px] bg-[#EEECEC] rounded-[10px]',
        progressBar: 'h-full rounded-[10px]',
        progressAmountText: 'text-[16px] font-semibold text-[#696969]',
        actionButtonsWrapper: 'w-full flex justify-end items-center',
        deleteButton: 'w-[35px] h-[35px] text-[#474448]',
        checkButton: 'w-[35px] h-[35px] text-[#474448]',
    };

    const iconComponent = getIconComponent(icon);
    return (
        <div className={classNames.goalWrapper}>
            <div className="flex justify-start items-center w-full">
                <div className={`${classNames.iconContainer}`} style={{ backgroundColor: color }}>
                    {iconComponent}
                </div>
                <div className={classNames.titleText}>
                    {name}
                </div>
            </div>
            <div className={classNames.dateWrapper}>
                <div>
                    <div className={classNames.labelText}>
                        Till
                    </div>
                    <div className={classNames.deadlineText}>
                        {deadline}
                    </div>
                </div>
                <div className={classNames.progressText}>
                    {progress + " %"}
                </div>
            </div>
            <div className={classNames.progressBarContainer}>
                <div className={`${classNames.progressBar}`} style={{ width: progress + "%", backgroundColor: color }}></div>
            </div>
            <div className={classNames.progressAmountText}>
                {`₸ ${amount} / ₸ ${totalAmount}`}
            </div>
            <div className={classNames.actionButtonsWrapper}>
                <button className={classNames.deleteButton} onClick={handlePause}>
                    <BsFillPauseFill size={30} />
                </button>
                <button className={classNames.deleteButton} onClick={handleDelete}>
                    <AiFillDelete size={30} />
                </button>
                <button className={classNames.checkButton} onClick={handleReach}>
                    <BsCheckAll size={35} />
                </button>
            </div>
        </div>
    );
}

export default Goal;
