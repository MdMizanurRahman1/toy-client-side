import React from 'react';
import { Link } from 'react-router-dom';

const EmailMyToys = ({ index, myToy, handleDeleteButton }) => {
    const { _id, toyName, subCategory, price, availableQuantity } = myToy;

    return (
        <tr className='text-center'>
            <th>{index + 1}</th>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <td> <Link ><button className="btn btn-error">Update</button></Link></td>
            <td> <Link onClick={() => handleDeleteButton(_id)}><button className="btn btn-error">Delete</button></Link></td>
        </tr>
    );
};

export default EmailMyToys;
