import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateToy = () => {
    const { id } = useParams();
    const [toyData, setToyData] = useState({
        price: '',
        availableQuantity: '',
        detailDescription: '',
    });

    useEffect(() => {

        fetch(`http://localhost:5000/toys/${id}`)
            .then((res) => res.json())
            .then((data) => setToyData(data))
            .catch((error) => console.log(error));
    }, [id]);

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

        fetch(`http://localhost:5000/toys/${id}`, {
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
                    alert('Toy updated successfully.');
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
                defaultValue={toyData.price}
            />
            <input
                className="w-full p-2 mb-4 border rounded"
                name="quantity"
                type="number"
                placeholder="Available quantity"
                defaultValue={toyData.availableQuantity}
            />
            <textarea
                className="w-full p-2 mb-4 border rounded"
                name="detail"
                placeholder="Detail description"
                defaultValue={toyData.detailDescription}
            />
            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                Update A Toy
            </button>
        </form>
    );
};

export default UpdateToy;
