import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyTable from './ToyTable';

const AllToys = () => {
    const allToys = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredToys = allToys.filter((toy) =>
        toy.toyName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="my-20">
            <div className="overflow-x-auto">
                <h3 className='text-center text-2xl text-red-300'>Search here</h3>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search by Toy Name"
                    className='flex justify-center mx-auto my-10'
                />
                <table className="table w-3/4 mx-auto">
                    <thead>
                        <tr>
                            <th className="text-center">No.</th>
                            <th className="text-center">Toy Name</th>
                            <th className="text-center">Sub-category</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Available Quantity</th>
                            <th className="text-center">Button</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {filteredToys.map((toy, index) => (
                            <ToyTable key={toy._id} allToy={toy} index={index} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;
