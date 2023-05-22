import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import EmailMyToys from './EmailMyToys';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setMyToys(data));
    }, [user]);








    const handleDeleteButton = (id) => {
        const confirmDelete = confirm('Are you sure, you want to delete?')
        if (confirmDelete) {
            fetch(`http://localhost:5000/myToys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Your toy car is deleted successfully');
                        const remainingToys = myToys.filter((toy => toy._id !== id))
                        setMyToys(remainingToys);
                    }
                })
        }

    }
    return (
        <div className="overflow-x-auto my-32">
            <table className="table w-4/5 mx-auto">
                <thead>
                    <tr>
                        <th className='text-center'>No.</th>
                        <th className='text-center'>Toy Name</th>
                        <th className='text-center'>Sub-category</th>
                        <th className='text-center'>Price</th>
                        <th className='text-center'>Available Quantity</th>
                        <th className='text-center'>Update</th>
                        <th className='text-center'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {myToys?.map((myToy, index) => (
                        <EmailMyToys key={myToy._id} myToy={myToy} index={index} handleDeleteButton={handleDeleteButton} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;


