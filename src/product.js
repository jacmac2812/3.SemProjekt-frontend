import facade from "./apiFacade";
import React, { useState, useEffect } from "react";


const Product = () => {
    const [productData, setProductData] = useState("");

    useEffect(() => {
        facade.fetchProductData().then((data) => setProductData(data));
    }, []);

    //<a href={productData.mobileUrl}>Køb her</a>  
    return (
        <div>
            <h2>Product</h2>
            <h3>{productData.sku}</h3>
            <h3>{productData.name}</h3>
            <h3>{productData.type}</h3>
            <h3>{productData.regularPrice}</h3>
            <h3>{productData.salePrice}</h3>
            <a href={productData.url}>Køb her</a>
            <img src={productData.image}></img>
            <h3>{productData.shortDesription}</h3>
            <h3>{productData.onSale}</h3>

        </div>
    );
};



export default Product;
