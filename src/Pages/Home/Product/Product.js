import React from 'react';
import { Link } from 'react-router-dom';
import './product.css';

const Product = ({product}) => {
    const {name, img, description} = product;
    return (
        <div class="card">
        <img src={img} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{description}</p>
         <Link to={`/detail/${name}`}>
         <button class="btn btn-primary">Show Details</button>
         </Link>
        </div>
      </div>
    );
};

export default Product;