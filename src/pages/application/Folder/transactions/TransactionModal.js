// TransactionModal.js
import React from 'react';

const TransactionModal = ({ transaction, onSave, onCancel }) => {
    const [editedTransaction, setEditedTransaction] = React.useState(transaction);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditedTransaction({ ...editedTransaction, [name]: value });
    };

    const handleSave = () => {
        onSave(editedTransaction);
    };

    return (
        <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white border-[1px] border-[#AEAEAE] w-[600px] p-4 rounded-[40px] shadow-md">
            <h3 className="text-[26px] text-[#000000] font-semibold mb-4">Edit Transaction</h3>
            <label className="block">
                <span className="text-[18px] font-medium">Date</span>
                <input
                    className="px-4 block w-full h-[50px] border-b-[1px] border-[#000000] text-[18px]"
                    type="date"
                    name="date"
                    onChange={handleChange}
                />
            </label>
            <label className="block mt-4">
                <span className="text-[18px] font-medium">Category</span>
                <input
                    className="px-4 block w-full h-[50px] border-b-[1px] border-[#000000] text-[18px]"
                    type="text"
                    name="category"
                    value={editedTransaction.category}
                    onChange={handleChange}
                />
            </label>
            <label className="block mt-4">
                <span className="text-[18px] font-medium">Description</span>
                <input
                    className="px-4 block w-full h-[50px] border-b-[1px] border-[#000000] text-[18px]"
                    type="text"
                    name="description"
                    value={editedTransaction.description}
                    onChange={handleChange}
                />
            </label>
            <label className="block mt-4">
                <span className="text-[18px] font-medium">Payment Method</span>
                <input
                    className="px-4 block w-full h-[50px] border-b-[1px] border-[#000000] text-[18px]"
                    type="text"
                    name="payMethod"
                    value={editedTransaction.payMethod}
                    onChange={handleChange}
                />
            </label>
            <label className="block mt-4">
                <span className="text-[18px] font-medium">Amount</span>
                <input
                    className="px-4 block w-full h-[50px] border-b-[1px] border-[#000000] text-[18px]"
                    type="number"
                    name="amount"
                    value={editedTransaction.amount}
                    onChange={handleChange}
                />
            </label>
            <div className="mt-4 flex justify-end">
                <button className="uppercase px-4 py-2 bg-[#BFA2E5]  text-[#000000] rounded-[15px] text-[18px] mr-4" onClick={handleSave}>
                    Save
                </button>
                <button className="uppercase px-4 py-2 bg-[#E3E3E3] text-[#000000] rounded-[15px] text-[18px]" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default TransactionModal;