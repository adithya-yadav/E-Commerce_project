import { Fragment, useContext } from "react";
import Items from "../items/items";
import NavHeaders from "./NavHeaders";
import About from "./Pages/About";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Products from "./Pages/Product";
import LoginForm from "../LoginForm.js/LoginPage";
import ContextApi from "../store/ContextApi";


const Nav = (props) => {
  const ctx = useContext(ContextApi);
  return (
    <Fragment>

    <NavHeaders onClick={props.onClick} />

      <Switch>
        {ctx.isLogin && (
          <>
            <Route path="/Home">
              <Home/>
            </Route>
            <Route path="/Store" exact>
              <Items className="mt-10" />
            </Route>
            <Route path="/Store/:ProductId" >
              <Products />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Contact">
              <ContactUs />
            </Route>
            <Route path="*">
              <Redirect to="/Store" />
            </Route>
          </>
        )}
        {!ctx.isLogin && (
          <>
            <Route path="/auth">
              <LoginForm />
            </Route>
            <Route path="*">
              <Redirect to="/auth" />
            </Route>
          </>
        )}
      </Switch>
    </Fragment>
  );
}

export default Nav;
