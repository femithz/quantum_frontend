import  { useState } from 'react';
import axios from 'axios';
import {  toast } from 'react-toastify';

const ItemModal = ({ isOpen, onClose, onItemAdded }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/v1/items', { name, price });
            toast.success(`${response.data.msg}`);
            onItemAdded(response.data.data);
            onClose();
        } catch (error) {
            onItemAdded(error.errorMsg);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-4 rounded-lg shadow-md w-1/3">
                <h2 className="text-2xl font-bold mb-4">Add New Item</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Item Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Price</label>
                        <input
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="mr-4 px-4 py-2 bg-gray-300 rounded"
                        >
                            Cancel
                        </button>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                            Add Item
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ItemModal;
