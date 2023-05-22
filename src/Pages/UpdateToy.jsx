import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';


const UpdateToy = () => {

    const updateToy = useLoaderData();
    console.log(updateToy);
    const { _id, detailDescription, availableQuantity, price, } = updateToy;

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const availableQuantity = form.quantity.value;
        const detailDescription = form.detail.value;

        const updatedToyData = {
            price,
            availableQuantity,
            detailDescription,
        };

        fetch(`http://localhost:5000/toys/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedToyData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success("update toy information successfully")
                }
            })
            .catch((error) => console.log(error));
    };

    return (
        <form onSubmit={handleUpdate} className="max-w-md mx-auto my-24">
            <input
                className="w-full p-2 mb-4 border rounded"
                name="price"
                type="number"
                placeholder="Price"
                defaultValue={price}
            />
            <input
                className="w-full p-2 mb-4 border rounded"
                name="quantity"
                type="number"
                placeholder="Available quantity"
                defaultValue={availableQuantity}
            />
            <textarea
                className="w-full p-2 mb-4 border rounded"
                name="detail"
                placeholder="Detail description"
                defaultValue={detailDescription}
            />
            <button type="submit" value="update" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                Update A Toy
            </button>
        </form>
    );
};

export default UpdateToy;
