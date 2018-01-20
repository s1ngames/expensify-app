import React from 'react';
import { Link } from 'react-router-dom';



const Item = ({ id, description, amount, createAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
        </Link>
        <p>{amount}-{createAt}</p>

    </div>
);

//return what we want


export default Item;