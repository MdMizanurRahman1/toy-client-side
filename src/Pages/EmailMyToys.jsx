import React from 'react';
import { Link } from 'react-router-dom';

//to get some data by email and show the tabile

const EmailMyToys = ({ index, myToy, handleDeleteButton }) => {
    const { _id, toyName, subCategory, price, availableQuantity } = myToy;

    return (
        <tr className="text-center">
            <th>{index + 1}</th>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <td>
                <Link to={`/myToys/${_id}`}>
                    <button className="btn btn-error">
                        Update
                    </button>
                </Link>
            </td>
            <td>
                <button onClick={() => handleDeleteButton(_id)} className="btn btn-error">
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default EmailMyToys;
