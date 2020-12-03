import facade from "./apiFacade";
import React, { useState, useEffect } from "react";
import "./style.css";

const Category = () => {
    const [categoryData, setCategoryData] = useState("");

    function categoryId(id) {
        facade.fetchCategoriesData(id).then((data) => setCategoryData(data.products));
    }
    function filterPriceLow(data){
        const filterData = [...data].sort(function(a,b){
            return a.salePrice - b.salePrice;
        })
        setCategoryData(filterData)
    }
    function filterPriceHigh(data){
        const filterData = [...data].sort(function(a,b){
            return b.salePrice - a.salePrice;
        })
        setCategoryData(filterData)
    }
    //<a href={category.mobileUrl}>Køb her</a>
    return (
        <div>
            <button onClick={() => categoryId('abcat0101000')}>TVs</button>
            <button onClick={() => categoryId('abcat0102000')}>Blu-ray & DVD Players</button>
            <button onClick={() => categoryId('abcat0106021')}>Gaming Chairs</button>
            <button onClick={() => categoryId('abcat0200000')}>Audio</button>
            <button onClick={() => categoryId('abcat0201000')}>iPod & MP3 Players</button>
            <button onClick={() => categoryId('abcat0204000')}>Headphones</button>
            <button onClick={() => categoryId('abcat0205000')}>Speakers</button>
            <button onClick={() => categoryId('abcat0300000')}>Car Electronics & GPS</button>
            <button onClick={() => categoryId('abcat0305000')}>Radar Detectors</button>
            <button onClick={() => categoryId('abcat0301005')}>Marine GPS & Fishfinders</button>

            {categoryData && <button onClick={() => filterPriceLow(categoryData)}>Sort by sale price lowest</button>}
            {categoryData && <button onClick={() => filterPriceHigh(categoryData)}>Sort by sale price highest</button>}

            {
                categoryData && categoryData.map((category, i) => {
                    return (
                        <div key={i}>
                                <table>
                                    <tr>
                                        <th rowspan="7"><img src={category.image}></img></th>
                                        <td><b>{category.name}</b></td>
                                    </tr>
                                    <tr>
                                    <td>ID: {category.sku}</td>
                                    </tr>
                                    <tr>
                                        <td>{category.type}</td>
                                    </tr>
                                    <tr>
                                        <td>${category.regularPrice}</td>
                                    </tr>
                                    <tr>
                                        <td>${category.salePrice}</td>
                                    </tr>
                                    <tr>
                                        <td><a href={category.url}><b>Buy Here</b></a></td>
                                    </tr>
                                    <tr>
                                        <td>{category.onSale}</td>
                                    </tr>
                                </table>
                        </div>
                    );
                })
            }
        </div>
    );

};


export default Category;
