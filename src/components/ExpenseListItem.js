import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const Item = ({ id, description, amount, createAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{`₪ ${amount / 100}`}
            -
        {moment(createAt).format('DD/MM/YYYY')}</p>

    </div>
);

//return what we want


export default Item;