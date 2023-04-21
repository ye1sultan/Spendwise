import { BsTrashFill } from 'react-icons/bs';
import { BiPencil } from 'react-icons/bi';

const Transaction = ({ transaction, transactionDate, isLast, deleteTransaction, onEditClick }) => {
    const { category, description, payMethod, amount, type } = transaction;

    const handleEditClick = () => {
        onEditClick(transaction);
    };

    return (
        <div className={`w-full flex justify-around items-center mb-4 ${isLast ? '' : 'border-b'} border-black py-4`}>
            <div className="text-[22px] text-[#443A3A] font-medium w-1/6 text-center">{transactionDate}</div>
            <div className="text-[22px] text-[#443A3A] font-medium w-1/6 text-center">{category}</div>
            <div className="text-[22px] text-[#443A3A] font-medium w-1/6 text-center">{description}</div>
            <div className="text-[22px] text-[#443A3A] font-medium w-1/6 text-center">{payMethod}</div>
            <div className={`text-[22px] font-medium w-1/6 text-center ${type === "income" ? "text-green-500" : "text-red-500"}`}>{amount} ₸</div>
            <div className="flex space-x-4 w-1/6 justify-center">
                <button onClick={handleEditClick}>
                    <BiPencil size={30} color="#443A3A" />
                </button>
                <button onClick={() => deleteTransaction(transaction.id)}>
                    <BsTrashFill size={25} color="#443A3A" />
                </button>
            </div>
        </div>
    );
};

export default Transaction;