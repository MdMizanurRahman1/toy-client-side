import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useTitle from '../hooks/useTitle';
import Swal from 'sweetalert2';

// add a toy is in this page. mainly create page


const ToyPage = () => {
    useTitle('Add A Toy')

    const { user } = useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.name.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.quantity.value;
        const detailDescription = form.detail.value;
        const image = form.photo.value;

        const toyData = {
            image,
            toyName,
            subCategory,
            price,
            rating,
            availableQuantity,
            detailDescription,
            sellerEmail: user.email
        };

        fetch('https://toy-server-site-theta.vercel.app/addToy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(toyData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire(' Added successfully!')
                }
            });
    };


    return (
        <div className=' bg-red-50 py-24'>
            <h2 className='font-bold text-center py-5 '>Add Toy Info Here</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto ">
                <input className="w-full p-2 mb-4 border rounded" name="photo" type="text" placeholder="Picture URL" />
                <input className="w-full p-2 mb-4 border rounded" name="name" type="text" placeholder="Name" />

                <select className="w-full p-2 mb-4 border rounded" name="subCategory" defaultValue="" required>
                    <option value="" disabled hidden>
                        Select Sub-category
                    </option>
                    <option value="Racing Car">Racing Car</option>
                    <option value="Mini Police Car">Mini Police Car</option>
                    <option value="Regular Car">Regular Car</option>
                </select>
                <input className="w-full p-2 mb-4 border rounded" name="price" type="number" placeholder="Price" />
                <input className="w-full p-2 mb-4 border rounded" name="rating" type="number" placeholder="Rating" />
                <input className="w-full p-2 mb-4 border rounded" name="quantity" type="number" placeholder="Available quantity" />
                <textarea className="w-full p-2 mb-4 border rounded" name="detail" placeholder="Detail description" />
                <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                    Add A Toy
                </button>
            </form>
        </div>
    );
};

export default ToyPage;
