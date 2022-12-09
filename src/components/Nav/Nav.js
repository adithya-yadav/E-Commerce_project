import { Container, Navbar } from "react-bootstrap";
import NavButton from "./NavButton";
import { Fragment } from "react";
import Items from "../items/items";


function Nav(props) {
  return (
    <Fragment className="h-25">
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-center">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Brand href="/">Store</Navbar.Brand>
          <Navbar.Brand href="/">About</Navbar.Brand>
        </Container>
        <NavButton onClick={props.onClick} />
      </Navbar>
        <Items className="mt-10"/>
    </Fragment>
  );
}

export default Nav;
