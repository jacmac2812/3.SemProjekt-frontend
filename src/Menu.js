import ProductSearch from "./ProductSearch";
import Category from "./category";
import User from "./user";
import Home from "./home";
import OnSale from "./onSale";
import AddUser from "./AddUser";
import EditUser from "./editUser";
import Users from "./Users";
import Favorit from "./Favorit";
import facade from "./apiFacade";
import React, { useState, useEffect } from "react";
import { Link, NavLink, Route, Switch } from "react-router-dom";

export default function Menu() {
  const role = facade.getRole();
  const [isAdmin, setIsAdmin] = useState();

  if(role === "admin"){
    setIsAdmin(true);
  } else {
    setIsAdmin(false);
  }
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="header">
          <li>
            <NavLink exact activeClassName="active" to="/">Welcome</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/user">User</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/productsearch">Search on product</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/category">Category</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/onsale">On Sale</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/adduser">Add user</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/edituser">Edit User</NavLink>
          </li>
          {
          isAdmin && (
          <li>
            <NavLink activeClassName="active" to="/users">See all users</NavLink>
          </li>
          )}
          <li>
            <NavLink activeClassName="active" to="/favorit">Favorit list</NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/productsearch">
          <ProductSearch />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/onsale">
          <OnSale />
        </Route>
        <Route path="/adduser">
          <AddUser />
        </Route>
        <Route path="/edituser">
          <EditUser />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/favorit">
          <Favorit />
        </Route>
      </Switch>
    </div>
  );
}
