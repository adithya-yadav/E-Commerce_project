import { Container, Navbar } from "react-bootstrap";
import NavButton from "./NavButton";
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

function Nav(props) {
  const ctx = useContext(ContextApi);
  return (
    <Fragment>
      <Navbar
        bg="dark"
        variant="dark"
        className="position-fixed"
        style={{
          width: "100%",
          zIndex: "999",
          height: "8%",
          top: "0",
          borderBottom: "0.1rem solid white",
        }}
      >
        <Container className="d-flex justify-content-around ">
          <NavHeaders />
        </Container>
       {ctx.isLogin && <NavButton onClick={props.onClick} />}
      </Navbar>
      <Switch>
        {ctx.isLogin && (
          <>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/Store" exact>
              <Items className="mt-10" />
            </Route>
            <Route path="/Store/:Products">
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
