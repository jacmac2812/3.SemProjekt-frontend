import facade from "./apiFacade";
import React, { useState, useEffect } from "react";
import Product from "./product";

const Category = () => {
    const [categoryData, setCategoryData] = useState("");



    useEffect(() => {
        
        facade.fetchProductsData().then((data) => setCategoryData(data.products));
    }, []);

    function categoryId(id) {
        alert(`${id}`);
      }

    return (
        <div>
<button onClick={() => categoryId('abcat0101000')}>Tv's</button>
<button onClick={() => categoryId('abcat0102000')}>Blu-ray & DVD Players</button>
<button onClick={() => categoryId('abcat0106021')}>Gamer Stole</button>
<button onClick={() => categoryId('abcat0200000')}>Lyd</button>
<button onClick={() => categoryId('abcat0201000')}>iPod & MP3 Players</button>
<button onClick={() => categoryId('abcat0204000')}>Headphones</button>
<button onClick={() => categoryId('abcat0205000')}>Højtaler</button>
<button onClick={() => categoryId('abcat0300000')}>Bil Electronik & GPS</button>
<button onClick={() => categoryId('abcat0305000')}>Radar Detectors</button>
<button onClick={() => categoryId('abcat0301005')}>"Marine GPS & Fishfinders</button>
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
                    <a href={category.url}>Køb her</a>
                    <a href={category.mobileUrl}>Køb her</a>
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