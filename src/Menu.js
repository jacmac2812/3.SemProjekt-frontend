import ProductSearch from "./ProductSearch";
import Category from "./category";
import User from "./user";
import Home from "./home";
import OnSale from "./onSale";
import Users from "./Users";
import EditUser from "./editUser";
import { Link, NavLink, Route, Switch } from "react-router-dom";

export default function Menu() {
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
            <NavLink activeClassName="active" to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/edituser">Edit User</NavLink>
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
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/edituser">
          <EditUser />
        </Route>
      </Switch>
    </div>
  );
}
