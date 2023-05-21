import React from 'react';
import { Link } from 'react-router-dom';

const ToyTable = ({ index, allToy }) => {
    const { _id, toyName, subCategory, price, availableQuantity } = allToy;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <td> <Link to={`/toyDetails/${_id}`}><button className="btn btn-error">View Details</button></Link></td>
        </tr>
    );
};

export default ToyTable;