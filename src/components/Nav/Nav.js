import Card from "react-bootstrap/Card";
import productsArr from "./DummyData";
import { Col, Container, Row, Navbar, Button } from "react-bootstrap";
import NavButton from "./NavButton";

function Nav(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="">
        <Container className="justify-content-center">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Brand href="/">Store</Navbar.Brand>
          <Navbar.Brand href="/">About</Navbar.Brand>
        </Container>
        <NavButton onClick={props.onClick} />
      </Navbar>
      <Container className="mt-3 ">
        <Row className="">
          {productsArr.map((item) => {
            return (
              <Col className="cal-3" key={item.title}>
                <Card
                  style={{ width: "18rem" }}
                  className="m-3 mx-auto"
                >
                  <Card.Img variant="top" src={item.imageUrl} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.price}</Card.Text>
                    <Button variant="info">Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Nav;
