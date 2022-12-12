import { Container, Navbar } from "react-bootstrap";
import NavButton from "./NavButton";
import { Fragment } from "react";
import Items from "../items/items";
import NavHeaders from "./NavHeaders";
import About from "./Pages/About";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Products from "./Pages/Product";
import LoginForm from "../LoginForm.js/LoginPage";

function Nav(props) {
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
        <NavButton onClick={props.onClick} />
      </Navbar>
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Store" exact>
          <Items className="mt-10" />
        </Route>
        <Route path="/Products">
          <Products />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Contact">
          <ContactUs />
        </Route>
        <Route path="/auth">
            <LoginForm/>
        </Route>
      </Switch>
    </Fragment>
  );
}

export default Nav;
