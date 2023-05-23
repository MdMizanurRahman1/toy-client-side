import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import EmailMyToys from './EmailMyToys';
import useTitle from '../hooks/useTitle';

// to get/upload email data

const MyToys = () => {
    useTitle('My Toys')
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`https://toy-server-site-theta.vercel.app/myToys/${user?.email}`)
                .then((res) => res.json())
                .then((data) => setMyToys(data))
                .catch((error) => console.log(error));
        }
    }, [user]);

    // delete method is here

    const handleDeleteButton = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete?');
        if (confirmDelete) {
            fetch(`https://toy-server-site-theta.vercel.app/myToys/${id}`, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Your toy car has been deleted successfully.');
                        const remainingToys = myToys.filter((toy) => toy._id !== id);
                        setMyToys(remainingToys);
                    }
                })
                .catch((error) => console.log(error));
        }
    };

    return (
        <div className="overflow-x-auto my-32">
            <table className="table w-4/5 mx-auto">
                <thead>
                    <tr>
                        <th className="text-center">No.</th>
                        <th className="text-center">Toy Name</th>
                        <th className="text-center">Sub-category</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Available Quantity</th>
                        <th className="text-center">Update</th>
                        <th className="text-center">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {myToys.map((myToy, index) => (
                        <EmailMyToys
                            key={myToy._id}
                            index={index}
                            myToy={myToy}
                            handleDeleteButton={handleDeleteButton}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;


