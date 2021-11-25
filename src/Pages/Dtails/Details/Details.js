import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
    const {productName} = useParams();
    const [product, setProduct] = useState({});

    useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/users/${productName}}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[]);

    return (
        <div>
            <h1>This is {productName}</h1>
           <Link to="/orderPlaced">
            <button className="btn btn-warning">Order Placed</button>
           </Link>
        </div>
    );
};

export default Details;