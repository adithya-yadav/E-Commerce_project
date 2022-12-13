
import productsArr from "./DummyData";
import { Container, Row } from "react-bootstrap";
import { Fragment } from "react";
import Item from "./Item";
import ItemHeaders from "./ItemHeaders";

function Items() {
  const itemsList = productsArr.map((item,ind) => {
    return (
      <Item
        key={ind}
        title={item.title}
        imageUrl={item.imageUrl}
        price={item.price}
      />
    );
  })

  return (
    <Fragment>
      <ItemHeaders/>
      <h2 className="d-flex justify-content-center" >Colours</h2>
      <Container className="mt-3" style={{ zIndex: "-1" }}>
        <Row className="" style={{ zIndex: "-1" }}>
          {itemsList}
        </Row>
      </Container>
    </Fragment>
  );
}

export default Items;
