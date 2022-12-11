import { Container, Navbar } from "react-bootstrap";
import NavButton from "./NavButton";
import { Fragment } from "react";
import Items from "../items/items";
import NavHeaders from "./NavHeaders";
import About from "./Pages/About";
import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";

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
      <Route path="/Home">
        <Home />
      </Route>
      <Route path="/Store">
        <Items className="mt-10" />
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/Contact">
        <div>hello</div>
      <ContactUs />
      </Route>
    </Fragment>
  );
}

export default Nav;
