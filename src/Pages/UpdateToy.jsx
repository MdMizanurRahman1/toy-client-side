import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import Swal from 'sweetalert2';

// update method is here

const UpdateToy = () => {
    useTitle('Update A Toy')
    const updateToy = useLoaderData();
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

        fetch(`https://toy-server-site-theta.vercel.app/toys/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedToyData),
        })
            .then((res) => res.json())
            .then((data) => {

                if (data.modifiedCount > 0) {
                    Swal.fire(' Updated information successfully!')
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
