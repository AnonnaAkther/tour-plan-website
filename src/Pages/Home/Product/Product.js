import React from 'react';
import './product.css';

const Product = ({product}) => {
    const {name, img, description} = product;
    return (
        <div class="card">
        <img src={img} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{description}</p>
          <button class="btn btn-primary">Details</button>
        </div>
      </div>
    );
};

export default Product;