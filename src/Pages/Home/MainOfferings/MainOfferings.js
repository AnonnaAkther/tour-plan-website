import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import './MainOfferings.css';


const MainOfferings = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/tour')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div id="tourism">
            <h1 className="text-warning mt-5">__Our MainOffer__</h1>
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

export default MainOfferings;