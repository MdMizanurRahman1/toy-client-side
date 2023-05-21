import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyTable from './ToyTable';

const AllToys = () => {
    const allToys = useLoaderData();


    return (
        <div className='my-20'>
            <div className="overflow-x-auto">
                <table className="table w-3/4 mx-auto">
                    <thead >
                        <tr>
                            <th className='text-center'>No.</th>
                            <th className='text-center'>Toy Name</th>
                            <th className='text-center'>Sub-category</th>
                            <th className='text-center'>Price</th>
                            <th className='text-center'>Available Quantity</th>
                            <th className='text-center'>Button</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            allToys.map((allToy, index) => <ToyTable
                                key={allToy._id}
                                allToy={allToy}
                                index={index}
                            ></ToyTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;







