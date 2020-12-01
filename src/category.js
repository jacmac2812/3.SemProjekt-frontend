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


        // 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Vis billede 1";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("did something");
});


// 1. Create the button
var button2 = document.createElement("button");
button2.innerHTML = "Vis billede 2";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button2);

// 3. Add event handler
button2.addEventListener ("click", function() {
  alert("did something");
});

// 1. Create the button
var button3 = document.createElement("button");
button3.innerHTML = "Vis billede 3";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button3);

// 3. Add event handler
button3.addEventListener ("click", function() {
  alert("did something");
});

// 1. Create the button
var button4 = document.createElement("button");
button4.innerHTML = "Vis billede 4";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button4);

// 3. Add event handler
button4.addEventListener ("click", function() {
  alert("did something");
});

// 1. Create the button
var button5 = document.createElement("button");
button5.innerHTML = "Vis billede 5";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button5);

// 3. Add event handler
button5.addEventListener ("click", function() {
  alert("did something");
});


export default Category;









//     var x, i = "";
//for (i in data.products) {
  //  setCategoryData("<h3>" + data.products[i].name + "</h3>")
//}