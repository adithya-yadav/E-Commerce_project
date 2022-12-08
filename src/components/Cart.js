import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import productsArr from "./DummyData";

const Cart = ()=>{
  return (
    <Container className="mt-3 ">
      <Row className="flex-row" >
        <Col>
          {productsArr.map((item) => {
            return (
              <Card style={{ width: "18rem" }} key={item.title} className="m-3">
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.price}</Card.Text>
                  <Button variant="info">Add to Cart</Button>
                </Card.Body>
              </Card>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
