import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import './products.css';


const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div>
            <h1 className="text-warning">__Our Tourism__</h1>
            <div className="product-container">
           {
               products.map(product => <Product
               product={product}
               ></Product>)
           }
        </div>
        </div>
    );
};

export default Products;