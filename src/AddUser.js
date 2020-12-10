import facade from "./apiFacade";
import React, { useState, useEffect } from "react";


const CreateUser = () => {

    const handleSubmit = event => {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let password = document.getElementById("password").value;
        let email = document.getElementById("email").value;
        let phoneNumber = document.getElementById("phonenumber").value;
        const newUser = { 
            name, 
            password,
            email,
            phoneNumber
        }
        facade.fetchAddUser(newUser);
    }


    return (
<form onSubmit={handleSubmit}>
  <label>
    Name:
    <input type="text" name="name" id="name" />
  </label><br></br>
  <label>
    Password:
    <input type="text" name="password" id="password" />
  </label><br></br>
  <label>
    Email:
    <input type="text" name="email" id="email" />
  </label><br></br>
  <label>
    Phonenumber:
    <input type="text" name="phonenumber" id="phonenumber" />
  </label><br></br>
  <button type="submit">Create user</button>
</form>
    );
};

export default CreateUser;
