import facade from "./apiFacade";
import React, { useState, useEffect } from "react";
import Product from "./product";

const Category = () => {
    const [categoryData, setCategoryData] = useState("");



    useEffect(() => {
        
        facade.fetchProductsData().then((data) => setCategoryData(data.products));
    }, []);

    return (
        <div>
            {
                categoryData && categoryData.map((category, i) => {
                    return (
                        <div key={i}>
                            <div>
                    <h1>{category.sku}</h1>
                    <h1>{category.name}</h1>
                    <h1>{category.type}</h1>
                    <h1>{category.regularPrice}</h1>
                    <h1>{category.salePrice}</h1>
                    <h1>{category.url}</h1>
                    <h1>{category.mobileUrl}</h1>
                    <img src={category.image}></img>
                    <h1>{category.onSale}</h1>

                            
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );

    };  

export default Category;










//     var x, i = "";
//for (i in data.products) {
  //  setCategoryData("<h3>" + data.products[i].name + "</h3>")
//}