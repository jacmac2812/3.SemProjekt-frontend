import Swabi from "./swabi";
import ProductSearch from "./ProductSearch";
import Category from "./category";
import Jokes from "./Jokes";
import User from "./user";
import Home from "./home";
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
            <NavLink activeClassName="active" to="/jokes">Jokes</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/swabi">Swabi</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/productSearch">Search on product</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/category">Category</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/onsale">On Sale</NavLink>
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
        <Route path="/jokes">
          <Jokes />
        </Route>
        <Route path="/swabi">
          <Swabi />
        </Route>
        <Route path="/productSearch">
          <ProductSearch />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/onsale">
          <h1>Coming soon</h1>
        </Route>
      </Switch>
    </div>
  );
}
