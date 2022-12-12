import { Fragment, useContext } from "react";
import { Button, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ContextApi from "../store/ContextApi";

function Item(props) {
  const cartCtx = useContext(ContextApi);

  function onAddToCardHandler() {
    cartCtx.addItem({
      id: props.title,
      title: props.title,
      imageUrl: props.imageUrl,
      amount: 1,
      price: props.price,
    });
  }
  return (
    <Fragment>
      <Col className="cal-3 m-3">
        <Card
          style={{ width: "18rem" }}
          className="me-5 ms-5 mx-auto border-white"
        >
          <Card.Title name="title" className="d-flex justify-content-center ">
            {props.title}
          </Card.Title>
          <Link to="/Products">
            <Card.Img variant="top" src={props.imageUrl} />
          </Link>
          <Card.Body className="d-flex justify-content-between">
            <Card.Text className="h5">${props.price}</Card.Text>
            <Button className="btn btn-info" onClick={onAddToCardHandler}>
              <div className="text-white">Add to Cart</div>
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
}

export default Item;
